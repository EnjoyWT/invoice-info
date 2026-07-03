<template>
  <section class="py-16 md:py-24">
    <div class="max-w-245 mx-auto px-5 text-center">
      <h2 class="text-3xl md:text-4xl font-semibold text-apple-black">
        你的数据，从不离开你的电脑
      </h2>
      <p class="mt-4 text-base text-apple-gray max-w-lg mx-auto">
        所有处理在本地完成，发票信息不经过任何云端服务。
      </p>
      <div class="mt-10 md:mt-14 grid gap-8 md:grid-cols-3 max-w-3xl mx-auto">
        <div v-for="(item, idx) in items" :key="idx" class="fade-in">
          <div
            class="mx-auto w-12 h-12 rounded-2xl bg-apple-lightgray flex items-center justify-center text-apple-gray"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" class="icon-line" v-html="item.icon" />
          </div>
          <h3 class="mt-4 text-base font-semibold text-apple-black">{{ item.title }}</h3>
          <p class="mt-2 text-sm text-apple-gray leading-6">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    title: '100% 本地运行',
    desc: '所有计算在你的电脑上完成',
    icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  },
  {
    title: '零上传',
    desc: '发票不经过任何云端服务',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="9" y1="12" x2="15" y2="12"/>',
  },
  {
    title: '离线即用',
    desc: '无需联网，打开就能用',
    icon: '<polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  },
]
</script>
