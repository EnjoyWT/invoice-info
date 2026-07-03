<template>
  <section id="other-products" class="py-16 md:py-24">
    <div class="max-w-245 mx-auto px-5 text-center">
      <h2 class="text-3xl md:text-4xl font-semibold text-apple-black">
        更多工具，同一个团队
      </h2>
      <div class="mt-10 md:mt-14 grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
        <div
          v-for="(product, idx) in products"
          :key="idx"
          class="fade-in rounded-2xl bg-apple-lightgray p-8 text-left"
        >
          <div
            class="w-full h-32 rounded-xl bg-white/60 flex items-center justify-center text-apple-gray text-sm"
          >
            产品截图
          </div>
          <h3 class="mt-5 text-base font-semibold text-apple-black">{{ product.name }}</h3>
          <p class="mt-2 text-sm text-apple-gray leading-6">{{ product.desc }}</p>
          <a
            href="#"
            class="mt-4 inline-flex items-center text-sm font-medium text-apple-blue hover:underline"
          >
            了解更多 →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  { name: '[产品 A 名称]', desc: '一句话描述这个产品做什么' },
  { name: '[产品 B 名称]', desc: '一句话描述这个产品做什么' },
]
</script>
