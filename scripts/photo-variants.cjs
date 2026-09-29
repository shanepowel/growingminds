// Every crop of Sam's photo used on the site, from brand/sam-source.jpg.
// Run with `node scripts/photo-variants.cjs` after replacing the source photo.
// sharp drops EXIF (including any location) by default.
const path = require("path");
const sharp = require("sharp");

const root = path.join(__dirname, "..");
const src = path.join(root, "brand", "sam-source.jpg");
const brand = (f) => path.join(root, "public", "brand", f);

// [left, top, width, height] on the 1231 x 1277 source.
const crops = {
  portrait: [180, 80, 1000, 840], // About
  desk: [0, 700, 1010, 577], // "At my home" tab: books, tablet, notebook, no mug
  local: [260, 40, 971, 820], // Waterlooville page and share image
  face: [540, 120, 380, 380], // Contact page avatar
};
const crop = ([left, top, width, height]) => sharp(src).extract({ left, top, width, height });

(async () => {
  await sharp(src).resize({ width: 1200 }).webp({ quality: 84 }).toFile(brand("hero.webp"));
  await crop(crops.portrait).resize({ width: 1000 }).webp({ quality: 84 }).toFile(brand("sam-portrait.webp"));
  await crop(crops.desk).webp({ quality: 84 }).toFile(brand("tutoring-space.webp"));
  await crop(crops.local).webp({ quality: 84 }).toFile(brand("waterlooville.webp"));
  await crop(crops.face).resize({ width: 240 }).webp({ quality: 86 }).toFile(brand("sam-avatar.webp"));

  // Share image (Open Graph): logo and line on paper, Sam on the right.
  const W = 1200, H = 630, photoW = 520;
  const photo = await crop(crops.local).resize(photoW, H, { fit: "cover", position: "top" }).toBuffer();
  const logo = await sharp(brand("logo.webp")).resize({ height: 300 }).toBuffer();
  const text = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W - photoW}" height="${H}">
    <text x="70" y="430" font-family="DejaVu Sans" font-weight="bold" font-size="40" fill="#1B4A2C">KS1 specialist tutoring</text>
    <text x="70" y="480" font-family="DejaVu Sans" font-size="31" fill="#3E4C44">in Waterlooville and online</text>
    <text x="70" y="540" font-family="DejaVu Serif" font-style="italic" font-size="26" fill="#A9603A">Little steps. Growing confidence.</text>
    <text x="70" y="576" font-family="DejaVu Serif" font-style="italic" font-size="26" fill="#A9603A">Growing minds.</text>
  </svg>`);
  await sharp({ create: { width: W, height: H, channels: 3, background: "#F7F6F1" } })
    .composite([
      { input: logo, left: 70, top: 50 },
      { input: text, left: 0, top: 0 },
      { input: photo, left: W - photoW, top: 0 },
    ])
    .jpeg({ quality: 86 })
    .toFile(path.join(root, "app", "opengraph-image.jpg"));
})();
