<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5"
    @click="$emit('close')"
  >
    <div
      class="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-qr-title"
      @click.stop
    >
      <h2 id="contact-qr-title" class="text-lg font-semibold text-apple-black">
        {{ title }}
      </h2>
      <p class="mt-2 text-sm text-apple-gray">{{ description }}</p>
      <img
        src="/ljt.png"
        alt="微信二维码"
        class="mt-5 w-full rounded-xl"
      />
      <button
        type="button"
        class="tap-target mt-5 inline-flex items-center justify-center rounded-full bg-apple-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-apple-blue"
        @click="$emit('close')"
      >
        关闭
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

defineEmits(['close'])
</script>
