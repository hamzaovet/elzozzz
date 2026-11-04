// El-Zoz Sound Synthesizer & Universal Mahraganat Engine (Web Audio API & Native MP3)

class ZozSoundEngine {
  private ctx: AudioContext | null = null;
  private soundEnabled: boolean = true;
  private currentAudio: HTMLAudioElement | null = null;

  constructor() {}

  private initCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public toggleSound(enabled?: boolean) {
    if (enabled !== undefined) {
      this.soundEnabled = enabled;
    } else {
      this.soundEnabled = !this.soundEnabled;
    }
    return this.soundEnabled;
  }

  public isEnabled() {
    return this.soundEnabled;
  }

  public vibrate(pattern: number[] = [80, 50, 100, 50, 150]) {
    if (typeof window !== "undefined" && "vibrate" in navigator) {
      try {
        navigator.vibrate(pattern);
      } catch (e) {}
    }
  }

  // Play a dedicated bundled MP3 audio file
  public playMp3(filename: string) {
    if (!this.soundEnabled || typeof window !== "undefined") {
      try {
        if (this.currentAudio) {
          this.currentAudio.pause();
          this.currentAudio.currentTime = 0;
        }

        const audio = new Audio(`/audio/zoz/${filename}`);
        this.currentAudio = audio;
        audio.play().catch((err) => {
          console.warn("Audio play prevented until user interaction", err);
        });
      } catch (e) {
        console.error(e);
      }
    }
  }

  // Stadium Air Horn (طوووووووووووووط المهرجانات!)
  public playAirhorn() {
    if (!this.soundEnabled) return;
    this.initCtx();
    if (!this.ctx) return;
    this.vibrate([100, 60, 120, 60, 200]);

    const freqs = [370, 466.16, 554.37, 622.25]; // Airhorn chord
    const now = this.ctx.currentTime;

    freqs.forEach((freq) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.05);
      gain.gain.setValueAtTime(0.2, now + 0.5);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.9);
    });
  }

  // Car Crash & Metal Demolition Crunch 💥
  public playCrash() {
    if (!this.soundEnabled) return;
    this.initCtx();
    if (!this.ctx) return;
    this.vibrate([150, 80, 250]);

    const now = this.ctx.currentTime;

    // 1. Noise buffer for metal crunch and glass shatter
    const bufferSize = this.ctx.sampleRate * 0.6;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.exponentialRampToValueAtTime(150, now + 0.5);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.6, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);

    noise.start(now);

    // 2. Heavy sub-bass thud
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.4);

    oscGain.gain.setValueAtTime(0.8, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

    osc.connect(oscGain);
    oscGain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.5);
  }

  // Football Kick (شوطة كورة صاروخ!)
  public playKick() {
    if (!this.soundEnabled) return;
    this.initCtx();
    if (!this.ctx) return;
    this.vibrate([60]);

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(50, now + 0.15);

    gain.gain.setValueAtTime(0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.22);
  }

  // Referee Whistle (صفارة الحكم!)
  public playWhistle() {
    if (!this.soundEnabled) return;
    this.initCtx();
    if (!this.ctx) return;
    this.vibrate([40, 40, 80]);

    const now = this.ctx.currentTime;
    const freqs = [2800, 3100];

    freqs.forEach((freq) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.setValueAtTime(0.3, now + 0.18);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    });
  }

  // Mahragan DJ Beat Kick
  public playMahraganBeat() {
    if (!this.soundEnabled) return;
    this.initCtx();
    if (!this.ctx) return;
    this.vibrate([40, 30, 40]);

    const now = this.ctx.currentTime;
    // Kick
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.18);
    gain.gain.setValueAtTime(0.8, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.22);
  }

  // Goal Shout & Celebration
  public cheerGoal() {
    this.playAirhorn();
    setTimeout(() => {
      const goalFiles = ["goal_1.mp3", "goal_2.mp3", "goal_3.mp3"];
      const f = goalFiles[Math.floor(Math.random() * goalFiles.length)];
      this.playMp3(f);
    }, 450);
  }

  // Crash Cheer
  public cheerCrash() {
    this.playCrash();
    setTimeout(() => {
      const crashFiles = ["crash_1.mp3", "crash_2.mp3", "crash_3.mp3"];
      const f = crashFiles[Math.floor(Math.random() * crashFiles.length)];
      this.playMp3(f);
    }, 400);
  }

  // Mahragan Cheer
  public cheerMahragan() {
    this.playAirhorn();
    setTimeout(() => {
      const mahraganFiles = ["mahragan_1.mp3", "mahragan_2.mp3"];
      const f = mahraganFiles[Math.floor(Math.random() * mahraganFiles.length)];
      this.playMp3(f);
    }, 400);
  }

  public cheerDad() {
    this.playMp3("dad_message.mp3");
  }
}

export const sounds = new ZozSoundEngine();
