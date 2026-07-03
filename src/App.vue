<template>
  <div class="bg-white text-apple-black font-sans">
    <TheNavbar />
    <main>
      <SectionHero />
      <SectionPainPoints />
      <SectionFeatures />
      <SectionHowItWorks />
      <SectionSecurity />
      <SectionDashboard />
      <SectionOtherProducts />
      <SectionFaq />
      <SectionCta />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import TheNavbar from './components/TheNavbar.vue'
import SectionHero from './components/SectionHero.vue'
import SectionPainPoints from './components/SectionPainPoints.vue'
import SectionFeatures from './components/SectionFeatures.vue'
import SectionHowItWorks from './components/SectionHowItWorks.vue'
import SectionSecurity from './components/SectionSecurity.vue'
import SectionDashboard from './components/SectionDashboard.vue'
import SectionOtherProducts from './components/SectionOtherProducts.vue'
import SectionFaq from './components/SectionFaq.vue'
import SectionCta from './components/SectionCta.vue'
import TheFooter from './components/TheFooter.vue'

onMounted(() => {
  // IntersectionObserver for fade-in scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.fade-in').forEach((el) => {
    observer.observe(el)
  })
})
</script>
