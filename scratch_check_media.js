const fs = require('fs');
const files = fs.readdirSync('.');
files.forEach(f => {
  if (f.endsWith('.png') || f.endsWith('.jpg')) {
    const stats = fs.statSync(f);
    console.log(f, stats.size);
  }
});
const bfiles = fs.readdirSync('C:/Users/Usuario/.gemini/antigravity/brain/d030c6c2-1c9c-4593-976f-d0cabb4a6bf3');
bfiles.forEach(f => {
  if (f.endsWith('.png') || f.endsWith('.jpg')) {
    const stats = fs.statSync('C:/Users/Usuario/.gemini/antigravity/brain/d030c6c2-1c9c-4593-976f-d0cabb4a6bf3/' + f);
    console.log('brain/' + f, stats.size);
  }
});