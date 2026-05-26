const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const targetDir = path.join(buildDir, 'nse');

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const name of fs.readdirSync(src)) {
      copyRecursive(path.join(src, name), path.join(dest, name));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

if (!fs.existsSync(buildDir)) {
  console.error('Build folder not found:', buildDir);
  process.exit(1);
}

fs.rmSync(targetDir, { recursive: true, force: true });
fs.mkdirSync(targetDir, { recursive: true });

for (const item of fs.readdirSync(buildDir)) {
  if (item === 'nse') continue;
  copyRecursive(path.join(buildDir, item), path.join(targetDir, item));
}

console.log('Copied build output into build/nse');
