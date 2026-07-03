<template>
  <section id="features" class="py-16 md:py-24">
    <div class="max-w-245 mx-auto px-5 text-center">
      <h2 class="text-3xl md:text-4xl font-semibold text-apple-black">
        你需要的能力，全在这里
      </h2>
      <div class="mt-10 md:mt-14 grid gap-10 md:grid-cols-2 max-w-3xl mx-auto">
        <div
          v-for="(feat, idx) in features"
          :key="idx"
          class="fade-in flex gap-4 text-left"
        >
          <div
            class="shrink-0 w-12 h-12 rounded-2xl bg-apple-lightgray flex items-center justify-center text-apple-gray"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              class="icon-line"
              v-html="feat.icon"
            />
          </div>
          <div>
            <h3 class="text-base font-semibold text-apple-black">
              {{ feat.title }}
            </h3>
            <p class="mt-1.5 text-sm leading-6 text-apple-gray">
              {{ feat.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: "智能合并排版",
    desc: "自动将两张发票整齐排列在一张 A4 上，无需手动调整。",
    icon: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  },
  {
    title: "精准 OCR 识别",
    desc: "自研识别模型，精准提取发票金额、日期、号码等关键信息。",
    icon: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>',
  },
  {
    title: "金额自动统计",
    desc: "合并金额自动汇总，报销单数字一目了然。",
    icon: '<path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>',
  },
  {
    title: "多格式兼容",
    desc: "覆盖常见发票和出行票据版式，特殊样式持续补齐。",
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
  },
];
</script>
