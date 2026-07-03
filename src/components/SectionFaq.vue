<template>
  <div class="full-bleed bg-apple-lightgray py-16 md:py-24">
    <div class="max-w-245 mx-auto px-5">
      <h2 class="text-3xl md:text-4xl font-semibold text-apple-black text-center">
        常见问题
      </h2>
      <div class="mt-10 md:mt-14 max-w-2xl mx-auto space-y-0">
        <details
          v-for="(faq, idx) in faqs"
          :key="idx"
          class="faq-item group border-b border-black/10"
        >
          <summary
            class="flex items-center justify-between py-5 text-base font-medium text-apple-black cursor-pointer"
          >
            {{ faq.q }}
            <span class="faq-arrow text-2xl text-apple-gray font-light ml-4">+</span>
          </summary>
          <div class="pb-5 text-sm text-apple-gray leading-6">{{ faq.a }}</div>
        </details>
      </div>
    </div>
  </div>
</template>

<script setup>
const faqs = [
  {
    q: '支持哪些发票格式？',
    a: '目前已适配常见增值税发票、电子发票、行程单、车票等版式；遇到特殊样式，也会继续补齐兼容。',
  },
  {
    q: 'OCR 识别准确率怎么样？',
    a: '自研 OCR 模型针对发票场景优化，关键字段（金额、发票号码、日期）识别准确率超过 98%。',
  },
  {
    q: '免费版和会员版有什么区别？',
    a: '免费版支持基础合并打印功能，会员版提供批量处理、数据看板、API 接口等高级功能。',
  },
  {
    q: '数据会不会上传到服务器？',
    a: '不会。所有处理完全在本地完成，你的发票数据不会离开你的电脑。',
  },
  {
    q: '可以批量合并吗？',
    a: '会员版支持批量合并，可一次处理多张发票并自动分组排列。',
  },
]
</script>
