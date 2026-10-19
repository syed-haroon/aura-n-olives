export interface Pillar {
  title: string;
  description: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  icon: string;
  accent: 'gold' | 'olive' | 'forest';
  heroDescription: string;
  format: string;
  idealFor: string[];
  painPoints: string[];
  pillars: Pillar[];
  whatYouGet: string[];
  outcomes: string[];
  faqs: Faq[];
  ctaLabel: string;
  cardBlurb: string;
}

const FUSION_PILLARS: Pillar[] = [
  {
    title: 'Yoga',
    description:
      'Classical asana practice rooted in BKS Iyengar & Krishnamacharya lineage: precise alignment, not just movement.',
  },
  {
    title: 'Pranayama',
    description: 'Breathwork for metabolism, energy and nervous-system recovery: the bridge between body and stillness.',
  },
  {
    title: 'Quantified Nutrition Diet',
    description: 'Real macros, real gut science, vegetarian-friendly. No fad diets, no satvik-only guesswork.',
  },
  {
    title: 'Strength Training',
    description: 'Weights integrated with asana, because a strong yogi is a safe yogi.',
  },
];

export const SERVICES: Service[] = [
  {
    slug: 'wellness-warrior-challenge',
    name: 'Wellness Warrior Challenge',
    shortName: 'Wellness Warrior Challenge',
    tagline: 'From Obese to Strong Yogi in 90 Days',
    category: 'Flagship Program',
    icon: 'Flame',
    accent: 'gold',
    heroDescription:
      "The flagship cohort program built on the Yogi Recomposition Method: fusing Yoga, Pranayama, Quantified Nutrition Diet & Strength Training into one 90-day system, so you finally embody the transformation you teach.",
    format: '90-day cohort · Online · Weekly live sessions + self-paced modules',
    idealFor: [
      'Yoga teachers who feel their body no longer matches their credentials',
      'Yoga aspirants, enthusiasts preparing for TTC who want to walk in strong, not body-conscious',
      'Teachers dealing with obesity, "skinny fat", inflexibility or low strength',
      'Anyone who has tried diets and generic fitness plans that ignored their yogic lifestyle',
    ],
    painPoints: [
      'Belly fat or a "skinny fat" physique despite teaching yoga daily',
      "Can't confidently demonstrate arm balances, inversions or strength-based asanas",
      'Stiffness, low stamina, or pelvic floor weakness',
      'Confusion between fad diets, and real nutrition science',
      'The quiet fear that an unfit body is costing credibility, students and income',
    ],
    pillars: FUSION_PILLARS,
    whatYouGet: [
      'Daily live yoga sessions',
      'A personalized quantified-nutrition plan built for a vegetarian, yogic lifestyle',
      'A structured strength training + mobility + asana program, sequenced week by week',
      'Asana correction feedback so your practice gets safer, not just harder',
      'Private community access with fellow yoga teachers on the same path',
      'Before/after body-composition tracking so progress is measured, not guessed',
    ],
    outcomes: [
      'Achieve your ideal body composition, ending obesity or skinny fat for good',
      'Build the strength and mobility to perform advanced asanas confidently',
      'Master quantified nutrition diet so you eat with clarity, not confusion, for life',
      'Elevate your teaching authority with deeper anatomy and correction skills',
      'Restore the energy, confidence and presence your students already look up to',
      'Grow your yoga career, as your transformed body becomes your strongest marketing',
    ],
    faqs: [
      {
        q: "Won't lifting weights make me stiff and ruin my yoga practice?",
        a: "This is the #1 myth we bust on day one. Strength training done right makes your asanas safer and more stable. Even BKS Iyengar built strength through props and resistance. You'll get more flexible, not less.",
      },
      {
        q: "I teach all day and manage a family, do I have time for this?",
        a: 'The program is designed in 45-minute daily blocks with family-friendly, leftover-proof meal plans, built by a mother who teaches, cooks and trains within the same real-life constraints you do.',
      },
      {
        q: "I've tried diets before and nothing worked. Why would this be different?",
        a: "Because this isn't a restrictive diet. It's quantified nutrition diet education. You'll learn the actual science of macros and gut health so you can eat with clarity for life, not just for 90 days.",
      },
      {
        q: 'Can I really do this post-delivery, or with a health condition like prolapse or hernia?',
        a: "Reshma's own transformation happened through post-partum pelvic prolapse and a hiatus hernia. The method is built to work with these conditions, not around them, always with medical clearance where needed.",
      },
      {
        q: 'Is this worth the investment?',
        a: 'Think of it as investing in your professional asset: your body is your business card as a yoga teacher. Most students recover the cost through the students and credibility they gain.',
      },
    ],
    ctaLabel: 'Join the Challenge',
    cardBlurb: 'The signature 90-day cohort that fuses Yoga, Pranayama, Nutrition & Strength training into one system.',
  },
  {
    slug: 'membership-community',
    name: 'Yogi Recomposition Lab',
    shortName: 'Membership Community',
    tagline: 'A community of yoga teachers becoming the transformation they teach',
    category: 'Membership',
    icon: 'Users',
    accent: 'gold',
    heroDescription:
      'A monthly membership for yoga teachers and aspirants who want ongoing support, live classes and accountability: a home base to sustain the transformation, not just start it.',
    format: 'Monthly membership · Live weekly classes · Nutrition audits · Monthly challenges',
    idealFor: [
      'Graduates of the 90-Day Challenge who want to sustain their results',
      'Teachers who want a lower-commitment way to start their transformation journey',
      'Anyone craving a community of like-minded, non-judgmental yoga teachers',
      'Teachers who do better with ongoing accountability than a one-time program',
    ],
    painPoints: [
      'Losing momentum and old habits creeping back after a program ends',
      'Feeling isolated in a fitness or nutrition journey with no one who understands the yogic lifestyle',
      'Needing lighter-touch, ongoing accountability rather than another intensive program',
      'Wanting a values-led space instead of a toxic, comparison-driven fitness group',
    ],
    pillars: FUSION_PILLARS,
    whatYouGet: [
      'Daily live yoga classes with the community',
      'A monthly nutrition audit to keep quantified eating on track',
      'A fresh mini-challenge every month to keep momentum alive',
      'A private, values-led community space: kind, humble, judgment-free',
    ],
    outcomes: [
      'Sustained body composition and strength gains, month after month',
      'A genuine sense of belonging with fellow yoga teachers on the same path',
      'Continued growth in technical knowledge: nutrition, anatomy, therapeutic yoga',
      'Accountability that keeps discipline a daily practice, not a 90-day sprint',
    ],
    faqs: [
      {
        q: 'Do I need to complete the 90-Day Challenge before joining?',
        a: 'No, the Collective welcomes both graduates who want to sustain their results and newcomers who prefer a lighter, ongoing entry point over an intensive program.',
      },
      {
        q: 'What does a typical month look like?',
        a: 'Daily live classes, one nutrition audit, one community challenge, and ongoing support inside the private group, designed to fit around a full teaching schedule.',
      },
    ],
    ctaLabel: 'Join the Collective',
    cardBlurb: 'Ongoing live classes, nutrition audits and community to sustain your transformation.',
  },
];

export const getServiceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
export const getAllServiceSlugs = () => SERVICES.map((s) => s.slug);
