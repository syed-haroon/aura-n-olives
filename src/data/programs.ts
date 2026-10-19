export interface Pillar {
  title: string;
  description: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Program {
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

const WELLNESS_SEQUENCE: Pillar[] = [
  {
    title: 'Assess',
    description:
      'Begin with your body composition, movement patterns, health history and daily habits, so the plan starts from where you are.',
  },
  {
    title: 'Nourish',
    description: 'Build a quantified nutrition approach around your body, goals and vegetarian lifestyle without restrictive fad diets.',
  },
  {
    title: 'Strengthen',
    description: 'Combine yoga, mobility and progressive resistance training to develop a body that is flexible, stable and strong.',
  },
  {
    title: 'Integrate',
    description: 'Turn movement, nutrition, breathwork and accountability into a sustainable routine you can carry beyond 90 days.',
  },
];

const SADHANA_PILLARS: Pillar[] = [
  {
    title: 'Guided Asana Practice',
    description: 'Live, progressive sessions that deepen alignment, mobility and confidence through consistent practice.',
  },
  {
    title: 'Pranayama',
    description: 'Daily breathwork to cultivate steadiness, energy and a calmer relationship with body and mind.',
  },
  {
    title: 'Consistent Routine',
    description: 'Five guided practice days each week, with three daily batch options that make showing up realistic.',
  },
  {
    title: 'Supported Progression',
    description: 'Personal corrections, community accountability and a clear path from foundational practice to the next level.',
  },
];

export const PROGRAMS: Program[] = [
  {
    slug: 'wellness-warrior-challenge',
    name: 'Wellness Warrior Challenge',
    shortName: 'Wellness Warrior Challenge',
    tagline: 'From Obese to Strong Yogi in 90 Days',
    category: 'Flagship Program',
    icon: 'Flame',
    accent: 'gold',
    heroDescription:
      "The flagship cohort program built on the Yogi Recomposition Method: fusing Yoga, Pranayama, Quantified Nutrition Diet & Strength Training into one 90-day system, so you finally embody the transformation you deserve.",
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
    pillars: WELLNESS_SEQUENCE,
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
        q: "Won't lifting weights make me bulky, stiff and ruin my yoga practice?",
        a: "Not at all! Flexibility and muscle strength are two different attributes, and they can absolutely co-exist in the same individual, and I am the living proof! Yoga helps improve flexibility, mobility, body awareness, and control, while lifting weight builds optimum muscle strength, supports bone health, and improves functional capacity. The secret lies in how we want to train, not in choosing one over the other. My focus with weight training is to build lean muscle mass and optimum strength for functional fitness, not to bulk up excessively. When combined with yoga, appropriate resistance training can complement your practice beautifully. After all, we don\'t just want a flexible body, we want a body that is flexible, strong, stable, and capable at every age, isn\'t it!",
      },
      {
        q: "I teach all day and manage a family, do I have time for this?",
        a: 'The program is designed in 60-minute daily blocks with family-friendly, leftover-proof meal plans, built by a mother who teaches, cooks and trains within the same real-life constraints you do.',
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
    slug: 'yoga-sadhana',
    name: 'Yoga Sadhana',
    shortName: 'Yoga Sadhana',
    tagline: 'A community of yoga teachers becoming the transformation they teach',
    category: 'Membership',
    icon: 'Users',
    accent: 'gold',
    heroDescription:
      'A three months program where the serious yoga aspirants and enthusiasts would practice yoga & pranayama which helps not only  to keep up own health at it\’s best but also acquire a skill and gets ready to be a yoga practitioner to teach yoga for others.',
    format: '3 batches daily · 60 minutes per batch · 5 days a week',
    idealFor: [
      'Graduates of the 90-Day Wellness Warrior Challenge who want to sustain their results',
      'Yoga aspirants who wants to kick start their yoga journey',
      'Anyone craving a community of like-minded, non-judgmental yoga practitioners',
      'Yoga enthusiasts who wants to level up their practice to intermediate level & above',
    ],
    painPoints: [
      'Losing momentum and old habits creeping back after a program ends',
      'Feeling isolated in a fitness or nutrition journey with no one who understands the best lifestyle',
      'Needing lighter-touch, ongoing accountability rather than another intensive program',
      'Wanting a values-led space instead of a toxic, comparison-driven fitness group',
    ],
    pillars: SADHANA_PILLARS,
    whatYouGet: [
      'Daily live yoga classes with the community',
      'Three live batches each day, with 60-minute sessions, five days a week',
      'Every batch is led personally by Reshma',
      'A private, values-led community space: kind, humble, judgment-free',
    ],
    outcomes: [
      'Sustained body composition and strength gains, month after month',
      'A genuine sense of belonging with fellow yoga teachers on the same path',
      'Continued growth in technical knowledge: anatomy, therapeutic yoga',
      'Accountability that keeps discipline a daily practice, not a 90-day sprint',
    ],
    faqs: [
      {
        q: 'Do I need to complete the 90-Day Challenge before joining?',
        a: 'No, Yoga Sadhana welcomes both graduates who want to sustain their results and newcomers who prefer a lighter, ongoing entry point over an intensive program.',
      },
      {
        q: 'What does a typical month look like?',
        a: 'Daily live classes, one community challenge, and ongoing support inside the private group, designed to fit around a full teaching schedule.',
      },
    ],
    ctaLabel: 'Join Yoga Sadhana',
    cardBlurb: 'A three months program where the serious yoga aspirants and enthusiasts would practice yoga & pranayama',
  },
];

export const getProgramBySlug = (slug: string) => PROGRAMS.find((s) => s.slug === slug);
export const getAllProgramSlugs = () => PROGRAMS.map((s) => s.slug);
