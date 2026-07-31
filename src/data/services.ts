export interface Pillar {
  title: string;
  description: string;
}

export interface CurriculumPhase {
  phase: string;
  items: string[];
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
  curriculum?: CurriculumPhase[];
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
    description: 'Weights, Pilates and mobility drills integrated with asana, because a strong yogi is a safe yogi.',
  },
];

export const SERVICES: Service[] = [
  {
    slug: '90-day-transformation-challenge',
    name: 'The 90-Day Transformation Challenge',
    shortName: '90-Day Challenge',
    tagline: 'From Skinny Fat to Strong Yogi in 90 Days',
    category: 'Flagship Program',
    icon: 'Flame',
    accent: 'gold',
    heroDescription:
      "The flagship cohort program built on the Yogi Recomposition Method: fusing Yoga, Pranayama, Quantified Nutrition Diet & Strength Training into one 90-day system, so you finally embody the transformation you teach.",
    format: '90-day cohort · Online · Weekly live sessions + self-paced modules',
    idealFor: [
      'Yoga teachers who feel their body no longer matches their credentials',
      'Yoga aspirants preparing for TTC who want to walk in strong, not self-conscious',
      'Teachers dealing with obesity, "skinny fat", inflexibility or low strength',
      'Anyone who has tried diets and generic fitness plans that ignored their yogic lifestyle',
    ],
    painPoints: [
      'Belly fat or a "skinny fat" physique despite teaching yoga daily',
      "Can't confidently demonstrate arm balances, inversions or strength-based asanas",
      'Stiffness, low stamina, or pelvic floor weakness that yoga alone hasn\'t fixed',
      'Confusion between fad diets, "satvik-only" beliefs, and real nutrition science',
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
    curriculum: [
      {
        phase: 'Awareness',
        items: ['Body Decoded', 'Skinny Fat Truth', 'Anatomy Awakening', 'Movement Mechanics'],
      },
      {
        phase: 'Fuel',
        items: ['Nutrition Numbers', 'Gut Wisdom', 'Protein Power', 'Meal Mastery'],
      },
      {
        phase: 'Train',
        items: ['Strength Foundations', 'Weights Meet Yoga', 'Pilates Fusion', 'Mobility Magic', 'Fat-Burn Vinyasa'],
      },
      {
        phase: 'Heal',
        items: ['Breath Metabolism', 'Hormone Harmony', 'Core Restore', 'Therapeutic Touch'],
      },
      {
        phase: 'Master',
        items: ['Habit Architecture', 'Mirror Mindset', 'Track Transform', 'Ninety-Day Blueprint'],
      },
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
    cardBlurb: 'The signature 90-day cohort that fuses Yoga, Pranayama, Nutrition & Strength into one system.',
  },
  {
    slug: 'private-mentorship',
    name: '1:1 Private Mentorship',
    shortName: 'Private Mentorship',
    tagline: 'Personal, high-touch guidance for your exact body and life',
    category: 'Private Coaching',
    icon: 'HeartHandshake',
    accent: 'olive',
    heroDescription:
      'For yoga teachers who want the Yogi Recomposition Method built entirely around them: their body, their health history, their schedule, with direct, personal access to Reshma every step of the way.',
    format: '3 or 6-month private mentorship · 1-on-1 video calls · Direct WhatsApp access',
    idealFor: [
      'Teachers with a specific health history (prolapse, hernia, thyroid, PCOS) needing a tailored protocol',
      'Teachers who want the fastest, most individualized results',
      'Senior teachers or studio owners who want discretion and undivided attention',
      'Anyone who has outgrown group programs and wants a dedicated mentor',
    ],
    painPoints: [
      'A body story that feels too complex or specific for a group program',
      'Wanting direct access to ask questions in real time, not wait for a weekly call',
      'Needing a plan that bends around an unpredictable teaching and travel schedule',
      'Wanting privacy while working through a sensitive health or body-image journey',
    ],
    pillars: FUSION_PILLARS,
    whatYouGet: [
      'A private onboarding assessment covering body composition, health history and goals',
      'A fully custom Yoga + Strength Training + Nutrition plan, rebuilt as you progress',
      'Weekly private 1:1 video calls with Reshma',
      'Direct WhatsApp access for real-time questions and form checks',
      'Therapeutic protocols for specific conditions like prolapse, hernia or thyroid',
    ],
    outcomes: [
      'A body composition and strength plan built only for you',
      'Faster, more precise results than a group format allows',
      'Confidence to manage your specific health condition through movement, not despite it',
      'A direct mentor relationship for ongoing accountability',
    ],
    faqs: [
      {
        q: 'How is this different from the 90-Day Challenge?',
        a: 'The Challenge is a structured cohort program with a set curriculum. Private Mentorship is fully custom: your plan, pace and check-ins are rebuilt around you, with direct 1:1 access.',
      },
      {
        q: 'Do I need to have done the 90-Day Challenge first?',
        a: 'No, many private mentorship clients start here directly, especially if they have a specific condition or prefer one-on-one attention from day one.',
      },
      {
        q: 'How much access do I really get?',
        a: "Weekly video calls plus direct WhatsApp access between sessions for quick questions, form checks and accountability nudges. This is a genuinely personal mentorship, not a course with your name on it.",
      },
      {
        q: 'What if I have a complex medical history?',
        a: "Share it during your onboarding assessment. Reshma's own healing journey through pelvic prolapse and hiatus hernia shapes how she builds therapeutic, condition-aware protocols.",
      },
    ],
    ctaLabel: 'Apply for Mentorship',
    cardBlurb: 'A fully personalized version of the method, with direct 1:1 access.',
  },
  {
    slug: 'certification-program',
    name: 'Yogi Recomposition Method™ Certification',
    shortName: 'Certification',
    tagline: 'Become certified to teach the method that transformed you',
    category: 'Certification',
    icon: 'BadgeCheck',
    accent: 'forest',
    heroDescription:
      "For certified yoga teachers ready to go deeper than any generic training: a certification in the Yogi Recomposition Method so you can teach body recomposition science to your own students, and open a new stream of income and authority.",
    format: '8-week certification · Online modules + live practicum · For certified yoga teachers',
    idealFor: [
      'Certified yoga teachers who want to stand out from generalist instructors',
      'Studio owners who want to offer body-transformation programs under their own brand',
      'Teachers who have completed (or are completing) their own transformation and want to teach it',
      "Yoga trainers who want to master anatomy, biomechanics and nutrition at a technical level",
    ],
    painPoints: [
      'Feeling like "just another yoga teacher" in a crowded, look-alike market',
      "Wanting a second income stream that doesn't mean teaching more back-to-back classes",
      "Knowing the asanas but not fully understanding the anatomy or biomechanics behind them",
      'Wanting a credential that reflects real technical depth, not a weekend workshop',
    ],
    pillars: FUSION_PILLARS,
    whatYouGet: [
      'The complete Yogi Recomposition Method training manual and frameworks',
      'Deep-dive modules on anatomy, biomechanics and asana-to-muscle mapping',
      'Correction and assessment protocols to safely coach body recomposition',
      'A licensed certification to teach the method to your own students',
      'Ongoing access to a mentor community of certified practitioners',
    ],
    outcomes: [
      'A recognized certification that elevates you above generalist yoga instructors',
      'The technical skill to explain exactly which asana works which part of the body',
      'A ready-to-teach curriculum you can offer under your own studio or brand',
      'Positioning as a "teacher of teachers" in your local or online yoga community',
    ],
    curriculum: [
      {
        phase: 'Foundations',
        items: ['Anatomy Awakening', 'Movement Mechanics', 'Asana Mapping', 'Fix Your Asana'],
      },
      {
        phase: 'Science',
        items: ['Nutrition Numbers', 'Gut Wisdom', 'Hormone Harmony', 'Breath Metabolism'],
      },
      {
        phase: 'Practicum',
        items: ['Strength Foundations', 'Weights Meet Yoga', 'Therapeutic Touch', 'Injury-Proof Yogi'],
      },
      {
        phase: 'Teaching the Method',
        items: ['Coaching Frameworks', 'Client Assessment', 'Building Your Own Cohort', 'Certification Practicum'],
      },
    ],
    faqs: [
      {
        q: 'Do I need to be a certified yoga teacher to join?',
        a: 'Yes, this certification builds on an existing yoga teaching foundation (200hr/500hr TTC or equivalent) and goes deeper into body recomposition science.',
      },
      {
        q: 'Can I actually use this to earn?',
        a: 'Yes, certified graduates are licensed to teach the Yogi Recomposition Method framework to their own students, whether in a studio, online, or as a specialised offering.',
      },
      {
        q: 'Is this theory-heavy or practical?',
        a: "Both. You'll go deep into anatomy and biomechanics, but the certification closes with a live practicum where you actually coach using the method under guidance.",
      },
    ],
    ctaLabel: 'Apply for Certification',
    cardBlurb: 'Get certified in the method and start teaching body recomposition to your own students.',
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
      {
        q: 'Can I cancel anytime?',
        a: 'Yes, it is a monthly membership with no long-term lock-in. Most members choose to stay for the community and consistency, not because they have to.',
      },
    ],
    ctaLabel: 'Join the Collective',
    cardBlurb: 'Ongoing live classes, nutrition audits and community to sustain your transformation.',
  },
];

export const getServiceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
export const getAllServiceSlugs = () => SERVICES.map((s) => s.slug);
