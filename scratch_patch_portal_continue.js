const fs = require('fs');

const path = 'index.html';
let html = fs.readFileSync(path, 'utf8');

// Normalize to LF
let lfHtml = html.replace(/\r\n/g, '\n');

// 1. Modificar btn-ending-restart para que solo final_escape_twister dispare el startBromaLoop
const restartTarget = `        document.getElementById('btn-ending-restart').onclick = () => {
          AudioEngine.playClick();
          if (this.state.escenaActual === 'final_escape_twister' || this.state.escenaActual === 'sentarse_mamalachi') {
            this.startBromaLoop();
          } else {
            this.restartGame();
          }
        };`;

const restartReplacement = `        document.getElementById('btn-ending-restart').onclick = () => {
          AudioEngine.playClick();
          if (this.state.escenaActual === 'final_escape_twister') {
            this.startBromaLoop();
          } else {
            this.restartGame();
          }
        };`;

if (lfHtml.includes(restartTarget)) {
  lfHtml = lfHtml.replace(restartTarget, restartReplacement);
  console.log('Restored ending restart logic successfully!');
} else {
  console.error('Target restart logic not found');
}

// 2. Parsear HISTORIA_DEFAULT y modificar sentarse_mamalachi
const startStr = 'const HISTORIA_DEFAULT =';
const startIdx = lfHtml.indexOf(startStr);

if (startIdx === -1) {
  console.error('Could not find HISTORIA_DEFAULT in index.html');
  process.exit(1);
}

const openBraceIdx = lfHtml.indexOf('{', startIdx);
let braceCount = 1;
let endIdx = openBraceIdx + 1;
while (braceCount > 0 && endIdx < lfHtml.length) {
  if (lfHtml[endIdx] === '{') braceCount++;
  else if (lfHtml[endIdx] === '}') braceCount--;
  endIdx++;
}

const jsonStr = lfHtml.substring(openBraceIdx, endIdx);
let HISTORIA;
try {
  HISTORIA = JSON.parse(jsonStr);
  console.log('Parsed HISTORIA_DEFAULT successfully!');
} catch (e) {
  console.error('Error parsing JSON:', e.message);
  process.exit(1);
}

// Modificar sentarse_mamalachi para continuar a mamalachi_pregunta
HISTORIA.sentarse_mamalachi = {
  "orador": "MAMALACHI",
  "texto": "Te sientas en la silla de cristal flotante. Mamalachi cierra los ojos y sonríe con sabiduría. 'Tus elecciones cuánticas te han guiado por el camino del valor. Eres digno de desvelar los secretos del multiverso. Y recuerda que no es cosa menor, dicho de otra manera es cosa mayor.'",
  "imagen": "sala_mamalachi.png",
  "opciones": [
    {
      "texto": "Comenzar la consulta cuántica",
      "siguiente": "mamalachi_pregunta"
    }
  ],
  "final": false
};

// Sincronizar guion.json
fs.writeFileSync('guion.json', JSON.stringify(HISTORIA, null, 2), 'utf8');
console.log('Synchronized guion.json!');

// Reemplazar en index.html
const prettyJson = JSON.stringify(HISTORIA, null, 2);
lfHtml = lfHtml.substring(0, openBraceIdx) + prettyJson + lfHtml.substring(endIdx);

fs.writeFileSync(path, lfHtml.replace(/\n/g, '\r\n'), 'utf8');
console.log('Successfully updated index.html!');
