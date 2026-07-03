<template>
  <div id="how-it-works" class="full-bleed bg-apple-lightgray py-16 md:py-24">
    <div class="max-w-245 mx-auto px-5 text-center">
      <h2 class="text-3xl md:text-4xl font-semibold text-apple-black">
        上传，打印，搞定
      </h2>
      <p class="mt-3 text-base text-apple-gray">中间的事交给工具。</p>

      <!-- Desktop: 3 equal steps with arrows -->
      <div class="mt-12 hidden md:flex items-center justify-center max-w-3xl mx-auto">
        <!-- Step 1 -->
        <div class="flex-1 text-center px-3">
          <div
            class="mx-auto w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center text-apple-blue"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" class="icon-line">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </div>
          <h3 class="mt-5 text-base font-semibold text-apple-black">上传发票</h3>
          <p class="mt-2 text-sm text-apple-gray leading-6">
            拖入或选择文件<br />支持图片和 PDF
          </p>
        </div>

        <!-- Arrow 1 -->
        <div class="how-fly-in shrink-0 flex items-center px-1 -mt-8">
          <svg width="48" height="16" viewBox="0 0 48 16">
            <path
              d="M2 8h38M38 3l6 5-6 5"
              stroke="#d2d2d7"
              stroke-width="1.5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <!-- Step 2: Auto -->
        <div class="how-fly-in flex-1 text-center px-3">
          <div
            class="mx-auto w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center text-apple-blue"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" class="icon-line">
              <path
                d="M12 3v1m0 16v1m-8-9H3m18 0h-1M5.6 5.6l.7.7m12.1 12.1l.7.7M5.6 18.4l.7-.7M18.4 5.6l-.7.7"
              />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>
          <h3 class="mt-5 text-base font-semibold text-apple-black">自动处理</h3>
          <p class="mt-2 text-sm text-apple-gray leading-6">
            智能识别、合并<br />自动排版
          </p>
        </div>

        <!-- Arrow 2 -->
        <div class="how-fly-in shrink-0 flex items-center px-1 -mt-8">
          <svg width="48" height="16" viewBox="0 0 48 16">
            <path
              d="M2 8h38M38 3l6 5-6 5"
              stroke="#d2d2d7"
              stroke-width="1.5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <!-- Step 3 -->
        <div class="how-fly-in flex-1 text-center px-3">
          <div
            class="mx-auto w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center text-apple-blue"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" class="icon-line">
              <polyline points="6 9 6 2 18 2 18 9" />
              <path
                d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
              />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
          </div>
          <h3 class="mt-5 text-base font-semibold text-apple-black">直接打印</h3>
          <p class="mt-2 text-sm text-apple-gray leading-6">
            一键输出 A4<br />报销材料搞定
          </p>
        </div>
      </div>

      <!-- Mobile: vertical -->
      <div class="mt-10 md:hidden flex flex-col items-center max-w-xs mx-auto">
        <div v-for="(step, idx) in steps" :key="idx" class="flex flex-col items-center">
          <div class="fade-in text-center">
            <div
              class="mx-auto w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-apple-blue"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" class="icon-line" v-html="step.icon" />
            </div>
            <h3 class="mt-4 text-base font-semibold text-apple-black">{{ step.title }}</h3>
            <p class="mt-1.5 text-sm text-apple-gray">{{ step.desc }}</p>
          </div>
          <div v-if="idx < steps.length - 1" class="py-3">
            <svg width="16" height="32" viewBox="0 0 16 32">
              <path
                d="M8 2v22M3 22l5 6 5-6"
                stroke="#d2d2d7"
                stroke-width="1.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const steps = [
  {
    title: '上传发票',
    desc: '拖入或选择文件',
    icon: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
  },
  {
    title: '自动处理',
    desc: '智能识别、合并排版',
    icon: '<path d="M12 3v1m0 16v1m-8-9H3m18 0h-1M5.6 5.6l.7.7m12.1 12.1l.7.7M5.6 18.4l.7-.7M18.4 5.6l-.7.7"/><circle cx="12" cy="12" r="4"/>',
  },
  {
    title: '直接打印',
    desc: '一键输出 A4',
    icon: '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
  },
]
</script>
