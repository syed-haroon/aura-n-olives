# Aura & Olives paid-social poster set

Eight PNG exports are in `exports/`: four 1080 x 1350 feed posters and four 1080 x 1920 Stories adaptations. Matching editable SVGs are in `editable/`. `comparison.png` is the labelled overview. Run `node campaigns/2026-10-social/build.mjs` from the repository root to regenerate exports after editing the source.

The SVGs contain editable text and embedded project photography/logo. The original logo has not been redrawn. Photography is proportionally cropped, not stretched. For Stories, essential copy is kept above the lower overlay area; verify placement-specific safe zones and the native CTA in the intended Meta Ads Manager setup before launch, since Meta's current placement guide was not accessible without login during production. No CTA button is drawn in the artwork.

## Captions and destinations

| Creative | Caption | Destination |
| --- | --- | --- |
| Challenge A | Wellness Warrior Challenge combines yoga, pranayama, quantified nutrition guidance and strength training in a 90-day online cohort. Explore the approach and send an enquiry from the program page. | https://auraandolives.com/programs/wellness-warrior-challenge |
| Challenge B | The 90-day Wellness Warrior Challenge includes asana feedback and a week-by-week yoga, mobility and strength plan. See how the cohort works. | https://auraandolives.com/programs/wellness-warrior-challenge |
| Sadhana A | Yoga Sadhana offers live 60-minute classes five days a week, with three daily batch options led by Reshma. Explore the schedule and send an enquiry. | https://auraandolives.com/programs/yoga-sadhana/ |
| Sadhana B | Practise yoga and pranayama with Reshma in a supportive online community. Explore Yoga Sadhana and ask for details. | https://auraandolives.com/programs/yoga-sadhana/ |

Proposed native CTA: **Learn More**. The pages lead to an enquiry/WhatsApp flow, not a completed checkout. Confirm availability in the actual campaign setup; no campaign has been published.

## Source details to resolve

- `src/data/programs.ts`: Challenge `format` says "Weekly live sessions + self-paced modules" while `whatYouGet` says "Daily live yoga sessions" and a FAQ refers to "60-minute daily blocks". Frequency is intentionally absent from the ad copy.
- `src/data/programs.ts`: Yoga Sadhana is categorised as "Membership" and its FAQ calls it an "ongoing entry point", while the hero and card blurb call it a "three months program". Duration/commitment is intentionally absent from the ad copy.

## Destination-page claims to review before ads launch

- Challenge tagline: "From Obese to Strong Yogi in 90 Days". This reads as a time-bound physical result and labels a health/body state.
- Challenge audience and pain-point copy repeatedly addresses obesity, "skinny fat", belly fat, body-consciousness and professional credibility tied to appearance. Review for sensitive personal-attribute implications and body-shaming tone.
- Challenge outcomes include "ending obesity or skinny fat for good" and a transformed body becoming a teacher's "strongest marketing". These are strong, unsupported outcome claims.
- Challenge FAQ says "Most students recover the cost" through students and credibility. Review substantiation before paid promotion.
- Challenge FAQ discusses post-partum prolapse and hiatus hernia and says the method is built to work with those conditions. Review clinical substantiation and eligibility/safety language.
- Yoga Sadhana outcomes promise "Sustained body composition and strength gains, month after month"; hero language says practice keeps health "at its best". Review these claims for substantiation.

This is a creative handoff, not a guarantee of Meta ad approval. The site itself was not edited.
