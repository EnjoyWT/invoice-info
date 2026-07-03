import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'

const indexPath = resolve('index.html')
const index = readFileSync(indexPath, 'utf8')
const cssPath = resolve('src/style.css')
const css = readFileSync(cssPath, 'utf8')
const faqPath = resolve('src/components/SectionFaq.vue')
const faq = readFileSync(faqPath, 'utf8')
const ctaPath = resolve('src/components/SectionCta.vue')
const cta = readFileSync(ctaPath, 'utf8')
const heroPath = resolve('src/components/SectionHero.vue')
const hero = readFileSync(heroPath, 'utf8')
const navPath = resolve('src/components/TheNavbar.vue')
const nav = readFileSync(navPath, 'utf8')
const componentsDir = resolve('src/components')
const componentSources = readdirSync(componentsDir)
  .filter((file) => file.endsWith('.vue'))
  .map((file) => [file, readFileSync(resolve(componentsDir, file), 'utf8')])
const howItWorks = readFileSync(resolve('src/components/SectionHowItWorks.vue'), 'utf8')

const stripped = css.replace(/\/\*[\s\S]*?\*\//g, '')
const unlayeredGlobalReset = /(?:^|})\s*\*\s*\{[^}]*\b(?:margin|padding)\s*:\s*0\b[^}]*\}/m

if (unlayeredGlobalReset.test(stripped)) {
  throw new Error(
    'style.css contains an unlayered universal reset. Put resets in @layer base or remove them so Tailwind utilities keep precedence.'
  )
}

if (!/--font-sans\s*:/.test(stripped)) {
  throw new Error('style.css must define --font-sans for Tailwind v4 font-sans utilities.')
}

if (cta.includes('免费下载')) {
  throw new Error('SectionCta should not include the phrase 免费下载.')
}

if (!faq.includes('目前已适配常见增值税发票、电子发票、行程单、车票等版式；遇到特殊样式，也会继续补齐兼容。')) {
  throw new Error('SectionFaq should use the trial compatibility copy.')
}

if (!nav.includes('class="text-base font-semibold tracking-tight text-apple-black"')) {
  throw new Error('Navbar brand text should use text-base.')
}

if (!nav.includes('class="text-base font-semibold text-apple-black opacity-85 hover:opacity-100 transition-opacity"')) {
  throw new Error('Navbar links should use text-base and be bold.')
}

if (nav.includes("link.label === '产品功能' ? 'font-semibold' : 'font-normal'")) {
  throw new Error('Navbar links should all be bold, not only 产品功能.')
}

for (const [name, source] of [
  ['TheNavbar', nav],
  ['SectionHero', hero],
  ['SectionCta', cta],
]) {
  if (!source.includes('href="https://fp.yoloxy.com"')) {
    throw new Error(`${name} free-use CTA should link to https://fp.yoloxy.com.`)
  }

  if (!source.includes('target="_blank"')) {
    throw new Error(`${name} free-use CTA should open in a new tab.`)
  }

  if (!source.includes('rel="noopener noreferrer"')) {
    throw new Error(`${name} external CTA should use noopener noreferrer.`)
  }
}

for (const [file, source] of componentSources) {
  const arbitraryClass = source.match(/:?class\s*=\s*["'][^"']*\[[^\]]+\][^"']*["']/)

  if (arbitraryClass) {
    throw new Error(`${file} contains arbitrary Tailwind class syntax: ${arbitraryClass[0]}`)
  }
}

if (!howItWorks.includes('id="how-it-works"')) {
  throw new Error('SectionHowItWorks should expose id="how-it-works" for nav anchors.')
}

for (const [label, required] of [
  ['description meta', /<meta\s+name="description"/],
  ['canonical link', /<link\s+rel="canonical"\s+href="https:\/\/invoice\.yoloxy\.com\/"/],
  ['favicon link', /<link\s+rel="icon"\s+href="\/favicon\.ico"/],
  ['apple touch icon link', /<link\s+rel="apple-touch-icon"\s+href="\/apple-touch-icon\.png"/],
  ['manifest link', /<link\s+rel="manifest"\s+href="\/site\.webmanifest"/],
  ['og title meta', /<meta\s+property="og:title"/],
  ['og description meta', /<meta\s+property="og:description"/],
  ['og url meta', /<meta\s+property="og:url"\s+content="https:\/\/invoice\.yoloxy\.com\/"/],
  ['twitter card meta', /<meta\s+name="twitter:card"/],
  ['structured data', /<script\s+type="application\/ld\+json"/],
]) {
  if (!required.test(index)) {
    throw new Error(`index.html is missing SEO/GEO metadata: ${label}`)
  }
}

for (const requiredFile of [
  'public/favicon.ico',
  'public/apple-touch-icon.png',
  'public/robots.txt',
  'public/sitemap.xml',
  'public/site.webmanifest',
  'public/llms.txt',
]) {
  if (!existsSync(resolve(requiredFile))) {
    throw new Error(`${requiredFile} is required for favicon and SEO/GEO configuration.`)
  }
}
