<template>
  <section id="other-products" class="py-16 md:py-24">
    <div class="max-w-245 mx-auto px-5 text-center">
      <h2 class="text-3xl md:text-4xl font-semibold text-apple-black">
        更多工具，同一个团队
      </h2>
      <div class="mt-10 md:mt-14 grid gap-6 max-w-sm mx-auto">
        <div
          v-for="(product, idx) in products"
          :key="idx"
          class="fade-in rounded-2xl bg-apple-lightgray p-8 text-left"
        >
          <img
            src="/WechatIMG228662.jpg"
            alt="Mac 动态壁纸软件界面截图"
            loading="lazy"
            class="h-32 w-full rounded-xl object-cover"
          />
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
  { name: 'Mac 动态壁纸软件', desc: '永久会员，一次开通长期使用。' },
]
</script>
