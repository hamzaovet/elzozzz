const fs = require("fs");
const path = require("path");
const https = require("https");

const outDir = path.join(__dirname, "../public/audio/zoz");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const phrases = [
  { id: "goal_1", text: "GOOOOOOOAL for Zoz! What a legendary strike in the top corner!" },
  { id: "goal_2", text: "Incredible goal by Captain Zein! The soccer champion strikes again!" },
  { id: "goal_3", text: "The stadium goes crazy! Zoz is the ultimate world superstar!" },
  { id: "crash_1", text: "Smash! Crash! Total monster truck demolition by Zoz!" },
  { id: "crash_2", text: "Boom! The car flipped upside down and smashed to pieces!" },
  { id: "crash_3", text: "Brutal destruction! Nothing can stop Captain Zoz!" },
  { id: "mahragan_1", text: "Zoz is in the building! Make way for the king of the streets!" },
  { id: "mahragan_2", text: "Turn up the volume! DJ Zoz is rocking the Egyptian mahraganat!" },
  { id: "dad_message", text: "Daddy loves you so much Champion Zein! You are the strongest, coolest, and smartest boy in the world!" },
  { id: "card_greeting", text: "Welcome to El Zoz World! Soccer screamers, monster truck crashes, and loud mahraganat!" },
  { id: "smash_mania", text: "Break it! Smash it! Total chaos and victory for Zoz!" },
  { id: "cheer_win", text: "Champion Zoz wins the tournament! Number one in the world!" },
];

function downloadPhrase(item) {
  return new Promise((resolve, reject) => {
    const url = "https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=" + encodeURIComponent(item.text);
    const dest = path.join(outDir, `${item.id}.mp3`);
    const file = fs.createWriteStream(dest);

    https.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode !== 200) {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        return reject(new Error(`Failed ${item.id}: ${res.statusCode}`));
      }
      res.pipe(file);
      file.on("finish", () => {
        file.close(() => {
          console.log(`Saved ${item.id}.mp3 (${fs.statSync(dest).size} bytes)`);
          resolve();
        });
      });
    }).on("error", (err) => {
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      reject(err);
    });
  });
}

async function run() {
  console.log("Downloading audio phrases for El-Zoz...");
  for (const item of phrases) {
    try {
      await downloadPhrase(item);
      await new Promise((r) => setTimeout(r, 200));
    } catch (e) {
      console.error(e.message);
    }
  }
  console.log("All audio phrases for El-Zoz successfully downloaded!");
}

run();
