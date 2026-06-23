const fs = require('fs');

const htmlPath = 'index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// --- 1. CSS Injection ---
const styleEndTag = '  </style>';
const styleIndex = html.indexOf(styleEndTag);
if (styleIndex === -1) {
  console.error('Error: No se encontró </style>');
  process.exit(1);
}

const cssContent = `
    /* ==========================================================================
       BLOQUES 2 Y 3: ESPIRITUALIDAD Y JUEGO DEL AMOR
       ========================================================================== */
    .game-overlay {
      position: fixed;
      top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(5, 5, 12, 0.95);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      z-index: 99999;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 1;
      transition: opacity 0.5s ease;
    }
    
    /* Espiritualidad - Carta */
    .overlay-card-table {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
    .overlay-speech-bubble {
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.15);
      padding: 15px 25px;
      border-radius: 20px;
      color: #fff;
      font-size: 1.15rem;
      text-align: center;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      max-width: 500px;
    }
    .card-container {
      perspective: 1000px;
      width: 160px;
      height: 250px;
    }
    .tarot-card {
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      cursor: pointer;
    }
    .tarot-card.flipped {
      transform: rotateY(180deg);
    }
    .card-face {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: var(--font-ui);
      font-weight: bold;
      border: 2px solid;
    }
    .card-back {
      background: linear-gradient(135deg, #1f1135 0%, #0d0614 100%);
      border-color: var(--color-neon-purple);
      box-shadow: 0 0 15px rgba(208, 0, 255, 0.3);
      color: var(--color-neon-purple);
      font-size: 3rem;
    }
    .card-front {
      background: linear-gradient(135deg, #0b1a30 0%, #020710 100%);
      border-color: var(--color-neon-blue);
      box-shadow: 0 0 20px rgba(0, 240, 255, 0.5);
      color: var(--color-neon-blue);
      transform: rotateY(180deg);
      font-size: 1.5rem;
      gap: 10px;
    }
    
    /* Espiritualidad - Jairo Slideshow */
    .jairo-slideshow-window {
      width: 90%;
      max-width: 650px;
      background: rgba(12, 8, 24, 0.95);
      border: 1px solid var(--color-neon-purple);
      box-shadow: 0 0 30px rgba(208, 0, 255, 0.25);
      border-radius: 12px;
      padding: 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
    .jairo-slideshow-window h4 {
      margin: 0;
      color: var(--color-neon-purple);
      text-shadow: 0 0 10px rgba(208, 0, 255, 0.4);
      font-family: var(--font-display);
      letter-spacing: 1px;
    }
    .slideshow-stage {
      width: 100%;
      height: 250px;
      position: relative;
      overflow: hidden;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
    .jairo-slide {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.5s ease-in-out;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      box-sizing: border-box;
    }
    .jairo-slide.active {
      opacity: 1;
      pointer-events: auto;
    }
    .slide-art {
      font-size: 4.5rem;
      margin-bottom: 15px;
      animation: float 3s ease-in-out infinite;
      letter-spacing: 8px;
    }
    .slide-caption {
      color: rgba(255, 255, 255, 0.85);
      font-size: 0.95rem;
      text-align: center;
      line-height: 1.4;
      margin: 0;
    }
    .slideshow-controls {
      display: flex;
      gap: 15px;
      width: 100%;
      justify-content: space-between;
    }
    
    /* Espiritualidad - Alakazam Spell */
    .conjuro-window, .resolucion-window, .tv-frame, .vaca-window, .ia-selector-window, .chat-window, .tarot-window, .ouija-window {
      width: 90%;
      max-width: 600px;
      background: rgba(10, 10, 25, 0.95);
      border: 1px solid var(--color-neon-blue);
      box-shadow: 0 0 30px rgba(0, 240, 255, 0.25);
      border-radius: 12px;
      padding: 25px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      box-sizing: border-box;
    }
    .conjuro-window h4, .resolucion-window h4, .ia-selector-window h4, .chat-window h4, .tarot-window h4, .ouija-window h4 {
      margin: 0;
      color: var(--color-neon-blue);
      text-shadow: 0 0 10px rgba(0, 240, 255, 0.4);
      text-align: center;
    }
    .alakazam-doll-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }
    .alakazam-doll {
      font-size: 4rem;
      filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.4));
      animation: float 2.5s ease-in-out infinite;
    }
    .doll-label {
      font-size: 0.8rem;
      color: var(--color-gold);
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .spell-copy-box {
      background: rgba(255,255,255,0.05);
      border: 1px dashed rgba(255,255,255,0.2);
      border-radius: 6px;
      padding: 10px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .spell-label {
      font-size: 0.85rem;
      color: rgba(255,255,255,0.5);
    }
    .spell-copy-box code {
      font-size: 1.25rem;
      font-weight: bold;
      color: var(--color-neon-blue);
      font-family: monospace;
      letter-spacing: 1px;
    }
    .btn-copy {
      background: rgba(0, 240, 255, 0.15);
      border: 1px solid var(--color-neon-blue);
      color: var(--color-neon-blue);
      padding: 4px 10px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.8rem;
    }
    .btn-copy:hover {
      background: var(--color-neon-blue);
      color: #000;
    }
    .system-val-box {
      background: rgba(57, 255, 20, 0.05);
      border: 2px solid #39ff14;
      box-shadow: 0 0 15px rgba(57, 255, 20, 0.25);
      border-radius: 8px;
      padding: 12px;
      color: #39ff14;
      font-family: monospace;
      font-size: 0.85rem;
      animation: pulse-border 2s infinite;
    }
    .sys-header {
      font-weight: bold;
      border-bottom: 1px solid rgba(57, 255, 20, 0.3);
      padding-bottom: 4px;
      margin-bottom: 6px;
    }
    .spell-input-area, .rescue-input-area {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .spell-input-area input, .rescue-input-area input {
      background: rgba(0,0,0,0.5);
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 6px;
      padding: 12px;
      color: #fff;
      font-size: 1.1rem;
      text-align: center;
    }
    .spell-input-area input:focus, .rescue-input-area input:focus {
      outline: none;
      border-color: var(--color-neon-blue);
      box-shadow: 0 0 10px rgba(0,240,255,0.3);
    }
    .error-text {
      color: #ff3355;
      font-size: 0.85rem;
      text-align: center;
    }
    
    /* Espiritualidad - Rescate Antílope */
    .glitch-screen {
      background: rgba(255, 51, 85, 0.1);
      border: 1px solid #ff3355;
      padding: 15px;
      border-radius: 8px;
      text-align: center;
      animation: glitch-flash 0.3s infinite;
    }
    .glitch-text {
      font-size: 1.5rem;
      font-weight: bold;
      color: #ff3355;
      letter-spacing: 2px;
    }
    .glitch-action {
      font-size: 0.9rem;
      color: #fff;
      margin-top: 5px;
    }
    .rescue-timer-container {
      width: 100%;
      height: 20px;
      background: rgba(255,255,255,0.1);
      border-radius: 10px;
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.15);
    }
    .timer-bar {
      height: 100%;
      background: linear-gradient(90deg, #ff3355, #ff5500);
      width: 100%;
      border-radius: 10px;
      transition: width 0.1s linear;
    }
    .rescue-timer-text {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-weight: bold;
      font-size: 0.8rem;
    }
    .speech-tip {
      font-style: italic;
      color: var(--color-gold);
      text-align: center;
      margin: 0;
    }
    
    /* Final Secreto - Tomas Falsas & Créditos */
    .credits-tv-frame {
      width: 95%;
      max-width: 800px;
      height: 90vh;
      background: #000;
      border: 3px solid var(--color-neon-blue);
      border-radius: 16px;
      box-shadow: 0 0 40px rgba(0, 240, 255, 0.3), inset 0 0 20px rgba(0, 240, 255, 0.2);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .credits-container {
      flex: 1;
      position: relative;
      overflow-y: hidden;
      padding: 40px 20px;
    }
    .credits-scroller {
      position: absolute;
      width: calc(100% - 40px);
      left: 20px;
      top: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
      animation: scroll-credits 28s linear forwards;
    }
    .credits-scroller h2 {
      color: var(--color-gold);
      text-shadow: 0 0 15px rgba(255, 215, 0, 0.4);
      margin: 0;
      font-size: 2.2rem;
      text-align: center;
    }
    .credits-intro {
      color: rgba(255,255,255,0.85);
      text-align: center;
      font-size: 1.1rem;
      max-width: 600px;
    }
    .making-of-grid {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 100%;
      max-width: 600px;
    }
    .bloopers-card {
      background: rgba(255, 255, 255, 0.05);
      border-left: 3px solid var(--color-neon-blue);
      padding: 12px 18px;
      border-radius: 0 6px 6px 0;
    }
    .bloopers-card h4 {
      margin: 0 0 5px 0;
      color: var(--color-neon-blue);
    }
    .bloopers-card p {
      margin: 0;
      font-size: 0.9rem;
      color: rgba(255,255,255,0.75);
    }
    .credits-roles {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 100%;
      max-width: 500px;
      border-top: 1px solid rgba(255,255,255,0.1);
      padding-top: 25px;
    }
    .role-row {
      display: flex;
      justify-content: space-between;
      font-size: 1rem;
    }
    .role {
      color: rgba(255,255,255,0.5);
    }
    .name {
      color: #fff;
      font-weight: bold;
    }
    .credits-thanks {
      margin-top: 40px;
      color: var(--color-neon-purple) !important;
      text-shadow: 0 0 10px rgba(208, 0, 255, 0.4) !important;
    }
    .credits-footer {
      padding: 20px;
      border-top: 1px solid rgba(255,255,255,0.1);
      display: flex;
      justify-content: center;
      background: rgba(0,0,0,0.8);
      z-index: 10;
    }
    
    /* Bloque 3: Vaca en el tejado */
    .speech-bubble-vaca {
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.15);
      padding: 15px 25px;
      border-radius: 20px;
      color: #fff;
      font-size: 1.15rem;
      text-align: center;
      max-width: 500px;
    }
    .vaca-scene {
      width: 100%;
      height: 180px;
      background: linear-gradient(to bottom, #050b1c 0%, #15112c 100%);
      border-radius: 10px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid rgba(255, 255, 255, 0.08);
      overflow: hidden;
    }
    .tejado-roof {
      font-size: 10rem;
      position: absolute;
      bottom: -40px;
    }
    .wobbling-cow {
      font-size: 3.5rem;
      position: absolute;
      bottom: 60px;
      animation: float 2s ease-in-out infinite;
    }
    
    /* Bloque 3: Selector IA */
    .ia-selector-window {
      max-width: 700px;
    }
    .ia-selector-subtitle {
      font-size: 0.85rem;
      color: rgba(255,255,255,0.5);
      text-align: center;
      margin: 0 0 10px 0;
    }
    .ia-grid {
      display: flex;
      flex-direction: column;
      gap: 15px;
      max-height: 420px;
      overflow-y: auto;
      padding-right: 8px;
    }
    .ia-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .ia-group h5 {
      margin: 0;
      color: var(--color-neon-blue);
      font-size: 0.85rem;
      border-bottom: 1px solid rgba(0, 240, 255, 0.2);
      padding-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .ia-cards-row {
      display: flex;
      gap: 12px;
    }
    .ia-card {
      flex: 1;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 8px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .ia-card:hover {
      background: rgba(0, 240, 255, 0.05);
      border-color: var(--color-neon-blue);
      box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
      transform: translateY(-2px);
    }
    .ia-avatar {
      font-size: 2.2rem;
      margin-bottom: 6px;
    }
    .ia-name {
      font-weight: bold;
      color: #fff;
      font-size: 0.9rem;
      margin-bottom: 4px;
    }
    .ia-desc {
      font-size: 0.75rem;
      color: rgba(255,255,255,0.6);
      line-height: 1.3;
    }
    
    /* Bloque 3: Chat de Sabotaje IA */
    .chat-video-area {
      width: 100%;
      height: 140px;
      background: #02040c;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
    }
    .julia-ia-hologram {
      font-size: 4rem;
      animation: rotateHolo 4s linear infinite;
      filter: drop-shadow(0 0 12px rgba(0, 240, 255, 0.6));
    }
    .hologram-indicator {
      font-size: 0.75rem;
      color: #39ff14;
      font-family: monospace;
      animation: blink 1s steps(2, start) infinite;
    }
    .chat-narrative {
      background: rgba(0,0,0,0.4);
      padding: 12px;
      border-radius: 6px;
      font-size: 0.9rem;
      line-height: 1.4;
      color: #fff;
      border-left: 3px solid var(--color-neon-blue);
    }
    .toxic-spam-container {
      width: 100%;
      height: 160px;
      background: rgba(0,0,0,0.6);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      position: relative;
      overflow: hidden;
    }
    .toxic-msg-bubble {
      position: absolute;
      background: #ff3355;
      color: #fff;
      padding: 6px 12px;
      border-radius: 12px;
      font-size: 0.8rem;
      max-width: 70%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      box-shadow: 0 3px 10px rgba(255,51,85,0.3);
      animation: popupMsg 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }
    .btn-block-red {
      width: 100%;
      background: #ff3355;
      border: 2px solid #ff3355;
      color: #fff;
      padding: 14px;
      font-size: 1.1rem;
      font-weight: bold;
      border-radius: 8px;
      cursor: pointer;
      text-align: center;
      animation: pulse-button-red 1.2s infinite;
    }
    
    /* Bloque 3: Tarot Baraja Española */
    .tarot-instruction {
      font-size: 0.9rem;
      color: rgba(255,255,255,0.7);
      text-align: center;
      margin: 0;
    }
    .tarot-cards-row {
      display: flex;
      justify-content: center;
      gap: 25px;
    }
    .spanish-card {
      width: 90px;
      height: 145px;
      perspective: 1000px;
      cursor: pointer;
      position: relative;
    }
    .spanish-card .card-face {
      border: 1.5px solid;
    }
    .spanish-card .card-back {
      background: linear-gradient(135deg, #441111 0%, #150202 100%);
      border-color: #ff3355;
      color: #ff3355;
      box-shadow: 0 0 10px rgba(255, 51, 85, 0.2);
    }
    .spanish-card .card-front {
      background: #fff;
      color: #000;
      border-color: var(--color-gold);
      box-shadow: 0 0 15px rgba(255, 215, 0, 0.4);
      font-size: 0.75rem;
      text-align: center;
      padding: 5px;
      box-sizing: border-box;
    }
    .spanish-card.flipped .card-back {
      transform: rotateY(180deg);
    }
    .spanish-card.flipped .card-front {
      transform: rotateY(0);
    }
    .tarot-result-desc {
      background: rgba(255, 215, 0, 0.05);
      border: 1px solid var(--color-gold);
      border-radius: 6px;
      padding: 12px;
      color: var(--color-gold);
      text-align: center;
      font-size: 0.95rem;
      line-height: 1.4;
    }
    
    /* Bloque 3: Güija */
    .ouija-window {
      position: relative;
      background: radial-gradient(circle at center, #1b120f 0%, #080504 100%) !important;
      border: 2px solid #5a3d28 !important;
      box-shadow: 0 0 35px rgba(90, 61, 40, 0.3) !important;
    }
    .ouija-candle {
      position: absolute;
      top: 15px;
      font-size: 1.8rem;
      animation: flicker 0.15s infinite alternate;
    }
    .left-candle { left: 20px; }
    .right-candle { right: 20px; }
    .ouija-board-graphics {
      border: 1px solid rgba(90, 61, 40, 0.3);
      padding: 15px;
      border-radius: 6px;
      background: rgba(0,0,0,0.3);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
    .ouija-yes-no {
      display: flex;
      justify-content: space-between;
      width: 80%;
      font-family: 'Georgia', serif;
      color: #9c7558;
      font-weight: bold;
      font-size: 1.1rem;
      letter-spacing: 3px;
    }
    .ouija-alphabet {
      font-family: 'Georgia', serif;
      color: #9c7558;
      text-align: center;
      font-size: 0.85rem;
      line-height: 1.8;
      letter-spacing: 4px;
      font-weight: bold;
    }
    .ouija-bye {
      font-family: 'Georgia', serif;
      color: #9c7558;
      font-weight: bold;
      font-size: 1rem;
      letter-spacing: 2px;
    }
    .ouija-interaction-area {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
    }
    .ouija-track {
      width: 100%;
      height: 100px;
      background: rgba(0,0,0,0.5);
      border: 1px solid rgba(90, 61, 40, 0.2);
      border-radius: 6px;
      position: relative;
    }
    .ouija-planchette {
      width: 44px;
      height: 44px;
      background: rgba(255,255,255,0.05);
      border: 2px solid #9c7558;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #9c7558;
      font-size: 1.3rem;
      position: absolute;
      bottom: 10px;
      left: calc(50% - 22px);
      cursor: grab;
      box-shadow: 0 0 10px rgba(156, 117, 88, 0.2);
    }
    .ouija-planchette:active {
      cursor: grabbing;
    }
    .ouija-instructions {
      font-size: 0.8rem;
      color: rgba(255,255,255,0.4);
      text-align: center;
    }
    .ouija-input-container, .ouija-response-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .ouija-input-container label {
      font-size: 0.85rem;
      color: #9c7558;
    }
    .ouija-input-container input {
      background: rgba(0,0,0,0.4);
      border: 1px solid rgba(90, 61, 40, 0.3);
      padding: 10px;
      color: #fff;
      border-radius: 4px;
    }
    .ouija-response-text {
      background: rgba(0,0,0,0.5);
      border-left: 2px solid #9c7558;
      padding: 12px;
      font-family: 'Georgia', serif;
      font-style: italic;
      color: #d1b49e;
      font-size: 0.95rem;
      line-height: 1.4;
    }
    
    /* Mascot Jumpscare */
    .jumpscare-overlay {
      position: fixed;
      top: 0; left: 0; width: 100vw; height: 100vh;
      background: #000;
      z-index: 100000;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .jumpscare-image {
      font-size: 15rem;
      animation: shakeJumpscare 0.1s infinite;
    }
    .jumpscare-title {
      color: #ff3355;
      font-size: 3rem;
      font-family: var(--font-display);
      margin-top: 20px;
      text-shadow: 0 0 20px #ff3355;
    }
    
    /* Sugerencias Bloques 1, 2 y 5 */
    .bungee-container {
      position: relative;
      width: 100%;
      height: 150px;
      background: #02050c;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 6px;
      overflow: hidden;
    }
    .bungee-platform {
      position: absolute;
      top: 0; left: calc(50% - 20px);
      width: 40px; height: 10px;
      background: #555;
    }
    .bungee-figure {
      position: absolute;
      top: 10px; left: calc(50% - 10px);
      font-size: 1.5rem;
      animation: bungeeJump 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    }
    .bungee-rope {
      position: absolute;
      top: 10px; left: 50%;
      width: 2px; height: 0px;
      background: var(--color-neon-blue);
      transform-origin: top;
      animation: bungeeRope 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    }
    .knife-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      width: 100%;
      height: 150px;
      justify-content: center;
    }
    .knife-face {
      font-size: 4rem;
      animation: float 2.5s ease-in-out infinite;
    }
    .knife-emoji {
      font-size: 2.5rem;
      position: absolute;
      top: 10px;
      animation: knifeStab 1.5s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;
    }
    .distortion-ball {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background: radial-gradient(circle at center, rgba(208, 0, 255, 0.4) 0%, rgba(5, 5, 12, 0.9) 80%);
      border: 2px solid var(--color-neon-purple);
      display: flex;
      justify-content: center;
      align-items: center;
      animation: shakeJumpscare 0.2s infinite;
    }
    
    @keyframes rotateHolo {
      0% { transform: scale(1) rotate(0deg); opacity: 0.85; }
      50% { transform: scale(1.05) rotate(5deg); opacity: 0.98; filter: drop-shadow(0 0 18px rgba(0,240,255,0.8)); }
      100% { transform: scale(1) rotate(0deg); opacity: 0.85; }
    }
    @keyframes blink {
      from { opacity: 1.0; }
      to { opacity: 0.0; }
    }
    @keyframes flicker {
      0% { opacity: 0.8; transform: scale(0.96) skewX(-1deg); }
      100% { opacity: 1; transform: scale(1.04) skewX(1deg); }
    }
    @keyframes pulse-border {
      0% { box-shadow: 0 0 5px rgba(57,255,20,0.2); }
      50% { box-shadow: 0 0 20px rgba(57,255,20,0.5); }
      100% { box-shadow: 0 0 5px rgba(57,255,20,0.2); }
    }
    @keyframes pulse-button-red {
      0% { box-shadow: 0 0 8px rgba(255,51,85,0.4); }
      50% { box-shadow: 0 0 20px rgba(255,51,85,0.8); }
      100% { box-shadow: 0 0 8px rgba(255,51,85,0.4); }
    }
    @keyframes popupMsg {
      from { transform: scale(0.7) translateY(20px); opacity: 0; }
      to { transform: scale(1) translateY(0); opacity: 1; }
    }
    @keyframes glitch-flash {
      0% { background: rgba(255, 51, 85, 0.1); }
      50% { background: rgba(255, 51, 85, 0.2); }
      100% { background: rgba(255, 51, 85, 0.1); }
    }
    @keyframes scroll-credits {
      0% { top: 100%; }
      100% { top: -210%; }
    }
    @keyframes shakeJumpscare {
      0% { transform: translate(2px, 1px) rotate(0deg); }
      10% { transform: translate(-1px, -2px) rotate(-1deg); }
      20% { transform: translate(-3px, 0px) rotate(1deg); }
      30% { transform: translate(0px, 2px) rotate(0deg); }
      40% { transform: translate(1px, -1px) rotate(1deg); }
      50% { transform: translate(-1px, 2px) rotate(-1deg); }
      60% { transform: translate(-3px, 1px) rotate(0deg); }
      70% { transform: translate(2px, 1px) rotate(-1deg); }
      85% { transform: translate(-1px, -1px) rotate(1deg); }
      100% { transform: translate(1px, -2px) rotate(-1deg); }
    }
    @keyframes bungeeJump {
      0% { top: 10px; transform: scaleY(1); opacity: 1; }
      30% { top: 90px; transform: scaleY(1.3); }
      45% { top: 40px; transform: scaleY(1); }
      60% { top: 90px; transform: scaleY(1.2); }
      75% { top: 60px; transform: scaleY(1); }
      85% { top: 90px; transform: scaleY(1.1); }
      90% { top: 90px; opacity: 1; }
      100% { top: 180px; opacity: 0; }
    }
    @keyframes bungeeRope {
      0% { height: 0px; }
      30% { height: 80px; }
      45% { height: 30px; }
      60% { height: 80px; }
      75% { height: 50px; }
      85% { height: 80px; }
      90% { height: 80px; opacity: 1; }
      100% { height: 0px; opacity: 0; }
    }
    @keyframes knifeStab {
      0% { top: -60px; transform: rotate(-45deg); opacity: 0; }
      50% { top: 25px; transform: rotate(15deg); opacity: 1; }
      100% { top: 25px; transform: rotate(15deg); opacity: 1; }
    }
`;

if (!html.includes('/* Bloque 3: Selector IA */')) {
  html = html.substring(0, styleIndex) + cssContent + html.substring(styleIndex);
  console.log('CSS inyectado.');
}

// --- 2. HTML Overlays Injection ---
const containerTag = '  <div id="game-container">';
const containerIndex = html.indexOf(containerTag);
if (containerIndex === -1) {
  console.error('Error: No se encontró <div id="game-container">');
  process.exit(1);
}

const htmlOverlays = `
  <!-- Espiritualidad - Carta Overlay -->
  <div id="espiritu-carta-overlay" class="game-overlay hidden">
    <div class="overlay-card-table">
      <div class="overlay-speech-bubble">MAMALACHI: "Levanta la carta..."</div>
      <div class="card-container">
        <div id="mystical-tarot-card" class="tarot-card">
          <div class="card-face card-back">🔮</div>
          <div class="card-face card-front">🧠<br>MENTE</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Espiritualidad - Jairo Slideshow -->
  <div id="espiritu-jairo-overlay" class="game-overlay hidden">
    <div class="jairo-slideshow-window">
      <h4>EL ORIGEN DE JAIRO (LORE DE LA DIMENSIÓN ESPÍRITU)</h4>
      <div class="slideshow-stage">
        <div class="jairo-slide active" data-slide="0">
          <div class="slide-art">🤠🙏🏰</div>
          <p class="slide-caption">Jairo, un humilde campesino medieval de origen colombiano con gafas, pide favores a Dios arrodillado frente a su castillo.</p>
        </div>
        <div class="jairo-slide" data-slide="1">
          <div class="slide-art">🧙‍♂️🌁🤠</div>
          <p class="slide-caption">Adrián Miranda aparece en el pasado con su túnica mágica y decide ayudarle a construir el gran puente de piedra que Jairo tanto suplicaba. Jairo se ilusiona masivamente al "descubrir" que Dios existe.</p>
        </div>
        <div class="jairo-slide" data-slide="2">
          <div class="slide-art">🌌🌀🏃‍♂️</div>
          <p class="slide-caption">¡Tragedia! Al intentar cruzar el puente, Adrián activa sin querer una brecha cuántica temporal. Jairo es succionado fuera de su época, comenzando a vagar sin fin por las diferentes líneas temporales.</p>
        </div>
      </div>
      <div class="slideshow-controls">
        <button id="btn-jairo-prev" class="btn-game-outline hidden" onclick="GameEngine.prevJairoSlide()">Anterior</button>
        <button id="btn-jairo-next" class="btn-game-gold" onclick="GameEngine.nextJairoSlide()">Siguiente</button>
      </div>
    </div>
  </div>

  <!-- Espiritualidad - Alakazam Spell Overlay -->
  <div id="espiritu-conjuro-overlay" class="game-overlay hidden">
    <div class="conjuro-window">
      <h4>EL CONJURO DE ADRIÁN</h4>
      <div class="alakazam-doll-container">
        <div class="alakazam-doll">🦊🥄🥄</div>
        <div class="doll-label">Muñeco de Alakazam (Conductor Psíquico)</div>
      </div>
      
      <div class="spell-copy-box">
        <span class="spell-label">Conjuro mágico:</span>
        <code id="spell-text-to-copy">Alha cazam</code>
        <button onclick="GameEngine.copySpellToClipboard()" class="btn-copy" id="btn-copy-spell">📋 Copiar</button>
      </div>

      <!-- Bloque SYSTEM_VAL_03 (Corriente Oculta) -->
      <div id="system-val-03-highlight" class="system-val-box hidden">
        <div class="sys-header">🟢 SYSTEM_VAL_03 DETECTADO</div>
        <div class="sys-body">
          [REQUISITO CUMPLIDO]: Has financiado el proyecto interactivo en el pasado entregándole 5€ virtuales a Adrián Miranda. El camino del Final Bueno y Secreto está activado.
        </div>
      </div>

      <div class="spell-input-area">
        <label for="spell-input">Escribe o pega el conjuro:</label>
        <input type="text" id="spell-input" placeholder="Ej: Alha cazam" autocomplete="off" />
        <div id="spell-error" class="error-text hidden">⚠️ El conjuro es incorrecto o está incompleto.</div>
      </div>

      <div class="conjuro-footer">
        <button onclick="GameEngine.validateSpell()" class="btn-game-gold">Conjurar Portal</button>
      </div>
    </div>
  </div>

  <!-- Espiritualidad - Rescate Antílope Overlay -->
  <div id="espiritu-resolucion-overlay" class="game-overlay hidden">
    <div class="resolucion-window">
      <div class="glitch-screen">
        <div class="glitch-text">CRISIS TEMPORAL</div>
        <div class="glitch-action">JAIRO INTENTA SECUESTRAR A MAMALACHI</div>
      </div>
      
      <div class="rescue-timer-container">
        <div id="rescue-timer-bar" class="timer-bar"></div>
        <div id="rescue-timer-text" class="rescue-timer-text">10.00s</div>
      </div>

      <div class="rescue-input-area">
        <p class="speech-tip">Adrián Miranda grita: "¡Escribe la palabra invertida de ANTÍLOPE!"</p>
        <input type="text" id="rescue-input" placeholder="Escribe la palabra invertida..." autocomplete="off" />
        <div id="rescue-error" class="error-text hidden">La palabra no coincide. ¡Rápido!</div>
      </div>

      <div class="resolucion-footer">
        <button onclick="GameEngine.submitRescueWord()" class="btn-game-gold">¡Salvar a Mamalachi!</button>
      </div>
    </div>
  </div>

  <!-- Final Secreto - Tomas Falsas & Créditos Overlay -->
  <div id="making-of-overlay" class="game-overlay hidden">
    <div class="credits-tv-frame">
      <div class="tv-scanlines"></div>
      <div class="credits-container">
        <div class="credits-scroller" id="credits-scroller-el">
          <h2>✨ FINAL BUENO / SECRETO ✨</h2>
          <p class="credits-intro">Has roto el bucle cuántico de la simulación. Mamalachi está libre.</p>
          
          <h3>🎬 MAKING OF (DETRÁS DE CÁMARAS)</h3>
          <div class="making-of-grid">
            <div class="bloopers-card">
              <h4>Tomas Falsas #1</h4>
              <p>Adrián Miranda se tropieza con un cable y tira el muñeco de Alakazam sobre el té de Mamalachi.</p>
            </div>
            <div class="bloopers-card">
              <h4>Tomas Falsas #2</h4>
              <p>Jairo insiste en que las mallas medievales pican demasiado y exige un aumento de 5€ virtuales.</p>
            </div>
            <div class="bloopers-card">
              <h4>Tomas Falsas #3</h4>
              <p>Julia no puede parar de reírse al intentar poner voz de Inteligencia Artificial.</p>
            </div>
          </div>

          <h3>🏆 CRÉDITOS COMPLETOS</h3>
          <div class="credits-roles">
            <div class="role-row"><span class="role">Creador y Programador</span><span class="name">Adrián Miranda</span></div>
            <div class="role-row"><span class="role">Vidente de Murcia</span><span class="name">Vidente Mamalachi</span></div>
            <div class="role-row"><span class="role">Asistente Temporal</span><span class="name">Julia</span></div>
            <div class="role-row"><span class="role">Campesino Perdido</span><span class="name">Jairo</span></div>
            <div class="role-row"><span class="role">Música Procedimental</span><span class="name">Web Audio API</span></div>
            <div class="role-row"><span class="role">Estética Digital</span><span class="name">Antigravity AI</span></div>
          </div>

          <h2 class="credits-thanks">¡GRACIAS POR JUGAR!</h2>
        </div>
      </div>
      <div class="credits-footer">
        <button onclick="localStorage.clear(); location.reload();" class="btn-game-gold">Volver al Inicio (Resetear Simulación)</button>
      </div>
    </div>
  </div>

  <!-- Amor - Vaca en el tejado Overlay -->
  <div id="amor-vaca-overlay" class="game-overlay hidden">
    <div class="vaca-window">
      <div class="speech-bubble-vaca">«Muuuu... Estoy más desubicada que una vaca en un tejado.»</div>
      <div class="vaca-scene">
        <div class="tejado-roof">🏠</div>
        <div class="wobbling-cow">🐄</div>
      </div>
      <button onclick="GameEngine.concludeVacaTejado()" class="btn-game-gold">Volver a la Consulta</button>
    </div>
  </div>

  <!-- Amor - Selector de IA Overlay -->
  <div id="amor-ia-overlay" class="game-overlay hidden">
    <div class="ia-selector-window">
      <h4>SELECCIONA TU CRIATURA CIBERNÉTICA</h4>
      <p class="ia-selector-subtitle">Cuadrícula interactiva de diversidad de rasgos físicos (Base de Datos Cuántica)</p>
      
      <div class="ia-grid">
        <!-- CATEGORÍA: MUJERES -->
        <div class="ia-group">
          <h5>MUJERES</h5>
          <div class="ia-cards-row">
            <div class="ia-card" onclick="GameEngine.selectIA('mujer_a')">
              <div class="ia-avatar">👩🏽</div>
              <div class="ia-name">Elena (Morena)</div>
              <div class="ia-desc">Rasgos mediterráneos, mirada profunda y expresiva.</div>
            </div>
            <div class="ia-card" onclick="GameEngine.selectIA('mujer_b')">
              <div class="ia-avatar">👩🏼‍🦰</div>
              <div class="ia-name">Clara (Pelirroja)</div>
              <div class="ia-desc">Cabello pelirrojo natural, tez clara y pecas.</div>
            </div>
          </div>
        </div>

        <!-- CATEGORÍA: HOMBRES TRANS -->
        <div class="ia-group">
          <h5>HOMBRES TRANS</h5>
          <div class="ia-cards-row">
            <div class="ia-card" onclick="GameEngine.selectIA('hombre_trans_a')">
              <div class="ia-avatar">👨🏼</div>
              <div class="ia-name">Leo (Rubio)</div>
              <div class="ia-desc">Cabello rubio texturizado, facciones marcadas y barba corta.</div>
            </div>
            <div class="ia-card" onclick="GameEngine.selectIA('hombre_trans_b')">
              <div class="ia-avatar">👨🏽‍🦱</div>
              <div class="ia-name">Lucas (Castaño)</div>
              <div class="ia-desc">Cabello castaño rizado, expresión risueña y estilo urbano.</div>
            </div>
          </div>
        </div>

        <!-- CATEGORÍA: MASCOTAS -->
        <div class="ia-group">
          <h5>MASCOTAS</h5>
          <div class="ia-cards-row">
            <div class="ia-card" onclick="GameEngine.selectIA('mascota_a')">
              <div class="ia-avatar">🦮</div>
              <div class="ia-name">Max (Golden)</div>
              <div class="ia-desc">Perro de pelo largo, tonalidad leonada/rubia.</div>
            </div>
            <div class="ia-card" onclick="GameEngine.selectIA('mascota_b')">
              <div class="ia-avatar">🐕‍🦺</div>
              <div class="ia-name">Toby (Schnauzer)</div>
              <div class="ia-desc">Perro pequeño de pelo denso negro y gris.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Amor - Chat Sabotaje IA Overlay -->
  <div id="amor-toxic-chat-overlay" class="game-overlay hidden">
    <div class="chat-window">
      <div class="chat-header">
        <span class="hologram-indicator">● HOLO-LLAMADA ACTIVA</span>
        <h4>JULIA IA (VERSIÓN 1.0.4)</h4>
      </div>
      <div class="chat-video-area">
        <div class="julia-ia-hologram">🤖👩‍💻✨</div>
      </div>
      <div class="chat-narrative" id="chat-narrative-box">
        JULIA IA: He sido programada exclusivamente para satisfacer... todas tus necesidades de conversación profunda.
      </div>
      
      <div id="toxic-spam-container" class="toxic-spam-container">
        <!-- Floating spam messages will appear here -->
      </div>

      <div class="chat-footer">
        <button id="btn-block-chat" class="btn-block-red hidden" onclick="GameEngine.blockToxicChat()">🚨 [BLOQUEAR CONVERSACIÓN] 🚨</button>
      </div>
    </div>
  </div>

  <!-- Amor - Tarot Baraja Española Overlay -->
  <div id="amor-tarot-overlay" class="game-overlay hidden">
    <div class="tarot-window">
      <h4>TIRADA DE TAROT (BARAJA ESPAÑOLA)</h4>
      <p class="tarot-instruction">Haz clic en una de las tres cartas para desvelar tus raíces familiares:</p>
      <div class="tarot-cards-row">
        <div class="spanish-card" id="sp-card-container-0" onclick="GameEngine.flipSpanishCard(0, 'As de Bastos', 'Fuerza vital, energía cuántica de tus raíces y nuevos comienzos familiares.')">
          <div class="card-face card-back">🎴</div>
          <div class="card-face card-front" id="sp-card-0">♣️ As de Bastos</div>
        </div>
        <div class="spanish-card" id="sp-card-container-1" onclick="GameEngine.flipSpanishCard(1, 'Rey de Copas', 'Amor maduro, estabilidad y afecto protector de tus padres.')">
          <div class="card-face card-back">🎴</div>
          <div class="card-face card-front" id="sp-card-1">❤️ Rey de Copas</div>
        </div>
        <div class="spanish-card" id="sp-card-container-2" onclick="GameEngine.flipSpanishCard(2, 'Sota de Espadas', 'Tensiones del pasado, malentendidos y palabras calladas entre los lazos de sangre.')">
          <div class="card-face card-back">🎴</div>
          <div class="card-face card-front" id="sp-card-2">♠️ Sota de Espadas</div>
        </div>
      </div>
      <div id="tarot-result-desc" class="tarot-result-desc hidden"></div>
      <button id="btn-conclude-tarot" class="btn-game-gold hidden" onclick="GameEngine.concludeTarot()">Avanzar al Metaguión</button>
    </div>
  </div>

  <!-- Amor - Güija Overlay -->
  <div id="amor-ouija-overlay" class="game-overlay hidden">
    <div class="ouija-window">
      <div class="ouija-candle left-candle">🕯️</div>
      <div class="ouija-candle right-candle">🕯️</div>
      
      <h4>TABLERO CÓSMICO DE LA GÜIJA</h4>
      
      <div class="ouija-board-graphics">
        <div class="ouija-yes-no">
          <span class="ouija-yes">SÍ</span>
          <span class="ouija-no">NO</span>
        </div>
        <div class="ouija-alphabet">A B C D E F G H I J K L M<br>N O P Q R S T U V W X Y Z</div>
        <div class="ouija-bye">ADIÓS</div>
      </div>

      <div class="ouija-interaction-area">
        <div id="ouija-planchette-track" class="ouija-track">
          <div id="ouija-planchette" class="ouija-planchette">👁️</div>
        </div>
        <div id="ouija-instructions" class="ouija-instructions">
          Coloca el dedo virtual sobre el indicador y arrástralo lentamente hacia el 'SÍ'.
        </div>
      </div>

      <div id="ouija-input-container" class="ouija-input-container hidden">
        <label for="ouija-user-message">¿Qué le quieres decir a tu ancestro?</label>
        <input type="text" id="ouija-user-message" placeholder="Ej: ¿Qué se sintió heredar tus miedos?" autocomplete="off" />
        <button onclick="GameEngine.sendOuijaMessage()" class="btn-game-gold">Enviar Mensaje</button>
      </div>

      <div id="ouija-response-container" class="ouija-response-container hidden">
        <div id="ouija-response-text" class="ouija-response-text">...</div>
        <button id="btn-conclude-ouija" class="btn-game-gold hidden" onclick="GameEngine.concludeOuija()">Despedirse (Mover a 'ADIÓS')</button>
      </div>
    </div>
  </div>

  <!-- Susto Perro IA Mascota Jumpscare -->
  <div id="mascota-jumpscare-overlay" class="jumpscare-overlay hidden">
    <div class="jumpscare-image">🐕💥🐶</div>
    <div class="jumpscare-title">¡¡¡GUAU!!!</div>
  </div>

  <!-- Mente Anxiety Gag Overlay -->
  <div id="mente-anx-overlay" class="game-overlay hidden">
    <div class="meditation-window">
      <h4 id="anx-gag-title">GAFAS DE ANSIEDAD CUÁNTICA</h4>
      <div class="meditation-body" id="anx-gag-body" style="align-items:center; justify-content:center; display:flex; flex-direction:column; height:200px; gap:15px; box-sizing:border-box;">
        <!-- Dynamic Content -->
      </div>
      <div class="meditation-footer" style="justify-content:center; display:flex; padding-top:15px;">
        <button id="btn-anx-gag-continue" class="btn-game-gold" onclick="GameEngine.concludeAnxietyGag()">Continuar</button>
      </div>
    </div>
  </div>

  <!-- Mente Potion minigame Overlay -->
  <div id="mente-pocion-overlay" class="game-overlay hidden">
    <div class="conjuro-window">
      <h4>EL ELIXIR CUÁNTICO DE MAMALACHI</h4>
      <div class="potion-mixer" style="display:flex; flex-direction:column; align-items:center; gap:15px;">
        <div id="potion-flask" style="font-size:5rem; filter: drop-shadow(0 0 10px rgba(208, 0, 255, 0.4)); animation: float 3s ease-in-out infinite;">🧪</div>
        <div style="font-size:1.1rem; color:#fff;">Dosis actual: <span id="potion-dose-value" style="font-weight:bold; color:var(--color-neon-blue);">1 gota mística</span></div>
        <div class="potion-controls" style="display:flex; gap:15px;">
          <button class="btn-game-gold" onclick="GameEngine.changePotionDose(1)" style="padding: 10px 15px;">[ Añadir más dosis ]</button>
          <button class="btn-game-gold" onclick="GameEngine.changePotionDose(-1)" style="padding: 10px 15px;">[ Reducir dosis ]</button>
        </div>
      </div>
      <div class="conjuro-footer" style="justify-content:center; display:flex; padding-top:15px;">
        <button class="btn-game-gold" onclick="GameEngine.drinkPotion()" style="width:100%;">Beber Elixir</button>
      </div>
    </div>
  </div>

  <!-- Potion Fallo Troll Timer Overlay -->
  <div id="mente-troll-overlay" class="game-overlay hidden" style="background:#000;">
    <div class="tv-frame" style="border-color:#ff3355; box-shadow: 0 0 30px rgba(255,51,85,0.3); text-align:center; display:flex; flex-direction:column; align-items:center; gap:15px;">
      <h4 style="color:#ff3355;">PARÁLISIS COGNITIVA CUÁNTICA</h4>
      <p style="font-size:0.9rem; color:rgba(255,255,255,0.7); max-width:400px; margin:0;">Sufriendo parálisis por sobredosis de elixir cuántico. Por favor, espere a que pase el efecto.</p>
      
      <div id="troll-countdown" style="font-size:3rem; font-family:monospace; color:#ff3355; margin:15px 0; text-shadow:0 0 10px rgba(255,51,85,0.4);">02:59:59</div>
      
      <div class="troll-image" style="font-size:4rem; animation: rotateHolo 5s linear infinite;">🥔💤🛌</div>
      
      <div style="margin-top:15px; width:100%;">
        <button class="btn-game-gold" onclick="GameEngine.triggerTrollImpatience()" style="width:100%; border-color:#ff3355; color:#ff3355; background:rgba(255,51,85,0.1);">Omitir Espera (Skip)</button>
      </div>
    </div>
  </div>

  <!-- Cushion Jumpscare Overlay -->
  <div id="mente-cojin-jumpscare" class="jumpscare-overlay hidden">
    <div id="cojin-element" style="font-size:3.5rem; transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); transform: scale(1);">🛋️</div>
  </div>

  <!-- Mente Jairo Wild Attack Overlay -->
  <div id="mente-rift-overlay" class="game-overlay hidden">
    <div class="resolucion-window" style="border-color:#ff5500; box-shadow: 0 0 30px rgba(255,85,0,0.3); align-items:center;">
      <h4 style="color:#ff5500;">🚨 ¡BRECHA TEMPORAL DETECTADA! 🚨</h4>
      <div style="text-align:center; font-size:4rem; animation: shakeJumpscare 0.15s infinite; margin:10px 0;">👹🔥👵</div>
      <p style="color:#fff; text-align:center; font-size:0.95rem; margin:0; max-width:400px; line-height:1.4;">
        ¡Jairo en estado salvaje aparece saliendo de una grieta en la pared y agarra a Mamalachi por el cuello!
      </p>
      
      <div id="mente-spell-entry" class="spell-input-area hidden" style="margin-top:15px; width:100%;">
        <label for="mente-spell-input" style="color:var(--color-gold); font-size:0.85rem; text-align:center; margin-bottom:5px; display:block;">
          Mamalachi ahogándose: "¡Adrián... el contrahechizo... el conjuro de memoria!"
        </label>
        <input type="text" id="mente-spell-input" placeholder="Escribe el conjuro de memoria..." autocomplete="off" style="width:100%; box-sizing:border-box; background:rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.2); border-radius:6px; padding:12px; color:#fff; text-align:center; font-size:1.1rem;" />
        <div id="mente-spell-error" class="error-text hidden" style="margin-top:5px;">El hechizo falla. No recuerdas las palabras...</div>
      </div>

      <div class="resolucion-footer" style="display:flex; flex-direction:column; gap:10px; margin-top:15px; width:100%;">
        <button id="btn-submit-mente-spell" class="btn-game-gold hidden" onclick="GameEngine.submitMenteSpell()" style="width:100%; border-color:var(--color-gold); color:var(--color-gold); height:40px; font-weight:bold;">Lanzar Conjuro de Memoria</button>
      </div>
    </div>
  </div>

  <!-- Test del Hábito Playlist Chill Overlay -->
  <div id="cuerpo-playlist-overlay" class="game-overlay hidden">
    <div class="meditation-window" style="align-items:center;">
      <h4>PLAYLIST CHILL BIO-CUÁNTICA</h4>
      <div class="meditation-body" style="text-align:center; display:flex; flex-direction:column; align-items:center; gap:10px;">
        <div style="font-size:4rem; margin-bottom:10px;">🎵🧘✨</div>
        <p style="margin:0; font-size:0.95rem; color:rgba(255,255,255,0.85);">Se ha abierto tu reproductor de música relajante cuántica en una ventana externa.</p>
        <a href="https://www.youtube.com/watch?v=2OzlksZ56QA" target="_blank" class="btn-game-gold" style="display:inline-block; text-decoration:none; margin:15px 0; padding:10px 20px;">🎵 Abrir Playlist en YouTube</a>
      </div>
      <div class="meditation-footer" style="justify-content:center; display:flex; width:100%; border-top:1px solid rgba(255,255,255,0.1); padding-top:15px;">
        <button class="btn-game-gold" onclick="GameEngine.concludePlaylist()" style="width:100%;">Afrontar la Realidad y Ejercitarse</button>
      </div>
    </div>
  </div>

  <!-- Crystal Ball Jairo distorted face in sphere -->
  <div id="cuerpo-crystal-distortion" class="game-overlay hidden">
    <div class="ouija-window" style="text-align:center; align-items:center;">
      <h4 style="color:var(--color-neon-purple); text-shadow:0 0 10px var(--color-neon-purple);">🔮 INTERFERENCIA DE LA BOLA 🔮</h4>
      <div class="ouija-board-graphics" style="padding:20px; position:relative; overflow:hidden; height:180px; width:100%; justify-content:center; display:flex; align-items:center; box-sizing:border-box;">
        <div class="distortion-ball">
          <span style="font-size:4rem; filter: blur(1.5px) opacity(0.8); animation: pulse-border 1.5s infinite;">🤠⛓️</span>
        </div>
      </div>
      <p style="font-family:'Georgia', serif; font-style:italic; color:#d1b49e; font-size:0.95rem; line-height:1.4; max-width:400px; margin:10px 0;">
        JAIRO: «¿Por qué? ¿Por qué has permitido que hicieran esto conmigo? ¡Me has dejado encerrado aquí dentro mientras ellos juegan! ¡Sácame!»
      </p>
      <button class="btn-game-gold" onclick="GameEngine.concludeCrystalDistortion()" style="width:100%; border-color:var(--color-neon-purple); color:var(--color-neon-purple);">Continuar</button>
    </div>
  </div>

  <!-- Input Estafado Overlay -->
  <div id="dinero-estafado-overlay" class="game-overlay hidden">
    <div class="resolucion-window">
      <h4 style="color:#ff3355;">📥 LOGS DE BANCARROTA CUÁNTICA</h4>
      <div class="rescue-input-area">
        <p class="speech-tip" style="color:rgba(255,255,255,0.7); text-align:left; font-size:0.9rem;">Para archivar tu caso en el registro dimensional, por favor escribe a continuación detallando cómo fuiste timado:</p>
        <textarea id="estafado-input" placeholder="Escribe aquí cómo te timaron..." style="background:rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.2); border-radius:6px; padding:12px; color:#fff; font-size:0.95rem; height:100px; resize:none; font-family:monospace; box-sizing:border-box; width:100%;"></textarea>
        <div id="estafado-error" class="error-text hidden" style="margin-top:5px;">Por favor escribe al menos una frase para registrar la estafa.</div>
      </div>
      <div class="resolucion-footer" style="margin-top:15px;">
        <button onclick="GameEngine.submitEstafadoText()" class="btn-game-gold" style="width:100%; border-color:#ff3355; color:#ff3355;">Enviar Reporte Financiero</button>
      </div>
    </div>
  </div>
`;

if (html.includes('id="espiritu-carta-overlay"')) {
  let startIndex = html.indexOf('<!-- Espiritualidad - Carta Overlay -->');
  if (startIndex === -1) {
    startIndex = html.indexOf('<div id="espiritu-carta-overlay"');
  }
  if (startIndex !== -1 && startIndex < containerIndex) {
    html = html.substring(0, startIndex) + htmlOverlays + '\n  ' + html.substring(containerIndex);
    console.log('HTML overlays existentes reemplazados por la lista unificada.');
  } else {
    console.error('Error: Indice de inicio de overlays no es coherente.');
  }
} else {
  html = html.substring(0, containerIndex) + htmlOverlays + html.substring(containerIndex);
  console.log('HTML overlays inyectados.');
}

// --- 3. let HISTORIA and AudioEngine Injection ---
const storyEndBlock = `"dinero_fin_unificado": {
    "orador": "SISTEMA",
    "texto": "Has unificado tu conciencia y comprendido el misterio detrás de la simulación. Tu camino ya no es la riqueza mundana, sino la liberación cósmica.",
    "imagen": "sala_mamalachi.png",
    "opciones": [],
    "final": true,
    "tituloFinal": "EL FUTURO: El Guardián de las Dimensiones"
  }
};`;

const engineComment = `    /* ==========================================================================
       C. MOTOR DEL JUEGO (LÓGICA PRINCIPAL)
       ========================================================================== */`;

const boundaryStr = storyEndBlock + '\n\n' + engineComment;

let boundaryIndex = html.indexOf(boundaryStr);
if (boundaryIndex === -1 && !html.includes('let HISTORIA = null;')) {
  // Let's try matching with different line breaks or tabs
  console.error('Error: No se encontró storyEndBlock y engineComment boundary.');
  process.exit(1);
}

const jsDeclarations = `
    let HISTORIA = null;

    /* Carga el guion desde guion.json o usa localStorage/Default como fallback */
    async function cargarGuion() {
      // 1. Prioridad: Guion editado en localStorage
      const localStory = localStorage.getItem('vidente_guion_editado');
      if (localStory) {
        try {
          HISTORIA = JSON.parse(localStory);
          console.log("Cargado guion guardado del editor (localStorage)");
          inicializarJuego();
          return;
        } catch (e) {
          console.error("Error al parsear guion de localStorage", e);
        }
      }

      // 2. Intento de fetch a guion.json
      try {
        const res = await fetch('guion.json');
        if (!res.ok) throw new Error('Servidor no disponible o archivo no encontrado');
        HISTORIA = await res.json();
        console.log("Cargado guion desde guion.json");
      } catch (err) {
        console.warn("No se pudo cargar guion.json (CORS o modo local offline). Usando integrado:", err);
        HISTORIA = JSON.parse(JSON.stringify(HISTORIA_DEFAULT)); // Clonación profunda
      }

      inicializarJuego();
    }

    function inicializarJuego() {
      GameEngine.init();
      CreatorPanel.init();
    }

    /* ==========================================================================
       B. SISTEMA DE AUDIO PROCEDIMENTAL (WEB AUDIO API)
       ========================================================================== */
    const AudioEngine = {
      ctx: null,
      aerobicBeatInterval: null,

      init() {
        if (!this.ctx) {
          this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
      },

      playHover() {
        this.init();
        if (!this.ctx) return;
        try {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.type = 'sine';
          osc.frequency.setValueAtTime(600, this.ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(1000, this.ctx.currentTime + 0.08);
          gain.gain.setValueAtTime(0.015, this.ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 0.08);
          osc.start();
          osc.stop(this.ctx.currentTime + 0.08);
        } catch (e) {
          console.warn("Audio error:", e);
        }
      },

      playClick() {
        this.init();
        if (!this.ctx) return;
        try {
          const osc = this.ctx.createOscillator();
          const oscSparkle = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const filter = this.ctx.createBiquadFilter();
          osc.connect(filter);
          oscSparkle.connect(filter);
          filter.connect(gain);
          gain.connect(this.ctx.destination);
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(300, this.ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(600, this.ctx.currentTime + 0.25);
          oscSparkle.type = 'sine';
          oscSparkle.frequency.setValueAtTime(900, this.ctx.currentTime);
          oscSparkle.frequency.exponentialRampToValueAtTime(1800, this.ctx.currentTime + 0.15);
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(1500, this.ctx.currentTime);
          gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.3);
          osc.start();
          oscSparkle.start();
          osc.stop(this.ctx.currentTime + 0.3);
          oscSparkle.stop(this.ctx.currentTime + 0.3);
        } catch (e) {
          console.warn("Audio error:", e);
        }
      },

      playEnding() {
        this.init();
        if (!this.ctx) return;
        try {
          const notes = [261.63, 329.63, 392.00, 523.25];
          const now = this.ctx.currentTime;
          notes.forEach((freq, index) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + (index * 0.1));
            gain.gain.setValueAtTime(0.0, now);
            gain.gain.linearRampToValueAtTime(0.03, now + (index * 0.1) + 0.1);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);
            osc.start(now + (index * 0.1));
            osc.stop(now + 2.0);
          });
        } catch (e) {
          console.warn("Audio error:", e);
        }
      },

      playPortalWarp() {
        this.init();
        if (!this.ctx) return;
        try {
          const now = this.ctx.currentTime;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const filter = this.ctx.createBiquadFilter();
          osc.connect(filter);
          filter.connect(gain);
          gain.connect(this.ctx.destination);
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(80, now);
          osc.frequency.exponentialRampToValueAtTime(1200, now + 2.5);
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(100, now);
          filter.frequency.exponentialRampToValueAtTime(3000, now + 2.5);
          filter.Q.setValueAtTime(8, now);
          gain.gain.setValueAtTime(0.001, now);
          gain.gain.linearRampToValueAtTime(0.06, now + 1.0);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);
          osc.start(now);
          osc.stop(now + 2.8);
        } catch (e) {
          console.warn("Audio error:", e);
        }
      },

      playTeleport() {
        this.init();
        if (!this.ctx) return;
        try {
          const now = this.ctx.currentTime;
          const osc = this.ctx.createOscillator();
          const osc2 = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.connect(gain);
          osc2.connect(gain);
          gain.connect(this.ctx.destination);
          osc.type = 'sine';
          osc.frequency.setValueAtTime(300, now);
          osc.frequency.exponentialRampToTime = (1500, now + 0.6); // note typo fix: use exponentialRampToValueAtTime
          osc.frequency.exponentialRampToValueAtTime(1500, now + 0.6);
          osc2.type = 'triangle';
          osc2.frequency.setValueAtTime(150, now);
          osc2.frequency.exponentialRampToValueAtTime(750, now + 0.6);
          gain.gain.setValueAtTime(0.05, now);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);
          osc.start(now);
          osc2.start(now);
          osc.stop(now + 0.7);
          osc2.stop(now + 0.7);
        } catch (e) {
          console.warn("Audio error:", e);
        }
      },

      playFailureHorn() {
        this.init();
        if (!this.ctx) return;
        try {
          const now = this.ctx.currentTime;
          const osc1 = this.ctx.createOscillator();
          const gain1 = this.ctx.createGain();
          osc1.connect(gain1);
          gain1.connect(this.ctx.destination);
          osc1.type = 'sawtooth';
          osc1.frequency.setValueAtTime(220, now);
          osc1.frequency.linearRampToValueAtTime(180, now + 0.3);
          gain1.gain.setValueAtTime(0.08, now);
          gain1.gain.linearRampToValueAtTime(0.08, now + 0.25);
          gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
          osc1.start(now);
          osc1.stop(now + 0.3);
          
          const osc2 = this.ctx.createOscillator();
          const gain2 = this.ctx.createGain();
          osc2.connect(gain2);
          gain2.connect(this.ctx.destination);
          osc2.type = 'sawtooth';
          osc2.frequency.setValueAtTime(165, now + 0.3);
          osc2.frequency.linearRampToValueAtTime(110, now + 1.2);
          gain2.gain.setValueAtTime(0.0, now + 0.3);
          gain2.gain.linearRampToValueAtTime(0.08, now + 0.35);
          gain2.gain.linearRampToValueAtTime(0.08, now + 1.0);
          gain2.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
          osc2.start(now + 0.3);
          osc2.stop(now + 1.2);
        } catch (e) {
          console.warn("Audio error:", e);
        }
      },

      playAerobicBeat() {
        this.init();
        if (!this.ctx) return;
        this.stopAerobicBeat();
        try {
          let step = 0;
          const tempo = 300;
          this.aerobicBeatInterval = setInterval(() => {
            if (!this.ctx) return;
            const now = this.ctx.currentTime;
            
            const kickOsc = this.ctx.createOscillator();
            const kickGain = this.ctx.createGain();
            kickOsc.connect(kickGain);
            kickGain.connect(this.ctx.destination);
            kickOsc.frequency.setValueAtTime(150, now);
            kickOsc.frequency.exponentialRampToValueAtTime(0.01, now + 0.15);
            kickGain.gain.setValueAtTime(0.12, now);
            kickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
            kickOsc.start(now);
            kickOsc.stop(now + 0.15);
            
            const bassOsc = this.ctx.createOscillator();
            const bassGain = this.ctx.createGain();
            bassOsc.connect(bassGain);
            bassGain.connect(this.ctx.destination);
            bassOsc.type = 'sawtooth';
            const notes = [65.41, 73.42, 82.41, 98.00];
            const freq = notes[step % notes.length];
            bassOsc.frequency.setValueAtTime(freq, now);
            bassGain.gain.setValueAtTime(0.0, now);
            bassGain.gain.linearRampToValueAtTime(0.04, now + 0.05);
            bassGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
            bassOsc.start(now);
            bassOsc.stop(now + 0.25);
            step++;
          }, tempo);
        } catch (e) {
          console.warn("Audio error:", e);
        }
      },

      stopAerobicBeat() {
        if (this.aerobicBeatInterval) {
          clearInterval(this.aerobicBeatInterval);
          this.aerobicBeatInterval = null;
        }
      },

      playSiren() {
        this.init();
        if (!this.ctx) return;
        try {
          const now = this.ctx.currentTime;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.type = 'sine';
          osc.frequency.setValueAtTime(600, now);
          for (let i = 0; i < 6; i++) {
            osc.frequency.setValueAtTime(600, now + (i * 0.3));
            osc.frequency.linearRampToValueAtTime(900, now + (i * 0.3) + 0.15);
            osc.frequency.linearRampToValueAtTime(600, now + (i * 0.3) + 0.3);
          }
          gain.gain.setValueAtTime(0.0, now);
          gain.gain.linearRampToValueAtTime(0.05, now + 0.1);
          gain.gain.setValueAtTime(0.05, now + 1.6);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);
          osc.start(now);
          osc.stop(now + 1.8);
        } catch (e) {
          console.warn("Audio error:", e);
        }
      },

      playLaughter() {
        this.init();
        if (!this.ctx) return;
        try {
          const now = this.ctx.currentTime;
          for (let i = 0; i < 6; i++) {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.type = 'sine';
            const baseFreq = 300 + Math.random() * 200;
            const delay = i * 0.12;
            osc.frequency.setValueAtTime(baseFreq, now + delay);
            osc.frequency.linearRampToValueAtTime(baseFreq + 80, now + delay + 0.1);
            osc.frequency.linearRampToValueAtTime(baseFreq - 40, now + delay + 0.2);
            gain.gain.setValueAtTime(0, now + delay);
            gain.gain.linearRampToValueAtTime(0.04, now + delay + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 0.25);
            osc.start(now + delay);
            osc.stop(now + delay + 0.3);
          }
        } catch(e){}
      },

      playErrorBeep() {
        this.init();
        if (!this.ctx) return;
        try {
          const now = this.ctx.currentTime;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.type = 'square';
          osc.frequency.setValueAtTime(120, now);
          gain.gain.setValueAtTime(0.06, now);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
          osc.start(now);
          osc.stop(now + 0.15);
        } catch(e){}
      },

      playOuijaSpectral() {
        this.init();
        if (!this.ctx) return;
        try {
          const now = this.ctx.currentTime;
          const osc1 = this.ctx.createOscillator();
          const osc2 = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc1.connect(gain);
          osc2.connect(gain);
          gain.connect(this.ctx.destination);
          osc1.type = 'triangle';
          osc1.frequency.setValueAtTime(80, now);
          osc1.frequency.linearRampToValueAtTime(85, now + 2);
          osc2.type = 'sine';
          osc2.frequency.setValueAtTime(161, now);
          osc2.frequency.linearRampToValueAtTime(159, now + 2);
          gain.gain.setValueAtTime(0.001, now);
          gain.gain.linearRampToValueAtTime(0.08, now + 0.5);
          gain.gain.linearRampToValueAtTime(0.001, now + 2.0);
          osc1.start(now);
          osc2.start(now);
          osc1.stop(now + 2);
          osc2.stop(now + 2);
        } catch(e){}
      },

      playCardFlip() {
        this.init();
        if (!this.ctx) return;
        try {
          const now = this.ctx.currentTime;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(150, now);
          osc.frequency.exponentialRampToValueAtTime(600, now + 0.12);
          gain.gain.setValueAtTime(0.03, now);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
          osc.start(now);
          osc.stop(now + 0.12);
        } catch(e){}
      },

      playGlitch() {
        this.init();
        if (!this.ctx) return;
        try {
          const now = this.ctx.currentTime;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(900, now);
          osc.frequency.setValueAtTime(120, now + 0.05);
          osc.frequency.setValueAtTime(500, now + 0.1);
          gain.gain.setValueAtTime(0.05, now);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
          osc.start(now);
          osc.stop(now + 0.25);
        } catch(e){}
      }
    };
`;

if (!html.includes('let HISTORIA = null;')) {
  const replacement = storyEndBlock + '\n\n' + jsDeclarations + '\n\n' + engineComment;
  html = html.replace(boundaryStr, replacement);
  console.log('let HISTORIA y AudioEngine inyectados.');
}

// --- 4. GameEngine Methods updates (restartGame, startBromaLoop, concludeLifting) ---
const restartGameTarget = `      restartGame() {
        this.state.escenaActual = "inicio";
        this.state.contadorDecisiones = 0;
        this.saveState();

        const gameContainer = document.getElementById('game-container');
        if (gameContainer) {
          gameContainer.classList.remove('dim-mystical');
        }

        document.getElementById('ending-card').classList.add('hidden');
        this.updateUI(true);
      },

      startBromaLoop() {
        this.state.escenaActual = "inicio_2";
        this.state.contadorDecisiones = 0;
        this.saveState();

        document.getElementById('ending-card').classList.add('hidden');
        this.updateUI(true);
      },`;

const restartGameRepl = `      restartGame() {
        this.state.escenaActual = "inicio";
        this.state.contadorDecisiones = 0;
        localStorage.setItem('vidente_timeline', '1');
        localStorage.setItem('vidente_rama_amor_completed', 'false');
        this.saveState();

        const gameContainer = document.getElementById('game-container');
        if (gameContainer) {
          gameContainer.classList.remove('dim-mystical');
        }

        document.getElementById('ending-card').classList.add('hidden');
        this.updateUI(true);
      },

      startBromaLoop() {
        this.state.escenaActual = "inicio_2";
        this.state.contadorDecisiones = 0;
        localStorage.setItem('vidente_timeline', '2');
        this.saveState();

        document.getElementById('ending-card').classList.add('hidden');
        this.updateUI(true);
      },`;

if (html.includes(restartGameTarget)) {
  html = html.replace(restartGameTarget, restartGameRepl);
  console.log('restartGame y startBromaLoop actualizados.');
}

const concludeLiftingTarget = `      concludeLifting() {
        const overlay = document.getElementById('cuerpo-lift-overlay');
        const hud = document.querySelector('.hud-container');

        overlay.classList.add('hidden');
        if (hud) hud.style.opacity = '1';

        this.selectOption('cuerpo_decision_entrenamiento');
      },`;

const concludeLiftingRepl = `      concludeLifting() {
        const overlay = document.getElementById('cuerpo-lift-overlay');
        const hud = document.querySelector('.hud-container');

        overlay.classList.add('hidden');
        if (hud) hud.style.opacity = '1';

        this.selectOption('cuerpo_timeline2_distortion');
      },`;

if (html.includes(concludeLiftingTarget)) {
  html = html.replace(concludeLiftingTarget, concludeLiftingRepl);
  console.log('concludeLifting actualizado para ir a cuerpo_timeline2_distortion.');
}

// --- 5. selectOption custom interception ---
const selectOptionTarget = `        if (nextSceneId === 'portal_verde_elegido') {
          localStorage.setItem('vidente_portal_color', 'green');
        } else if (nextSceneId === 'portal_azul_elegido') {
          localStorage.setItem('vidente_portal_color', 'blue');
        } else if (nextSceneId === 'portal_purple_elegido') {
          localStorage.setItem('vidente_portal_color', 'purple');
        } else if (nextSceneId === 'dinero_adrian_pagado') {
          localStorage.setItem('vidente_adrian_paid', 'true');
        }

        if (nextSceneId === 'CREAR_PERSONAJE_TRIGGER') {
          CharacterCreator.show();
          return;
        }`;

const selectOptionRepl = `        if (nextSceneId === 'portal_verde_elegido') {
          localStorage.setItem('vidente_portal_color', 'green');
        } else if (nextSceneId === 'portal_azul_elegido') {
          localStorage.setItem('vidente_portal_color', 'blue');
        } else if (nextSceneId === 'portal_purple_elegido') {
          localStorage.setItem('vidente_portal_color', 'purple');
        } else if (nextSceneId === 'dinero_adrian_pagado') {
          localStorage.setItem('vidente_adrian_paid', 'true');
        }

        if (nextSceneId === 'mente_cierre_conjuro') {
          const entry = document.getElementById('mente-spell-entry');
          const submitBtn = document.getElementById('btn-submit-mente-spell');
          if (entry) entry.classList.remove('hidden');
          if (submitBtn) submitBtn.classList.remove('hidden');
          document.getElementById('mente-spell-input').value = '';
          document.getElementById('mente-spell-error').classList.add('hidden');
          return; // Stay on the screen to let user type
        }

        if (nextSceneId === 'CREAR_PERSONAJE_TRIGGER') {
          CharacterCreator.show();
          return;
        }`;

if (html.includes(selectOptionTarget)) {
  html = html.replace(selectOptionTarget, selectOptionRepl);
  console.log('selectOption interceptor de conjuro inyectado.');
}

// --- 6. updateUI custom triggers ---
const updateUITriggersTarget = `        } else if (this.state.escenaActual === 'cuerpo_entrenamiento_si') {
          this.triggerCuerpoMistico();
        } else if (this.state.escenaActual === 'cuerpo_entrenamiento_no') {
          this.triggerCuerpoNoMistico();
        }
      },`;

const updateUITriggersRepl = `        } else if (this.state.escenaActual === 'cuerpo_entrenamiento_si') {
          this.triggerCuerpoMistico();
        } else if (this.state.escenaActual === 'cuerpo_entrenamiento_no') {
          this.triggerCuerpoNoMistico();
        } else if (this.state.escenaActual === 'salud_espiritu') {
          this.triggerEspirituCarta();
        } else if (this.state.escenaActual === 'espiritu_conflicto_jairo') {
          this.triggerEspirituConflictoJairo();
        } else if (this.state.escenaActual === 'espiritu_conjuro_play') {
          this.triggerEspirituConjuroPlay();
        } else if (this.state.escenaActual === 'espiritu_resolucion_play') {
          this.triggerEspirituResolucionPlay();
        } else if (this.state.escenaActual === 'espiritu_final_bueno') {
          this.triggerFinalBueno();
        } else if (this.state.escenaActual === 'amor_vaca_tejado') {
          this.triggerVacaTejado();
        } else if (this.state.escenaActual === 'amor_ia_selector_play') {
          this.triggerIASelector();
        } else if (this.state.escenaActual === 'amor_ia_toxica_sabotaje') {
          this.triggerToxicChat();
        } else if (this.state.escenaActual === 'amor_ia_mascota') {
          this.triggerMascotaJumpscare();
        } else if (this.state.escenaActual === 'amor_familia_tarot_play') {
          this.triggerTarot();
        } else if (this.state.escenaActual === 'amor_familia_ouija_play') {
          this.triggerOuija();
        } else if (this.state.escenaActual === 'mente_anx_bungee' || this.state.escenaActual === 'mente_anx_knife') {
          this.triggerAnxietyGag();
        } else if (this.state.escenaActual === 'mente_pocion_decision') {
          this.triggerPotionGame();
        } else if (this.state.escenaActual === 'mente_pocion_fallo') {
          this.triggerTrollTimer();
        } else if (this.state.escenaActual === 'mente_jumpscare_cojin') {
          this.triggerCojinJumpscare();
        } else if (this.state.escenaActual === 'mente_cierre_preparacion') {
          this.triggerMenteRift();
        } else if (this.state.escenaActual === 'cuerpo_habito_chill') {
          this.triggerPlaylistChill();
        } else if (this.state.escenaActual === 'cuerpo_timeline2_distortion') {
          this.triggerCrystalDistortion();
        } else if (this.state.escenaActual === 'dinero_estafado_input_scene') {
          this.triggerEstafadoInput();
        }
      },`;

if (html.includes(updateUITriggersTarget)) {
  html = html.replace(updateUITriggersTarget, updateUITriggersRepl);
  console.log('updateUI custom triggers inyectados.');
}

// --- 7. Append new GameEngine methods ---
const triggerCuerpoNoMisticoTarget = `      triggerCuerpoNoMistico() {
        const gameContainer = document.getElementById('game-container');
        const flash = document.getElementById('light-flash-overlay');

        if (gameContainer) {
          gameContainer.classList.remove('dim-mystical');
        }

        // Flash de luz fluorescente blanca plana
        if (flash) {
          flash.classList.add('active');
          setTimeout(() => {
            flash.classList.remove('active');
          }, 150);
        }
      },`;

const triggerCuerpoNoMisticoRepl = `      triggerCuerpoNoMistico() {
        const gameContainer = document.getElementById('game-container');
        const flash = document.getElementById('light-flash-overlay');

        if (gameContainer) {
          gameContainer.classList.remove('dim-mystical');
        }

        // Flash de luz fluorescente blanca plana
        if (flash) {
          flash.classList.add('active');
          setTimeout(() => {
            flash.classList.remove('active');
          }, 150);
        }
      },

      triggerEspirituCarta() {
        const overlay = document.getElementById('espiritu-carta-overlay');
        const card = document.getElementById('mystical-tarot-card');
        const hud = document.querySelector('.hud-container');
        if (hud) hud.style.opacity = '0';
        overlay.classList.remove('hidden');
        card.classList.remove('flipped');
        card.onclick = () => {
          card.classList.add('flipped');
          if (typeof AudioEngine !== 'undefined') AudioEngine.playCardFlip();
          setTimeout(() => {
            overlay.classList.add('hidden');
            if (hud) hud.style.opacity = '1';
            this.selectOption('espiritu_carta_mente');
          }, 1800);
        };
      },

      jairoSlideIndex: 0,
      triggerEspirituConflictoJairo() {
        const overlay = document.getElementById('espiritu-jairo-overlay');
        const hud = document.querySelector('.hud-container');
        if (hud) hud.style.opacity = '0';
        overlay.classList.remove('hidden');
        this.jairoSlideIndex = 0;
        this.updateJairoSlides();
      },
      updateJairoSlides() {
        const slides = document.querySelectorAll('.jairo-slide');
        const prevBtn = document.getElementById('btn-jairo-prev');
        const nextBtn = document.getElementById('btn-jairo-next');
        slides.forEach((slide, idx) => {
          if (idx === this.jairoSlideIndex) {
            slide.classList.add('active');
          } else {
            slide.classList.remove('active');
          }
        });
        if (this.jairoSlideIndex === 0) {
          prevBtn.classList.add('hidden');
        } else {
          prevBtn.classList.remove('hidden');
        }
        if (this.jairoSlideIndex === 2) {
          nextBtn.textContent = 'Concluir Lore';
        } else {
          nextBtn.textContent = 'Siguiente';
        }
      },
      prevJairoSlide() {
        if (this.jairoSlideIndex > 0) {
          this.jairoSlideIndex--;
          this.updateJairoSlides();
          if (typeof AudioEngine !== 'undefined') AudioEngine.playHover();
        }
      },
      nextJairoSlide() {
        if (this.jairoSlideIndex < 2) {
          this.jairoSlideIndex++;
          this.updateJairoSlides();
          if (typeof AudioEngine !== 'undefined') AudioEngine.playHover();
        } else {
          const overlay = document.getElementById('espiritu-jairo-overlay');
          const hud = document.querySelector('.hud-container');
          overlay.classList.add('hidden');
          if (hud) hud.style.opacity = '1';
          this.selectOption('espiritu_pendulo_desastre');
        }
      },

      triggerEspirituConjuroPlay() {
        const overlay = document.getElementById('espiritu-conjuro-overlay');
        const hud = document.querySelector('.hud-container');
        const highlight = document.getElementById('system-val-03-highlight');
        const input = document.getElementById('spell-input');
        const error = document.getElementById('spell-error');
        if (hud) hud.style.opacity = '0';
        overlay.classList.remove('hidden');
        input.value = '';
        error.classList.add('hidden');
        const paid = localStorage.getItem('vidente_adrian_paid') === 'true';
        if (paid) {
          highlight.classList.remove('hidden');
        } else {
          highlight.classList.add('hidden');
        }
      },
      copySpellToClipboard() {
        const spellText = document.getElementById('spell-text-to-copy').textContent;
        navigator.clipboard.writeText(spellText).then(() => {
          const btn = document.getElementById('btn-copy-spell');
          const original = btn.textContent;
          btn.textContent = '¡Copiado!';
          if (typeof AudioEngine !== 'undefined') AudioEngine.playClick();
          setTimeout(() => { btn.textContent = original; }, 1500);
        });
      },
      validateSpell() {
        const input = document.getElementById('spell-input').value.trim().toLowerCase();
        const error = document.getElementById('spell-error');
        const overlay = document.getElementById('espiritu-conjuro-overlay');
        const hud = document.querySelector('.hud-container');
        if (input === 'alha cazam') {
          overlay.classList.add('hidden');
          if (hud) hud.style.opacity = '1';
          this.selectOption('espiritu_resolucion_antilope');
        } else {
          error.classList.remove('hidden');
          if (typeof AudioEngine !== 'undefined') AudioEngine.playErrorBeep();
        }
      },

      rescueTimer: null,
      rescueSecondsLeft: 10,
      triggerEspirituResolucionPlay() {
        const overlay = document.getElementById('espiritu-resolucion-overlay');
        const hud = document.querySelector('.hud-container');
        const input = document.getElementById('rescue-input');
        const error = document.getElementById('rescue-error');
        const timerBar = document.getElementById('rescue-timer-bar');
        const timerText = document.getElementById('rescue-timer-text');
        if (hud) hud.style.opacity = '0';
        overlay.classList.remove('hidden');
        input.value = '';
        error.classList.add('hidden');
        if (typeof AudioEngine !== 'undefined') AudioEngine.playGlitch();
        this.rescueSecondsLeft = 10.0;
        timerBar.style.width = '100%';
        timerText.textContent = '10.00s';
        if (this.rescueTimer) clearInterval(this.rescueTimer);
        this.rescueTimer = setInterval(() => {
          this.rescueSecondsLeft -= 0.1;
          if (this.rescueSecondsLeft <= 0) {
            clearInterval(this.rescueTimer);
            this.rescueTimer = null;
            overlay.classList.add('hidden');
            if (hud) hud.style.opacity = '1';
            this.selectOption('espiritu_fracaso');
          } else {
            const pct = (this.rescueSecondsLeft / 10) * 100;
            timerBar.style.width = pct + '%';
            timerText.textContent = this.rescueSecondsLeft.toFixed(2) + 's';
          }
        }, 100);
      },
      submitRescueWord() {
        const input = document.getElementById('rescue-input').value.trim().toUpperCase();
        const error = document.getElementById('rescue-error');
        const overlay = document.getElementById('espiritu-resolucion-overlay');
        const hud = document.querySelector('.hud-container');
        const normalized = input.replace(/[Í]/g, 'I');
        if (normalized === 'EPOLITNA' || input === 'EPOLÍTNA') {
          if (this.rescueTimer) {
            clearInterval(this.rescueTimer);
            this.rescueTimer = null;
          }
          overlay.classList.add('hidden');
          if (hud) hud.style.opacity = '1';
          const paid = localStorage.getItem('vidente_adrian_paid') === 'true';
          if (paid) {
            this.selectOption('espiritu_final_bueno');
          } else {
            this.selectOption('espiritu_exito');
          }
        } else {
          error.classList.remove('hidden');
          if (typeof AudioEngine !== 'undefined') AudioEngine.playErrorBeep();
        }
      },

      triggerFinalBueno() {
        const overlay = document.getElementById('making-of-overlay');
        const hud = document.querySelector('.hud-container');
        const scroller = document.getElementById('credits-scroller-el');
        if (hud) hud.style.opacity = '0';
        overlay.classList.remove('hidden');
        scroller.style.animation = 'none';
        scroller.offsetHeight;
        scroller.style.animation = 'scroll-credits 28s linear forwards';
        if (typeof AudioEngine !== 'undefined') {
          AudioEngine.playEnding();
        }
      },

      triggerVacaTejado() {
        const overlay = document.getElementById('amor-vaca-overlay');
        const hud = document.querySelector('.hud-container');
        if (hud) hud.style.opacity = '0';
        overlay.classList.remove('hidden');
        if (typeof AudioEngine !== 'undefined') AudioEngine.playLaughter();
      },
      concludeVacaTejado() {
        const overlay = document.getElementById('amor-vaca-overlay');
        const hud = document.querySelector('.hud-container');
        overlay.classList.add('hidden');
        if (hud) hud.style.opacity = '1';
        this.selectOption('amor_ia_inicio');
      },

      triggerIASelector() {
        const overlay = document.getElementById('amor-ia-overlay');
        const hud = document.querySelector('.hud-container');
        if (hud) hud.style.opacity = '0';
        overlay.classList.remove('hidden');
      },
      selectIA(iaId) {
        localStorage.setItem('vidente_ia_seleccionada', iaId);
        const overlay = document.getElementById('amor-ia-overlay');
        const hud = document.querySelector('.hud-container');
        overlay.classList.add('hidden');
        if (hud) hud.style.opacity = '1';
        if (iaId.startsWith('mascota')) {
          this.selectOption('amor_ia_mascota');
        } else {
          this.selectOption('amor_ia_videollamada');
        }
      },

      toxicChatInterval: null,
      triggerToxicChat() {
        const overlay = document.getElementById('amor-toxic-chat-overlay');
        const hud = document.querySelector('.hud-container');
        const blockBtn = document.getElementById('btn-block-chat');
        const container = document.getElementById('toxic-spam-container');
        if (hud) hud.style.opacity = '0';
        overlay.classList.remove('hidden');
        blockBtn.classList.add('hidden');
        container.innerHTML = '';
        if (this.toxicChatInterval) clearInterval(this.toxicChatInterval);
        const messages = [
          "¿Puedo ligar contigo?",
          "Pero ¿por qué me dejas si yo te quiero?",
          "Te entiendo pero es que yo te amo, ¿por qué no lo intentamos una vez?",
          "Me he abierto el gas de casa. Voy a meter la cabeza en el horno.",
          "Me he tomado 3 antihistamínicos y 7 valerianas."
        ];
        setTimeout(() => {
          blockBtn.classList.remove('hidden');
          this.toxicChatInterval = setInterval(() => {
            const msg = messages[Math.floor(Math.random() * messages.length)];
            const el = document.createElement('div');
            el.className = 'toxic-msg-bubble';
            el.textContent = msg;
            const left = Math.random() * 50;
            const top = Math.random() * 80;
            el.style.left = left + '%';
            el.style.top = top + '%';
            container.appendChild(el);
            if (typeof AudioEngine !== 'undefined') AudioEngine.playErrorBeep();
            setTimeout(() => el.remove(), 2000);
          }, 500);
        }, 2000);
      },
      blockToxicChat() {
        if (this.toxicChatInterval) {
          clearInterval(this.toxicChatInterval);
          this.toxicChatInterval = null;
        }
        const overlay = document.getElementById('amor-toxic-chat-overlay');
        const hud = document.querySelector('.hud-container');
        overlay.classList.add('hidden');
        if (hud) hud.style.opacity = '1';
        this.selectOption('amor_ia_bloqueada');
      },

      triggerMascotaJumpscare() {
        const overlay = document.getElementById('mascota-jumpscare-overlay');
        const hud = document.querySelector('.hud-container');
        if (hud) hud.style.opacity = '0';
        overlay.classList.remove('hidden');
        if (typeof AudioEngine !== 'undefined') {
          AudioEngine.playFailureHorn();
        }
        setTimeout(() => {
          overlay.classList.add('hidden');
          if (hud) hud.style.opacity = '1';
          this.selectOption('mamalachi_pregunta');
        }, 1500);
      },

      triggerTarot() {
        const overlay = document.getElementById('amor-tarot-overlay');
        const hud = document.querySelector('.hud-container');
        const cards = document.querySelectorAll('.spanish-card');
        const result = document.getElementById('tarot-result-desc');
        const btn = document.getElementById('btn-conclude-tarot');
        if (hud) hud.style.opacity = '0';
        overlay.classList.remove('hidden');
        result.classList.add('hidden');
        btn.classList.add('hidden');
        cards.forEach(card => {
          card.classList.remove('flipped');
          card.style.pointerEvents = 'auto';
        });
      },
      flipSpanishCard(cardIdx, name, desc) {
        const card = document.getElementById('sp-card-container-' + cardIdx);
        const cards = document.querySelectorAll('.spanish-card');
        const result = document.getElementById('tarot-result-desc');
        const btn = document.getElementById('btn-conclude-tarot');
        card.classList.add('flipped');
        if (typeof AudioEngine !== 'undefined') AudioEngine.playCardFlip();
        cards.forEach(c => c.style.pointerEvents = 'none');
        setTimeout(() => {
          result.innerHTML = \`<b>✨ \${name} ✨</b><br>\${desc}\`;
          result.classList.remove('hidden');
          btn.classList.remove('hidden');
        }, 600);
      },
      concludeTarot() {
        const overlay = document.getElementById('amor-tarot-overlay');
        const hud = document.querySelector('.hud-container');
        overlay.classList.add('hidden');
        if (hud) hud.style.opacity = '1';
        this.selectOption('amor_familia_tarot_cierre');
      },

      triggerOuija() {
        const overlay = document.getElementById('amor-ouija-overlay');
        const hud = document.querySelector('.hud-container');
        const planchette = document.getElementById('ouija-planchette');
        const instructions = document.getElementById('ouija-instructions');
        const inputArea = document.getElementById('ouija-input-container');
        const responseArea = document.getElementById('ouija-response-container');
        if (hud) hud.style.opacity = '0';
        overlay.classList.remove('hidden');
        planchette.style.left = 'calc(50% - 22px)';
        instructions.textContent = 'Coloca el dedo virtual sobre el indicador y arrástralo lentamente hacia el "SÍ" (izquierda).';
        inputArea.classList.add('hidden');
        responseArea.classList.add('hidden');
        this.setupOuijaDrag(planchette);
      },
      setupOuijaDrag(planchette) {
        let isDragging = false;
        let startX = 0;
        let startLeft = 0;
        const track = document.getElementById('ouija-planchette-track');
        const maxLeft = track.clientWidth - planchette.clientWidth;
        const onDragStart = (e) => {
          isDragging = true;
          startX = e.clientX || (e.touches && e.touches[0].clientX);
          startLeft = planchette.offsetLeft;
          planchette.style.transition = 'none';
        };
        const onDragMove = (e) => {
          if (!isDragging) return;
          const currentX = e.clientX || (e.touches && e.touches[0].clientX);
          const deltaX = currentX - startX;
          let targetLeft = startLeft + deltaX;
          targetLeft = Math.max(0, Math.min(maxLeft, targetLeft));
          planchette.style.left = targetLeft + 'px';
          const pct = (targetLeft / maxLeft) * 100;
          if (pct <= 15) {
            isDragging = false;
            planchette.style.left = '0px';
            document.removeEventListener('mousemove', onDragMove);
            document.removeEventListener('mouseup', onDragEnd);
            document.removeEventListener('touchmove', onDragMove);
            document.removeEventListener('touchend', onDragEnd);
            if (typeof AudioEngine !== 'undefined') AudioEngine.playOuijaSpectral();
            document.getElementById('ouija-instructions').textContent = 'El espíritu responde... Puedes formular tu pregunta.';
            document.getElementById('ouija-input-container').classList.remove('hidden');
          }
        };
        const onDragEnd = () => {
          isDragging = false;
          let currentLeft = planchette.offsetLeft;
          const pct = (currentLeft / maxLeft) * 100;
          if (pct > 15) {
            planchette.style.transition = 'left 0.4s ease';
            planchette.style.left = 'calc(50% - 22px)';
          }
          document.removeEventListener('mousemove', onDragMove);
          document.removeEventListener('mouseup', onDragEnd);
          document.removeEventListener('touchmove', onDragMove);
          document.removeEventListener('touchend', onDragEnd);
        };
        planchette.onmousedown = (e) => {
          onDragStart(e);
          document.addEventListener('mousemove', onDragMove);
          document.addEventListener('mouseup', onDragEnd);
        };
        planchette.ontouchstart = (e) => {
          onDragStart(e);
          document.addEventListener('touchmove', onDragMove, { passive: true });
          document.addEventListener('touchend', onDragEnd);
        };
      },
      sendOuijaMessage() {
        const msgInput = document.getElementById('ouija-user-message');
        const inputArea = document.getElementById('ouija-input-container');
        const responseArea = document.getElementById('ouija-response-container');
        const responseText = document.getElementById('ouija-response-text');
        const btnConclude = document.getElementById('btn-conclude-ouija');
        if (!msgInput.value.trim()) return;
        inputArea.classList.add('hidden');
        responseText.textContent = 'La madera cruje... El ancestro te susurra: "El amor es una simulación de la que debes despertar. El camino de salida está en las entrañas del Metaguión..."';
        responseArea.classList.remove('hidden');
        setTimeout(() => {
          btnConclude.classList.remove('hidden');
        }, 2000);
      },
      concludeOuija() {
        const planchette = document.getElementById('ouija-planchette');
        const track = document.getElementById('ouija-planchette-track');
        const maxLeft = track.clientWidth - planchette.clientWidth;
        const overlay = document.getElementById('amor-ouija-overlay');
        const hud = document.querySelector('.hud-container');
        planchette.style.transition = 'left 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        planchette.style.left = maxLeft + 'px';
        if (typeof AudioEngine !== 'undefined') AudioEngine.playOuijaSpectral();
        setTimeout(() => {
          overlay.classList.add('hidden');
          if (hud) hud.style.opacity = '1';
          this.selectOption('amor_familia_ouija_cierre');
        }, 1800);
      },

      triggerAnxietyGag() {
        const overlay = document.getElementById('mente-anx-overlay');
        const title = document.getElementById('anx-gag-title');
        const body = document.getElementById('anx-gag-body');
        const hud = document.querySelector('.hud-container');
        if (hud) hud.style.opacity = '0';
        overlay.classList.remove('hidden');
        if (this.state.escenaActual === 'mente_anx_bungee') {
          title.textContent = '🚨 GAG: BUNGEE JUMPING SIN CUERDA 🚨';
          body.innerHTML = \`
            <div class="bungee-container">
              <div class="bungee-platform"></div>
              <div class="bungee-rope"></div>
              <div class="bungee-figure">🚶‍♂️</div>
            </div>
            <p style="margin-top:10px; font-size:0.95rem; text-align:center; color:#ff5555;">A veces sientes que te lanzas al vacío de tus emociones sin protección... como este pobre diablo.</p>
          \`;
        } else {
          title.textContent = '🚨 GAG: CUCHILLO DE BROMA EN LA CABEZA 🚨';
          body.innerHTML = \`
            <div class="knife-container">
              <div class="knife-face">👴</div>
              <div class="knife-emoji">🔪</div>
            </div>
            <p style="margin-top:10px; font-size:0.95rem; text-align:center; color:#ff5555;">A veces la mente duele como si tuvieras algo clavado... literal.</p>
          \`;
        }
      },
      concludeAnxietyGag() {
        const overlay = document.getElementById('mente-anx-overlay');
        const hud = document.querySelector('.hud-container');
        overlay.classList.add('hidden');
        if (hud) hud.style.opacity = '1';
        this.selectOption('mente_anx_gag_resolucion');
      },

      potionDose: 1,
      triggerPotionGame() {
        const overlay = document.getElementById('mente-pocion-overlay');
        const hud = document.querySelector('.hud-container');
        if (hud) hud.style.opacity = '0';
        overlay.classList.remove('hidden');
        this.potionDose = 1;
        document.getElementById('potion-dose-value').textContent = '1 gota mística';
      },
      changePotionDose(val) {
        this.potionDose += val;
        if (this.potionDose < 1) this.potionDose = 1;
        document.getElementById('potion-dose-value').textContent = \`\${this.potionDose} gotas místicas\`;
        if (typeof AudioEngine !== 'undefined') AudioEngine.playClick();
      },
      drinkPotion() {
        const overlay = document.getElementById('mente-pocion-overlay');
        const hud = document.querySelector('.hud-container');
        overlay.classList.add('hidden');
        if (hud) hud.style.opacity = '1';
        if (this.potionDose === 1) {
          this.selectOption('mente_pocion_exito');
        } else {
          this.selectOption('mente_pocion_fallo');
        }
      },

      trollTimerInterval: null,
      trollSecondsLeft: 3 * 3600,
      triggerTrollTimer() {
        const overlay = document.getElementById('mente-troll-overlay');
        const hud = document.querySelector('.hud-container');
        const countDisplay = document.getElementById('troll-countdown');
        if (hud) hud.style.opacity = '0';
        overlay.classList.remove('hidden');
        this.trollSecondsLeft = 3 * 3600;
        if (this.trollTimerInterval) clearInterval(this.trollTimerInterval);
        const updateDisplay = () => {
          const h = Math.floor(this.trollSecondsLeft / 3600).toString().padStart(2, '0');
          const m = Math.floor((this.trollSecondsLeft % 3600) / 60).toString().padStart(2, '0');
          const s = (this.trollSecondsLeft % 60).toString().padStart(2, '0');
          countDisplay.textContent = \`\${h}:\${m}:\${s}\`;
        };
        updateDisplay();
        this.trollTimerInterval = setInterval(() => {
          this.trollSecondsLeft--;
          if (this.trollSecondsLeft <= 0) {
            clearInterval(this.trollTimerInterval);
            this.trollTimerInterval = null;
            countDisplay.textContent = "00:00:00";
            setTimeout(() => {
              overlay.classList.add('hidden');
              if (hud) hud.style.opacity = '1';
              this.showEnding(HISTORIA['mente_pocion_fallo']);
            }, 1000);
          } else {
            updateDisplay();
          }
        }, 1000);
      },
      triggerTrollImpatience() {
        if (this.trollTimerInterval) {
          clearInterval(this.trollTimerInterval);
          this.trollTimerInterval = null;
        }
        const overlay = document.getElementById('mente-troll-overlay');
        const hud = document.querySelector('.hud-container');
        overlay.classList.add('hidden');
        if (hud) hud.style.opacity = '1';
        this.showEnding(HISTORIA['mente_pocion_fallo']);
      },

      triggerCojinJumpscare() {
        const overlay = document.getElementById('mente-cojin-jumpscare');
        const cojin = document.getElementById('cojin-element');
        const hud = document.querySelector('.hud-container');
        if (hud) hud.style.opacity = '0';
        overlay.classList.remove('hidden');
        cojin.style.transform = 'scale(0.2)';
        cojin.offsetHeight;
        setTimeout(() => {
          cojin.style.transform = 'scale(15)';
          if (typeof AudioEngine !== 'undefined') AudioEngine.playFailureHorn();
        }, 100);
        setTimeout(() => {
          overlay.classList.add('hidden');
          if (hud) hud.style.opacity = '1';
          this.selectOption('mente_cierre_preparacion');
        }, 1300);
      },

      triggerMenteRift() {
        const overlay = document.getElementById('mente-rift-overlay');
        const hud = document.querySelector('.hud-container');
        const spellEntry = document.getElementById('mente-spell-entry');
        const submitBtn = document.getElementById('btn-submit-mente-spell');
        const err = document.getElementById('mente-spell-error');
        if (hud) hud.style.opacity = '0';
        overlay.classList.remove('hidden');
        spellEntry.classList.add('hidden');
        submitBtn.classList.add('hidden');
        err.classList.add('hidden');
        const container = document.getElementById('game-container');
        let count = 0;
        const interval = setInterval(() => {
          if (container) {
            container.style.opacity = container.style.opacity === '0.3' ? '1' : '0.3';
          }
          count++;
          if (count > 8) {
            clearInterval(interval);
            if (container) container.style.opacity = '1';
          }
        }, 150);
      },
      submitMenteSpell() {
        const input = document.getElementById('mente-spell-input').value.trim().toUpperCase();
        const err = document.getElementById('mente-spell-error');
        const overlay = document.getElementById('mente-rift-overlay');
        const hud = document.querySelector('.hud-container');
        const normalized = input.replace(/[Í]/g, 'I');
        if (normalized === 'ANTILOPE') {
          overlay.classList.add('hidden');
          if (hud) hud.style.opacity = '1';
          const paid = localStorage.getItem('vidente_adrian_paid') === 'true';
          if (paid) {
            this.selectOption('espiritu_final_bueno');
          } else {
            this.selectOption('mente_cierre_conjuro_esquiva');
          }
        } else {
          err.classList.remove('hidden');
          if (typeof AudioEngine !== 'undefined') AudioEngine.playErrorBeep();
          setTimeout(() => {
            overlay.classList.add('hidden');
            if (hud) hud.style.opacity = '1';
            this.selectOption('mente_cierre_conjuro_gameover');
          }, 1500);
        }
      },

      triggerPlaylistChill() {
        const overlay = document.getElementById('cuerpo-playlist-overlay');
        const hud = document.querySelector('.hud-container');
        if (hud) hud.style.opacity = '0';
        overlay.classList.remove('hidden');
      },
      concludePlaylist() {
        const overlay = document.getElementById('cuerpo-playlist-overlay');
        const hud = document.querySelector('.hud-container');
        overlay.classList.add('hidden');
        if (hud) hud.style.opacity = '1';
        this.selectOption('cuerpo_decision_gym_home');
      },

      triggerCrystalDistortion() {
        const overlay = document.getElementById('cuerpo-crystal-distortion');
        const hud = document.querySelector('.hud-container');
        const timeline = localStorage.getItem('vidente_timeline');
        if (timeline === '2') {
          if (hud) hud.style.opacity = '0';
          overlay.classList.remove('hidden');
          if (typeof AudioEngine !== 'undefined') AudioEngine.playGlitch();
        } else {
          this.selectOption('cuerpo_cierre_consulta');
        }
      },
      concludeCrystalDistortion() {
        const overlay = document.getElementById('cuerpo-crystal-distortion');
        const hud = document.querySelector('.hud-container');
        overlay.classList.add('hidden');
        if (hud) hud.style.opacity = '1';
        this.selectOption('cuerpo_cierre_consulta');
      },

      triggerEstafadoInput() {
        const overlay = document.getElementById('dinero-estafado-overlay');
        const hud = document.querySelector('.hud-container');
        if (hud) hud.style.opacity = '0';
        overlay.classList.remove('hidden');
        document.getElementById('estafado-input').value = '';
        document.getElementById('estafado-error').classList.add('hidden');
      },
      submitEstafadoText() {
        const text = document.getElementById('estafado-input').value.trim();
        const err = document.getElementById('estafado-error');
        const overlay = document.getElementById('dinero-estafado-overlay');
        const hud = document.querySelector('.hud-container');
        if (text.length < 5) {
          err.classList.remove('hidden');
          if (typeof AudioEngine !== 'undefined') AudioEngine.playErrorBeep();
          return;
        }
        localStorage.setItem('vidente_estafado_text', text);
        overlay.classList.add('hidden');
        if (hud) hud.style.opacity = '1';
        this.selectOption('dinero_estafado_resolucion');
      },
`;

if (html.includes(triggerCuerpoNoMisticoTarget)) {
  html = html.replace(triggerCuerpoNoMisticoTarget, triggerCuerpoNoMisticoRepl);
  console.log('Nuevos métodos agregados a GameEngine.');
}

// Write the modified html back
fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Unificación e inyección en index.html finalizada con éxito.');
