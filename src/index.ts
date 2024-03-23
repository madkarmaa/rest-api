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

app.use((req, res, next) => {
    res.removeHeader('X-Powered-By');
    next();
});

const { port: PORT } = args;
(async () => {
    (
        await Promise.all(
            // dynamically import and use all files in /lib/routers
            // https://stackoverflow.com/a/77335648
            fs
                .readdirSync(path.join(__dirname, 'lib', 'routers'), { withFileTypes: true })
                .filter((item) => !item.isDirectory())
                .map((item) => import('./lib/routers/' + item.name))
        )
    ).forEach((module) => {
        app.use(module['router']);
    });

    app.listen(PORT, () => {
        console.log('Server listening on port', PORT);
    });
})();
