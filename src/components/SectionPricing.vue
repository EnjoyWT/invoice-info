<template>
  <section id="pricing" class="py-16 md:py-24">
    <div class="max-w-245 mx-auto px-5 text-center">
      <h2 class="text-3xl md:text-4xl font-semibold text-apple-black">
        Pro 套餐，限时优惠
      </h2>
      <p class="mt-4 text-base text-apple-gray max-w-xl mx-auto leading-relaxed">
        适合经常整理报销材料的个人和团队，开通后解锁更多处理能力。
      </p>

      <div class="mt-10 md:mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(plan, idx) in plans"
          :key="plan.name"
          class="fade-in rounded-2xl border bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-apple-blue/50 hover:shadow-md"
          :class="idx === 1 ? 'border-apple-blue shadow-md' : 'border-black/10'"
        >
          <div class="flex items-center justify-between gap-4">
            <h3 class="text-base font-semibold text-apple-black">{{ plan.name }}</h3>
            <span
              v-if="idx === 1"
              class="rounded-full bg-apple-blue px-3 py-1 text-xs font-medium text-white"
            >
              推荐
            </span>
          </div>

          <div class="mt-6 flex items-baseline gap-3">
            <span class="text-3xl md:text-4xl font-semibold text-apple-black">
              {{ plan.price }}
            </span>
            <span class="text-base text-apple-gray line-through">{{ plan.original }}</span>
          </div>

          <p class="mt-4 text-sm leading-6 text-apple-gray">{{ plan.desc }}</p>

          <a
            href="https://fp.yoloxy.com"
            target="_blank"
            rel="noopener noreferrer"
            class="tap-target mt-6 inline-flex w-full items-center justify-center rounded-full bg-apple-black px-5 py-3 text-base font-medium text-white transition-colors hover:bg-apple-blue"
          >
            立即使用
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const plans = [
  {
    name: '3 个月 Pro',
    price: '¥39.9',
    original: '¥59.9',
    desc: '短期高频报销整理，灵活开通。',
  },
  {
    name: '6 个月 Pro',
    price: '¥49.9',
    original: '¥89.9',
    desc: '更适合持续使用，性价比更高。',
  },
  {
    name: '1 年 Pro',
    price: '¥69.9',
    original: '¥129.9',
    desc: '全年发票打印整理，一次开通更省心。',
  },
  {
    name: '永久会员',
    price: '¥599',
    original: '¥999',
    desc: '包含其他工具会员永久权益。',
  },
]
</script>
