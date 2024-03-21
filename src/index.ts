import express from 'express';
import { ArgumentParser } from 'argparse';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'url';

// https://stackoverflow.com/a/50053801
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const _parser = new ArgumentParser();
_parser.add_argument('-p', '--port', { type: 'int', default: 3000 });
const args = _parser.parse_args();

const app = express();
app.use(express.json());

// dynamically import and use all files in /lib/routers
// https://stackoverflow.com/a/77335648
const routers = fs
    .readdirSync(path.join(__dirname, 'lib', 'routers'), { withFileTypes: true })
    .filter((item) => !item.isDirectory())
    .map((item) => item.name);

routers.forEach(async (routerPath) => {
    const module = await import('./lib/routers/' + routerPath);
    app.use(module['router']);
});

const { port: PORT } = args;
app.listen(PORT, () => {
    console.log('Server listening on port', PORT);
});
