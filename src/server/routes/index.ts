import fs from 'fs';
import path from 'path';
import url from 'url';
import { Express } from 'express';
import { Systrace } from 'react-native';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const __filename = path.basename(new URL(import.meta.url).pathname);
const __current_file = path.join(__dirname, __filename);
const JS_EXT = '.js';

const file_list: String[] = [];
await parse_file(__dirname);

export default async function(app: Express) {
    for (const file of file_list) {
        if (__current_file === file) {
            continue;
        }
        const api = file.substring(__dirname.length, file.length - JS_EXT.length);
        const uri = api.replace(/\\/g, '/');
        const module = await import(url.pathToFileURL(file.toString()).toString());
        app.use(uri, module.default);
        console.log(uri + ' is ready.');
    }
}

async function parse_file(directory: fs.PathLike) {
    const dir_list = fs.readdirSync(directory);
    for (const dir of dir_list) {
        const dir_path = path.join(directory.toString(), dir);
        const dir_stats = fs.statSync(dir_path);
        if (dir_stats.isDirectory()) {
            await parse_file(dir_path);
        }
        else {
            if (JS_EXT === path.extname(dir)) {
                file_list.push(dir_path);
            }
        }
    }
    return file_list;
}