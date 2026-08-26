<template>
  <section id="other-products" class="py-16 md:py-24">
    <div class="max-w-245 mx-auto px-5 text-center">
      <h2 class="text-3xl md:text-4xl font-semibold text-apple-black">
        更多工具，同一个团队
      </h2>
      <div class="mt-10 md:mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
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
            class="h-32 w-full rounded-xl bg-white/60 object-contain p-4"
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
            target="_blank"
            rel="noopener noreferrer"
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
    action: '下载安装包 →',
    href: 'https://github.com/EnjoyWT/flux-wall-pkg/releases/download/v0.1.0/FluxWall-0.1.0-unsigned.pkg',
  },
  {
    name: '证件照与证件扫描',
    image: '/pixfit-icon.png',
    alt: '证件照与证件扫描工具图标',
    desc: '在线制作标准证件照，支持抠图换底、尺寸裁剪、排版导出和证件扫描 PDF/图片生成。',
    action: '立即使用 →',
    href: 'https://zj.yoloxy.com',
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
