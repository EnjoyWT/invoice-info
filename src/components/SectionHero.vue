<template>
  <section class="pt-20 pb-12 md:pt-28 md:pb-16 text-center">
    <div class="max-w-245 mx-auto px-5">
      <h1
        class="text-4xl md:text-6xl font-semibold tracking-tight text-apple-black leading-tight"
      >
        两张发票&nbsp; 一张&nbsp;A4
      </h1>
      <p
        class="mt-4 text-lg md:text-xl text-apple-gray max-w-xl mx-auto leading-relaxed"
      >
        上传发票，智能合并，直接打印。省纸、省时、省心。
      </p>
      <a
        href="https://fp.yoloxy.com"
        target="_blank"
        rel="noopener noreferrer"
        class="tap-target mt-8 inline-flex items-center rounded-full bg-apple-blue px-7 py-3 text-base font-medium text-white hover:bg-apple-bluehover transition-colors"
      >
        免费使用
      </a>

      <!-- Stylized illustration: 两张散 → 一张合 -->
      <div class="mt-12 md:mt-16 flex justify-center">
        <div class="flex items-center gap-4 md:gap-8">
          <!-- Two scattered invoices -->
          <div class="relative w-25 h-35 md:w-32.5 md:h-45">
            <div
              class="absolute top-0 left-0 w-22 h-31 md:w-28 md:h-40.5 bg-white border border-invoice-line rounded shadow-sm -rotate-4 p-2.5 md:p-3"
            >
              <div class="h-2 w-9/20 rounded bg-invoice-line" />
              <div class="mt-2.5 h-1.5 w-7/10 rounded bg-invoice-soft" />
              <div class="mt-1.5 h-1.5 w-11/20 rounded bg-invoice-soft" />
              <div class="mt-1.5 h-1.5 w-4/5 rounded bg-invoice-soft" />
              <div class="mt-1.5 h-1.5 w-3/5 rounded bg-invoice-soft" />
              <div
                class="mt-2.5 w-4 h-4 rounded-full border-2 border-invoice-stamp/40 ml-auto"
              />
            </div>
            <div
              class="absolute bottom-0 right-0 w-22 h-31 md:w-28 md:h-40.5 bg-white border border-invoice-line rounded shadow-sm rotate-3 p-2.5 md:p-3"
            >
              <div class="h-2 w-2/5 rounded bg-invoice-line" />
              <div class="mt-2.5 h-1.5 w-13/20 rounded bg-invoice-soft" />
              <div class="mt-1.5 h-1.5 w-4/5 rounded bg-invoice-soft" />
              <div class="mt-1.5 h-1.5 w-1/2 rounded bg-invoice-soft" />
              <div class="mt-1.5 h-1.5 w-3/4 rounded bg-invoice-soft" />
              <div
                class="mt-2.5 w-4 h-4 rounded-full border-2 border-invoice-stamp/40 ml-auto"
              />
            </div>
          </div>

          <!-- Arrow -->
          <div class="text-2xl md:text-3xl text-apple-gray font-light">→</div>

          <!-- One merged A4 -->
          <div
            class="w-27.5 h-39 md:w-35 md:h-50 bg-white border border-invoice-line rounded shadow-md p-2 md:p-2.5 flex flex-col gap-1.5 md:gap-2"
          >
            <div
              class="flex-1 rounded border border-invoice-soft bg-invoice-paper p-1.5 md:p-2"
            >
              <div class="h-1.5 w-9/20 rounded bg-invoice-line" />
              <div class="mt-1.5 h-1 w-7/10 rounded bg-invoice-soft" />
              <div class="mt-1 h-1 w-11/20 rounded bg-invoice-soft" />
              <div class="mt-1 h-1 w-4/5 rounded bg-invoice-soft" />
            </div>
            <div
              class="flex-1 rounded border border-invoice-soft bg-invoice-paper p-1.5 md:p-2"
            >
              <div class="h-1.5 w-2/5 rounded bg-invoice-line" />
              <div class="mt-1.5 h-1 w-13/20 rounded bg-invoice-soft" />
              <div class="mt-1 h-1 w-4/5 rounded bg-invoice-soft" />
              <div class="mt-1 h-1 w-1/2 rounded bg-invoice-soft" />
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-6 flex justify-center gap-4 md:gap-8 text-sm text-apple-gray"
      >
        <span>两张散发票</span>
        <span class="invisible">→</span>
        <span>一张 A4</span>
      </div>
    </div>
  </section>
</template>
