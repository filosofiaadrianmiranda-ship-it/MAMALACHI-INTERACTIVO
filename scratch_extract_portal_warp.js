const fs = require('fs');
const lines = fs.readFileSync('C:\\Users\\Usuario\\.gemini\\antigravity\\brain\\d030c6c2-1c9c-4593-976f-d0cabb4a6bf3\\.system_generated\\logs\\transcript_full.jsonl', 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('playPortalWarp') && lines[i].includes('createOscillator') && lines[i].length > 2000) {
    console.log('Found in line', i);
    // Print the JSON type and content size
    try {
      const o = JSON.parse(lines[i]);
      console.log('step_index:', o.step_index, 'type:', o.type);
      // Let's write the content to a file to inspect
      fs.writeFileSync('C:\\Users\\Usuario\\.gemini\\antigravity\\brain\\d030c6c2-1c9c-4593-976f-d0cabb4a6bf3\\scratch\\audio_source_' + o.step_index + '.txt', o.content || JSON.stringify(o.tool_calls), 'utf8');
      console.log('Saved to audio_source_' + o.step_index + '.txt');
    } catch(e) {
      console.log('Error parsing JSON:', e);
    }
  }
}
