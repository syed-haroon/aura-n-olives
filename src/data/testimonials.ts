export interface Testimonial {
  name: string;
  quote: string;
  linkedinUrl: string;
}

export const LINKEDIN_RECOMMENDATIONS_URL =
  'https://www.linkedin.com/in/reshma-a-2071253a/details/recommendations/?detailScreenTabIndex=0';

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sangeetha P L',
    quote:
      'Her yoga classes have a healing effect on the mind and body. Above all, if we face any difficulty following the plan because of stress or a physical issue, she connects with us, shares practical tips and follows up consistently.',
    linkedinUrl: 'https://www.linkedin.com/in/sangeethapl29/',
  },
  {
    name: 'Preethi Srinivassan',
    quote:
      'She motivates us to achieve results and brings confidence in ourselves. I am really happy that I started my nutrition and health journey with Reshma, and I would definitely recommend her program to anyone looking for a healthy and fit lifestyle.',
    linkedinUrl: 'https://www.linkedin.com/in/preethi-srinivassan-39a16019/',
  },
  {
    name: 'Shantika V Bhat',
    quote:
      'Reshma creates a safe and judgment-free environment, building her clients’ confidence in themselves. Her coaching is personalized and adaptable, and she fills her clients with positivity while motivating them every day to reach their goals.',
    linkedinUrl: 'https://www.linkedin.com/in/shantika-v-bhat/',
  },
];
