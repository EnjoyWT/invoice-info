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
      <SectionPricing />
      <SectionOtherProducts />
      <SectionFaq />
      <SectionCta />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import { nextTick, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TheNavbar from './components/TheNavbar.vue'
import SectionHero from './components/SectionHero.vue'
import SectionPainPoints from './components/SectionPainPoints.vue'
import SectionFeatures from './components/SectionFeatures.vue'
import SectionHowItWorks from './components/SectionHowItWorks.vue'
import SectionSecurity from './components/SectionSecurity.vue'
import SectionDashboard from './components/SectionDashboard.vue'
import SectionPricing from './components/SectionPricing.vue'
import SectionOtherProducts from './components/SectionOtherProducts.vue'
import SectionFaq from './components/SectionFaq.vue'
import SectionCta from './components/SectionCta.vue'
import TheFooter from './components/TheFooter.vue'

gsap.registerPlugin(ScrollTrigger)

let motionMedia

onMounted(() => {
  nextTick(() => {
    motionMedia = gsap.matchMedia()

    motionMedia.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set('.fade-in, .how-fly-in', { autoAlpha: 1, x: 0, y: 0, clearProps: 'transform,visibility' })
    })

    motionMedia.add('(prefers-reduced-motion: no-preference)', () => {
      const revealItems = gsap.utils.toArray('.fade-in')

      revealItems.forEach((item) => {
        gsap.fromTo(
          item,
          {
            autoAlpha: 0,
            y: 28,
            willChange: 'transform, opacity',
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.72,
            ease: 'power3.out',
            overwrite: true,
            clearProps: 'willChange',
            scrollTrigger: {
              trigger: item,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      requestAnimationFrame(() => ScrollTrigger.refresh())
    })

    motionMedia.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        '.how-fly-in',
        {
          autoAlpha: 0,
          x: 96,
          willChange: 'transform, opacity',
        },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.82,
          ease: 'power3.out',
          stagger: 0.14,
          overwrite: true,
          clearProps: 'willChange',
          scrollTrigger: {
            trigger: '#how-it-works',
            start: 'top 72%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      requestAnimationFrame(() => ScrollTrigger.refresh())
    })
  })
})

onUnmounted(() => {
  motionMedia?.revert()
})
</script>
