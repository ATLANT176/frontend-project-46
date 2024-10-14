import path from 'path';
import fs from 'fs';

const parseData = (filepath) => {
    const absolutePath = path.resolve(filepath);
    const rawData = fs.readFileSync(absolutePath, 'UTF-8');
    const jsonParse = JSON.parse(rawData);
    return console.log(jsonParse);
}

export default parseData;
