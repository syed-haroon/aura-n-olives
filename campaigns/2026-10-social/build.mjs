import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(import.meta.dirname, '../..');
const out = import.meta.dirname;
const asset = (name) => path.join(root, 'public/assets/images', name);
const green = '#14261a';
const deep = '#0c1810';
const cream = '#f9f4e8';
const gold = '#d7b34d';

const concepts = [
  { id: 'challenge-a', program: 'WELLNESS WARRIOR CHALLENGE', headline: ['Yoga. Strength.', 'Nutrition. Together.'], support: ['A structured approach combining', 'movement, breathwork and nutrition guidance.'], detail: '90-day online cohort', photo: 'programs/challenge-hero.webp', focus: 'attention', style: 'dark' },
  { id: 'challenge-b', program: 'WELLNESS WARRIOR CHALLENGE', headline: ['Guidance beyond', 'the class.'], support: ['Asana feedback and a week-by-week yoga,', 'mobility and strength plan.'], detail: '90-day online cohort', photo: 'founder/about-story.webp', focus: 'centre', style: 'light' },
  { id: 'sadhana-a', program: 'YOGA SADHANA', headline: ['Live yoga,', 'five days a week.'], support: ['Choose from three daily batch options.'], detail: '60-minute sessions · Led by Reshma', photo: 'founder/about-teaser.webp', focus: 'north', style: 'light' },
  { id: 'sadhana-b', program: 'YOGA SADHANA', headline: ['Practise together.', 'Build a routine.'], support: ['Live yoga and pranayama with Reshma', 'and a supportive community.'], detail: 'Online classes', photo: 'programs/membership-hero.webp', focus: 'centre', style: 'dark' },
];

const esc = (s) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const line = (s, x, y, size, fill, family = 'Georgia', weight = 400, extra = '') => `<text x="${x}" y="${y}" fill="${fill}" font-family="${family}" font-size="${size}" font-weight="${weight}" ${extra}>${esc(s)}</text>`;
const lines = (arr, x, y, step, size, fill, family, weight) => arr.map((s, i) => line(s, x, y + i * step, size, fill, family, weight)).join('');

async function jpegData(file, width, height, position = 'centre') {
  const buf = await sharp(file).resize(width, height, { fit: 'cover', position }).jpeg({ quality: 87, mozjpeg: true }).toBuffer();
  return `data:image/jpeg;base64,${buf.toString('base64')}`;
}

async function logoData() {
  const buf = await sharp(asset('logo.png')).extract({ left: 95, top: 105, width: 835, height: 710 }).resize(500).png().toBuffer();
  return `data:image/png;base64,${buf.toString('base64')}`;
}

function brand(logo, x, y, size) {
  return `<image href="${logo}" x="${x}" y="${y}" width="${size}" height="${size * 710 / 835}" preserveAspectRatio="xMidYMid meet"/>`;
}

function svg(c, format, photo, logo) {
  const story = format === 'story';
  const h = story ? 1920 : 1350;
  const W = 1080;
  const light = c.style === 'light';
  const ink = light ? green : cream;
  const base = light ? cream : deep;
  let body = `<rect width="1080" height="${h}" fill="${base}"/>`;

  if (c.id === 'challenge-a') {
    const imageY = story ? 190 : 0;
    const imageH = story ? 840 : 700;
    body += `<image href="${photo}" x="0" y="${imageY}" width="1080" height="${imageH}" preserveAspectRatio="none"/>`;
    body += `<rect x="0" y="${story ? 1030 : 680}" width="1080" height="${story ? 890 : 670}" fill="${deep}"/>`;
    if (story) body += brand(logo, 54, 215, 270);
    else body += brand(logo, 58, 38, 235);
    const top = story ? 1110 : 760;
    body += line(c.program, 70, top, 29, gold, 'Arial', 700, 'letter-spacing="3"');
    body += lines(c.headline, 68, top + 92, 92, story ? 72 : 69, cream, 'Georgia', 700);
    body += lines(c.support, 70, top + 286, 48, 37, cream, 'Arial', 400);
    body += `<line x1="70" y1="${top + 407}" x2="1010" y2="${top + 407}" stroke="${gold}" stroke-width="2" opacity=".7"/>`;
    body += line(c.detail, 70, top + 460, 31, gold, 'Arial', 700);
  } else if (c.id === 'challenge-b') {
    const photoY = story ? 740 : 635;
    const photoH = story ? 680 : 450;
    body += `<image href="${photo}" x="0" y="${photoY}" width="1080" height="${photoH}" preserveAspectRatio="none"/>`;
    body += brand(logo, 65, story ? 190 : 40, story ? 190 : 235);
    const top = story ? 390 : 255;
    body += line(c.program, 70, top, 28, green, 'Arial', 700, 'letter-spacing="2.6"');
    body += lines(c.headline, 67, top + 96, 92, story ? 77 : 72, green, 'Georgia', 700);
    body += lines(c.support, 70, top + 280, 46, 36, green, 'Arial', 400);
    const footY = story ? 1420 : 1085;
    body += `<rect x="0" y="${footY}" width="1080" height="${h - footY}" fill="${green}"/>`;
    body += line(c.detail, 70, footY + (story ? 112 : 105), 34, cream, 'Arial', 700);
  } else if (c.id === 'sadhana-a') {
    const photoX = story ? 0 : 470;
    const photoY = story ? 330 : 0;
    const photoW = story ? 1080 : 610;
    const photoH = story ? 820 : 930;
    body += `<image href="${photo}" x="${photoX}" y="${photoY}" width="${photoW}" height="${photoH}" preserveAspectRatio="none"/>`;
    if (!story) body += `<rect x="0" y="0" width="480" height="930" fill="${cream}"/>`;
    body += brand(logo, 62, story ? 230 : 42, 230);
    if (story) body += `<rect x="0" y="1150" width="1080" height="770" fill="${cream}"/>`;
    else body += `<rect x="0" y="930" width="1080" height="420" fill="${cream}"/>`;
    body += line(c.program, 70, story ? 1245 : 1005, 28, green, 'Arial', 700, 'letter-spacing="3"');
    body += lines(c.headline, 70, story ? 1335 : 1090, story ? 73 : 67, story ? 67 : 66, green, 'Georgia', 700);
    body += line(c.support[0], 70, story ? 1500 : 1210, 36, green, 'Arial', 400);
    body += line(c.detail, 70, story ? 1580 : 1280, 34, '#856a24', 'Arial', 700);
  } else {
    const photoY = story ? 450 : 70;
    const photoH = 608;
    body += `<image href="${photo}" x="0" y="${photoY}" width="1080" height="${photoH}" preserveAspectRatio="none"/>`;
    body += brand(logo, 58, story ? 235 : 25, 225);
    const footY = story ? 1100 : 725;
    body += `<rect x="0" y="${footY}" width="1080" height="${h - footY}" fill="${green}"/>`;
    body += line(c.program, 70, footY + 82, 29, gold, 'Arial', 700, 'letter-spacing="3"');
    body += lines(c.headline, 68, footY + 175, story ? 86 : 82, story ? 73 : 69, cream, 'Georgia', 700);
    body += lines(c.support, 70, footY + (story ? 365 : 345), 46, 37, cream, 'Arial', 400);
    body += line(c.detail, 70, footY + (story ? 490 : 545), 31, gold, 'Arial', 700);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${h}" viewBox="0 0 ${W} ${h}">${body}</svg>`;
}

await fs.mkdir(path.join(out, 'editable'), { recursive: true });
await fs.mkdir(path.join(out, 'exports'), { recursive: true });
const logo = await logoData();
for (const c of concepts) {
  for (const format of ['feed', 'story']) {
    const story = format === 'story';
    const photoSize = c.id === 'sadhana-a' ? (story ? [1080, 820] : [610, 930]) : c.id === 'sadhana-b' ? [1080, 608] : c.id === 'challenge-b' ? [1080, story ? 680 : 450] : [1080, story ? 840 : 730];
    const photo = await jpegData(asset(c.photo), ...photoSize, c.focus);
    const source = svg(c, format, photo, logo);
    const name = `${c.id}-${format}`;
    await fs.writeFile(path.join(out, 'editable', `${name}.svg`), source);
    await sharp(Buffer.from(source)).png({ compressionLevel: 9 }).toFile(path.join(out, 'exports', `${name}.png`));
  }
}

const tiles = [];
for (let i = 0; i < concepts.length; i++) {
  const c = concepts[i];
  for (const [j, format] of ['feed', 'story'].entries()) {
    const buf = await sharp(path.join(out, 'exports', `${c.id}-${format}.png`)).resize({ width: 270 }).png().toBuffer();
    tiles.push({ input: buf, left: i * 550 + j * 275, top: 60 });
  }
}
const labels = concepts.map((c, i) => line(`${c.id.toUpperCase()}  /  FEED + STORY`, i * 550 + 10, 38, 23, green, 'Arial', 700)).join('');
const header = Buffer.from(`<svg width="2200" height="60" xmlns="http://www.w3.org/2000/svg"><rect width="2200" height="60" fill="${cream}"/>${labels}</svg>`);
await sharp({ create: { width: 2200, height: 550, channels: 3, background: cream } }).composite([{ input: header, left: 0, top: 0 }, ...tiles]).png().toFile(path.join(out, 'comparison.png'));
console.log('Created four feed and four Story posters, editable SVGs, and comparison preview.');
