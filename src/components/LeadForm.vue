<template>
  <div class="fade-in relative bg-white rounded-2xl border border-forest-900/10 shadow-soft overflow-hidden">
    <div class="hero-bg p-5">
      <h3 class="font-display text-lg font-700 text-cream-50">{{ heading }}</h3>
      <p class="text-cream-200/80 text-xs mt-1">{{ subheading }}</p>
    </div>

    <form @submit.prevent="submitForm" class="p-5 space-y-3" novalidate>
      <div>
        <input
          v-model.trim="form.name"
          type="text"
          name="name"
          placeholder="Your Name"
          :aria-invalid="Boolean(errors.name)"
          class="w-full border border-forest-900/15 bg-cream-100/60 text-forest-900 placeholder-forest-500/60 rounded-xl px-4 py-3 text-sm"
          @input="errors.name = ''"
        />
        <p v-if="errors.name" class="mt-1 text-xs text-red-500">{{ errors.name }}</p>
      </div>
      <div>
        <input
          v-model.trim="form.phone"
          type="tel"
          name="phone"
          placeholder="Phone / WhatsApp Number"
          :aria-invalid="Boolean(errors.phone)"
          class="w-full border border-forest-900/15 bg-cream-100/60 text-forest-900 placeholder-forest-500/60 rounded-xl px-4 py-3 text-sm"
          @input="errors.phone = ''"
        />
        <p v-if="errors.phone" class="mt-1 text-xs text-red-500">{{ errors.phone }}</p>
      </div>
      <select
        v-model="form.role"
        name="role"
        class="w-full border border-forest-900/15 bg-cream-100/60 text-forest-800 rounded-xl px-4 py-3 text-sm"
      >
        <option value="">I am a…</option>
        <option>Certified Yoga Teacher</option>
        <option>Yoga Teacher Trainee / Aspirant</option>
        <option>Serious Yoga Practitioner</option>
        <option>Other</option>
      </select>
      <input
        v-if="form.role === 'Other'"
        v-model.trim="form.roleOther"
        type="text"
        name="roleOther"
        placeholder="Tell us a bit more (optional)"
        class="w-full border border-forest-900/15 bg-cream-100/60 text-forest-900 placeholder-forest-500/60 rounded-xl px-4 py-3 text-sm"
      />
      <textarea
        v-model.trim="form.message"
        name="message"
        placeholder="Anything specific you'd like to ask?"
        rows="2"
        class="w-full border border-forest-900/15 bg-cream-100/60 text-forest-900 placeholder-forest-500/60 rounded-xl px-4 py-3 text-sm resize-none"
      ></textarea>

      <button
        type="submit"
        class="w-full bg-gold-500 hover:bg-gold-600 text-forest-950 font-700 py-3 rounded-xl transition-colors text-sm"
      >
        {{ ctaLabel }} →
      </button>
    </form>

    <SuccessToast :open="showToast" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { buildWhatsAppLink } from '../data/site';
import SuccessToast from './SuccessToast.vue';

const props = defineProps({
  context: { type: String, default: 'Aura & Olives' },
  heading: { type: String, default: 'Ready to begin?' },
  subheading: { type: String, default: "Tell us a bit about you. Reshma's team replies personally." },
  ctaLabel: { type: String, default: 'Send on WhatsApp' },
});

const form = ref({ name: '', phone: '', role: '', roleOther: '', message: '' });
const errors = ref({ name: '', phone: '' });
const showToast = ref(false);
let toastTimer = null;
const phonePattern = /^[0-9+\-\s]{8,}$/;

const roleLine = computed(() => {
  if (!form.value.role) return '-';
  if (form.value.role === 'Other' && form.value.roleOther) return `Other (${form.value.roleOther})`;
  return form.value.role;
});

const waLink = computed(() => {
  const lines = [
    `Hi Reshma, I'm interested in *${props.context}*.`,
    '',
    `Name: ${form.value.name || '-'}`,
    `Phone: ${form.value.phone || '-'}`,
    `I am: ${roleLine.value}`,
    `Message: ${form.value.message || '-'}`,
  ];
  return buildWhatsAppLink(lines.join('\n'));
});

const validateForm = () => {
  errors.value.name = form.value.name ? '' : 'Please enter your name.';
  if (!form.value.phone) {
    errors.value.phone = 'Please enter your phone number.';
  } else if (!phonePattern.test(form.value.phone)) {
    errors.value.phone = 'Please enter a valid phone number.';
  } else {
    errors.value.phone = '';
  }
  return !errors.value.name && !errors.value.phone;
};

const submitForm = () => {
  if (!validateForm()) return;

  showToast.value = true;
  window.open(waLink.value, '_blank', 'noopener,noreferrer');
  form.value = { name: '', phone: '', role: '', roleOther: '', message: '' };

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    showToast.value = false;
  }, 3000);
};
</script>
