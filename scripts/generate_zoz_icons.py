import os
from PIL import Image, ImageDraw, ImageOps

res_dir = r"D:\Work\elzozzz\android\app\src\main\res"
public_dir = r"D:\Work\elzozzz\public"
source_photo = os.path.join(public_dir, "zoz-face.jpg")

im = Image.open(source_photo).convert("RGBA")
w, h = im.size

# Master Icon 512x512
master_size = 512
master_icon = Image.new("RGBA", (master_size, master_size), (0, 0, 0, 0))

# Circular Mask for Zein's face
mask = Image.new("L", (master_size, master_size), 0)
draw_mask = ImageDraw.Draw(mask)
draw_mask.ellipse((20, 20, master_size - 20, master_size - 20), fill=255)

# Resize photo
photo_resized = im.resize((master_size - 40, master_size - 40), Image.Resampling.LANCZOS)

# Outer Sporty Border (Electric Cyan + Neon Yellow + Carbon Dark)
bg = Image.new("RGBA", (master_size, master_size), (0, 0, 0, 0))
draw_bg = ImageDraw.Draw(bg)
# Dark backdrop circle
draw_bg.ellipse((8, 8, master_size - 8, master_size - 8), fill=(15, 23, 42, 255), outline=(6, 182, 212, 255), width=18)

# Paste Zein's face
bg.paste(photo_resized, (20, 20), mask.crop((20, 20, master_size - 20, master_size - 20)))

# Outer Neon Gold Ring
draw_final = ImageDraw.Draw(bg)
draw_final.ellipse((6, 6, master_size - 6, master_size - 6), outline=(250, 204, 21, 255), width=8)

master_icon = bg
master_icon.save(os.path.join(public_dir, "app-icon.png"))
master_icon.convert("RGB").save(os.path.join(public_dir, "app-icon.jpg"), "JPEG")

# Mipmap densities
densities = {
    "mipmap-mdpi": (48, 108),
    "mipmap-hdpi": (72, 162),
    "mipmap-xhdpi": (96, 216),
    "mipmap-xxhdpi": (144, 324),
    "mipmap-xxxhdpi": (192, 432),
}

for folder, (icon_sz, fg_sz) in densities.items():
    target_dir = os.path.join(res_dir, folder)
    os.makedirs(target_dir, exist_ok=True)

    ic = master_icon.resize((icon_sz, icon_sz), Image.Resampling.LANCZOS)
    ic.save(os.path.join(target_dir, "ic_launcher.png"))
    ic.save(os.path.join(target_dir, "ic_launcher_round.png"))

    fg = Image.new("RGBA", (fg_sz, fg_sz), (0, 0, 0, 0))
    inner_sz = int(fg_sz * 0.74)
    inner_ic = master_icon.resize((inner_sz, inner_sz), Image.Resampling.LANCZOS)
    offset = (fg_sz - inner_sz) // 2
    fg.paste(inner_ic, (offset, offset), inner_ic)
    fg.save(os.path.join(target_dir, "ic_launcher_foreground.png"))
    print(f"Generated {folder}: {icon_sz}x{icon_sz}")

# Splash screen images
drawable_dirs = [
    "drawable",
    "drawable-land-hdpi",
    "drawable-land-mdpi",
    "drawable-land-xhdpi",
    "drawable-land-xxhdpi",
    "drawable-land-xxxhdpi",
    "drawable-port-hdpi",
    "drawable-port-mdpi",
    "drawable-port-xhdpi",
    "drawable-port-xxhdpi",
    "drawable-port-xxxhdpi",
]

for d in drawable_dirs:
    target_dir = os.path.join(res_dir, d)
    if os.path.exists(target_dir):
        splash_icon = master_icon.resize((280, 280), Image.Resampling.LANCZOS)
        splash_icon.save(os.path.join(target_dir, "splash.png"))

# Background XML
bg_xml = """<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="ic_launcher_background">#090D16</color>
</resources>
"""
with open(os.path.join(res_dir, "values", "ic_launcher_background.xml"), "w", encoding="utf-8") as f:
    f.write(bg_xml)

print("All Android launcher icons and splash images updated with Champion Zein (El-Zoz) photo!")
