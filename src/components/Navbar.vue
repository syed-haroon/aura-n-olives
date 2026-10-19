<template>
  <nav
    id="navbar"
    class="fixed top-0 left-0 right-0 z-50 nav-blur bg-cream-50/85 border-b border-forest-900/10"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
      <a href="/" class="flex items-center gap-3 shrink-0">
        <span class="relative h-12 w-12 sm:h-[68px] sm:w-[68px]">
          <img :src="logo" alt="Aura & Olives logo" class="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 sm:h-24 sm:w-24 max-w-none object-contain" />
        </span>
        <span class="leading-tight">
          <span class="block font-display text-xl sm:text-2xl font-700 text-forest-900">Aura &amp; Olives</span>
          <span class="block text-[10px] sm:text-xs tracking-[0.15em] uppercase text-gold-600">Wellness Redefined</span>
        </span>
      </a>

      <div class="hidden md:flex items-center gap-8 text-sm font-500">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="border-b-2 pb-1 transition-colors"
          :class="isActive(link.href) ? 'border-gold-500 font-700 text-gold-600' : 'border-transparent text-forest-800 hover:text-gold-600'"
          :aria-current="isActive(link.href) ? 'page' : undefined"
        >
          {{ link.label }}
        </a>
      </div>

      <div class="flex items-center gap-2 sm:gap-3">
        <a
          :href="waLink"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden sm:inline-flex items-center gap-2 bg-forest-900 hover:bg-forest-800 text-cream-50 text-sm font-600 px-4 py-2.5 rounded-full transition-colors"
        >
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
          </svg>
          <span>Chat on WhatsApp</span>
        </a>

        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest-900/15 bg-white text-forest-900 shadow-sm md:hidden"
          aria-controls="mobile-menu"
          :aria-expanded="isMenuOpen.toString()"
          aria-label="Open navigation"
          @click="openMenu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-5 w-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <div id="mobile-menu" class="fixed inset-0 z-40" :class="{ hidden: !isMenuOpen }">
    <div class="absolute inset-0 bg-forest-950/50 backdrop-blur-sm" @click="closeMenu"></div>
    <div class="relative ml-auto flex h-full w-[85vw] max-w-sm flex-col overflow-y-auto bg-cream-50 px-6 py-6 shadow-2xl">
      <div class="flex items-center justify-between">
        <a href="/" class="flex items-center gap-2.5" @click="closeMenu">
          <img :src="logo" alt="Aura & Olives logo" class="h-11 w-11 rounded-full object-cover" />
          <span class="font-display text-lg font-700 text-forest-900">Aura &amp; Olives</span>
        </a>
        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest-900/15 bg-white text-forest-900"
          aria-label="Close navigation"
          @click="closeMenu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-5 w-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <nav class="mt-10 flex flex-col gap-5 text-base font-500">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="flex items-center gap-2.5"
          :class="isActive(link.href) ? 'font-700 text-gold-600' : 'text-forest-900 hover:text-gold-600'"
          :aria-current="isActive(link.href) ? 'page' : undefined"
          @click="closeMenu"
        >
          <span v-if="isActive(link.href)" class="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden="true"></span>
          {{ link.label }}
        </a>
      </nav>

      <div class="mt-8">
        <a
          :href="waLink"
          target="_blank"
          rel="noopener noreferrer"
          class="block w-full rounded-full bg-forest-900 px-4 py-3 text-center text-sm font-600 text-cream-50 hover:bg-forest-800"
          @click="closeMenu"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { site, buildWhatsAppLink } from '../data/site';

const props = defineProps({
  currentPath: { type: String, default: '' },
});

const logo = site.logo;
const waLink = buildWhatsAppLink(`Hi Reshma, I'm interested in ${site.brandName}, could you tell me more?`);

const navLinks = [
  { href: '/programs', label: 'Programs' },
  { href: '/results', label: 'Results' },
  { href: '/about', label: 'About' },
  { href: '/#faq', label: 'FAQ' },
];

// "/#faq" is an anchor on the homepage, not its own route, so it never shows as active.
const isActive = (href) => {
  if (href.startsWith('/#')) return false;
  const path = props.currentPath || '/';
  return path === href || path.startsWith(`${href}/`);
};

const isMenuOpen = ref(false);

const openMenu = () => {
  isMenuOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
};
</script>
