import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export class DataLoader {
    static loadJSON(filePath: string) {
        const fullPath = path.resolve(process.cwd(), filePath);
        const fileContent = fs.readFileSync(fullPath, 'utf8');
        return JSON.parse(fileContent);
    }

    static loadYAML(filePath: string) {
        const fullPath = path.resolve(process.cwd(), filePath);
        const fileContent = fs.readFileSync(fullPath, 'utf8');
        return yaml.load(fileContent);
    }
} 