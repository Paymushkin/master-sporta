import { copyFileSync, cpSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

cpSync(join(root, 'public/images'), join(dist, 'images'), { recursive: true });
copyFileSync(join(root, 'public/favicon.svg'), join(dist, 'favicon.svg'));
copyFileSync(join(root, 'public/robots.txt'), join(dist, 'robots.txt'));
copyFileSync(join(dist, 'index.html'), join(dist, '404.html'));
writeFileSync(join(dist, '.nojekyll'), '');

console.log('GitHub Pages assets copied to dist/');
