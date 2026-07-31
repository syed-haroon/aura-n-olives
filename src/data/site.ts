/**
 * Central brand/contact config.
 * ⚠️ TODO before launch: replace whatsappNumber and instagramHandle with the real ones.
 */
export const site = {
  brandName: 'Aura & Olives',
  tagline: 'Wellness Redefined',
  founderName: 'Reshma',
  founderTitle: 'Founder & Chief Transformation Mentor',
  communityName: 'Yogi Recomposition Lab',
  methodName: 'The Yogi Recomposition Method',
  email: 'seekreshma@gmail.com',
  whatsappNumber: '918861027220',
  // TODO: replace with real Instagram handle
  instagramHandle: '@auraandolives',
  instagramUrl: 'https://instagram.com/auraandolives',
  siteUrl: 'https://auraandolives.com',
  logo: '/assets/images/logo.png',
};

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
