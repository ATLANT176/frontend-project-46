import * as fs from 'node:fs';

function parseData(path) {
  const parsing = JSON.parse(fs.readFileSync(path, 'utf-8'));
  return parsing;
}

export { parseData };
