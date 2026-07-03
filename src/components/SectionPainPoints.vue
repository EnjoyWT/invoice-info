<template>
  <div class="full-bleed bg-apple-lightgray py-16 md:py-24">
    <div class="max-w-245 mx-auto px-5 text-center">
      <h2 class="text-3xl md:text-4xl font-semibold text-apple-black">
        报销的时候，你是不是也这样？
      </h2>
      <div class="mt-10 md:mt-14 grid gap-5 md:grid-cols-3 max-w-3xl mx-auto">
        <div
          v-for="(pain, idx) in pains"
          :key="idx"
          class="fade-in rounded-2xl bg-white p-6 shadow-sm flex gap-4 items-start"
        >
          <div
            class="shrink-0 w-10 h-10 rounded-full bg-apple-lightgray flex items-center justify-center text-apple-gray"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" class="icon-line" v-html="pain.icon" />
          </div>
          <div>
            <h3 class="text-base font-semibold text-apple-black">{{ pain.title }}</h3>
            <p class="mt-1.5 text-sm leading-6 text-apple-gray">{{ pain.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const pains = [
  {
    title: '一张发票占整张 A4',
    desc: '明明两张就能打完，非要浪费两张纸。',
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M9 15h6"/><path d="M9 11h6"/>',
  },
  {
    title: '手动排版对齐半天',
    desc: 'Word 里拖来拖去，打印出来还是歪的。',
    icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  },
  {
    title: '金额加错被退回',
    desc: '手动汇总容易出错，退回来重做。',
    icon: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  },
]
</script>
