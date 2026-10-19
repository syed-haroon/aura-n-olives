export interface StatPoint {
  value: string;
  date: string;
}

export interface CaseStudy {
  slug: string;
  /** Anonymized label only, never a full real name, per client consent. */
  clientLabel: string;
  headline: string;
  condition: string;
  duration: string;
  metricLabel: string;
  metricUnit: string;
  referenceRange?: string;
  before: StatPoint;
  after: StatPoint;
  changePercent: number;
  changeDirection: 'down' | 'up';
  changeIsGood: boolean;
  contextNote?: string;
  pillarsUsed: string[];
  quote: string;
  relatedServiceSlug?: string;
  cardBlurb: string;
}

export const DISCLAIMER =
  "Results are individual and vary from person to person. This is not medical advice and does not replace professional care. Always consult your physician before changing medication, diet or exercise routines.";

export const CONSENT_NOTE =
  "Shared with the client's explicit consent. Names and identifying details are anonymized to protect their privacy.";

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'thyroid-tsh-recovery',
    clientLabel: 'N.H.',
    headline: 'Yoga & mindful eating brought her thyroid back under control',
    condition: 'Hypothyroidism (elevated TSH)',
    duration: '4 weeks',
    metricLabel: 'TSH Level',
    metricUnit: 'mIU/L',
    referenceRange: '0.35 – 4.5',
    before: { value: '19.72', date: '19 Jun 2026' },
    after: { value: '6.76', date: '16 Jul 2026' },
    changePercent: 65.7,
    changeDirection: 'down',
    changeIsGood: true,
    contextNote: 'Medication dose was kept unchanged throughout, and resistance training had not yet been introduced. This shift came from yoga, breathwork and nutrition alone.',
    pillarsUsed: ['Yoga', 'Pranayama', 'Quantified Nutrition Diet'],
    quote:
      "Thyroid health responds to lifestyle. Daily yoga, pranayama and a structured anti-inflammatory diet moved numbers that medication alone had struggled to shift, and she is living proof.",
    cardBlurb: 'A 65.7% drop in TSH in 4 weeks, through yoga, pranayama and nutrition, alongside her existing medication.',
  },
];

export const getCaseStudyBySlug = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug);
export const getAllCaseStudySlugs = () => CASE_STUDIES.map((c) => c.slug);
