const { Pool } = require("pg");
const { PrismaPg } = require("@prisma/adapter-pg");
const { PrismaClient } = require("../lib/generated/client");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding El-Zoz (Zein) database...");

  // Settings
  await prisma.settings.upsert({
    where: { id: "default" },
    update: {
      heroName: "الزوز (زين)",
      heroAge: 8,
      pinCode: "zoz",
      favoriteSport: "كرة القدم والسباقات والتكسير",
      soundEnabled: true,
    },
    create: {
      id: "default",
      heroName: "الزوز (زين)",
      heroAge: 8,
      pinCode: "zoz",
      favoriteSport: "كرة القدم والسباقات والتكسير",
      soundEnabled: true,
    },
  });

  // Monster Trucks
  const trucks = [
    {
      id: "monster_1",
      name: "الوحش الكاسر 🦖",
      smashPower: 100,
      speed: 160,
      armor: 95,
      icon: "🚜",
      style: "monster",
    },
    {
      id: "monster_2",
      name: "صاروخ التدمير 🚀",
      smashPower: 90,
      speed: 195,
      armor: 80,
      icon: "🏎️",
      style: "speed",
    },
    {
      id: "monster_3",
      name: "دبابة الزوز الخارقة 💥",
      smashPower: 120,
      speed: 140,
      armor: 100,
      icon: "🚛",
      style: "tank",
    },
    {
      id: "monster_4",
      name: "شبح المهرجانات 🔥",
      smashPower: 95,
      speed: 210,
      armor: 85,
      icon: "🚗",
      style: "ghost",
    },
  ];

  for (const t of trucks) {
    await prisma.monsterTruck.upsert({
      where: { id: t.id },
      update: t,
      create: t,
    });
  }

  // Trophies
  const trophies = [
    {
      trophyCode: "GOAL_KING",
      title: "هداف العالم الذهبي ⚽",
      description: "سجلت صواريخ كروية في المقص هزت شباك الاستاد!",
      icon: "⚽",
      isUnlocked: true,
      unlockedAt: new Date(),
    },
    {
      trophyCode: "CRASH_MASTER",
      title: "مدغدغ العربيات الأول 💥",
      description: "دغدغت وشقلبت كل العربيات في حلبة الدريفت!",
      icon: "🏎️",
      isUnlocked: true,
      unlockedAt: new Date(),
    },
    {
      trophyCode: "MAHRAGAN_DJ",
      title: "دي جي الحارة وشيخ الشباب 🎛️",
      description: "شغلت سارينات ومهرجانات ولميت الجيران كلهم!",
      icon: "🎧",
      isUnlocked: true,
      unlockedAt: new Date(),
    },
    {
      trophyCode: "SMASH_CHAMP",
      title: "بطل التكسير الخارق 🔨",
      description: "كسرت الصخور والحواجز بأقوى ضربات حديدية!",
      icon: "🔨",
      isUnlocked: true,
      unlockedAt: new Date(),
    },
    {
      trophyCode: "ZOZ_LEGEND",
      title: "أسطورة الشغب والضحك 8 سنين 🦁",
      description: "أشطر وأحلى ولد مشاكس وبطل الجمهورية!",
      icon: "🔥",
      isUnlocked: true,
      unlockedAt: new Date(),
    },
    {
      trophyCode: "DADDY_HERO",
      title: "بطل بابا وحبيب قلبه 👨‍👦",
      description: "فتحت النادي السري بكلمة السر السحرية zoz!",
      icon: "👑",
      isUnlocked: true,
      unlockedAt: new Date(),
    },
  ];

  for (const tr of trophies) {
    await prisma.secretClubTrophy.upsert({
      where: { trophyCode: tr.trophyCode },
      update: tr,
      create: tr,
    });
  }

  // Goals
  await prisma.goalRecord.deleteMany({});
  await prisma.goalRecord.createMany({
    data: [
      { strikerName: "الكابتن زين (الزوز) ⚽", goalType: "صاروخ في 90 في المقص 🚀", speedKmh: 135, stadium: "استاد الزوز الدولي 🏟️" },
      { strikerName: "الكابتن زين (الزوز) ⚽", goalType: "دبل كيك خرافي عالمي 🤸", speedKmh: 120, stadium: "نهائي كأس العالم 🏆" },
      { strikerName: "الكابتن زين (الزوز) ⚽", goalType: "بانينكا من فوق الحارس 🎯", speedKmh: 95, stadium: "دوري الأبطال 🌟" },
    ],
  });

  // Chants
  await prisma.voiceChant.deleteMany({});
  await prisma.voiceChant.createMany({
    data: [
      { title: "هتاف الجماهير", chantAr: "الزوز جه والكل يوسع! هدااااف الحتة جه يا جدعان!", chantEn: "Superstar Zoz is in the stadium! Goal King!", soundType: "stadium" },
      { title: "هدف تاريخي", chantAr: "جوووووووووووووول يا زوووووز! هدف صاروخي لا يصد ولا يرد!", chantEn: "GOOOOOAL for Zoz! What a sensational strike!", soundType: "goal" },
      { title: "تكسير ودغدغة", chantAr: "دغدغ وكسر يا زوز.. مفيش فرامل ولا رحمة النهاردة!", chantEn: "Smash and crash Zoz! Total demolition!", soundType: "crash" },
      { title: "رسالة بابا", chantAr: "يا زوز يا بطل.. بابا بيحبك وفخور بيك يا أرجل ولد في الدنيا!", chantEn: "Daddy is so proud of you, Champion Zoz! You rock!", soundType: "dad" },
    ],
  });

  console.log("Seeding for El-Zoz finished successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
