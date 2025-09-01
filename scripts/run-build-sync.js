const { execFileSync } = require('child_process');
const path = require('path');

const nextBin = path.join(__dirname, '..', 'node_modules', 'next', 'dist', 'bin', 'next');
console.log('Running', nextBin);
try {
  const out = execFileSync(process.execPath, [nextBin, 'build'], { stdio: 'pipe', encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
  require('fs').writeFileSync('build-full.log', out);
  console.log('Build finished, log written to build-full.log');
} catch (err) {
  const fs = require('fs');
  const out = (err.stdout || '') + '\n' + (err.stderr || '') + '\n' + err.stack;
  fs.writeFileSync('build-full.log', out);
  console.error('Build failed, log written to build-full.log');
  process.exit(1);
}
