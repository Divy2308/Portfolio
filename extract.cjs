const { execSync } = require('child_process');
const fs = require('fs');
const blobBytes = execSync('git cat-file -p HEAD:public/models/character.enc', { encoding: 'buffer' });
fs.writeFileSync('public/models/character.enc', blobBytes);
console.log('Extracted exact blob bytes of character.enc to disk.');
