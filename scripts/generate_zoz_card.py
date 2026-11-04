import os
import base64
import subprocess
import shutil
import qrcode
from io import BytesIO
from PIL import Image

base_dir = r"D:\Work\elzozzz"
public_dir = os.path.join(base_dir, "public")
artifact_dir = r"C:\Users\Dr Princa\.gemini\antigravity\brain\2d9d53fe-6b03-4ac8-8878-725378cea44d"

os.makedirs(public_dir, exist_ok=True)
os.makedirs(artifact_dir, exist_ok=True)

web_url = "https://elzozzz.vercel.app"
apk_url = "https://elzozzz.vercel.app/api/download/apk"

# Web QR - high contrast crisp slate/gold
qr_web = qrcode.QRCode(
    version=None,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=12,
    border=1,
)
qr_web.add_data(web_url)
qr_web.make(fit=True)
img_web = qr_web.make_image(fill_color="#0f172a", back_color="#ffffff")
buf_web = BytesIO()
img_web.save(buf_web, format="PNG")
web_qr_b64 = base64.b64encode(buf_web.getvalue()).decode("ascii")

# APK QR - high contrast crisp cyan
qr_apk = qrcode.QRCode(
    version=None,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=12,
    border=1,
)
qr_apk.add_data(apk_url)
qr_apk.make(fit=True)
img_apk = qr_apk.make_image(fill_color="#083344", back_color="#ffffff")
buf_apk = BytesIO()
img_apk.save(buf_apk, format="PNG")
apk_qr_b64 = base64.b64encode(buf_apk.getvalue()).decode("ascii")

img_web.save(os.path.join(public_dir, "zoz-web-qr.png"))
img_apk.save(os.path.join(public_dir, "zoz-apk-qr.png"))

# Read Zein Photo
photo_path = os.path.join(public_dir, "zoz.jpg")
photo_b64 = ""
if os.path.exists(photo_path):
    with open(photo_path, "rb") as f:
        photo_b64 = base64.b64encode(f.read()).decode("ascii")

html_content = f"""<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Fredoka:wght@600;700&display=swap" rel="stylesheet">
  <style>
    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}
    html, body {{
      width: 1200px;
      height: 680px;
      margin: 0;
      padding: 0;
      background: #030712;
      font-family: 'Cairo', sans-serif;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }}
    .card-wrapper {{
      width: 1140px;
      height: 620px;
      position: relative;
      background: radial-gradient(circle at 15% 20%, #1e293b 0%, #0f172a 45%, #030712 100%);
      border-radius: 40px;
      border: 5px solid #f59e0b;
      box-shadow: 0 25px 60px rgba(245, 158, 11, 0.25), inset 0 0 30px rgba(245, 158, 11, 0.1);
      padding: 30px 45px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      color: #ffffff;
    }}
    /* Background elements */
    .glow-1 {{
      position: absolute;
      top: -50px;
      right: -50px;
      width: 320px;
      height: 320px;
      background: rgba(245, 158, 11, 0.15);
      border-radius: 50%;
      filter: blur(80px);
      pointer-events: none;
    }}
    .glow-2 {{
      position: absolute;
      bottom: -50px;
      left: -50px;
      width: 320px;
      height: 320px;
      background: rgba(6, 182, 212, 0.15);
      border-radius: 50%;
      filter: blur(80px);
      pointer-events: none;
    }}

    /* Header Bar */
    .header-bar {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid rgba(245, 158, 11, 0.35);
      padding-bottom: 15px;
      z-index: 2;
    }}
    .brand-title {{
      display: flex;
      align-items: center;
      gap: 15px;
    }}
    .brand-text-ar {{
      font-size: 34px;
      font-weight: 900;
      color: #f59e0b;
      line-height: 1.1;
      text-shadow: 0 2px 8px rgba(245, 158, 11, 0.4);
    }}
    .brand-text-en {{
      font-family: 'Fredoka', cursive;
      font-size: 20px;
      font-weight: 700;
      color: #38bdf8;
      letter-spacing: 1.5px;
    }}
    .vip-tag {{
      background: linear-gradient(135deg, #f59e0b, #d97706);
      color: #030712;
      padding: 8px 25px;
      border-radius: 9999px;
      font-size: 16px;
      font-weight: 900;
      box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
      display: flex;
      align-items: center;
      gap: 8px;
    }}

    /* Content Area */
    .content-area {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 35px;
      z-index: 2;
      flex: 1;
      padding: 15px 0;
    }}

    /* Profile Side */
    .profile-box {{
      display: flex;
      align-items: center;
      gap: 25px;
      flex: 1.2;
    }}
    .photo-frame {{
      width: 170px;
      height: 230px;
      border-radius: 28px;
      border: 4px solid #f59e0b;
      box-shadow: 0 10px 25px rgba(245, 158, 11, 0.35);
      overflow: hidden;
      flex-shrink: 0;
      background: #0f172a;
    }}
    .photo-frame img {{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
    }}
    .profile-info {{
      display: flex;
      flex-direction: column;
      gap: 8px;
    }}
    .captain-name {{
      font-size: 32px;
      font-weight: 900;
      color: #fef08a;
      line-height: 1.2;
      text-shadow: 0 2px 6px rgba(0,0,0,0.6);
    }}
    .captain-badge {{
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(6, 182, 212, 0.15);
      border: 1px solid rgba(6, 182, 212, 0.5);
      color: #38bdf8;
      padding: 4px 14px;
      border-radius: 12px;
      font-size: 13px;
      font-weight: 800;
      width: fit-content;
    }}
    .captain-desc {{
      font-size: 14px;
      color: #cbd5e1;
      line-height: 1.5;
      font-weight: 600;
      margin-top: 4px;
    }}
    .activities-list {{
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 6px;
    }}
    .act-tag {{
      background: rgba(30, 41, 59, 0.9);
      border: 1px solid rgba(245, 158, 11, 0.3);
      color: #f1f5f9;
      font-size: 11px;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 8px;
    }}

    /* QRs Section */
    .qrs-box {{
      display: flex;
      gap: 20px;
      flex-shrink: 0;
      background: rgba(15, 23, 42, 0.85);
      border: 2px solid rgba(51, 65, 85, 0.8);
      border-radius: 26px;
      padding: 16px 20px;
    }}
    .qr-item {{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 145px;
    }}
    .qr-badge {{
      font-size: 12px;
      font-weight: 800;
      padding: 4px 12px;
      border-radius: 8px;
      margin-bottom: 8px;
      width: 100%;
    }}
    .qr-badge.web {{
      background: #f59e0b;
      color: #030712;
    }}
    .qr-badge.apk {{
      background: #06b6d4;
      color: #030712;
    }}
    .qr-img-wrap {{
      background: #ffffff;
      padding: 6px;
      border-radius: 16px;
      width: 125px;
      height: 125px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }}
    .qr-img-wrap img {{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }}
    .qr-sub {{
      font-size: 10px;
      color: #94a3b8;
      font-weight: 700;
      margin-top: 6px;
      line-height: 1.3;
    }}

    /* Footer Bar */
    .footer-bar {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid rgba(51, 65, 85, 0.7);
      padding-top: 14px;
      z-index: 2;
    }}
    .pin-reminder {{
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      color: #94a3b8;
      font-weight: 700;
    }}
    .pin-code-highlight {{
      font-family: monospace;
      font-size: 18px;
      font-weight: 900;
      color: #f59e0b;
      background: rgba(245, 158, 11, 0.15);
      border: 1px solid #f59e0b;
      padding: 2px 10px;
      border-radius: 8px;
      letter-spacing: 2px;
    }}
    .orca-watermark {{
      font-size: 13px;
      color: #38bdf8;
      font-weight: 700;
    }}
  </style>
</head>
<body>
  <div class="card-wrapper">
    <div class="glow-1"></div>
    <div class="glow-2"></div>

    <!-- Header -->
    <div class="header-bar">
      <div class="brand-title">
        <span style="font-size: 32px;">⚽</span>
        <div>
          <div class="brand-text-ar">عالم الزوز — كابتن الشغب والمشاكسة</div>
          <div class="brand-text-en">EL-ZOZZZ CHAMPION REALM • OFFICIAL VIP CARD</div>
        </div>
      </div>
      <div class="vip-tag">
        <span>🏆 كابتن الجيل الذهبي</span>
      </div>
    </div>

    <!-- Content Area -->
    <div class="content-area">
      <!-- Profile Box -->
      <div class="profile-box">
        <div class="photo-frame">
          <img src="data:image/jpeg;base64,{photo_b64}" alt="الكابتن زين">
        </div>
        <div class="profile-info">
          <div class="captain-name">الكابتن زين (الزوز) ⚽👑</div>
          <div class="captain-badge">🔥 8 سنوات — رمز الشغب والقلق الكروي</div>
          <div class="captain-desc">
            قناص الصواريخ • بطل ديربي تكسير السيارات 360° • سلطان شغب وسارينات المهرجانات اللي بتلم الجيران!
          </div>
          <div class="activities-list">
            <span class="act-tag">🚀 هداف المقصات 120 كم/س</span>
            <span class="act-tag">🚜 حلبة تكسير السيارات</span>
            <span class="act-tag">🎧 دي جي وسارينات الشغب</span>
            <span class="act-tag">🔨 سماش مانيا والدغدغة</span>
          </div>
        </div>
      </div>

      <!-- QRs Box -->
      <div class="qrs-box">
        <!-- QR 1: Web -->
        <div class="qr-item">
          <div class="qr-badge web">🌐 الموقع أونلاين</div>
          <div class="qr-img-wrap">
            <img src="data:image/png;base64,{web_qr_b64}" alt="Web QR">
          </div>
          <div class="qr-sub">امسح بالكاميرا<br>والعب بالمتصفح فوراً</div>
        </div>

        <!-- QR 2: APK Download -->
        <div class="qr-item">
          <div class="qr-badge apk">📲 تحميل الأبلكيشن</div>
          <div class="qr-img-wrap">
            <img src="data:image/png;base64,{apk_qr_b64}" alt="APK QR">
          </div>
          <div class="qr-sub">تحميل تطبيق الزوز<br>على الموبايل (APK)</div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer-bar">
      <div class="pin-reminder">
        <span>🔐 كود النادي السري:</span>
        <span class="pin-code-highlight">zoz</span>
      </div>
      <div class="orca-watermark">
        <span>🚀 تم التطوير بحب بواسطة شركة أوركا لتقنية المعلومات — 01018671000</span>
      </div>
    </div>
  </div>
</body>
</html>
"""

html_path = os.path.join(public_dir, "card_render.html")
with open(html_path, "w", encoding="utf-8") as f:
    f.write(html_content)

chrome_candidates = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
]
chrome_bin = None
for c in chrome_candidates:
    if os.path.exists(c):
        chrome_bin = c
        break

out_png = os.path.join(public_dir, "zoz-official-card.png")
root_png = os.path.join(base_dir, "zoz-official-card.png")
artifact_png = os.path.join(artifact_dir, "zoz-official-card.png")

if chrome_bin:
    raw_shot = os.path.join(public_dir, "raw_card_shot.png")
    cmd = [
        chrome_bin,
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--window-size=1200,680",
        f"--screenshot={raw_shot}",
        f"file:///{html_path.replace(os.sep, '/')}",
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if os.path.exists(raw_shot):
        raw_im = Image.open(raw_shot)
        final_im = raw_im.crop((0, 0, 1200, 680))
        final_im.save(out_png)
        final_im.save(root_png)
        final_im.save(artifact_png)
        try:
            os.remove(raw_shot)
        except Exception:
            pass
        print("Successfully generated VIP card at:", out_png)
        print("Copied to artifact at:", artifact_png)
    else:
        print("Screenshot not produced, error:", res.stderr)
else:
    print("Browser not found!")
