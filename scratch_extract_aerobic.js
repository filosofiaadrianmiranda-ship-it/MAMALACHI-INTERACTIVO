const fs = require('fs');
const lines = fs.readFileSync('C:\\Users\\Usuario\\.gemini\\antigravity\\brain\\d030c6c2-1c9c-4593-976f-d0cabb4a6bf3\\.system_generated\\logs\\transcript_full.jsonl', 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('playAerobicBeat') && lines[i].includes('playSiren')) {
    try {
      const o = JSON.parse(lines[i]);
      console.log('Step index:', o.step_index);
      fs.writeFileSync('C:\\Users\\Usuario\\.gemini\\antigravity\\brain\\d030c6c2-1c9c-4593-976f-d0cabb4a6bf3\\scratch\\aerobic_siren_step_' + o.step_index + '.txt', o.content || JSON.stringify(o.tool_calls), 'utf8');
      console.log('Saved step', o.step_index);
    } catch(e) {
      console.log('Error parsing JSON at line', i, e);
    }
  }
}
