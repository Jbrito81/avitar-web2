const { spawnSync } = require('child_process');

console.log('Running npx next build...');
const res = spawnSync(process.platform === 'win32' ? 'npx.cmd' : 'npx', ['next', 'build'], { stdio: 'inherit' });
if (res.error) {
  console.error('Error executing build:', res.error);
  process.exit(1);
}
process.exit(res.status);
