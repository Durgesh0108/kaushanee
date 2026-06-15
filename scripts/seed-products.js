// Resets and re-seeds the FULL catalog + every website section with genuine
// data and numbered placeholder images, so the site shows a complete overview.
//
// IMPORTANT: This is DESTRUCTIVE. It first DELETES all catalog / master /
// website-section data (products, images, descriptions, cart items,
// product-occasion links, sliders, best-price tiles, styling content, and every
// master/lookup table) and then re-inserts a clean, consistent data set.
// It does NOT touch Users or Orders/OrderProduct history.
//
// Placeholder images: placehold.co (already whitelisted in next.config.mjs).
// Galleries get 6 numbered placeholders ("... 1" .. "... 6").
//
// Hierarchy (matches Header.tsx / navbar / footer):
//   Category (Saree, Kurta, Kurta Set)  -> top-level nav items
//     -> Fabric (Banarasi Silk, ...)    -> first dropdown column
//        -> Type (Bridal, Festive, ...) -> second dropdown column
//           -> SubType (Premium, Classic)
//
// Run with: node scripts/seed-products.js
const fs = require("fs");
const path = require("path");

// --- Load DATABASE_URL from .env (dotenv isn't installed) ---
const envPath = path.resolve(__dirname, "..", ".env");
const envText = fs.readFileSync(envPath, "utf8");
for (const line of envText.split(/\r?\n/)) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;
  const eq = trimmed.indexOf("=");
  if (eq === -1) continue;
  const key = trimmed.slice(0, eq).trim();
  let value = trimmed.slice(eq + 1).trim();
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    value = value.slice(1, -1);
  }
  if (!(key in process.env)) process.env[key] = value;
}

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Labeled grey placeholder boxes (clearly temporary — replace in the admin panel).
// NOTE: must be .png — placehold.co serves SVG by default, and next/image refuses
// to optimize remote SVGs (needs dangerouslyAllowSVG), so SVG placeholders won't render.
const img = (label, w = 600, h = 800) =>
  `https://placehold.co/${w}x${h}/eeeeee/333333.png?text=${encodeURIComponent(label)}`;

// A gallery of `count` numbered placeholder image URLs: "Label 1" .. "Label N".
const gallery = (label, count = 6, w = 600, h = 800) =>
  Array.from({ length: count }, (_, i) => img(`${label} ${i + 1}`, w, h));

// Placeholder embed used for dress-style videos (replace later in admin).
const SAMPLE_VIDEO = "https://www.youtube.com/embed/ScMzIvxBSi4";

// ---------------------------------------------------------------------------
// Taxonomy: Category -> Fabric -> Type -> SubType  (drives the navbar dropdowns)
// ---------------------------------------------------------------------------
const SUBTYPES = ["Premium", "Classic"];
const taxonomy = [
  {
    category: "Saree",
    fabrics: [
      { name: "Banarasi Silk", types: ["Bridal", "Festive"] },
      { name: "Kanjivaram Silk", types: ["Bridal", "Festive"] },
      { name: "Chanderi Silk", types: ["Party Wear", "Casual"] },
      { name: "Tussar Silk", types: ["Festive", "Casual"] },
      { name: "Paithani", types: ["Bridal", "Festive"] },
      { name: "Patola", types: ["Bridal", "Festive"] },
      { name: "Bandhani", types: ["Festive", "Casual"] },
      { name: "Georgette", types: ["Party Wear", "Casual"] },
      { name: "Cotton Handloom", types: ["Casual", "Daily Wear"] },
      { name: "Linen", types: ["Casual", "Daily Wear"] },
    ],
  },
  {
    category: "Kurta",
    fabrics: [
      { name: "Cotton", types: ["Casual", "Office Wear"] },
      { name: "Rayon", types: ["Casual", "Festive"] },
      { name: "Silk", types: ["Festive", "Party Wear"] },
    ],
  },
  {
    category: "Kurta Set",
    fabrics: [
      { name: "Cotton", types: ["Casual", "Daily Wear"] },
      { name: "Silk", types: ["Festive", "Party Wear"] },
    ],
  },
];

// ---------------------------------------------------------------------------
// Other master data
// ---------------------------------------------------------------------------
const colors = [
  { name: "Maroon", hexCode: "#800000" },
  { name: "Royal Blue", hexCode: "#1F3A93" },
  { name: "Emerald Green", hexCode: "#046307" },
  { name: "Mustard Yellow", hexCode: "#E1AD01" },
  { name: "Magenta", hexCode: "#C2185B" },
  { name: "Teal", hexCode: "#008080" },
  { name: "Gold", hexCode: "#D4AF37" },
  { name: "Ivory", hexCode: "#FFFFF0" },
  { name: "Rani Pink", hexCode: "#E3006D" },
  { name: "Off White", hexCode: "#FAF9F6" },
  { name: "Black", hexCode: "#1C1C1C" },
  { name: "Red", hexCode: "#C8102E" },
];

const patterns = [
  "Floral Jaal",
  "Temple Border",
  "Paisley",
  "Geometric",
  "Bandhej Dots",
  "Peacock Motif",
  "Stripes",
  "Butti",
];

const weaves = ["Handloom", "Powerloom", "Jacquard"];
const weaveTypes = [
  { name: "Pure Zari", weave: "Handloom" },
  { name: "Meenakari", weave: "Handloom" },
  { name: "Brocade", weave: "Jacquard" },
];
const borders = ["Zari Border", "Temple Border", "Contrast Border", "Tissue Border"];
const palluMotifs = ["Peacock", "Floral", "Paisley", "Temple"];
const zaris = ["Gold Zari", "Silver Zari", "Copper Zari"];
const blousePatterns = ["Plain", "Contrast Embroidered", "Printed", "Zari Woven"];
const sareeMotifs = ["Buti", "Jaal", "Bel", "Konia"];
const buttiTypes = ["Floral Buti", "Geometric Buti", "Zari Buti"];
const occassions = ["Wedding", "Festive", "Party", "Casual", "Daily Wear"];

// Homepage hero carousel
const sliderCount = 6;

// Homepage "Best Price" tiles (price buckets). min/max are strings (schema).
const bestPrices = [
  { name: "Under ₹2000", min: "0", max: "2000" },
  { name: "₹2000 - ₹5000", min: "2000", max: "5000" },
  { name: "₹5000 - ₹10000", min: "5000", max: "10000" },
  { name: "₹10000 - ₹15000", min: "10000", max: "15000" },
  { name: "Above ₹15000", min: "15000", max: "100000" },
];

// Styling section
const topViews = ["With Blouse", "With Crop Top", "With Jacket"];
const dressStyles = [
  { name: "Nivi Drape", description: "<p>The classic Andhra-style drape with neat box pleats and a pallu over the left shoulder.</p>" },
  { name: "Bengali Drape", description: "<p>Traditional Bengali style with wide pleats and the pallu draped over both shoulders.</p>" },
  { name: "Gujarati Drape", description: "<p>Seedha pallu style where the pallu is brought from back to front over the right shoulder.</p>" },
  { name: "Maharashtrian Drape", description: "<p>The nauvari nine-yard drape tucked like a dhoti for ease of movement.</p>" },
];

// ---------------------------------------------------------------------------
// 10 genuine sarees (all under the "Saree" category), referencing master data.
// ---------------------------------------------------------------------------
const products = [
  {
    name: "Banarasi Pure Silk Saree - Maroon",
    price: 8499,
    qty: 15,
    shortDescription:
      "Handwoven Banarasi pure silk saree with intricate gold zari floral jaal and a rich pallu.",
    fabric: "Banarasi Silk",
    type: "Bridal",
    pattern: "Floral Jaal",
    color: "Maroon",
    blouseColor: "Gold",
    palluColor: "Gold",
    borderColor: "Gold",
    zariColor: "Gold",
    weave: "Handloom",
    weaveType: "Pure Zari",
    border: "Zari Border",
    palluMotif: "Floral",
    zari: "Gold Zari",
    blousePattern: "Zari Woven",
    sareeMotif: "Jaal",
    buttiType: "Zari Buti",
    occassions: ["Wedding", "Festive"],
  },
  {
    name: "Kanjivaram Silk Saree - Royal Blue",
    price: 12999,
    qty: 10,
    shortDescription:
      "Traditional Kanjivaram silk saree with contrast temple border and pure gold zari work.",
    fabric: "Kanjivaram Silk",
    type: "Bridal",
    pattern: "Temple Border",
    color: "Royal Blue",
    blouseColor: "Gold",
    palluColor: "Gold",
    borderColor: "Gold",
    zariColor: "Gold",
    weave: "Handloom",
    weaveType: "Pure Zari",
    border: "Temple Border",
    palluMotif: "Temple",
    zari: "Gold Zari",
    blousePattern: "Contrast Embroidered",
    sareeMotif: "Konia",
    buttiType: "Zari Buti",
    occassions: ["Wedding", "Festive"],
  },
  {
    name: "Chanderi Silk Cotton Saree - Ivory",
    price: 3299,
    qty: 25,
    shortDescription:
      "Lightweight Chanderi silk-cotton saree with delicate paisley buttis and a subtle sheen.",
    fabric: "Chanderi Silk",
    type: "Party Wear",
    pattern: "Paisley",
    color: "Ivory",
    blouseColor: "Gold",
    palluColor: "Ivory",
    borderColor: "Gold",
    zariColor: "Gold",
    weave: "Handloom",
    weaveType: "Meenakari",
    border: "Tissue Border",
    palluMotif: "Paisley",
    zari: "Gold Zari",
    blousePattern: "Plain",
    sareeMotif: "Buti",
    buttiType: "Floral Buti",
    occassions: ["Festive", "Party"],
  },
  {
    name: "Paithani Silk Saree - Emerald Green",
    price: 15499,
    qty: 8,
    shortDescription:
      "Authentic Maharashtrian Paithani saree with a hand-woven peacock pallu and oblique square border.",
    fabric: "Paithani",
    type: "Bridal",
    pattern: "Peacock Motif",
    color: "Emerald Green",
    blouseColor: "Gold",
    palluColor: "Gold",
    borderColor: "Gold",
    zariColor: "Gold",
    weave: "Handloom",
    weaveType: "Pure Zari",
    border: "Zari Border",
    palluMotif: "Peacock",
    zari: "Gold Zari",
    blousePattern: "Zari Woven",
    sareeMotif: "Bel",
    buttiType: "Zari Buti",
    occassions: ["Wedding", "Festive"],
  },
  {
    name: "Patola Silk Saree - Rani Pink",
    price: 18999,
    qty: 6,
    shortDescription:
      "Double ikat Patola silk saree from Patan with vibrant geometric motifs woven on both sides.",
    fabric: "Patola",
    type: "Bridal",
    pattern: "Geometric",
    color: "Rani Pink",
    blouseColor: "Emerald Green",
    palluColor: "Rani Pink",
    borderColor: "Gold",
    zariColor: "Gold",
    weave: "Handloom",
    weaveType: "Brocade",
    border: "Contrast Border",
    palluMotif: "Floral",
    zari: "Gold Zari",
    blousePattern: "Contrast Embroidered",
    sareeMotif: "Jaal",
    buttiType: "Geometric Buti",
    occassions: ["Wedding", "Festive"],
  },
  {
    name: "Tussar Silk Saree - Mustard Yellow",
    price: 4799,
    qty: 20,
    shortDescription:
      "Natural Tussar silk saree with earthy texture, hand-block buttis and a contrast zari border.",
    fabric: "Tussar Silk",
    type: "Festive",
    pattern: "Butti",
    color: "Mustard Yellow",
    blouseColor: "Maroon",
    palluColor: "Mustard Yellow",
    borderColor: "Gold",
    zariColor: "Copper Zari",
    weave: "Handloom",
    weaveType: "Meenakari",
    border: "Zari Border",
    palluMotif: "Floral",
    zari: "Copper Zari",
    blousePattern: "Printed",
    sareeMotif: "Buti",
    buttiType: "Floral Buti",
    occassions: ["Festive", "Party"],
  },
  {
    name: "Cotton Handloom Saree - Teal",
    price: 1899,
    qty: 40,
    shortDescription:
      "Breathable handloom cotton saree with a contrast woven border — perfect for everyday elegance.",
    fabric: "Cotton Handloom",
    type: "Casual",
    pattern: "Stripes",
    color: "Teal",
    blouseColor: "Mustard Yellow",
    palluColor: "Teal",
    borderColor: "Mustard Yellow",
    weave: "Handloom",
    border: "Contrast Border",
    palluMotif: "Floral",
    blousePattern: "Plain",
    sareeMotif: "Buti",
    buttiType: "Geometric Buti",
    occassions: ["Casual", "Daily Wear"],
  },
  {
    name: "Georgette Designer Saree - Magenta",
    price: 3599,
    qty: 30,
    shortDescription:
      "Flowy georgette saree with sequin and thread embroidery — a graceful pick for parties.",
    fabric: "Georgette",
    type: "Party Wear",
    pattern: "Floral Jaal",
    color: "Magenta",
    blouseColor: "Magenta",
    palluColor: "Magenta",
    borderColor: "Gold",
    zariColor: "Gold",
    weave: "Powerloom",
    border: "Tissue Border",
    palluMotif: "Floral",
    zari: "Gold Zari",
    blousePattern: "Contrast Embroidered",
    sareeMotif: "Bel",
    buttiType: "Floral Buti",
    occassions: ["Party", "Festive"],
  },
  {
    name: "Bandhani Saree - Red",
    price: 2799,
    qty: 22,
    shortDescription:
      "Traditional Gujarati Bandhani (tie-dye) saree in classic red with fine bandhej dots.",
    fabric: "Bandhani",
    type: "Festive",
    pattern: "Bandhej Dots",
    color: "Red",
    blouseColor: "Gold",
    palluColor: "Red",
    borderColor: "Gold",
    zariColor: "Gold",
    weave: "Powerloom",
    border: "Zari Border",
    palluMotif: "Paisley",
    zari: "Gold Zari",
    blousePattern: "Printed",
    sareeMotif: "Buti",
    buttiType: "Floral Buti",
    occassions: ["Festive", "Wedding"],
  },
  {
    name: "Pure Linen Saree - Off White",
    price: 2299,
    qty: 35,
    shortDescription:
      "Crisp pure linen saree with a slim contrast border — lightweight, breathable and office-ready.",
    fabric: "Linen",
    type: "Casual",
    pattern: "Stripes",
    color: "Off White",
    blouseColor: "Black",
    palluColor: "Off White",
    borderColor: "Black",
    weave: "Powerloom",
    border: "Contrast Border",
    palluMotif: "Floral",
    blousePattern: "Plain",
    sareeMotif: "Buti",
    buttiType: "Geometric Buti",
    occassions: ["Daily Wear", "Casual"],
  },
];

// ---------------------------------------------------------------------------
// Step 1: wipe existing catalog + master + website-section data (children first).
// ---------------------------------------------------------------------------
async function resetData() {
  console.log("Deleting existing catalog, master & website-section data...");
  await prisma.productOnOccasion.deleteMany();
  await prisma.image.deleteMany();
  await prisma.description.deleteMany();
  await prisma.cartItem.deleteMany(); // reference products
  await prisma.product.deleteMany();

  // styling section
  await prisma.attireImage.deleteMany();
  await prisma.attire.deleteMany();
  await prisma.topView.deleteMany();
  await prisma.dressStyle.deleteMany();

  // homepage sections
  await prisma.sliders.deleteMany();
  await prisma.bestPrice.deleteMany();

  // master / lookup
  await prisma.subType.deleteMany();
  await prisma.type.deleteMany();
  await prisma.fabric.deleteMany();
  await prisma.pattern.deleteMany();
  await prisma.border.deleteMany();
  await prisma.palluMotif.deleteMany();
  await prisma.zari.deleteMany();
  await prisma.blousePattern.deleteMany();
  await prisma.sareeMotif.deleteMany();
  await prisma.buttiType.deleteMany();
  await prisma.weaveType.deleteMany();
  await prisma.weave.deleteMany();
  await prisma.color.deleteMany();
  await prisma.occassion.deleteMany();
  await prisma.category.deleteMany();
  console.log("Old data cleared.\n");
}

async function main() {
  await resetData();

  // -------------------------------------------------------------------------
  // Step 2: master data. Maps hold name -> ObjectId so products can link up.
  // -------------------------------------------------------------------------
  const categoryMap = {}; // name -> id
  const fabricMap = {}; // "Category>Fabric" -> id
  const typeMap = {}; // "Category>Fabric>Type" -> id

  for (let ci = 0; ci < taxonomy.length; ci++) {
    const c = taxonomy[ci];
    const category = await prisma.category.create({
      data: {
        name: c.category,
        order: ci + 1,
        imageUrl: img(c.category),
        bannerUrl: img(`${c.category} Banner`, 1600, 600),
        isArchived: false,
      },
    });
    categoryMap[c.category] = category.id;

    for (let fi = 0; fi < c.fabrics.length; fi++) {
      const f = c.fabrics[fi];
      const fabric = await prisma.fabric.create({
        data: {
          name: f.name,
          order: fi + 1,
          imageUrl: img(f.name),
          bannerUrl: img(`${f.name} Banner`, 1600, 600),
          categoryId: category.id,
          isArchived: false,
        },
      });
      fabricMap[`${c.category}>${f.name}`] = fabric.id;

      for (const typeName of f.types) {
        const type = await prisma.type.create({
          data: {
            name: typeName,
            imageUrl: img(typeName),
            bannerUrl: img(`${typeName} Banner`, 1600, 600),
            categoryId: category.id, // for mobile navbar (category.Type)
            fabricId: fabric.id, // for desktop dropdown (fabric.Type)
            isArchived: false,
          },
        });
        typeMap[`${c.category}>${f.name}>${typeName}`] = type.id;

        // SubTypes under each Type
        for (const sub of SUBTYPES) {
          await prisma.subType.create({
            data: {
              name: `${sub} ${typeName}`,
              imageUrl: img(`${sub} ${typeName}`),
              bannerUrl: img(`${sub} ${typeName} Banner`, 1600, 600),
              typeId: type.id,
              isArchived: false,
            },
          });
        }
      }
    }
  }

  const sareeId = categoryMap["Saree"];

  // Patterns (belong to Saree — these are saree-specific patterns)
  const patternMap = {};
  for (let i = 0; i < patterns.length; i++) {
    const name = patterns[i];
    const row = await prisma.pattern.create({
      data: {
        name,
        order: i + 1,
        imageUrl: img(name),
        bannerUrl: img(`${name} Banner`, 1600, 600),
        categoryId: sareeId,
        isArchived: false,
      },
    });
    patternMap[name] = row.id;
  }

  // Colors (global) — bannerUrl placeholder + hexCode swatch
  const colorMap = {};
  for (let i = 0; i < colors.length; i++) {
    const c = colors[i];
    const row = await prisma.color.create({
      data: {
        name: c.name,
        order: i + 1,
        hexCode: c.hexCode,
        bannerUrl: img(`${c.name} Banner`, 1600, 600),
        isArchived: false,
      },
    });
    colorMap[c.name] = row.id;
  }

  // Weaves + WeaveTypes
  const weaveMap = {};
  for (const w of weaves) {
    const row = await prisma.weave.create({ data: { name: w, isArchived: false } });
    weaveMap[w] = row.id;
  }
  const weaveTypeMap = {};
  for (const wt of weaveTypes) {
    const row = await prisma.weaveType.create({
      data: { name: wt.name, weaveId: weaveMap[wt.weave], isArchived: false },
    });
    weaveTypeMap[wt.name] = row.id;
  }

  // Saree-attribute masters (categoryId optional — tag them to Saree)
  const borderMap = {};
  for (const b of borders) {
    const row = await prisma.border.create({
      data: { name: b, categoryId: sareeId, isArchived: false },
    });
    borderMap[b] = row.id;
  }
  const palluMotifMap = {};
  for (const m of palluMotifs) {
    const row = await prisma.palluMotif.create({
      data: { name: m, categoryId: sareeId, isArchived: false },
    });
    palluMotifMap[m] = row.id;
  }
  const zariMap = {};
  for (const z of zaris) {
    const row = await prisma.zari.create({
      data: { name: z, categoryId: sareeId, isArchived: false },
    });
    zariMap[z] = row.id;
  }
  const blousePatternMap = {};
  for (const bp of blousePatterns) {
    const row = await prisma.blousePattern.create({
      data: { name: bp, categoryId: sareeId, isArchived: false },
    });
    blousePatternMap[bp] = row.id;
  }
  const sareeMotifMap = {};
  for (const sm of sareeMotifs) {
    const row = await prisma.sareeMotif.create({
      data: { name: sm, categoryId: sareeId, isArchived: false },
    });
    sareeMotifMap[sm] = row.id;
  }
  const buttiTypeMap = {};
  for (const bt of buttiTypes) {
    const row = await prisma.buttiType.create({
      data: { name: bt, categoryId: sareeId, isArchived: false },
    });
    buttiTypeMap[bt] = row.id;
  }

  // Occassions (require imageUrl)
  const occassionMap = {};
  for (const o of occassions) {
    const row = await prisma.occassion.create({
      data: {
        name: o,
        imageUrl: img(o),
        bannerUrl: img(`${o} Banner`, 1600, 600),
        isArchived: false,
      },
    });
    occassionMap[o] = row.id;
  }

  console.log("Master data created.");

  // -------------------------------------------------------------------------
  // Step 3: homepage sections — Sliders + Best Price tiles
  // -------------------------------------------------------------------------
  for (const url of gallery("Slider", sliderCount, 1600, 600)) {
    await prisma.sliders.create({ data: { imageUrl: url, isArchived: false } });
  }
  for (const bp of bestPrices) {
    await prisma.bestPrice.create({
      data: {
        name: bp.name,
        min: bp.min,
        max: bp.max,
        imageUrl: img(bp.name, 500, 500),
        isArchived: false,
      },
    });
  }
  console.log(`Sliders (${sliderCount}) and Best Price tiles (${bestPrices.length}) created.`);

  // -------------------------------------------------------------------------
  // Step 4: styling section — DressStyles, TopViews, Attires (with 6 images each)
  // -------------------------------------------------------------------------
  const dressStyleRows = [];
  for (const ds of dressStyles) {
    const row = await prisma.dressStyle.create({
      data: { name: ds.name, description: ds.description, videoUrl: SAMPLE_VIDEO },
    });
    dressStyleRows.push(row);
  }
  const topViewRows = [];
  for (const tv of topViews) {
    const row = await prisma.topView.create({
      data: { name: tv, imageUrl: img(tv) },
    });
    topViewRows.push(row);
  }
  // One attire per (dressStyle x topView) combo, each with 6 numbered images.
  let attireCount = 0;
  for (const ds of dressStyleRows) {
    for (const tv of topViewRows) {
      const attire = await prisma.attire.create({
        data: { dressStyleId: ds.id, topViewId: tv.id },
      });
      await prisma.attireImage.createMany({
        data: gallery(`${ds.name} - ${tv.name}`).map((url, i) => ({
          attireId: attire.id,
          position: i,
          url,
        })),
      });
      attireCount++;
    }
  }
  console.log(
    `Styling created: ${dressStyleRows.length} dress styles, ${topViewRows.length} top views, ${attireCount} attires.\n`
  );

  // -------------------------------------------------------------------------
  // Step 5: products (all under "Saree") — 6 numbered gallery images each.
  // -------------------------------------------------------------------------
  let created = 0;
  for (const p of products) {
    const fabricId = fabricMap[`Saree>${p.fabric}`];
    const typeId = typeMap[`Saree>${p.fabric}>${p.type}`];

    const product = await prisma.product.create({
      data: {
        name: p.name,
        qty: p.qty,
        price: p.price,
        shortDescription: p.shortDescription,
        // saree dimensions (cm) & shipping
        length: 550, // 5.5m including blouse piece
        width: 115,
        shiplength: 30,
        shipwidth: 25,
        shipheight: 5,
        shipweight: 0.8,
        isArchived: false,
        categoryId: sareeId,
        fabricId,
        typeId,
        patternId: patternMap[p.pattern],
        // Scalar occassionId (primary occasion) — the storefront filters on this.
        occassionId:
          p.occassions && p.occassions.length
            ? occassionMap[p.occassions[0]]
            : undefined,
        colorId: colorMap[p.color],
        blouseColorId: p.blouseColor ? colorMap[p.blouseColor] : undefined,
        palluColorId: p.palluColor ? colorMap[p.palluColor] : undefined,
        borderColorId: p.borderColor ? colorMap[p.borderColor] : undefined,
        zariColorId: p.zariColor ? colorMap[p.zariColor] : undefined,
        weaveId: p.weave ? weaveMap[p.weave] : undefined,
        weaveTypeId: p.weaveType ? weaveTypeMap[p.weaveType] : undefined,
        borderId: p.border ? borderMap[p.border] : undefined,
        palluMotifId: p.palluMotif ? palluMotifMap[p.palluMotif] : undefined,
        zariId: p.zari ? zariMap[p.zari] : undefined,
        blousePatternId: p.blousePattern ? blousePatternMap[p.blousePattern] : undefined,
        sareeMotifId: p.sareeMotif ? sareeMotifMap[p.sareeMotif] : undefined,
        buttiTypeId: p.buttiType ? buttiTypeMap[p.buttiType] : undefined,
        images: {
          create: gallery(p.name).map((url, i) => ({ position: i, url })),
        },
        description: {
          create: [
            { key: "Fabric", value: p.fabric },
            { key: "Saree Length", value: "5.5 metres (with blouse piece)" },
            { key: "Blouse Piece", value: "0.8 metre unstitched" },
            { key: "Weave", value: p.weave || "Powerloom" },
            { key: "Wash Care", value: "Dry clean only" },
            { key: "Origin", value: "India" },
          ],
        },
      },
    });

    // Link occasions via the join table (ProductOnOccasion), de-duplicated.
    for (const occ of [...new Set(p.occassions || [])]) {
      const occId = occassionMap[occ];
      if (!occId) continue;
      await prisma.productOnOccasion.create({
        data: { productId: product.id, occassionId: occId },
      });
    }

    console.log(`+ created: ${p.name}`);
    created++;
  }

  // -------------------------------------------------------------------------
  // Summary
  // -------------------------------------------------------------------------
  const [
    totalProducts,
    totalCategories,
    totalSliders,
    totalBestPrice,
    totalOccassions,
    totalImages,
  ] = await Promise.all([
    prisma.product.count(),
    prisma.category.count(),
    prisma.sliders.count(),
    prisma.bestPrice.count(),
    prisma.occassion.count(),
    prisma.image.count(),
  ]);
  console.log(
    `\nDone. products=${totalProducts} (product images=${totalImages}), categories=${totalCategories}, ` +
      `sliders=${totalSliders}, bestPrice=${totalBestPrice}, occassions=${totalOccassions}`
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
