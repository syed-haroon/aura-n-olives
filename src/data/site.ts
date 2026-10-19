/** Central brand, contact and conversion links. */
export const site = {
  brandName: 'Aura & Olives',
  tagline: 'Wellness Redefined',
  founderName: 'Reshma',
  founderTitle: 'Founder & Chief Transformation Mentor',
  communityName: 'Yogi Recomposition Lab',
  methodName: 'The Yogi Recomposition Method',
  email: 'seekreshma@gmail.com',
  whatsappNumber: '918861027220',
  whatsappDisplay: '+91 88610 27220',
  instagramHandle: '@reshma_auraandolives',
  instagramUrl: 'https://www.instagram.com/reshma_auraandolives/',
  linkedinUrl: 'https://www.linkedin.com/in/reshma-a-2071253a/',
  registrationUrl: 'https://hub.auraandolives.com/web/checkout/6ad5099edd8af453d80ab85e',
  siteUrl: 'https://auraandolives.com',
  logo: '/assets/images/logo.png',
};

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
