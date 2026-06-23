const fs = require('fs');
const lines = fs.readFileSync('C:\\Users\\Usuario\\.gemini\\antigravity\\brain\\d030c6c2-1c9c-4593-976f-d0cabb4a6bf3\\.system_generated\\logs\\transcript_full.jsonl', 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('playFailureHorn() {')) {
    const idx = lines[i].indexOf('playFailureHorn() {');
    console.log('Found in line', i);
    fs.writeFileSync('C:\\Users\\Usuario\\.gemini\\antigravity\\brain\\d030c6c2-1c9c-4593-976f-d0cabb4a6bf3\\scratch\\failure_horn_src.txt', lines[i].substring(idx - 100, idx + 2500), 'utf8');
    console.log('Saved to failure_horn_src.txt');
    break;
  }
}
