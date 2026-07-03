<template>
  <section id="other-products" class="py-16 md:py-24">
    <div class="max-w-245 mx-auto px-5 text-center">
      <h2 class="text-3xl md:text-4xl font-semibold text-apple-black">
        更多工具，同一个团队
      </h2>
      <div class="mt-10 md:mt-14 grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
        <div
          v-for="product in products"
          :key="product.name"
          class="fade-in rounded-2xl bg-apple-lightgray p-8 text-left"
        >
          <img
            v-if="product.image"
            :src="product.image"
            :alt="product.alt"
            loading="lazy"
            class="h-32 w-full rounded-xl object-cover"
          />
          <div
            v-else
            class="flex h-32 w-full items-center justify-center rounded-xl bg-white/60 text-sm text-apple-gray"
          >
            敬请期待
          </div>
          <h3 class="mt-5 text-base font-semibold text-apple-black">{{ product.name }}</h3>
          <p class="mt-2 text-sm text-apple-gray leading-6">{{ product.desc }}</p>
          <a
            :href="product.href"
            class="mt-4 inline-flex items-center text-sm font-medium"
            :class="product.disabled ? 'pointer-events-none text-apple-gray' : 'text-apple-blue hover:underline'"
          >
            {{ product.action }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  {
    name: 'Mac 动态壁纸软件',
    image: '/WechatIMG228662.jpg',
    alt: 'Mac 动态壁纸软件界面截图',
    desc: '永久会员，一次开通长期使用。',
    action: '了解更多 →',
    href: '#',
  },
  {
    name: '票据归档助手',
    desc: '发票、行程单与附件自动归档检索。',
    action: '努力开发中',
    href: '#',
    disabled: true,
  },
]
</script>
