<template>
  <a
    :href="waLink"
    target="_blank"
    rel="noopener noreferrer"
    class="wa-pulse fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <svg viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.14.82.84-3.06-.19-.31a8.19 8.19 0 0 1-1.25-4.34c0-4.53 3.7-8.22 8.24-8.22 2.2 0 4.27.86 5.82 2.42a8.16 8.16 0 0 1 2.41 5.81c0 4.54-3.7 8.21-8.23 8.21Zm4.51-6.16c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.36-.77-1.86-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.08 0 1.22.89 2.41 1.02 2.58.12.16 1.76 2.69 4.27 3.77.6.26 1.06.41 1.43.53.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.67-1.17.2-.58.2-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  </a>
</template>

<script setup>
import { buildWhatsAppLink, site } from '../data/site';

const waLink = buildWhatsAppLink(`Hi Reshma, I'm interested in ${site.brandName}, could you tell me more?`);
</script>
