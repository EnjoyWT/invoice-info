<template>
  <div
    ref="navWrap"
    class="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500"
    :class="scrolled ? 'py-3 px-6' : 'py-4 px-6'"
  >
    <div
      class="flex items-center justify-between w-full transition-all duration-500 ease-in-out"
      :class="scrolled
        ? 'max-w-180 h-12 px-7 rounded-full bg-white/82 backdrop-blur-xl border border-black/6 shadow-md'
        : 'max-w-300 h-12 px-7 rounded-none bg-transparent border border-transparent shadow-none'"
    >
      <div class="text-base font-semibold tracking-tight text-apple-black">
        发票合并
      </div>
      <div class="hidden md:flex items-center transition-all duration-500" :class="scrolled ? 'gap-6' : 'gap-8'">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-base font-semibold text-apple-black opacity-85 hover:opacity-100 transition-opacity"
        >
          {{ link.label }}
        </a>
      </div>
      <a
        href="https://fp.yoloxy.com"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center rounded-full bg-apple-black text-white whitespace-nowrap font-medium transition-all duration-500"
        :class="scrolled
          ? 'px-5 h-9 text-sm'
          : 'px-5 h-9 text-base'"
      >
        免费使用
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navLinks = [
  { label: '产品功能', href: '#features' },
  { label: '使用方式', href: '#how-it-works' },
  { label: '定价', href: '#pricing' },
  { label: '其他产品', href: '#other-products' },
]

const scrolled = ref(false)
const navWrap = ref(null)

let ticking = false

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      scrolled.value = window.scrollY > 60
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
