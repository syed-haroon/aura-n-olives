<template>
  <transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="opacity-0 translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="open"
      class="absolute left-1/2 -translate-x-1/2 bottom-4 z-10 flex items-center gap-2 rounded-full bg-forest-900 text-cream-50 text-xs font-500 px-4 py-2.5 shadow-lg"
    >
      <span>Opening WhatsApp…</span>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  open: { type: Boolean, default: false },
});
</script>
