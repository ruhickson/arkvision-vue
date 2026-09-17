<template>
  <div>
    <!-- Mobile Notification Popup -->
    <div class="mobile-notification" id="mobileNotification">
      <span id="mobileNotificationText"></span>
    </div>
    
    <div class="circles-container" id="circlesContainer">
      <div class="circle-group">
        <div class="circle" id="circle1">
          <img class="image-layer background-image" id="backgroundText1" :src="backgroundSceneImage" alt="Green field and mountain background" />
          <img class="image-layer foreground-image" id="foregroundText1" :src="foregroundDeerImage" alt="Deer in foreground" />
          <div class="veil" id="veil1"></div>
          <div class="floaters" id="floaters1"></div>
        </div>
        <div class="controls controls-carousel" id="controlsCarousel1">
          <div class="carousel-header">
            <button class="carousel-nav-btn" type="button" aria-label="Previous option" @click.stop="prevCarouselSlide">
              <span aria-hidden="true">&lt;</span>
            </button>
            <div :key="currentCarouselSlide" class="carousel-title" aria-live="polite">{{ carouselTitleText }}</div>
            <button class="carousel-nav-btn" type="button" aria-label="Next option" @click.stop="nextCarouselSlide">
              <span aria-hidden="true">&gt;</span>
            </button>
          </div>
          <div class="carousel-track">
            <div v-show="currentCarouselSlide === 0" class="slider-group carousel-slide" data-label="Brightness">
              <input type="range" min="0" max="100" value="100" id="colorSlider1" aria-label="Adjust brightness">
            </div>
            <div v-show="currentCarouselSlide === 1" class="slider-group carousel-slide" data-label="Blur">
              <input type="range" min="0" max="10" value="0" id="blurSlider1" aria-label="Adjust blur">
            </div>
            <div v-show="currentCarouselSlide === 2" class="slider-group carousel-slide" data-label="Blur Dog">
              <input type="range" min="0" max="10" value="0" id="blurUpCloseSlider1" aria-label="Adjust blur near">
            </div>
            <div v-show="currentCarouselSlide === 3" class="slider-group carousel-slide" data-label="Blur Mountains">
              <input type="range" min="0" max="10" value="0" id="blurFarAwaySlider1" aria-label="Adjust blur far">
            </div>
            <div v-show="currentCarouselSlide === 4" class="slider-group carousel-slide" data-label="Curtain">
              <input type="range" min="0" max="100" value="0" id="curtainSlider1" aria-label="Adjust curtain">
            </div>
            <div v-show="currentCarouselSlide === 5" class="slider-group carousel-slide" data-label="Warp">
              <input type="range" min="0" max="50" value="0" id="warpSlider1" aria-label="Adjust warp">
            </div>
            <div v-show="currentCarouselSlide === 6" class="slider-group carousel-slide" data-label="Floaters">
              <input type="range" min="0" max="100" value="0" id="floatersSlider1" aria-label="Adjust floaters">
            </div>
            <div v-show="currentCarouselSlide === 7" class="slider-group carousel-slide" data-label="Floater Size">
              <input type="range" min="1" max="20" value="10" id="sizeSlider1" aria-label="Adjust floater size">
            </div>
            <div v-show="currentCarouselSlide === 8" class="slider-group carousel-slide" data-label="Haze">
              <input type="range" min="0" max="100" value="0" id="hazeSlider1" aria-label="Adjust haze">
            </div>
            <div v-show="currentCarouselSlide === 9" class="glaucoma-section carousel-slide" data-label="Can't see">
              <div class="glaucoma-grid" role="grid" aria-label="Can't see regions">
                <div v-for="row in 4" :key="`row-${row}`" class="grid-row" role="row">
                  <button
                    v-for="col in 4"
                    :key="`cell-${row}-${col}`"
                    type="button"
                    class="grid-cell"
                    :class="{ active: glaucomaCells[(row - 1) * 4 + (col - 1)] }"
                    :data-position="`${row - 1},${col - 1}`"
                    :aria-pressed="glaucomaCells[(row - 1) * 4 + (col - 1)] ? 'true' : 'false'"
                    :aria-label="`Can't see region row ${row}, column ${col}`"
                    @click="toggleGlaucomaCell((row - 1) * 4 + (col - 1))"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Desktop: text buttons; Mobile: icon FABs in the same under-carousel slot -->
        <div class="desktop-actions" aria-label="Simulator actions">
          <button type="button" class="desktop-action-btn" id="resetButton" title="Reset all settings">Reset</button>
          <button type="button" class="desktop-action-btn" id="saveConfigButton" title="Share current settings">Share</button>
          <button type="button" class="desktop-action-btn diagnose" id="diagnoseButton" title="Get diagnosis">Diagnose</button>
        </div>
        <div class="mobile-actions" aria-label="Simulator actions">
          <button class="mobile-action-btn" id="mobileResetButton" title="Reset all settings">
            <i class="fas fa-redo action-icon"></i>
          </button>
          <button class="mobile-action-btn" id="mobileShareButton" title="Share current settings">
            <i class="fas fa-share action-icon"></i>
          </button>
          <button class="mobile-action-btn" id="mobileDiagnoseButton" title="Get diagnosis">
            <i class="fas fa-check action-icon"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { setDarkMode } from '../theme'
import backgroundSceneImage from '../assets/simulator-scene-bg.svg'
import foregroundDeerImage from '../assets/simulator-deer-fg.svg'

const router = useRouter()

const CAROUSEL_SLIDE_LABELS = [
  'Brightness',
  'Blur',
  'Blur Dog',
  'Blur Mountains',
  'Curtain',
  'Warp',
  'Floaters',
  'Floater Size',
  'Haze',
  "Can't see"
]
const currentCarouselSlide = ref(0)
const carouselTitleText = computed(() => CAROUSEL_SLIDE_LABELS[currentCarouselSlide.value] ?? '')
const glaucomaCells = ref(Array.from({ length: 16 }, () => false))

function toggleGlaucomaCell(index) {
  if (index < 0 || index > 15) return
  const next = glaucomaCells.value.slice()
  next[index] = !next[index]
  glaucomaCells.value = next
  syncGlaucomaOverlayFromState()
  updateURL()
}

function applyGlaucomaBinary(binary) {
  if (!binary || binary.length !== 16) return
  glaucomaCells.value = [...binary].map(c => c === '1')
  syncGlaucomaOverlayFromState()
}

function glaucomaBinaryFromState() {
  return glaucomaCells.value.map(on => (on ? '1' : '0')).join('')
}

function prevCarouselSlide() {
  const n = CAROUSEL_SLIDE_LABELS.length
  currentCarouselSlide.value = (currentCarouselSlide.value - 1 + n) % n
  if (currentCarouselSlide.value === 9) {
    const circle = document.getElementById('circle1')
    const overlay = circle?.querySelector('.glaucoma-overlay')
    layoutGlaucomaSegments(circle, overlay)
  }
}

function nextCarouselSlide() {
  const n = CAROUSEL_SLIDE_LABELS.length
  currentCarouselSlide.value = (currentCarouselSlide.value + 1) % n
  if (currentCarouselSlide.value === 9) {
    const circle = document.getElementById('circle1')
    const overlay = circle?.querySelector('.glaucoma-overlay')
    layoutGlaucomaSegments(circle, overlay)
  }
}

// Simple XOR + base64 for share link
const XOR_KEY = 42
function xorEncrypt(str) {
  return btoa(Array.from(str).map(c => String.fromCharCode(c.charCodeAt(0) ^ XOR_KEY)).join(''))
}
function xorDecrypt(str) {
  return atob(str).split('').map(c => String.fromCharCode(c.charCodeAt(0) ^ XOR_KEY)).join('')
}

let glaucomaReady = false

function layoutGlaucomaSegments(circle, overlay) {
  if (!circle || !overlay) return
  const segmentWidth = circle.clientWidth / 4
  const segmentHeight = circle.clientHeight / 4
  overlay.querySelectorAll('.glaucoma-segment').forEach(segment => {
    const row = Number(segment.dataset.row)
    const col = Number(segment.dataset.col)
    segment.style.width = `${segmentWidth}px`
    segment.style.height = `${segmentHeight}px`
    segment.style.left = `${col * segmentWidth}px`
    segment.style.top = `${row * segmentHeight}px`
  })
}

function syncGlaucomaOverlayFromState() {
  const circle = document.getElementById('circle1')
  if (!circle) return
  let overlay = circle.querySelector('.glaucoma-overlay')
  if (!overlay) {
    overlay = document.createElement('div')
    overlay.className = 'glaucoma-overlay'
    circle.appendChild(overlay)
  }
  if (!glaucomaReady || overlay.querySelectorAll('.glaucoma-segment').length !== 16) {
    overlay.innerHTML = ''
    for (let i = 0; i < 16; i++) {
      const row = Math.floor(i / 4)
      const col = i % 4
      const segment = document.createElement('div')
      segment.className = 'glaucoma-segment'
      segment.dataset.row = String(row)
      segment.dataset.col = String(col)
      segment.style.opacity = glaucomaCells.value[i] ? '1' : '0'
      overlay.appendChild(segment)
    }
    glaucomaReady = true
  } else {
    overlay.querySelectorAll('.glaucoma-segment').forEach((segment, i) => {
      segment.style.opacity = glaucomaCells.value[i] ? '1' : '0'
    })
  }
  layoutGlaucomaSegments(circle, overlay)
}

function initializeGlaucomaGrid() {
  syncGlaucomaOverlayFromState()
}

const MAX_FLOATERS = 24
let floaterRafId = null
let activeFloaters = []

function stopFloaterLoop() {
  if (floaterRafId != null) {
    cancelAnimationFrame(floaterRafId)
    floaterRafId = null
  }
  activeFloaters = []
}

function createFloaters(containerId, intensity, size) {
  const container = document.getElementById(containerId)
  if (!container) return

  // Cancel shared loop and any leftover per-floater RAFs before recreating
  stopFloaterLoop()
  container.querySelectorAll('.floating-element').forEach(el => {
    if (el.__raf) cancelAnimationFrame(el.__raf)
  })
  container.innerHTML = ''

  const circle = container.closest('.circle')
  const width = circle ? circle.offsetWidth : 400
  const height = circle ? circle.offsetHeight : 400
  const centerX = width / 2
  const centerY = height / 2
  const radiusPx = Number(size) // interpret as radius
  const diameterPx = Math.max(1, radiusPx * 2)
  const maxRadius = Math.min(width, height) / 2 - radiusPx
  const clamped = Math.max(0, Math.min(100, Number(intensity) || 0))
  const numFloaters = Math.round((clamped / 100) * MAX_FLOATERS) // 0..24
  const fragment = document.createDocumentFragment()
  const nextFloaters = []

  for (let i = 0; i < numFloaters; i++) {
    const floater = document.createElement('div')
    floater.className = 'floating-element'
    floater.style.width = `${diameterPx}px`
    floater.style.height = `${diameterPx}px`
    const angle = Math.random() * 2 * Math.PI
    const radius = Math.sqrt(Math.random()) * maxRadius
    const x = centerX + radius * Math.cos(angle) - radiusPx
    const y = centerY + radius * Math.sin(angle) - radiusPx
    floater.style.left = `${x}px`
    floater.style.top = `${y}px`
    fragment.appendChild(floater)
    nextFloaters.push({
      el: floater,
      centerX,
      centerY,
      maxRadius,
      baseSpeed: 0.3 + Math.random() * 0.5,
      direction: Math.random() * Math.PI * 2,
      wobblePhase: Math.random() * Math.PI * 2,
      wobbleAmp: 0.4 + Math.random() * 0.6
    })
  }
  container.appendChild(fragment)
  activeFloaters = nextFloaters

  if (activeFloaters.length === 0) return

  function stepAll() {
    for (const f of activeFloaters) {
      const curX = parseFloat(f.el.style.left)
      const curY = parseFloat(f.el.style.top)
      f.wobblePhase += 0.03
      const dx = Math.cos(f.direction) * f.baseSpeed + Math.sin(f.wobblePhase) * f.wobbleAmp
      const dy = Math.sin(f.direction) * f.baseSpeed + Math.cos(f.wobblePhase) * f.wobbleAmp
      let nextX = curX + dx
      let nextY = curY + dy
      const halfW = f.el.offsetWidth / 2
      const halfH = f.el.offsetHeight / 2
      const relX = nextX + halfW - f.centerX
      const relY = nextY + halfH - f.centerY
      const dist = Math.sqrt(relX * relX + relY * relY)
      if (dist > f.maxRadius) {
        const normal = Math.atan2(relY, relX)
        f.direction = 2 * normal - f.direction + Math.PI
        nextX = f.centerX + (f.maxRadius - 2) * Math.cos(normal) - halfW
        nextY = f.centerY + (f.maxRadius - 2) * Math.sin(normal) - halfH
      }
      f.el.style.left = `${nextX}px`
      f.el.style.top = `${nextY}px`
    }
    floaterRafId = requestAnimationFrame(stepAll)
  }
  floaterRafId = requestAnimationFrame(stepAll)
}

function getFirstCircleGroup() {
  return document.querySelector('.circle-group')
}

/** URL and share payloads only include the active (first) eye; the app focuses on one eye at a time. */
function updateURL() {
  const params = new URLSearchParams()
  const group = getFirstCircleGroup()
  if (group) {
    group.querySelectorAll('input[type="range"]').forEach(slider => {
      params.set(slider.id, slider.value)
    })
  }
  params.set('glaucoma1', glaucomaBinaryFromState())
  params.set('view', 'single')
  const newURL = `${window.location.pathname}?${params.toString()}`
  window.history.replaceState({}, '', newURL)
}

function enforceSingleEye() {
  const group = getFirstCircleGroup()
  if (group) group.style.display = 'flex'
}

function restoreFromURL() {
  const params = new URLSearchParams(window.location.search)
  if (params.size === 0) return
  const group = getFirstCircleGroup()
  if (group) {
    group.querySelectorAll('input[type="range"]').forEach(slider => {
      const value = params.get(slider.id)
      if (value !== null) {
        slider.value = value
        slider.dispatchEvent(new Event('input'))
      }
    })
  }
  applyGlaucomaBinary(params.get('glaucoma1'))
  enforceSingleEye()
  createFloaters('floaters1', document.getElementById('floatersSlider1')?.value || 0, document.getElementById('sizeSlider1')?.value || 10)
}

function updateBlur(circleNum) {
  const bright = Number(document.getElementById(`colorSlider${circleNum}`)?.value ?? 100) / 100
  const blur = Number(document.getElementById(`blurSlider${circleNum}`)?.value || 0)
  const blurUpClose = Number(document.getElementById(`blurUpCloseSlider${circleNum}`)?.value || 0)
  const blurFarAway = Number(document.getElementById(`blurFarAwaySlider${circleNum}`)?.value || 0)
  const hazeAmt = Number(document.getElementById(`hazeSlider${circleNum}`)?.value || 0) / 100
  const fg = document.getElementById(`foregroundText${circleNum}`)
  const bg = document.getElementById(`backgroundText${circleNum}`)
  const base = `brightness(${bright}) grayscale(${hazeAmt})`
  if (fg) fg.style.filter = `${base} blur(${blur + blurUpClose}px)`
  if (bg) bg.style.filter = `${base} blur(${blur + blurFarAway}px)`
}

function fillBackgroundText(circleNum) {
  const container = document.getElementById(`backgroundText${circleNum}`)
  if (!container || container.tagName === 'IMG') return
  container.innerHTML = ''
}

// Haze animation helpers (single eye)
function createOrGetHazeOverlay(circleNum) {
  let haze = document.getElementById(`hazeOverlay${circleNum}`)
  if (!haze) {
    haze = document.createElement('canvas')
    haze.id = `hazeOverlay${circleNum}`
    haze.className = 'haze-overlay'
    haze.width = 300
    haze.height = 300
    haze.style.position = 'absolute'
    haze.style.top = '0'
    haze.style.left = '0'
    haze.style.width = '100%'
    haze.style.height = '100%'
    haze.style.pointerEvents = 'none'
    haze.style.zIndex = 10
    const circle = document.getElementById(`circle${circleNum}`)
    circle?.appendChild(haze)
  }
  return haze
}

let hazeAnimId = null
let hazeRunning = false

function stopHazeAnimation(circleNum) {
  if (hazeAnimId != null) {
    cancelAnimationFrame(hazeAnimId)
    hazeAnimId = null
  }
  hazeRunning = false
  const haze = document.getElementById(`hazeOverlay${circleNum}`)
  if (haze) {
    const ctx = haze.getContext('2d')
    ctx?.clearRect(0, 0, haze.width, haze.height)
  }
}

function startHazeAnimation(circleNum) {
  if (hazeRunning) return
  const slider = document.getElementById(`hazeSlider${circleNum}`)
  if (Number(slider?.value || 0) <= 0) {
    stopHazeAnimation(circleNum)
    return
  }
  const haze = createOrGetHazeOverlay(circleNum)
  const ctx = haze.getContext('2d')
  let t = 0
  hazeRunning = true
  function draw() {
    const hv = Number(document.getElementById(`hazeSlider${circleNum}`)?.value || 0)
    ctx.clearRect(0, 0, haze.width, haze.height)
    if (hv <= 0) {
      stopHazeAnimation(circleNum)
      return
    }
    const lines = Math.max(10, Math.round(10 + 50 * (hv / 100)))
    const amp = 2 + 6 * (hv / 100)
    const alpha = 0.25 + 0.65 * (hv / 100)
    ctx.save()
    ctx.globalAlpha = alpha
    ctx.strokeStyle = '#bbb'
    for (let i = 0; i < lines; i++) {
      ctx.beginPath()
      for (let j = 0; j < lines; j++) {
        const x = (i / (lines - 1)) * haze.width
        const y = (j / (lines - 1)) * haze.height
        const offset = Math.sin(t * 0.02 + i * 0.3 + j * 0.2) * amp
        if (j === 0) ctx.moveTo(x + offset, y + offset)
        else ctx.lineTo(x + offset, y + offset)
      }
      ctx.stroke()
    }
    for (let j = 0; j < lines; j++) {
      ctx.beginPath()
      for (let i = 0; i < lines; i++) {
        const x = (i / (lines - 1)) * haze.width
        const y = (j / (lines - 1)) * haze.height
        const offset = Math.cos(t * 0.02 + i * 0.25 + j * 0.35) * amp
        if (i === 0) ctx.moveTo(x + offset, y + offset)
        else ctx.lineTo(x + offset, y + offset)
      }
      ctx.stroke()
    }
    ctx.restore()
    t += 2
    hazeAnimId = requestAnimationFrame(draw)
  }
  draw()
}

function syncHazeAnimation(circleNum) {
  const hv = Number(document.getElementById(`hazeSlider${circleNum}`)?.value || 0)
  if (hv > 0) startHazeAnimation(circleNum)
  else stopHazeAnimation(circleNum)
}

let resizeFillHandler = null

onMounted(() => {
  enforceSingleEye()
  // Always wire Can't see grid (previously skipped when URL had no params)
  initializeGlaucomaGrid()

  // Encrypted restore first if present
  const s = new URLSearchParams(window.location.search).get('s')
  if (s) {
    try {
      const decoded = xorDecrypt(decodeURIComponent(s))
      const state = JSON.parse(decoded)
      const firstGroup = getFirstCircleGroup()
      document.querySelectorAll('input[type="range"]').forEach(slider => {
        if (!firstGroup?.contains(slider)) return
        if (state[slider.id] !== undefined) {
          slider.value = state[slider.id]
          slider.dispatchEvent(new Event('input'))
        }
      })
      applyGlaucomaBinary(state.glaucoma1)
      enforceSingleEye()
      createFloaters('floaters1', state.floatersSlider1 ?? 0, state.sizeSlider1 ?? 10)
    } catch (e) {
      console.error('Failed to decrypt shared state:', e)
      restoreFromURL()
    }
  } else {
    restoreFromURL()
  }

  // Brightness
  const color1 = document.getElementById('colorSlider1')
  color1?.addEventListener('input', function () {
    const v = Number(this.value)
    const c = Math.round((255 * v) / 100)
    const circle = document.getElementById('circle1')
    if (circle) circle.style.backgroundColor = `rgb(${c},${c},${c})`
    updateBlur(1)
    updateURL()
  })

  // Blur sliders
  const blurIds = ['blurSlider1', 'blurUpCloseSlider1', 'blurFarAwaySlider1']
  blurIds.forEach(id => {
    const el = document.getElementById(id)
    el?.addEventListener('input', () => {
      updateBlur(1)
      updateURL()
    })
  })
  updateBlur(1)

  // Curtain
  const curtain1 = document.getElementById('curtainSlider1')
  curtain1?.addEventListener('input', function() {
    const radius = Number(this.value)
    const veil = document.getElementById('veil1')
    if (veil) veil.style.clipPath = `circle(${radius}% at 50% 0)`
    updateURL()
  })

  // Warp
  const warp1 = document.getElementById('warpSlider1')
  warp1?.addEventListener('input', function() {
    const scaleY = 1 - Number(this.value) / 100
    const scaleX = 1 + Number(this.value) / 200
    const fg = document.getElementById('foregroundText1')
    const bg = document.getElementById('backgroundText1')
    if (fg) fg.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`
    if (bg) bg.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`
    updateURL()
  })

  // Floaters and Floater Size
  const floaters1 = document.getElementById('floatersSlider1')
  const size1 = document.getElementById('sizeSlider1')
  function refreshFloaters1() {
    createFloaters('floaters1', floaters1?.value || 0, size1?.value || 10)
    updateURL()
  }
  floaters1?.addEventListener('input', refreshFloaters1)
  size1?.addEventListener('input', refreshFloaters1)
  refreshFloaters1()

  // Diagnose
  const goToDiagnosis = () => {
    updateURL()
    const search = window.location.search || ''
    router.push(`/diagnosis${search}`)
  }
  
  const diagnose = document.getElementById('diagnoseButton')
  const mobileDiagnose = document.getElementById('mobileDiagnoseButton')
  diagnose?.addEventListener('click', goToDiagnosis)
  mobileDiagnose?.addEventListener('click', goToDiagnosis)

  // Dark/Light toggle
  const darkToggle = document.getElementById('darkLightToggle')
  darkToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
    setDarkMode(document.body.classList.contains('dark-mode'))
  })

  // Share current config (encrypted)
  const shareConfig = async () => {
    const params = { view: 'single', glaucoma1: glaucomaBinaryFromState() }
    const group = getFirstCircleGroup()
    if (group) {
      group.querySelectorAll('input[type="range"]').forEach(slider => { params[slider.id] = slider.value })
    }
    const encrypted = xorEncrypt(JSON.stringify(params))
    const url = `${window.location.origin}${window.location.pathname}?s=${encodeURIComponent(encrypted)}`
    try {
      await navigator.clipboard.writeText(url)
      showMobileNotification('Copied!')
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  // Share search URL (plain parameterized)
  const shareSearchURL = async () => {
    const params = new URLSearchParams()
    const group = getFirstCircleGroup()
    if (group) {
      group.querySelectorAll('input[type="range"]').forEach(slider => {
        params.set(slider.id, slider.value)
      })
    }
    params.set('glaucoma1', glaucomaBinaryFromState())
    params.set('view', 'single')
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`
    try {
      await navigator.clipboard.writeText(url)
      showMobileNotification('Search URL copied!')
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }
  
  const saveBtn = document.getElementById('saveConfigButton')
  const mobileShareBtn = document.getElementById('mobileShareButton')
  const shareSearchBtn = document.getElementById('shareSearchButton')
  
  saveBtn?.addEventListener('click', shareConfig)
  mobileShareBtn?.addEventListener('click', shareConfig)
  shareSearchBtn?.addEventListener('click', shareSearchURL)

  const showMobileNotification = (message) => {
    const notification = document.getElementById('mobileNotification')
    const notificationText = document.getElementById('mobileNotificationText')
    if (notification && notificationText) {
      notificationText.textContent = message
      notification.classList.add('show')
      setTimeout(() => {
        notification.classList.remove('show')
      }, 2000)
    }
  }

  // Reset to defaults (eye 1 only)
  const resetDefaults = () => {
    const defaults = {
      colorSlider1: 100,
      blurSlider1: 0,
      blurUpCloseSlider1: 0,
      blurFarAwaySlider1: 0,
      curtainSlider1: 0,
      warpSlider1: 0,
      floatersSlider1: 0,
      sizeSlider1: 10,
      hazeSlider1: 0
    }
    Object.entries(defaults).forEach(([id, value]) => {
      const el = document.getElementById(id)
      if (el) { el.value = value; el.dispatchEvent(new Event('input')) }
    })
    applyGlaucomaBinary('0000000000000000')
    createFloaters('floaters1', 0, 10)
    window.history.replaceState({}, '', window.location.pathname)
    showMobileNotification('Reset!')
  }
  
  const resetBtn = document.getElementById('resetButton')
  const mobileResetBtn = document.getElementById('mobileResetButton')
  resetBtn?.addEventListener('click', resetDefaults)
  mobileResetBtn?.addEventListener('click', resetDefaults)

  // Haze animations — only run while intensity > 0
  const haze1 = document.getElementById('hazeSlider1')
  syncHazeAnimation(1)
  const updateFg = (circleNum) => {
    const hv = Number(document.getElementById(`hazeSlider${circleNum}`)?.value || 0)
    const fg = document.getElementById(`foregroundText${circleNum}`)
    if (fg) {
      const opacity = 1 - (hv / 100) * 0.95
      fg.style.setProperty('opacity', String(opacity), 'important')
    }
  }
  haze1?.addEventListener('input', () => {
    updateFg(1)
    updateBlur(1)
    syncHazeAnimation(1)
    updateURL()
  })
  updateFg(1)

  fillBackgroundText(1)
  resizeFillHandler = () => fillBackgroundText(1)
  window.addEventListener('resize', resizeFillHandler)
})

onUnmounted(() => {
  stopFloaterLoop()
  stopHazeAnimation(1)
  if (resizeFillHandler) {
    window.removeEventListener('resize', resizeFillHandler)
    resizeFillHandler = null
  }
})
</script>
