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
      <button class="mobile-action-btn" id="mobileShareSearchButton" title="Share search URL">
        <i class="fas fa-link action-icon"></i>
      </button>
      <button class="mobile-action-btn" id="mobileDiagnoseButton" title="Get diagnosis">
        <i class="fas fa-search action-icon"></i>
      </button>
    </div>
    
    <!-- Mobile Notification Popup -->
    <div class="mobile-notification" id="mobileNotification">
      <span id="mobileNotificationText"></span>
    </div>
    
    <div class="side-buttons-card">
      <div class="side-vertical-buttons">
        <button class="view-toggle" id="viewToggle" title="Toggle between single-eye and double-eye simulation view">Switch to Single View</button>
        <button class="reset-button" id="resetButton" title="Reset all settings to default">Reset</button>
        <button class="save-config-button" id="saveConfigButton" title="Copy a link to your current simulation settings">Share</button>
        <button class="share-search-button" id="shareSearchButton" title="Copy a readable parameterized URL for search purposes">Share Search</button>
        <button class="diagnose-button" id="diagnoseButton" title="Get a suggested diagnosis based on your current settings">Diagnose</button>
        <button class="dark-light-toggle" id="darkLightToggle" title="Toggle dark/light mode">Dark</button>
      </div>
    </div>
    <div class="circles-container" id="circlesContainer">
      <div class="circle-group">
        <div class="circle" id="circle1">
          <div class="text background-text" id="backgroundText1">
            <div class="t-row">Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far</div>
            <div class="t-row t-offset">Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far</div>
            <div class="t-row">Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far</div>
            <div class="t-row t-offset">Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far</div>
            <div class="t-row">Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far</div>
            <div class="t-row t-offset">Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far</div>
          </div>
          <div class="text foreground-text" id="foregroundText1">Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near</div>
          <div class="veil" id="veil1"></div>
          <div class="floaters" id="floaters1"></div>
        </div>
        <div class="controls">
          <div class="slider-group">
            <label for="colorSlider1">Brightness</label>
            <input type="range" min="0" max="100" value="100" id="colorSlider1" aria-label="Adjust brightness">
          </div>
          <div class="slider-group">
            <label for="blurSlider1">Blur</label>
            <input type="range" min="0" max="10" value="0" id="blurSlider1" aria-label="Adjust blur">
          </div>
          <div class="slider-group">
            <label for="blurUpCloseSlider1">Blur Near</label>
            <input type="range" min="0" max="10" value="0" id="blurUpCloseSlider1" aria-label="Adjust blur near">
          </div>
          <div class="slider-group">
            <label for="blurFarAwaySlider1">Blur Far</label>
            <input type="range" min="0" max="10" value="0" id="blurFarAwaySlider1" aria-label="Adjust blur far">
          </div>
          <div class="slider-group">
            <label for="curtainSlider1">Curtain</label>
            <input type="range" min="0" max="100" value="0" id="curtainSlider1" aria-label="Adjust curtain">
          </div>
          <div class="slider-group">
            <label for="warpSlider1">Warp</label>
            <input type="range" min="0" max="50" value="0" id="warpSlider1" aria-label="Adjust warp">
          </div>
          <div class="slider-group">
            <label for="floatersSlider1">Floaters</label>
            <input type="range" min="0" max="100" value="0" id="floatersSlider1" aria-label="Adjust floaters">
          </div>
          <div class="slider-group">
            <label for="sizeSlider1">Floater Size</label>
            <input type="range" min="1" max="20" value="10" id="sizeSlider1" aria-label="Adjust floater size">
          </div>
          <div class="slider-group">
            <label for="hazeSlider1">Haze</label>
            <input type="range" min="0" max="100" value="0" id="hazeSlider1" aria-label="Adjust haze">
          </div>
          <div class="glaucoma-section">
            <h3 class="glaucoma-label">Sight Loss</h3>
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
      <div class="circle-group">
        <div class="circle" id="circle2">
          <div class="text background-text" id="backgroundText2">
            <div class="t-row">Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far</div>
            <div class="t-row t-offset">Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far</div>
            <div class="t-row">Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far</div>
            <div class="t-row t-offset">Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far</div>
            <div class="t-row">Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far</div>
            <div class="t-row t-offset">Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far</div>
          </div>
          <div class="text foreground-text" id="foregroundText2">Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near Near</div>
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
            <label for="blurUpCloseSlider2">Blur Near</label>
            <input type="range" min="0" max="10" value="0" id="blurUpCloseSlider2" aria-label="Adjust blur near">
          </div>
          <div class="slider-group">
            <label for="blurFarAwaySlider2">Blur Far</label>
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
            <h3 class="glaucoma-label">Sight Loss</h3>
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
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

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

function updateURL() {
  const params = new URLSearchParams()
  const sliders = document.querySelectorAll('input[type="range"]')
  sliders.forEach(slider => {
    params.set(slider.id, slider.value)
  })
  // glaucoma state
  document.querySelectorAll('.glaucoma-grid').forEach((grid, gridIndex) => {
    const cells = Array.from(grid.querySelectorAll('.grid-cell'))
    let binary = ''
    cells.forEach(cell => { binary += cell.classList.contains('active') ? '1' : '0' })
    params.set(`glaucoma${gridIndex + 1}`, binary)
  })
  const view = document.querySelectorAll('.circle-group').length === 2 && (document.querySelectorAll('.circle-group')[1].getAttribute('style') || '').includes('display: none') ? 'single' : 'double'
  params.set('view', view)
  const newURL = `${window.location.pathname}?${params.toString()}`
  window.history.replaceState({}, '', newURL)
}

function restoreFromURL() {
  const params = new URLSearchParams(window.location.search)
  if (params.size === 0) return
  const sliders = document.querySelectorAll('input[type="range"]')
  sliders.forEach(slider => {
    const value = params.get(slider.id)
    if (value !== null) {
      slider.value = value
      slider.dispatchEvent(new Event('input'))
    }
  })
  // restore glaucoma
  initializeGlaucomaGrid()
  document.querySelectorAll('.glaucoma-grid').forEach((grid, gridIndex) => {
    const binary = params.get(`glaucoma${gridIndex + 1}`)
    if (binary && binary.length === 16) {
      const cells = Array.from(grid.querySelectorAll('.grid-cell'))
      const circle = grid.closest('.circle-group')?.querySelector('.circle')
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
  })
  const viewState = params.get('view')
  const viewToggle = document.getElementById('viewToggle')
  const circleGroups = document.querySelectorAll('.circle-group')
  if (viewState === 'single') {
    circleGroups.forEach((group, index) => {
      group.style.display = index === 1 ? 'none' : 'flex'
    })
    if (viewToggle) viewToggle.textContent = 'One Eye'
  }
  // kick floaters after restore
  createFloaters('floaters1', document.getElementById('floatersSlider1')?.value || 0, document.getElementById('sizeSlider1')?.value || 10)
  createFloaters('floaters2', document.getElementById('floatersSlider2')?.value || 0, document.getElementById('sizeSlider2')?.value || 10)
}

function updateBlur(circleNum) {
  const blur = Number(document.getElementById(`blurSlider${circleNum}`)?.value || 0)
  const blurUpClose = Number(document.getElementById(`blurUpCloseSlider${circleNum}`)?.value || 0)
  const blurFarAway = Number(document.getElementById(`blurFarAwaySlider${circleNum}`)?.value || 0)
  const fg = document.getElementById(`foregroundText${circleNum}`)
  const bg = document.getElementById(`backgroundText${circleNum}`)
  if (fg) fg.style.filter = `blur(${blur + blurUpClose}px)`
  if (bg) bg.style.filter = `blur(${blur + blurFarAway}px)`
}

function fillBackgroundText(circleNum) {
  const circle = document.getElementById(`circle${circleNum}`)
  const container = document.getElementById(`backgroundText${circleNum}`)
  if (!circle || !container) return
  // Clear existing children
  container.innerHTML = ''
  const targetHeight = circle.clientHeight
  // Build rows until we exceed target height
  let total = 0
  let rowIndex = 0
  // Create a measuring row first
  const measure = document.createElement('div')
  measure.className = 't-row'
  measure.textContent = 'Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far'
  container.appendChild(measure)
  const rowHeight = measure.clientHeight || 20
  container.innerHTML = ''
  while (total < targetHeight + rowHeight) {
    const row = document.createElement('div')
    row.className = `t-row${rowIndex % 2 ? ' t-offset' : ''}`
    row.textContent = 'Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far Far'
    container.appendChild(row)
    total += rowHeight
    rowIndex++
  }
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
  // Default dark mode on
  document.body.classList.add('dark-mode')
  
  // Set mobile default to single-eye view
  const isMobile = window.innerWidth <= 768
  if (isMobile) {
    const circleGroups = document.querySelectorAll('.circle-group')
    circleGroups.forEach((group, index) => {
      group.style.display = index === 1 ? 'none' : 'flex'
    })
    const viewToggle = document.getElementById('viewToggle')
    if (viewToggle) viewToggle.textContent = 'Two Eyes'
  }
  // Encrypted restore first if present
  const s = new URLSearchParams(window.location.search).get('s')
  if (s) {
    try {
      const decoded = xorDecrypt(decodeURIComponent(s))
      const state = JSON.parse(decoded)
      document.querySelectorAll('input[type="range"]').forEach(slider => {
        if (state[slider.id] !== undefined) {
          slider.value = state[slider.id]
          slider.dispatchEvent(new Event('input'))
        }
      })
      initializeGlaucomaGrid()
      document.querySelectorAll('.glaucoma-grid').forEach((grid, gridIndex) => {
        const binary = state[`glaucoma${gridIndex + 1}`]
        if (binary && binary.length === 16) {
          const cells = Array.from(grid.querySelectorAll('.grid-cell'))
          const circle = grid.closest('.circle-group')?.querySelector('.circle')
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
      })
      const viewToggle = document.getElementById('viewToggle')
      const circleGroups = document.querySelectorAll('.circle-group')
      if (state.view === 'single') {
        circleGroups.forEach((group, index) => { group.style.display = index === 1 ? 'none' : 'flex' })
        if (viewToggle) viewToggle.textContent = 'One Eye'
      } else {
        circleGroups.forEach(group => { group.style.display = 'flex' })
        if (viewToggle) viewToggle.textContent = 'Two Eyes'
      }
      createFloaters('floaters1', state.floatersSlider1 ?? 0, state.sizeSlider1 ?? 10)
      createFloaters('floaters2', state.floatersSlider2 ?? 0, state.sizeSlider2 ?? 10)
    } catch (e) {
      console.error('Failed to decrypt shared state:', e)
      restoreFromURL()
    }
  } else {
    restoreFromURL()
  }

  // View toggle
  let isSingleView = false
  const viewToggle = document.getElementById('viewToggle')
  const mobileViewToggle = document.getElementById('mobileViewToggle')
  const circleGroups = document.querySelectorAll('.circle-group')
  
  const toggleView = () => {
    isSingleView = !isSingleView
    const buttonText = isSingleView ? 'One Eye' : 'Two Eyes'
    if (viewToggle) viewToggle.textContent = buttonText
    circleGroups.forEach((group, index) => {
      group.style.display = isSingleView && index === 1 ? 'none' : 'flex'
    })
    updateURL()
  }
  
  if (viewToggle) {
    viewToggle.textContent = isSingleView ? 'One Eye' : 'Two Eyes'
    viewToggle.addEventListener('click', toggleView)
  }
  
  // Mobile view toggle removed - mobile always shows single eye

  // Brightness sliders
  const color1 = document.getElementById('colorSlider1')
  const color2 = document.getElementById('colorSlider2')
  color1?.addEventListener('input', function () {
    const v = Number(this.value)
    const c = Math.round((255 * v) / 100)
    const circle = document.getElementById('circle1')
    if (circle) circle.style.backgroundColor = `rgb(${c},${c},${c})`
    updateURL()
  })
  color2?.addEventListener('input', function () {
    const v = Number(this.value)
    const c = Math.round((255 * v) / 100)
    const circle = document.getElementById('circle2')
    if (circle) circle.style.backgroundColor = `rgb(${c},${c},${c})`
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
    const radius = Number(this.value) * 2
    const veil = document.getElementById('veil1')
    if (veil) veil.style.clipPath = `circle(${radius}% at 50% 0)`
    updateURL()
  })
  curtain2?.addEventListener('input', function() {
    const radius = Number(this.value) * 2
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
    router.push('/diagnosis')
  }
  
  const diagnose = document.getElementById('diagnoseButton')
  const mobileDiagnose = document.getElementById('mobileDiagnoseButton')
  diagnose?.addEventListener('click', goToDiagnosis)
  mobileDiagnose?.addEventListener('click', goToDiagnosis)

  // Dark/Light toggle
  const darkToggle = document.getElementById('darkLightToggle')
  darkToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
  })

  // Share current config (encrypted)
  const shareConfig = async () => {
    const params = {}
    document.querySelectorAll('input[type="range"]').forEach(slider => { params[slider.id] = slider.value })
    document.querySelectorAll('.glaucoma-grid').forEach((grid, gridIndex) => {
      const cells = Array.from(grid.querySelectorAll('.grid-cell'))
      let binary = ''
      cells.forEach(cell => { binary += cell.classList.contains('active') ? '1' : '0' })
      params[`glaucoma${gridIndex + 1}`] = binary
    })
    const view = document.querySelectorAll('.circle-group').length === 2 && (document.querySelectorAll('.circle-group')[1].getAttribute('style') || '').includes('display: none') ? 'single' : 'double'
    params.view = view
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
    document.querySelectorAll('input[type="range"]').forEach(slider => {
      params.set(slider.id, slider.value)
    })
    document.querySelectorAll('.glaucoma-grid').forEach((grid, gridIndex) => {
      const cells = Array.from(grid.querySelectorAll('.grid-cell'))
      let binary = ''
      cells.forEach(cell => { binary += cell.classList.contains('active') ? '1' : '0' })
      params.set(`glaucoma${gridIndex + 1}`, binary)
    })
    const view = document.querySelectorAll('.circle-group').length === 2 && (document.querySelectorAll('.circle-group')[1].getAttribute('style') || '').includes('display: none') ? 'single' : 'double'
    params.set('view', view)
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
  const mobileShareSearchBtn = document.getElementById('mobileShareSearchButton')
  
  saveBtn?.addEventListener('click', shareConfig)
  mobileShareBtn?.addEventListener('click', shareConfig)
  shareSearchBtn?.addEventListener('click', shareSearchURL)
  mobileShareSearchBtn?.addEventListener('click', shareSearchURL)

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
      const minColor = 34, maxColor = 238
      const colorVal = Math.round(minColor + (maxColor - minColor) * (hv / 100))
      const opacity = 1 - (hv / 100) * 0.95
      fg.style.setProperty('color', `rgb(${colorVal},${colorVal},${colorVal})`, 'important')
      fg.style.setProperty('opacity', String(opacity), 'important')
    }
  }
  haze1?.addEventListener('input', () => { updateFg(1); updateURL() })
  haze2?.addEventListener('input', () => { updateFg(2); updateURL() })
  updateFg(1)
  updateFg(2)

  // Fill background text to cover eyes
  const fillAll = () => { fillBackgroundText(1); fillBackgroundText(2) }
  fillAll()
  window.addEventListener('resize', fillAll)
})
</script>

