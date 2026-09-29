// Illustrated placeholders for the two session tabs Sam's photo cannot show:
// an online whiteboard task and a session at the family's kitchen table.
// Crops of Sam's photo come from scripts/photo-variants.cjs.
// Run with `node scripts/placeholder-images.cjs`. Replace each file with a real photo when one arrives.
const sharp = require("sharp");
const OUT = require("path").join(__dirname, "..", "public", "brand");
const F = `font-family="DejaVu Sans" font-weight="bold"`;

const C = {
  wall: "#F4EFE6", wall2: "#EFE7DA", desk: "#DDB78C", deskEdge: "#C99C6D", shelf: "#C99A6B",
  ink: "#1B4A2C", green: "#2F6B3A", leaf: "#5E9A45", leaf2: "#7FA05F", sage: "#DCE8CE",
  peach: "#F6DCCB", clay: "#D89272", skin: "#F2CBA8", skinShade: "#E4B08C", hair: "#E8CD8F",
  hairShade: "#D7B46F", top: "#4A2A24", white: "#FFFFFF", grey: "#E6E6E3", greyDark: "#BDBDB8",
  red: "#E0483E", blue: "#3B82C4", yellow: "#F2C14E", pink: "#E98BB0", lblue: "#8EC5E8",
};

const wall = (w, h) => `
  <defs><linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="${C.wall}"/><stop offset="1" stop-color="${C.wall2}"/></linearGradient></defs>
  <rect width="${w}" height="${h}" fill="url(#wall)"/>`;

const cubes = (x, y) => {
  const set = [[0, 0, C.green], [44, 0, C.yellow], [22, -40, C.green], [100, -10, C.blue], [100, -52, C.blue], [150, 6, C.red], [158, -36, C.red]];
  return `<g transform="translate(${x} ${y})">${set.map(([dx, dy, c]) => `
    <rect x="${dx}" y="${dy}" width="40" height="40" rx="5" fill="${c}"/>
    <circle cx="${dx + 20}" cy="${dy + 20}" r="7" fill="#000" opacity=".15"/>`).join("")}</g>`;
};

const notebook = (x, y, rot = -3) => `
  <g transform="translate(${x} ${y}) rotate(${rot})">
    <rect x="0" y="0" width="300" height="200" rx="8" fill="${C.white}"/>
    ${[0, 1, 2, 3, 4, 5].map((i) => `<line x1="24" x2="276" y1="${40 + i * 28}" y2="${40 + i * 28}" stroke="${C.lblue}" stroke-width="2" opacity=".6"/>`).join("")}
    ${[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => `<circle cx="${20 + i * 33}" cy="0" r="6" fill="${C.greyDark}"/>`).join("")}
    <text x="120" y="64" font-family="DejaVu Serif" font-size="30" fill="#4C5B51">Aa</text>
    <text x="104" y="118" font-family="DejaVu Serif" font-size="30" fill="#4C5B51">Bb</text>
    <text x="88" y="172" font-family="DejaVu Serif" font-size="30" fill="#4C5B51">Cc</text>
    <rect x="200" y="60" width="12" height="150" rx="5" fill="${C.green}" transform="rotate(28 206 135)"/>
  </g>`;

const numberCard = (x, y, n = "5", rot = 8) => `
  <g transform="translate(${x} ${y}) rotate(${rot})">
    <rect x="0" y="0" width="130" height="96" rx="10" fill="${C.white}"/>
    <rect x="0" y="0" width="130" height="16" rx="8" fill="${C.lblue}"/>
    <text x="65" y="80" text-anchor="middle" ${F} font-size="52" fill="${C.ink}">${n}</text>
  </g>`;

const svg = (w, h, body, vb) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="${vb ?? `0 0 ${w} ${h}`}">${body}</svg>`;

// Scene 1: a kitchen table session, cubes and a phonics flashcard.
const homeScene = () => `
  <rect width="1200" height="1000" fill="${C.desk}"/>
  <g opacity=".18">${Array.from({ length: 8 }, (_, i) => `<line x1="0" x2="1200" y1="${60 + i * 130}" y2="${40 + i * 130}" stroke="${C.deskEdge}" stroke-width="6"/>`).join("")}</g>
  <g transform="translate(300 260) rotate(-6)">
    <rect width="360" height="260" rx="18" fill="${C.white}"/>
    <rect width="360" height="30" rx="14" fill="${C.leaf2}"/>
    <text x="180" y="200" text-anchor="middle" font-family="DejaVu Sans" font-size="150" fill="${C.ink}">sh</text>
  </g>
  <g transform="scale(1.6) translate(420 330)">${cubes(0, 0)}</g>
  ${numberCard(820, 250, "7", -8)}
  ${notebook(170, 620, 4)}
  <rect x="820" y="720" width="18" height="220" rx="8" fill="${C.yellow}" transform="rotate(-50 829 830)"/>`;

// Scene 2: a finished maths task on the shared whiteboard.
const boardScene = () => `
  ${wall(1200, 1000)}
  <rect x="120" y="110" width="960" height="720" rx="40" fill="#2B2B2B"/>
  <rect x="150" y="140" width="900" height="660" rx="18" fill="${C.white}"/>
  <text x="540" y="300" text-anchor="middle" ${F} font-size="110" fill="${C.ink}">7 + 3 = <tspan fill="${C.green}">10</tspan></text>
  ${Array.from({ length: 10 }, (_, i) => {
    const cx = 300 + (i % 5) * 150, cy = 420 + Math.floor(i / 5) * 140;
    return `<rect x="${cx - 70}" y="${cy - 65}" width="140" height="130" fill="none" stroke="${C.greyDark}" stroke-width="4"/>
      <circle cx="${cx}" cy="${cy}" r="44" fill="${i < 7 ? C.red : C.blue}"/>`;
  }).join("")}
  <path d="M920 250 l40 40 l80 -100" stroke="${C.green}" stroke-width="22" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="890" y="660" width="16" height="200" rx="8" fill="${C.greyDark}" transform="rotate(35 898 760)"/>`;

(async () => {
  const jobs = [
    ["home-session.webp", svg(1200, 1000, homeScene())],
    ["whiteboard-task.webp", svg(1200, 1000, boardScene())],
  ];
  for (const [name, s] of jobs) {
    await sharp(Buffer.from(s)).webp({ quality: 86 }).toFile(`${OUT}/${name}`);
    console.log(name);
  }
})();
