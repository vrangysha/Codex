import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const fromRoot = (...parts) => path.join(root, ...parts);

const palette = {
  ink: "#24352f",
  moss: "#587563",
  sage: "#8aa58d",
  rose: "#d87991",
  blush: "#f6d7dc",
  cream: "#fff7ef",
  ivory: "#fffdf8",
  lavender: "#c5b4de",
  gold: "#d7ae67",
  berry: "#a94465",
  peach: "#f4b69c",
};

const productPalettes = [
  ["#d85d7a", "#f3a0b1", "#fff1f3", "#6f9a77"],
  ["#ffffff", "#f2d9c9", "#d6b476", "#7e9a72"],
  ["#cbb6e8", "#e5d7f8", "#f9eef7", "#698b73"],
  ["#f6aa8c", "#ffd6be", "#fff5df", "#799a6d"],
  ["#ba3e5a", "#e87489", "#f3c2c7", "#55765f"],
  ["#f2f2ee", "#fff7d7", "#d7dfb7", "#7d9870"],
  ["#d04674", "#f4b8d0", "#f6e1ea", "#6e8e72"],
  ["#ffc7d1", "#fff0c5", "#cdb9e8", "#708e6d"],
  ["#ef8f72", "#ffccb3", "#f9e7d3", "#6a8d68"],
  ["#ffffff", "#e8d2b8", "#c9dbc2", "#5f8064"],
  ["#d24b65", "#f8bac2", "#efe8d5", "#4f785b"],
  ["#b68bd1", "#e6caef", "#f4f1fb", "#667f68"],
];

const dirs = [
  "assets/logo",
  "assets/icons",
  "assets/images/hero",
  "assets/images/catalog",
  "assets/images/bouquets",
  "assets/images/backgrounds",
  "assets/images/banners",
  "assets/svg",
  "assets/favicon",
  "assets/social",
];

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  })[char]);
}

function petal(cx, cy, rx, ry, fill, rotate = 0, opacity = 1) {
  return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" opacity="${opacity}" transform="rotate(${rotate} ${cx} ${cy})"/>`;
}

function flower(cx, cy, scale, colors, rotate = 0) {
  const [main, soft, light] = colors;
  const petals = [];
  for (let i = 0; i < 8; i += 1) {
    const angle = rotate + i * 45;
    const rad = angle * Math.PI / 180;
    const px = cx + Math.cos(rad) * 16 * scale;
    const py = cy + Math.sin(rad) * 12 * scale;
    petals.push(petal(px, py, 12 * scale, 21 * scale, i % 2 ? soft : main, angle, 0.95));
  }
  return `
    <g>
      ${petals.join("")}
      <circle cx="${cx}" cy="${cy}" r="${9 * scale}" fill="${light}"/>
      <circle cx="${cx}" cy="${cy}" r="${4 * scale}" fill="${palette.gold}" opacity=".75"/>
    </g>`;
}

function bouquetSvg(width, height, colors, variant = 0) {
  const [main, soft, light, leaf] = colors;
  const cx = width * 0.5;
  const baseY = height * 0.78;
  const bg = variant % 2 === 0
    ? `<linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="${palette.ivory}"/><stop offset=".55" stop-color="${palette.cream}"/><stop offset="1" stop-color="${palette.blush}"/></linearGradient>`
    : `<linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#fbfff9"/><stop offset=".65" stop-color="#f7efe7"/><stop offset="1" stop-color="#eadff4"/></linearGradient>`;
  const stems = Array.from({ length: 12 }, (_, i) => {
    const x1 = cx - 110 + i * 20;
    const x2 = cx - 86 + i * 15 + (i % 2 ? 18 : -14);
    return `<path d="M ${x1} ${baseY} C ${x1 + 12} ${height * 0.56}, ${x2 - 20} ${height * 0.43}, ${x2} ${height * 0.25}" stroke="${leaf}" stroke-width="6" stroke-linecap="round" fill="none" opacity=".88"/>`;
  }).join("");
  const leaves = Array.from({ length: 11 }, (_, i) => {
    const x = cx - 95 + i * 18;
    const y = height * (0.48 + (i % 3) * 0.045);
    const r = i % 2 ? -28 : 24;
    return `<ellipse cx="${x}" cy="${y}" rx="14" ry="34" fill="${leaf}" opacity=".64" transform="rotate(${r} ${x} ${y})"/>`;
  }).join("");
  const blooms = [
    [cx - 86, height * 0.26, 1.35, -12],
    [cx - 32, height * 0.19, 1.22, 20],
    [cx + 42, height * 0.23, 1.3, 5],
    [cx + 98, height * 0.31, 1.08, -18],
    [cx - 122, height * 0.38, 1.05, 16],
    [cx + 4, height * 0.37, 1.18, -10],
    [cx + 78, height * 0.42, 1.0, 28],
    [cx - 54, height * 0.45, 0.95, 10],
  ].map(([x, y, s, r], i) => flower(x, y, s, [i % 3 === 0 ? soft : main, i % 2 ? light : soft, light], r)).join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      ${bg}
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="24" stdDeviation="22" flood-color="#8b6a64" flood-opacity=".18"/>
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg)"/>
    <circle cx="${width * 0.18}" cy="${height * 0.18}" r="${width * 0.16}" fill="${main}" opacity=".08"/>
    <circle cx="${width * 0.84}" cy="${height * 0.18}" r="${width * 0.11}" fill="${palette.lavender}" opacity=".12"/>
    <g filter="url(#shadow)">
      ${stems}
      ${leaves}
      ${blooms}
      <path d="M ${cx - 135} ${baseY - 28} Q ${cx} ${baseY + 34} ${cx + 135} ${baseY - 28} L ${cx + 92} ${height * 0.96} Q ${cx} ${height * 1.02} ${cx - 92} ${height * 0.96} Z" fill="#f8e2d9" opacity=".96"/>
      <path d="M ${cx - 118} ${baseY - 18} Q ${cx} ${baseY + 28} ${cx + 118} ${baseY - 18}" stroke="#d2a28d" stroke-width="5" fill="none" opacity=".72"/>
      <path d="M ${cx - 50} ${baseY + 34} Q ${cx} ${baseY + 60} ${cx + 50} ${baseY + 34}" stroke="${palette.berry}" stroke-width="9" stroke-linecap="round" fill="none" opacity=".64"/>
    </g>
  </svg>`;
}

function heroSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="1800" height="1150" viewBox="0 0 1800 1150">
    <defs>
      <linearGradient id="heroBg" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#fffaf4"/>
        <stop offset=".52" stop-color="#f8efe9"/>
        <stop offset="1" stop-color="#eef5ed"/>
      </linearGradient>
      <radialGradient id="glow" cx=".68" cy=".42" r=".5">
        <stop stop-color="#f8c8d2" stop-opacity=".55"/>
        <stop offset=".7" stop-color="#f8c8d2" stop-opacity=".08"/>
        <stop offset="1" stop-color="#f8c8d2" stop-opacity="0"/>
      </radialGradient>
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="36" stdDeviation="38" flood-color="#684b45" flood-opacity=".18"/>
      </filter>
    </defs>
    <rect width="1800" height="1150" fill="url(#heroBg)"/>
    <rect width="1800" height="1150" fill="url(#glow)"/>
    <g opacity=".28">
      ${Array.from({ length: 28 }, (_, i) => {
        const x = 90 + (i * 137) % 1660;
        const y = 80 + (i * 91) % 940;
        const color = i % 3 === 0 ? palette.rose : i % 3 === 1 ? palette.lavender : palette.sage;
        return petal(x, y, 12 + (i % 5) * 3, 28 + (i % 4) * 5, color, (i * 41) % 180, .23);
      }).join("")}
    </g>
    <g transform="translate(930 120) scale(1.25)" filter="url(#softShadow)">
      ${bouquetSvg(700, 760, productPalettes[7], 2).replace(/<\?xml[^>]+>/, "").replace(/<svg[^>]+>/, '<svg x="0" y="0" width="700" height="760" viewBox="0 0 700 760">').replace("</svg>", "</svg>")}
    </g>
    <g transform="translate(1080 700)">
      <ellipse cx="200" cy="100" rx="300" ry="58" fill="#9b7a6c" opacity=".14"/>
    </g>
  </svg>`;
}

function categorySvg(title, colors, motif = "bouquet") {
  const symbol = motif === "gift"
    ? `<rect x="235" y="295" width="330" height="250" rx="26" fill="${colors[1]}"/><rect x="380" y="295" width="42" height="250" fill="${colors[0]}" opacity=".75"/><rect x="220" y="245" width="360" height="70" rx="22" fill="${colors[2]}"/><path d="M400 250 C350 190 288 202 300 250 C314 286 365 276 400 250 C445 190 512 202 500 250 C486 286 434 276 400 250Z" fill="${colors[0]}" opacity=".9"/>`
    : bouquetSvg(520, 580, colors, 1)
      .replace(/<\?xml[^>]+>/, "")
      .replace(/<svg[^>]+>/, '<svg x="0" y="0" width="520" height="580" viewBox="0 0 520 580">')
      .replace("</svg>", "</svg>");
  return `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="900" height="700" viewBox="0 0 900 700">
    <defs><linearGradient id="c" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fffdf8"/><stop offset="1" stop-color="#f1e7dd"/></linearGradient><filter id="shadow"><feDropShadow dx="0" dy="18" stdDeviation="20" flood-color="#8b6a64" flood-opacity=".16"/></filter></defs>
    <rect width="900" height="700" fill="url(#c)"/>
    <circle cx="160" cy="120" r="120" fill="${colors[0]}" opacity=".12"/>
    <circle cx="760" cy="560" r="170" fill="${colors[2]}" opacity=".16"/>
    <g transform="${motif === "gift" ? "" : "translate(190 70)"}" filter="url(#shadow)">${symbol}</g>
    <path d="M70 610 C250 560 470 650 830 590" stroke="${colors[3]}" stroke-width="10" stroke-linecap="round" opacity=".24" fill="none"/>
  </svg>`;
}

function floristSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
    <defs><linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#fff8f2"/><stop offset="1" stop-color="#edf5ec"/></linearGradient><filter id="s"><feDropShadow dx="0" dy="24" stdDeviation="28" flood-color="#684b45" flood-opacity=".17"/></filter></defs>
    <rect width="1200" height="900" fill="url(#bg)"/>
    <rect x="92" y="120" width="1016" height="660" rx="44" fill="#ffffff" opacity=".55"/>
    <g transform="translate(155 130) scale(.82)" filter="url(#s)">${bouquetSvg(650, 720, productPalettes[2], 1).replace(/<\?xml[^>]+>/, "").replace(/<svg[^>]+>/, '<svg x="0" y="0" width="650" height="720" viewBox="0 0 650 720">').replace("</svg>", "</svg>")}</g>
    <g transform="translate(700 190)" filter="url(#s)">
      <circle cx="135" cy="112" r="74" fill="#d6a387"/>
      <path d="M65 105 C72 28 205 20 221 106 C184 68 121 69 65 105Z" fill="#5b3f34"/>
      <path d="M32 330 C48 218 94 178 143 178 C201 178 260 230 280 336 L304 650 L0 650 Z" fill="#8aa58d"/>
      <path d="M96 208 C122 258 174 260 202 208" stroke="#fff7ef" stroke-width="18" stroke-linecap="round" fill="none"/>
      <path d="M8 394 C112 360 198 360 322 402" stroke="#d87991" stroke-width="24" stroke-linecap="round" fill="none" opacity=".75"/>
      <circle cx="84" cy="392" r="38" fill="#f3a0b1"/><circle cx="162" cy="374" r="44" fill="#fff1f3"/><circle cx="238" cy="396" r="36" fill="#c5b4de"/>
    </g>
  </svg>`;
}

function deliverySvg() {
  return `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
    <defs><linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#f7fff5"/><stop offset="1" stop-color="#fff0ed"/></linearGradient><filter id="s"><feDropShadow dx="0" dy="20" stdDeviation="22" flood-color="#5b514b" flood-opacity=".16"/></filter></defs>
    <rect width="1200" height="800" fill="url(#bg)"/>
    <path d="M80 620 C260 560 520 650 760 585 C930 540 1030 560 1120 600" stroke="#8aa58d" stroke-width="12" opacity=".24" fill="none"/>
    <g filter="url(#s)">
      <rect x="220" y="360" width="520" height="190" rx="34" fill="#fffdf8"/>
      <rect x="690" y="400" width="210" height="150" rx="26" fill="#f6d7dc"/>
      <path d="M740 400 L808 310 H890 L960 400Z" fill="#f3c2c7"/>
      <circle cx="350" cy="570" r="58" fill="#587563"/><circle cx="350" cy="570" r="24" fill="#fffdf8"/>
      <circle cx="780" cy="570" r="58" fill="#587563"/><circle cx="780" cy="570" r="24" fill="#fffdf8"/>
      <rect x="280" y="410" width="280" height="90" rx="22" fill="#edf5ec"/>
      <g transform="translate(410 225) scale(.58)">${bouquetSvg(380, 420, productPalettes[4], 1).replace(/<\?xml[^>]+>/, "").replace(/<svg[^>]+>/, '<svg x="0" y="0" width="380" height="420" viewBox="0 0 700 760">').replace("</svg>", "</svg>")}</g>
    </g>
  </svg>`;
}

function bannerSvg(colors, kind = "sale") {
  const extras = kind === "wedding"
    ? `<circle cx="1190" cy="235" r="150" fill="#fff" opacity=".45"/><path d="M1040 505 C1120 390 1270 390 1355 505" stroke="${colors[0]}" stroke-width="22" stroke-linecap="round" fill="none" opacity=".42"/>`
    : `<rect x="1030" y="130" width="280" height="280" rx="56" fill="#fff" opacity=".38"/><circle cx="1180" cy="270" r="115" fill="${colors[2]}" opacity=".42"/>`;
  return `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="1600" height="700" viewBox="0 0 1600 700">
    <defs><linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${colors[2]}"/><stop offset=".62" stop-color="#fff8f2"/><stop offset="1" stop-color="${colors[1]}"/></linearGradient><filter id="s"><feDropShadow dx="0" dy="28" stdDeviation="28" flood-color="#674642" flood-opacity=".16"/></filter></defs>
    <rect width="1600" height="700" fill="url(#b)"/>
    <circle cx="180" cy="110" r="150" fill="${colors[0]}" opacity=".16"/>
    <circle cx="1460" cy="615" r="250" fill="${colors[3]}" opacity=".13"/>
    ${extras}
    <g transform="translate(820 55) scale(.75)" filter="url(#s)">${bouquetSvg(700, 760, colors, 2).replace(/<\?xml[^>]+>/, "").replace(/<svg[^>]+>/, '<svg x="0" y="0" width="700" height="760" viewBox="0 0 700 760">').replace("</svg>", "</svg>")}</g>
  </svg>`;
}

function patternSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="900" height="900" viewBox="0 0 900 900">
    <rect width="900" height="900" fill="#fffdf8"/>
    ${Array.from({ length: 72 }, (_, i) => {
      const x = 40 + (i * 117) % 820;
      const y = 45 + (i * 83) % 810;
      const c = [palette.rose, palette.sage, palette.lavender, palette.gold][i % 4];
      return petal(x, y, 9 + (i % 3) * 4, 24 + (i % 4) * 5, c, (i * 37) % 180, .18);
    }).join("")}
  </svg>`;
}

function iconSvg(kind) {
  const paths = {
    delivery: `<path d="M10 35h30V20h17l11 15v20H10z"/><circle cx="24" cy="58" r="6"/><circle cx="58" cy="58" r="6"/><path d="M40 26h12l7 9H40z"/>`,
    freshness: `<path d="M40 64C22 48 18 30 28 16c18 2 28 16 26 35"/><path d="M40 64C58 50 66 34 60 18C42 21 33 36 40 64z"/><path d="M40 64V25"/>`,
    payment: `<rect x="10" y="20" width="60" height="40" rx="8"/><path d="M10 32h60"/><path d="M20 48h18"/>`,
    guarantee: `<path d="M40 10l25 10v18c0 18-10 30-25 38C25 68 15 56 15 38V20z"/><path d="M28 40l8 8 17-19"/>`,
    custom: `<path d="M18 55c14-10 30-10 44 0"/><path d="M40 58V20"/><path d="M40 28c-12-16-26-10-23 2 3 13 16 10 23-2z"/><path d="M40 28c12-16 26-10 23 2-3 13-16 10-23-2z"/>`,
    urgent: `<path d="M40 10a30 30 0 1 0 0 60 30 30 0 0 0 0-60z"/><path d="M40 24v18l13 7"/><path d="M15 15l-6 8"/><path d="M65 15l6 8"/>`,
    support: `<path d="M18 46V34a22 22 0 0 1 44 0v12"/><path d="M18 46h10v16H18z"/><path d="M52 46h10v16H52z"/><path d="M52 64c-4 5-10 7-18 6"/>`,
    pickup: `<path d="M18 32l22-18 22 18v32H18z"/><path d="M30 64V42h20v22"/><path d="M24 32h32"/>`,
  };
  return `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
    <rect width="80" height="80" rx="22" fill="#fff7ef"/>
    <g fill="none" stroke="#587563" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">${paths[kind]}</g>
  </svg>`;
}

function logoSvg(horizontal = false, iconOnly = false) {
  const width = iconOnly ? 220 : horizontal ? 760 : 420;
  const height = iconOnly ? 220 : horizontal ? 220 : 360;
  const flowerMark = `
    <g transform="translate(${iconOnly ? 110 : horizontal ? 110 : 210} ${iconOnly ? 104 : horizontal ? 104 : 118})">
      ${Array.from({ length: 7 }, (_, i) => petal(Math.cos(i * Math.PI / 3.5) * 34, Math.sin(i * Math.PI / 3.5) * 28, 20, 42, i % 2 ? palette.blush : palette.rose, i * 51, .96)).join("")}
      <circle cx="0" cy="0" r="18" fill="${palette.gold}"/>
      <path d="M0 44 C-8 74 -30 92 -56 106" stroke="${palette.moss}" stroke-width="10" stroke-linecap="round" fill="none"/>
      <path d="M-28 76 C-58 54 -84 62 -92 92 C-58 98 -40 92 -28 76Z" fill="${palette.sage}"/>
    </g>`;
  const text = iconOnly ? "" : horizontal
    ? `<text x="220" y="98" font-family="Georgia, 'Times New Roman', serif" font-size="72" fill="${palette.ink}" letter-spacing="1">Лиора</text><text x="224" y="148" font-family="Arial, sans-serif" font-size="23" fill="${palette.moss}" letter-spacing="6">FLOWERS MOSCOW</text>`
    : `<text x="210" y="245" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="72" fill="${palette.ink}">Лиора</text><text x="210" y="292" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" fill="${palette.moss}" letter-spacing="6">FLOWERS</text>`;
  return `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="${width}" height="${height}" rx="${iconOnly ? 54 : 0}" fill="none"/>
    ${flowerMark}${text}
  </svg>`;
}

async function writeText(file, content) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, content, "utf8");
}

async function render(svg, target, options = {}) {
  await fs.mkdir(path.dirname(target), { recursive: true });
  let pipeline = sharp(Buffer.from(svg));
  if (options.width || options.height) {
    pipeline = pipeline.resize(options.width, options.height, { fit: "cover" });
  }
  if (target.endsWith(".webp")) await pipeline.webp({ quality: options.quality ?? 86 }).toFile(target);
  else if (target.endsWith(".jpg") || target.endsWith(".jpeg")) await pipeline.jpeg({ quality: options.quality ?? 88, mozjpeg: true }).toFile(target);
  else if (target.endsWith(".png")) await pipeline.png({ compressionLevel: 9 }).toFile(target);
  else throw new Error(`Unsupported target: ${target}`);
}

async function makeIco(pngPath, icoPath) {
  const png = await fs.readFile(pngPath);
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  header.writeUInt8(32, 6);
  header.writeUInt8(32, 7);
  header.writeUInt8(0, 8);
  header.writeUInt8(0, 9);
  header.writeUInt16LE(1, 10);
  header.writeUInt16LE(32, 12);
  header.writeUInt32LE(png.length, 14);
  header.writeUInt32LE(22, 18);
  await fs.writeFile(icoPath, Buffer.concat([header, png]));
}

async function main() {
  await Promise.all(dirs.map((dir) => fs.mkdir(fromRoot(dir), { recursive: true })));

  const logos = [
    ["logo-main.svg", logoSvg(false, false), 420, 360],
    ["logo-horizontal.svg", logoSvg(true, false), 760, 220],
    ["logo-icon.svg", logoSvg(false, true), 220, 220],
  ];
  for (const [name, svg, width, height] of logos) {
    await writeText(fromRoot("assets/logo", name), svg);
    await render(svg, fromRoot("assets/logo", name.replace(".svg", ".png")), { width, height });
  }

  await render(logoSvg(false, true), fromRoot("assets/favicon/favicon-32.png"), { width: 32, height: 32 });
  await render(logoSvg(false, true), fromRoot("assets/favicon/favicon-180.png"), { width: 180, height: 180 });
  await writeText(fromRoot("assets/favicon/favicon.svg"), logoSvg(false, true));
  await makeIco(fromRoot("assets/favicon/favicon-32.png"), fromRoot("assets/favicon/favicon.ico"));

  const iconNames = ["delivery", "freshness", "payment", "guarantee", "custom", "urgent", "support", "pickup"];
  for (const name of iconNames) {
    const svg = iconSvg(name);
    await writeText(fromRoot("assets/icons", `icon-${name}.svg`), svg);
    await render(svg, fromRoot("assets/icons", `icon-${name}.png`), { width: 256, height: 256 });
  }

  await render(heroSvg(), fromRoot("assets/images/hero/hero-flower-bouquet.webp"), { width: 1600, height: 1024, quality: 88 });
  await render(heroSvg(), fromRoot("assets/images/hero/hero-flower-bouquet.jpg"), { width: 1600, height: 1024, quality: 88 });

  const products = [
    "bouquet-velvet-roses-card",
    "bouquet-morning-cream-card",
    "bouquet-lavender-cloud-card",
    "bouquet-apricot-light-card",
    "bouquet-ruby-date-card",
    "bouquet-white-garden-card",
    "bouquet-pink-peonies-card",
    "bouquet-soft-mix-card",
    "bouquet-sunrise-card",
    "bouquet-eucalyptus-card",
    "bouquet-classic-red-card",
    "bouquet-lilac-dream-card",
  ];
  for (let i = 0; i < products.length; i += 1) {
    const svg = bouquetSvg(900, 1080, productPalettes[i], i);
    await render(svg, fromRoot("assets/images/bouquets", `${products[i]}.webp`), { width: 900, height: 1080, quality: 88 });
    await render(svg, fromRoot("assets/images/bouquets", `${products[i]}.jpg`), { width: 900, height: 1080, quality: 88 });
  }

  const categories = [
    ["category-birthday.webp", "День рождения", productPalettes[0], "bouquet"],
    ["category-wedding.webp", "Свадьба", productPalettes[5], "bouquet"],
    ["category-date.webp", "Свидание", productPalettes[4], "bouquet"],
    ["category-mono.webp", "Монобукеты", productPalettes[1], "bouquet"],
    ["category-gifts.webp", "Подарки", productPalettes[8], "gift"],
    ["category-corporate.webp", "Корпоративные", productPalettes[10], "bouquet"],
  ];
  for (const [name, title, colors, motif] of categories) {
    await render(categorySvg(title, colors, motif), fromRoot("assets/images/catalog", name), { width: 900, height: 700, quality: 86 });
  }

  await render(floristSvg(), fromRoot("assets/images/backgrounds/florist-studio.webp"), { width: 1200, height: 900, quality: 86 });
  await render(deliverySvg(), fromRoot("assets/images/backgrounds/delivery-courier.webp"), { width: 1200, height: 800, quality: 86 });
  await render(categorySvg("Подарочный набор", productPalettes[8], "gift"), fromRoot("assets/images/backgrounds/gift-set.webp"), { width: 1100, height: 800, quality: 86 });
  await writeText(fromRoot("assets/svg/petal-pattern.svg"), patternSvg());
  await render(patternSvg(), fromRoot("assets/images/backgrounds/petal-pattern.png"), { width: 900, height: 900 });

  const banners = [
    ["banner-spring-sale.webp", productPalettes[7], "sale"],
    ["banner-first-order.webp", productPalettes[3], "sale"],
    ["banner-wedding-bouquets.webp", productPalettes[5], "wedding"],
    ["banner-two-hour-delivery.webp", productPalettes[0], "sale"],
    ["banner-corporate-orders.webp", productPalettes[10], "sale"],
  ];
  for (const [name, colors, kind] of banners) {
    const svg = bannerSvg(colors, kind);
    await render(svg, fromRoot("assets/images/banners", name), { width: 1600, height: 700, quality: 88 });
    await render(svg, fromRoot("assets/images/banners", name.replace(".webp", ".png")), { width: 1600, height: 700 });
  }

  const ogSvg = bannerSvg(productPalettes[7], "sale");
  await render(ogSvg, fromRoot("assets/social/og-image.webp"), { width: 1200, height: 630, quality: 88 });
  await render(ogSvg, fromRoot("assets/social/social-post.webp"), { width: 1080, height: 1080, quality: 88 });

  console.log(`Generated assets in ${root}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
