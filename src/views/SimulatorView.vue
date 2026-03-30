<template>
  <div>
    <!-- Mobile Action Buttons -->
    <div class="mobile-actions">
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
              <div class="glaucoma-grid">
                <div class="grid-row">
                  <div class="grid-cell" data-position="0,0"></div>
                  <div class="grid-cell" data-position="0,1"></div>
                  <div class="grid-cell" data-position="0,2"></div>
                  <div class="grid-cell" data-position="0,3"></div>
                </div>
                <div class="grid-row">
                  <div class="grid-cell" data-position="1,0"></div>
                  <div class="grid-cell" data-position="1,1"></div>
                  <div class="grid-cell" data-position="1,2"></div>
                  <div class="grid-cell" data-position="1,3"></div>
                </div>
                <div class="grid-row">
                  <div class="grid-cell" data-position="2,0"></div>
                  <div class="grid-cell" data-position="2,1"></div>
                  <div class="grid-cell" data-position="2,2"></div>
                  <div class="grid-cell" data-position="2,3"></div>
                </div>
                <div class="grid-row">
                  <div class="grid-cell" data-position="3,0"></div>
                  <div class="grid-cell" data-position="3,1"></div>
                  <div class="grid-cell" data-position="3,2"></div>
                  <div class="grid-cell" data-position="3,3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="circle-group" style="display: none;">
        <div class="circle" id="circle2">
          <img class="image-layer background-image" id="backgroundText2" :src="backgroundSceneImage" alt="Green field and mountain background" />
          <img class="image-layer foreground-image" id="foregroundText2" :src="foregroundDeerImage" alt="Deer in foreground" />
          <div class="veil" id="veil2"></div>
          <div class="floaters" id="floaters2"></div>
        </div>
        <div class="controls">
          <div class="slider-group">
            <label for="colorSlider2">Brightness</label>
            <input type="range" min="0" max="100" value="100" id="colorSlider2" aria-label="Adjust brightness">
          </div>
          <div class="slider-group">
            <label for="blurSlider2">Blur</label>
            <input type="range" min="0" max="10" value="0" id="blurSlider2" aria-label="Adjust blur">
          </div>
          <div class="slider-group">
            <label for="blurUpCloseSlider2">Blur Dog</label>
            <input type="range" min="0" max="10" value="0" id="blurUpCloseSlider2" aria-label="Adjust blur near">
          </div>
          <div class="slider-group">
            <label for="blurFarAwaySlider2">Blur Mountains</label>
            <input type="range" min="0" max="10" value="0" id="blurFarAwaySlider2" aria-label="Adjust blur far">
          </div>
          <div class="slider-group">
            <label for="curtainSlider2">Curtain</label>
            <input type="range" min="0" max="100" value="0" id="curtainSlider2" aria-label="Adjust curtain">
          </div>
          <div class="slider-group">
            <label for="warpSlider2">Warp</label>
            <input type="range" min="0" max="50" value="0" id="warpSlider2" aria-label="Adjust warp">
          </div>
          <div class="slider-group">
            <label for="floatersSlider2">Floaters</label>
            <input type="range" min="0" max="100" value="0" id="floatersSlider2" aria-label="Adjust floaters">
          </div>
          <div class="slider-group">
            <label for="sizeSlider2">Floater Size</label>
            <input type="range" min="1" max="20" value="10" id="sizeSlider2" aria-label="Adjust floater size">
          </div>
          <div class="slider-group">
            <label for="hazeSlider2">Haze</label>
            <input type="range" min="0" max="100" value="0" id="hazeSlider2" aria-label="Adjust haze">
          </div>
          <div class="glaucoma-section">
            <h3 class="glaucoma-label">Can't see</h3>
            <div class="glaucoma-grid">
              <div class="grid-row">
                <div class="grid-cell" data-position="0,0"></div>
                <div class="grid-cell" data-position="0,1"></div>
                <div class="grid-cell" data-position="0,2"></div>
                <div class="grid-cell" data-position="0,3"></div>
              </div>
              <div class="grid-row">
                <div class="grid-cell" data-position="1,0"></div>
                <div class="grid-cell" data-position="1,1"></div>
                <div class="grid-cell" data-position="1,2"></div>
                <div class="grid-cell" data-position="1,3"></div>
              </div>
              <div class="grid-row">
                <div class="grid-cell" data-position="2,0"></div>
                <div class="grid-cell" data-position="2,1"></div>
                <div class="grid-cell" data-position="2,2"></div>
                <div class="grid-cell" data-position="2,3"></div>
              </div>
              <div class="grid-row">
                <div class="grid-cell" data-position="3,0"></div>
                <div class="grid-cell" data-position="3,1"></div>
                <div class="grid-cell" data-position="3,2"></div>
                <div class="grid-cell" data-position="3,3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
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

function prevCarouselSlide() {
  const n = CAROUSEL_SLIDE_LABELS.length
  currentCarouselSlide.value = (currentCarouselSlide.value - 1 + n) % n
}

function nextCarouselSlide() {
  const n = CAROUSEL_SLIDE_LABELS.length
  currentCarouselSlide.value = (currentCarouselSlide.value + 1) % n
}

// Simple XOR + base64 for share link
const XOR_KEY = 42
function xorEncrypt(str) {
  return btoa(Array.from(str).map(c => String.fromCharCode(c.charCodeAt(0) ^ XOR_KEY)).join(''))
}
function xorDecrypt(str) {
  return atob(str).split('').map(c => String.fromCharCode(c.charCodeAt(0) ^ XOR_KEY)).join('')
}

function initializeGlaucomaGrid() {
  const groups = document.querySelectorAll('.circle-group')
  groups.forEach((group) => {
    const circle = group.querySelector('.circle')
    const grid = group.querySelector('.glaucoma-grid')
    if (!circle || !grid) return
    let overlay = circle.querySelector('.glaucoma-overlay')
    if (!overlay) {
      overlay = document.createElement('div')
      overlay.className = 'glaucoma-overlay'
      circle.appendChild(overlay)
    }
    const segments = new Map()
    grid.querySelectorAll('.grid-cell').forEach(cell => {
      const [row, col] = cell.dataset.position.split(',').map(Number)
      const segment = document.createElement('div')
      segment.className = 'glaucoma-segment'
      const segmentWidth = circle.offsetWidth / 4
      const segmentHeight = circle.offsetHeight / 4
      segment.style.width = `${segmentWidth}px`
      segment.style.height = `${segmentHeight}px`
      segment.style.left = `${col * segmentWidth}px`
      segment.style.top = `${row * segmentHeight}px`
      segment.style.opacity = '0'
      overlay.appendChild(segment)
      segments.set(cell, segment)
    })
    grid.querySelectorAll('.grid-cell').forEach(cell => {
      cell.addEventListener('click', () => {
        const segment = segments.get(cell)
        const isActive = cell.classList.toggle('active')
        if (segment) segment.style.opacity = isActive ? '1' : '0'
        updateURL()
      })
    })
  })
}

function createFloaters(containerId, intensity, size) {
  const container = document.getElementById(containerId)
  if (!container) return
  container.innerHTML = ''
  const circle = container.closest('.circle')
  const width = circle ? circle.offsetWidth : 400
  const height = circle ? circle.offsetHeight : 400
  const centerX = width / 2
  const centerY = height / 2
  const radiusPx = Number(size) // interpret as radius
  const diameterPx = Math.max(1, radiusPx * 2)
  const maxRadius = Math.min(width, height) / 2 - radiusPx
  const numFloaters = Math.round(Math.max(0, Number(intensity)) * 2) // 0..200
  const fragment = document.createDocumentFragment()
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
    animateFloater(floater, centerX, centerY, maxRadius)
  }
  container.appendChild(fragment)
}

function animateFloater(floater, centerX, centerY, maxRadius) {
  // random small velocity
  const baseSpeed = 0.3 + Math.random() * 0.5 // px per frame
  let direction = Math.random() * Math.PI * 2
  let wobblePhase = Math.random() * Math.PI * 2
  const wobbleAmp = 0.4 + Math.random() * 0.6

  function step() {
    const curX = parseFloat(floater.style.left)
    const curY = parseFloat(floater.style.top)
    wobblePhase += 0.03
    const dx = Math.cos(direction) * baseSpeed + Math.sin(wobblePhase) * wobbleAmp
    const dy = Math.sin(direction) * baseSpeed + Math.cos(wobblePhase) * wobbleAmp
    let nextX = curX + dx
    let nextY = curY + dy
    // bounce at circle boundary
    const relX = nextX + floater.offsetWidth / 2 - centerX
    const relY = nextY + floater.offsetHeight / 2 - centerY
    const dist = Math.sqrt(relX * relX + relY * relY)
    if (dist > maxRadius) {
      // reflect direction
      const normal = Math.atan2(relY, relX)
      direction = 2 * normal - direction + Math.PI
      // move slightly inward
      nextX = centerX + (maxRadius - 2) * Math.cos(normal) - floater.offsetWidth / 2
      nextY = centerY + (maxRadius - 2) * Math.sin(normal) - floater.offsetHeight / 2
    }
    floater.style.left = `${nextX}px`
    floater.style.top = `${nextY}px`
    floater.__raf = requestAnimationFrame(step)
  }
  floater.__raf = requestAnimationFrame(step)
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
    const grid = group.querySelector('.glaucoma-grid')
    if (grid) {
      const cells = Array.from(grid.querySelectorAll('.grid-cell'))
      let binary = ''
      cells.forEach(cell => { binary += cell.classList.contains('active') ? '1' : '0' })
      params.set('glaucoma1', binary)
    }
  }
  params.set('view', 'single')
  const newURL = `${window.location.pathname}?${params.toString()}`
  window.history.replaceState({}, '', newURL)
}

function enforceSingleEye() {
  const circleGroups = document.querySelectorAll('.circle-group')
  circleGroups.forEach((group, index) => {
    group.style.display = index === 0 ? 'flex' : 'none'
  })
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
    initializeGlaucomaGrid()
    const grid = group.querySelector('.glaucoma-grid')
    const binary = params.get('glaucoma1')
    if (grid && binary && binary.length === 16) {
      const cells = Array.from(grid.querySelectorAll('.grid-cell'))
      const circle = group.querySelector('.circle')
      const overlay = circle?.querySelector('.glaucoma-overlay')
      cells.forEach((cell, i) => {
        const segment = overlay?.querySelectorAll('.glaucoma-segment')[i]
        if (binary[i] === '1') {
          cell.classList.add('active')
          if (segment) segment.style.opacity = '1'
        } else {
          cell.classList.remove('active')
          if (segment) segment.style.opacity = '0'
        }
      })
    }
  }
  enforceSingleEye()
  // kick floaters after restore
  createFloaters('floaters1', document.getElementById('floatersSlider1')?.value || 0, document.getElementById('sizeSlider1')?.value || 10)
  createFloaters('floaters2', document.getElementById('floatersSlider2')?.value || 0, document.getElementById('sizeSlider2')?.value || 10)
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

// Haze animation helpers
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

const hazeAnimIds = [null, null]
function startHazeAnimation(circleNum) {
  const haze = createOrGetHazeOverlay(circleNum)
  const ctx = haze.getContext('2d')
  let t = 0
  function draw() {
    const slider = document.getElementById(`hazeSlider${circleNum}`)
    const hv = Number(slider?.value || 0)
    ctx.clearRect(0, 0, haze.width, haze.height)
    if (hv > 0) {
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
    }
    t += 2
    hazeAnimIds[circleNum - 1] = requestAnimationFrame(draw)
  }
  draw()
}

onMounted(() => {
  enforceSingleEye()
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
      initializeGlaucomaGrid()
      const grid = firstGroup?.querySelector('.glaucoma-grid')
      const binary = state.glaucoma1
      if (grid && binary && binary.length === 16) {
        const cells = Array.from(grid.querySelectorAll('.grid-cell'))
        const circle = firstGroup?.querySelector('.circle')
        const overlay = circle?.querySelector('.glaucoma-overlay')
        cells.forEach((cell, i) => {
          const segment = overlay?.querySelectorAll('.glaucoma-segment')[i]
          if (binary[i] === '1') {
            cell.classList.add('active')
            if (segment) segment.style.opacity = '1'
          } else {
            cell.classList.remove('active')
            if (segment) segment.style.opacity = '0'
          }
        })
      }
      enforceSingleEye()
      createFloaters('floaters1', state.floatersSlider1 ?? 0, state.sizeSlider1 ?? 10)
      createFloaters('floaters2', state.floatersSlider2 ?? 0, state.sizeSlider2 ?? 10)
    } catch (e) {
      console.error('Failed to decrypt shared state:', e)
      restoreFromURL()
    }
  } else {
    restoreFromURL()
  }

  // Brightness sliders
  const color1 = document.getElementById('colorSlider1')
  const color2 = document.getElementById('colorSlider2')
  color1?.addEventListener('input', function () {
    const v = Number(this.value)
    const c = Math.round((255 * v) / 100)
    const circle = document.getElementById('circle1')
    if (circle) circle.style.backgroundColor = `rgb(${c},${c},${c})`
    updateBlur(1)
    updateURL()
  })
  color2?.addEventListener('input', function () {
    const v = Number(this.value)
    const c = Math.round((255 * v) / 100)
    const circle = document.getElementById('circle2')
    if (circle) circle.style.backgroundColor = `rgb(${c},${c},${c})`
    updateBlur(2)
    updateURL()
  })

  // Blur sliders
  const blurIds = ['blurSlider1','blurSlider2','blurUpCloseSlider1','blurUpCloseSlider2','blurFarAwaySlider1','blurFarAwaySlider2']
  blurIds.forEach(id => {
    const el = document.getElementById(id)
    el?.addEventListener('input', () => {
      const circleNum = id.endsWith('1') ? 1 : 2
      updateBlur(circleNum)
      updateURL()
    })
  })
  updateBlur(1)
  updateBlur(2)

  // Curtain
  const curtain1 = document.getElementById('curtainSlider1')
  const curtain2 = document.getElementById('curtainSlider2')
  curtain1?.addEventListener('input', function() {
    const radius = Number(this.value)
    const veil = document.getElementById('veil1')
    if (veil) veil.style.clipPath = `circle(${radius}% at 50% 0)`
    updateURL()
  })
  curtain2?.addEventListener('input', function() {
    const radius = Number(this.value)
    const veil = document.getElementById('veil2')
    if (veil) veil.style.clipPath = `circle(${radius}% at 50% 0)`
    updateURL()
  })

  // Warp
  const warp1 = document.getElementById('warpSlider1')
  const warp2 = document.getElementById('warpSlider2')
  warp1?.addEventListener('input', function() {
    const scaleY = 1 - Number(this.value) / 100
    const scaleX = 1 + Number(this.value) / 200
    const fg = document.getElementById('foregroundText1')
    const bg = document.getElementById('backgroundText1')
    if (fg) fg.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`
    if (bg) bg.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`
    updateURL()
  })
  warp2?.addEventListener('input', function() {
    const scaleY = 1 - Number(this.value) / 100
    const scaleX = 1 + Number(this.value) / 200
    const fg = document.getElementById('foregroundText2')
    const bg = document.getElementById('backgroundText2')
    if (fg) fg.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`
    if (bg) bg.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`
    updateURL()
  })

  // Floaters and Floater Size
  const floaters1 = document.getElementById('floatersSlider1')
  const size1 = document.getElementById('sizeSlider1')
  const floaters2 = document.getElementById('floatersSlider2')
  const size2 = document.getElementById('sizeSlider2')
  function refreshFloaters1() {
    createFloaters('floaters1', floaters1?.value || 0, size1?.value || 10)
    updateURL()
  }
  function refreshFloaters2() {
    createFloaters('floaters2', floaters2?.value || 0, size2?.value || 10)
    updateURL()
  }
  floaters1?.addEventListener('input', refreshFloaters1)
  size1?.addEventListener('input', refreshFloaters1)
  floaters2?.addEventListener('input', refreshFloaters2)
  size2?.addEventListener('input', refreshFloaters2)
  // initialize now
  refreshFloaters1()
  refreshFloaters2()

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
    const params = { view: 'single' }
    const group = getFirstCircleGroup()
    if (group) {
      group.querySelectorAll('input[type="range"]').forEach(slider => { params[slider.id] = slider.value })
      const grid = group.querySelector('.glaucoma-grid')
      if (grid) {
        const cells = Array.from(grid.querySelectorAll('.grid-cell'))
        let binary = ''
        cells.forEach(cell => { binary += cell.classList.contains('active') ? '1' : '0' })
        params.glaucoma1 = binary
      }
    }
    const encrypted = xorEncrypt(JSON.stringify(params))
    const url = `${window.location.origin}${window.location.pathname}?s=${encodeURIComponent(encrypted)}`
    try {
      await navigator.clipboard.writeText(url)
      // Show mobile notification
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
      const grid = group.querySelector('.glaucoma-grid')
      if (grid) {
        const cells = Array.from(grid.querySelectorAll('.grid-cell'))
        let binary = ''
        cells.forEach(cell => { binary += cell.classList.contains('active') ? '1' : '0' })
        params.set('glaucoma1', binary)
      }
    }
    params.set('view', 'single')
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`
    try {
      await navigator.clipboard.writeText(url)
      // Show mobile notification
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

  // Mobile notification function
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

  // Reset to defaults
  const resetDefaults = () => {
    const defaults = {
      colorSlider1: 100, colorSlider2: 100,
      blurSlider1: 0, blurSlider2: 0,
      blurUpCloseSlider1: 0, blurUpCloseSlider2: 0,
      blurFarAwaySlider1: 0, blurFarAwaySlider2: 0,
      curtainSlider1: 0, curtainSlider2: 0,
      warpSlider1: 0, warpSlider2: 0,
      floatersSlider1: 0, floatersSlider2: 0,
      sizeSlider1: 10, sizeSlider2: 10,
      hazeSlider1: 0, hazeSlider2: 0
    }
    Object.entries(defaults).forEach(([id, value]) => {
      const el = document.getElementById(id)
      if (el) { el.value = value; el.dispatchEvent(new Event('input')) }
    })
    // clear glaucoma
    document.querySelectorAll('.glaucoma-grid').forEach(grid => {
      grid.querySelectorAll('.grid-cell').forEach(cell => cell.classList.remove('active'))
    })
    document.querySelectorAll('.glaucoma-overlay').forEach(overlay => {
      overlay.querySelectorAll('.glaucoma-segment').forEach(seg => { seg.style.opacity = '0' })
    })
    // refresh floaters
    createFloaters('floaters1', 0, 10)
    createFloaters('floaters2', 0, 10)
    // clear URL
    window.history.replaceState({}, '', window.location.pathname)
    
    // Show mobile notification
    showMobileNotification('Reset!')
  }
  
  const resetBtn = document.getElementById('resetButton')
  const mobileResetBtn = document.getElementById('mobileResetButton')
  resetBtn?.addEventListener('click', resetDefaults)
  mobileResetBtn?.addEventListener('click', resetDefaults)

  // Haze animations
  const haze1 = document.getElementById('hazeSlider1')
  const haze2 = document.getElementById('hazeSlider2')
  startHazeAnimation(1)
  startHazeAnimation(2)
  const updateFg = (circleNum) => {
    const hv = Number(document.getElementById(`hazeSlider${circleNum}`)?.value || 0)
    const fg = document.getElementById(`foregroundText${circleNum}`)
    if (fg) {
      const opacity = 1 - (hv / 100) * 0.95
      fg.style.setProperty('opacity', String(opacity), 'important')
    }
  }
  haze1?.addEventListener('input', () => { updateFg(1); updateBlur(1); updateURL() })
  haze2?.addEventListener('input', () => { updateFg(2); updateBlur(2); updateURL() })
  updateFg(1)
  updateFg(2)

  // Fill background text to cover eyes
  const fillAll = () => { fillBackgroundText(1); fillBackgroundText(2) }
  fillAll()
  window.addEventListener('resize', fillAll)
})
</script>

