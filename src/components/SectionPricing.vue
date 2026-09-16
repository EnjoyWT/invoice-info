<template>
  <section id="pricing" class="py-16 md:py-24">
    <div class="max-w-245 mx-auto px-5 text-center">
      <h2 class="text-3xl md:text-4xl font-semibold text-apple-black">
        Pro 套餐，限时优惠
      </h2>
      <p
        class="mt-4 text-base text-apple-gray max-w-xl mx-auto leading-relaxed"
      >
        适合经常整理报销材料的个人和团队，开通后解锁更多处理能力。
      </p>

      <div class="mt-10 md:mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="plan in plans"
          :key="plan.code"
          class="fade-in rounded-2xl border bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-apple-blue/50 hover:shadow-md"
          :class="
            plan.code === FEATURED_PLAN_CODE
              ? 'border-apple-blue shadow-md'
              : 'border-black/10'
          "
        >
          <div class="flex items-center justify-between gap-4">
            <h3 class="text-base font-semibold text-apple-black">
              {{ plan.name }}
            </h3>
            <span
              v-if="plan.code === FEATURED_PLAN_CODE"
              class="rounded-full bg-apple-blue px-3 py-1 text-xs font-medium text-white"
            >
              推荐
            </span>
          </div>

          <div class="mt-6 flex items-baseline gap-3">
            <span class="text-3xl md:text-4xl font-semibold text-apple-black">
              {{ plan.price }}
            </span>
            <span class="text-base text-apple-gray line-through">{{
              plan.original
            }}</span>
          </div>

          <p class="mt-4 text-sm leading-6 text-apple-gray">{{ plan.desc }}</p>

          <button
            type="button"
            class="tap-target mt-6 inline-flex w-full items-center justify-center rounded-full bg-apple-black px-5 py-3 text-base font-medium text-white transition-colors hover:bg-apple-blue"
            @click="selectedPlan = plan"
          >
            立刻购买
          </button>
        </div>
      </div>
    </div>

    <ContactQrModal
      v-if="selectedPlan"
      :title="`购买 ${selectedPlan.name}`"
      description="扫码添加微信，告知所选套餐和注册邮箱，人工确认后开通。"
      @close="selectedPlan = null"
    />
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ContactQrModal from './ContactQrModal.vue'

const selectedPlan = ref(null)
const FEATURED_PLAN_CODE = 'invoice_pro_3m'
const AUTHHUB_PRODUCTS_URL = 'https://auth.yoloxy.com/api/billing/products'
const AUTHHUB_APP_KEY = '2105e709-867f-4a7a-864c-76b6dcb09fa3'
const originalPrices = {
  invoice_pro_1m: '¥19.9',
  invoice_pro_3m: '¥29.9',
  invoice_pro_1y: '¥49.9',
  invoice_pro_lifetime: '¥129',
}

const fallbackPlans = [
  {
    code: 'invoice_pro_1m',
    name: '1 个月 Pro',
    price: '¥5.9',
    original: originalPrices.invoice_pro_1m,
    desc: '轻量体验',
  },
  {
    code: 'invoice_pro_3m',
    name: '3 个月 Pro',
    price: '¥12.9',
    original: originalPrices.invoice_pro_3m,
    desc: '连续使用',
  },
  {
    code: 'invoice_pro_1y',
    name: '1 年 Pro',
    price: '¥29.9',
    original: originalPrices.invoice_pro_1y,
    desc: '长期更划算',
  },
  {
    code: 'invoice_pro_lifetime',
    name: '永久会员',
    price: '¥69',
    original: originalPrices.invoice_pro_lifetime,
    desc: '一次开通，包含其他工具会员永久权益。',
  },
]

const plans = ref(fallbackPlans)

function formatPrice(priceCents) {
  const amount = (Number(priceCents) / 100).toFixed(2).replace(/\.00$/, '').replace(/0$/, '')
  return `¥${amount}`
}

function formatPlanName(product) {
  return product.is_lifetime ? '永久会员' : `${product.name} Pro`
}

async function syncPlans() {
  try {
    const response = await fetch(AUTHHUB_PRODUCTS_URL, {
      headers: { 'x-app-key': AUTHHUB_APP_KEY },
    })
    const body = await response.json()
    const products = body?.success && Array.isArray(body.data?.items) ? body.data.items : []

    if (!response.ok || products.length === 0) return

    plans.value = products
      .filter((product) => product.status === 'active')
      .sort((left, right) => left.display_order - right.display_order)
      .map((product) => ({
        code: product.code,
        name: formatPlanName(product),
        price: formatPrice(product.price_cents),
        original: originalPrices[product.code] || '',
        desc: product.description,
      }))
  } catch {
    // Keep the current production prices visible when AuthHub is temporarily unavailable.
  }
}

onMounted(syncPlans)
</script>
