// Illustrated placeholder imagery, drawn from the scene in Sam's shared photo.
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

const plant = (x, y, s = 1) => `
  <g transform="translate(${x} ${y}) scale(${s})">
    ${[-60, -30, 0, 30, 60, -45, 45].map((a, i) =>
      `<ellipse cx="0" cy="-70" rx="${i > 4 ? 16 : 20}" ry="${i > 4 ? 48 : 60}" fill="${i % 2 ? C.leaf : C.leaf2}" transform="rotate(${a}) translate(0 ${i > 4 ? 10 : 0})"/>`).join("")}
    <path d="M-42 -8 h84 l-10 70 h-64 z" fill="${C.white}"/>
    <rect x="-46" y="-14" width="92" height="14" rx="6" fill="${C.grey}"/>
  </g>`;

const shelf = (x, y, w) => {
  const cols = [C.green, C.yellow, C.blue, C.red, C.leaf2, C.lblue, C.clay, C.pink, C.green, C.yellow, C.blue];
  let bx = x + 10, books = "";
  cols.forEach((c, i) => {
    const bw = 18 + (i * 7) % 14, bh = 110 + (i * 13) % 40;
    if (bx + bw < x + w - 10) books += `<rect x="${bx}" y="${y - bh}" width="${bw}" height="${bh}" rx="3" fill="${c}"/>`;
    bx += bw + 3;
  });
  return `${books}<rect x="${x}" y="${y}" width="${w}" height="18" rx="4" fill="${C.shelf}"/>`;
};

const desk = (w, top, h) => `
  <rect x="0" y="${top}" width="${w}" height="${h - top}" fill="${C.desk}"/>
  <rect x="0" y="${top}" width="${w}" height="10" fill="${C.deskEdge}" opacity=".55"/>`;

const bookStack = (x, y) => {
  const books = [["Handwriting", C.pink], ["Maths", C.lblue], ["Early Reading", C.yellow], ["Phonics", C.leaf]];
  return `<g transform="translate(${x} ${y}) rotate(-4)">${books.map(([t, c], i) => `
    <g transform="translate(${i % 2 ? 8 : 0} ${-i * 58})">
      <rect x="0" y="0" width="330" height="54" rx="6" fill="${c}"/>
      <rect x="318" y="6" width="10" height="42" rx="3" fill="${C.white}" opacity=".8"/>
      <text x="24" y="37" ${F} font-size="26" fill="${C.ink}">${t}</text>
    </g>`).join("")}</g>`;
};

const pencilPot = (x, y) => {
  const cols = [C.red, C.blue, C.yellow, C.green, C.pink, C.lblue, C.clay];
  return `<g transform="translate(${x} ${y})">
    ${cols.map((c, i) => `<g transform="rotate(${-24 + i * 8})"><rect x="-6" y="-150" width="12" height="130" fill="${c}"/><path d="M-6 -150 l6 -20 l6 20z" fill="${C.skin}"/></g>`).join("")}
    <rect x="-48" y="-40" width="96" height="90" rx="10" fill="${C.white}"/>
  </g>`;
};

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

const mug = (x, y) => `
  <g transform="translate(${x} ${y})">
    <path d="M100 30 q46 0 46 40 q0 40 -46 40" fill="none" stroke="${C.white}" stroke-width="16"/>
    <rect x="0" y="0" width="110" height="140" rx="14" fill="${C.white}"/>
    <text x="55" y="58" text-anchor="middle" font-family="DejaVu Serif" font-style="italic" font-size="17" fill="${C.green}">Little</text>
    <text x="55" y="82" text-anchor="middle" font-family="DejaVu Serif" font-style="italic" font-size="17" fill="${C.green}">steps</text>
    <path d="M47 100 q8 -10 8 0 q0 -10 8 0 q0 10 -8 16 q-8 -6 -8 -16z" fill="${C.clay}"/>
  </g>`;

// A friendly, clearly illustrated figure in the style of the logo: blonde bob, brown top.
const sam = (x, y) => `
  <g transform="translate(${x} ${y})">
    <path d="M-230 330 q0 -170 120 -190 h220 q120 20 120 190 z" fill="${C.top}"/>
    <rect x="-34" y="70" width="68" height="84" rx="26" fill="${C.skinShade}"/>
    <path d="M-40 140 q40 34 80 0 v14 q-40 30 -80 0z" fill="${C.skin}"/>
    <path d="M-118 -30 q-10 -150 118 -156 q128 6 118 156 l8 150 q-40 16 -70 -4 l-2 -120 h-108 l-2 120 q-30 20 -70 4z" fill="${C.hair}"/>
    <ellipse cx="0" cy="-4" rx="84" ry="100" fill="${C.skin}"/>
    <path d="M-92 -40 q20 -110 96 -106 q-24 34 -96 106z" fill="${C.hair}"/>
    <path d="M92 -40 q-10 -104 -96 -106 q40 44 96 106z" fill="${C.hairShade}"/>
    <path d="M-44 -6 q14 -14 28 0" stroke="${C.ink}" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M16 -6 q14 -14 28 0" stroke="${C.ink}" stroke-width="6" fill="none" stroke-linecap="round"/>
    <ellipse cx="-52" cy="30" rx="16" ry="9" fill="${C.clay}" opacity=".35"/>
    <ellipse cx="52" cy="30" rx="16" ry="9" fill="${C.clay}" opacity=".35"/>
    <path d="M-30 44 q30 30 60 0" stroke="#B5534A" stroke-width="7" fill="none" stroke-linecap="round"/>
  </g>`;

const tablet = (x, y) => `
  <g transform="translate(${x} ${y})">
    <path d="M40 200 l-30 -12 h250 l-30 12z" fill="${C.greyDark}"/>
    <rect x="0" y="0" width="260" height="190" rx="16" fill="${C.grey}" transform="skewX(-4)"/>
    <circle cx="30" cy="22" r="7" fill="${C.greyDark}"/>
  </g>`;

const arms = (x, y) => `
  <rect x="${x - 250}" y="${y}" width="200" height="64" rx="32" fill="${C.top}"/>
  <rect x="${x + 50}" y="${y}" width="200" height="64" rx="32" fill="${C.top}"/>
  <ellipse cx="${x - 58}" cy="${y + 34}" rx="30" ry="26" fill="${C.skin}"/>
  <ellipse cx="${x + 58}" cy="${y + 34}" rx="30" ry="26" fill="${C.skin}"/>`;

const svg = (w, h, body, vb) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="${vb ?? `0 0 ${w} ${h}`}">${body}</svg>`;

// Scene 1: Sam at her desk (hero, and cropped for the About portrait).
const deskScene = () => `
  ${wall(1200, 1000)}
  <rect x="930" y="120" width="190" height="230" rx="8" fill="${C.white}" stroke="${C.shelf}" stroke-width="10"/>
  ${["KIND", "BRAVE", "CURIOUS", "CAPABLE", "YOU"].map((t, i) => `<text x="1025" y="${178 + i * 36}" text-anchor="middle" ${F} font-size="22" fill="#4C5B51">${t}</text>`).join("")}
  ${shelf(870, 560, 330)}
  ${plant(130, 700, 1.15)}
  ${sam(600, 360)}
  ${desk(1200, 690, 1000)}
  ${arms(600, 650)}
  ${tablet(470, 520)}
  ${pencilPot(330, 800)}
  ${bookStack(60, 930)}
  ${notebook(440, 780)}
  ${cubes(820, 800)}
  ${mug(990, 700)}
  ${numberCard(1010, 880)}`;

// Scene 2: the tutoring space, no people.
const spaceScene = () => `
  ${wall(1200, 1000)}
  <rect x="110" y="120" width="980" height="70" rx="12" fill="${C.white}"/>
  ${Array.from({ length: 11 }, (_, i) => `<g><line x1="${160 + i * 88}" x2="${160 + i * 88}" y1="140" y2="160" stroke="${C.ink}" stroke-width="4"/><text x="${160 + i * 88}" y="182" text-anchor="middle" ${F} font-size="20" fill="${C.ink}">${i}</text></g>`).join("")}
  <line x1="150" x2="1050" y1="150" y2="150" stroke="${C.ink}" stroke-width="4"/>
  ${shelf(760, 420, 380)}
  ${shelf(760, 600, 380)}
  ${plant(170, 560, 1.2)}
  ${desk(1200, 640, 1000)}
  ${["s", "a", "t", "p", "i", "n"].map((l, i) => `
    <g transform="translate(${330 + i * 110} ${700 + (i % 2) * 18}) rotate(${(i % 3) * 4 - 4})">
      <rect width="92" height="110" rx="10" fill="${C.white}"/>
      <text x="46" y="80" text-anchor="middle" font-family="DejaVu Sans" font-size="64" fill="${C.ink}">${l}</text>
    </g>`).join("")}
  ${bookStack(60, 960)}
  ${cubes(780, 880)}
  ${pencilPot(1080, 860)}`;

// Scene 3: a kitchen table session, cubes and a phonics flashcard.
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

// Scene 4: a finished maths task on the shared whiteboard.
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

// Scene 5: Waterlooville as the centre of a local travel area. Not a map.
const areaScene = () => `
  <rect width="1200" height="1000" fill="${C.sage}"/>
  <circle cx="600" cy="500" r="380" fill="${C.white}" opacity=".45"/>
  <circle cx="600" cy="500" r="380" fill="none" stroke="${C.green}" stroke-width="6" stroke-dasharray="22 18"/>
  <circle cx="600" cy="500" r="220" fill="${C.white}" opacity=".6"/>
  <path d="M600 520 c-70 -80 -100 -130 -100 -180 a100 100 0 0 1 200 0 c0 50 -30 100 -100 180z" transform="translate(0 -40)" fill="${C.clay}"/>
  <circle cx="600" cy="300" r="40" fill="${C.white}"/>
  <text x="600" y="590" text-anchor="middle" ${F} font-size="54" fill="${C.ink}">Waterlooville</text>
  <text x="600" y="645" text-anchor="middle" font-family="DejaVu Sans" font-size="30" fill="#4C5B51">and surrounding areas</text>`;

(async () => {
  const jobs = [
    ["hero.webp", svg(1200, 1000, deskScene())],
    ["sam-portrait.webp", svg(1000, 800, deskScene(), "180 130 850 680")],
    ["tutoring-space.webp", svg(1200, 1000, spaceScene())],
    ["home-session.webp", svg(1200, 1000, homeScene())],
    ["whiteboard-task.webp", svg(1200, 1000, boardScene())],
    ["waterlooville.webp", svg(1200, 1000, areaScene())],
  ];
  for (const [name, s] of jobs) {
    await sharp(Buffer.from(s)).webp({ quality: 86 }).toFile(`${OUT}/${name}`);
    console.log(name);
  }
})();
