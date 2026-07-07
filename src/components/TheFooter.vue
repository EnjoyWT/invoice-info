<template>
  <footer class="border-t border-black/5 py-10">
    <div class="max-w-245 mx-auto px-5">
      <div class="grid gap-8 md:grid-cols-4 text-sm">
        <div>
          <div class="font-semibold text-apple-black">发票助手</div>
          <p class="mt-2 text-apple-gray leading-6">两张发票 一张 A4</p>
        </div>
        <div>
          <div class="font-medium text-apple-black mb-2">产品</div>
          <ul class="space-y-1.5 text-apple-gray list-none p-0">
            <li>
              <a
                href="#features"
                class="hover:text-apple-black transition-colors"
                >功能介绍</a
              >
            </li>
            <li>
              <a
                href="#how-it-works"
                class="hover:text-apple-black transition-colors"
                >使用方式</a
              >
            </li>
            <li>
              <a
                href="#pricing"
                class="hover:text-apple-black transition-colors"
                >定价</a
              >
            </li>
          </ul>
        </div>
        <div>
          <div class="font-medium text-apple-black mb-2">团队</div>
          <ul class="space-y-1.5 text-apple-gray list-none p-0">
            <!-- <li>
              <a href="#" class="hover:text-apple-black transition-colors"
                >关于我们</a
              >
            </li> -->
            <li>
              <a
                href="#other-products"
                class="hover:text-apple-black transition-colors"
                >其他产品</a
              >
            </li>
          </ul>
        </div>
        <div>
          <div class="font-medium text-apple-black mb-2">支持</div>
          <ul class="space-y-1.5 text-apple-gray list-none p-0">
            <li>
              <a
                href="https://yoloxy.featurebase.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-apple-black transition-colors"
                >帮助中心</a
              >
            </li>
            <li>
              <button
                type="button"
                class="cursor-pointer p-0 text-left hover:text-apple-black transition-colors"
                @click="showContactQr = true"
              >
                联系我们
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="mt-10 pt-6 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-apple-gray"
      >
        <span>© 2026 JoyTim</span>
        <div class="flex gap-4">
          <a href="#" class="hover:text-apple-black transition-colors"
            >隐私政策</a
          >
          <a href="#" class="hover:text-apple-black transition-colors"
            >服务条款</a
          >
        </div>
      </div>
    </div>

    <div
      v-if="showContactQr"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5"
      @click="showContactQr = false"
    >
      <div
        class="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-md"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-qr-title"
        @click.stop
      >
        <h2
          id="contact-qr-title"
          class="text-lg font-semibold text-apple-black"
        >
          联系我们
        </h2>
        <p class="mt-2 text-sm text-apple-gray">扫码添加微信，获取产品支持。</p>
        <img
          src="/ljt.png"
          alt="联系我们微信二维码"
          class="mt-5 w-full rounded-xl"
        />
        <button
          type="button"
          class="tap-target mt-5 inline-flex items-center justify-center rounded-full bg-apple-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-apple-blue"
          @click="showContactQr = false"
        >
          关闭
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const showContactQr = ref(false);
</script>
