import express from 'express';
import { ArgumentParser } from 'argparse';
import { fetchUser } from './lib/discordRest.js';
import cors from 'cors';

const _parser = new ArgumentParser();
_parser.add_argument('-p', '--port', { type: 'int', default: 3000 });
const args = _parser.parse_args();

const app = express();
app.use(express.json());

app.get(
    '/discord/user/:userId',
    (req, res, next) => {
        if (isNaN(parseInt(req.params.userId))) return res.status(400).json({ message: 'User ID is not a number' });
        next();
    },
    cors({ maxAge: 600 }), // allow requests from all origins with 10 min cache
    async (req, res) => {
        let userData: any; // set var to any because the APIUser type is outdated

        try {
            userData = await fetchUser(req.params.userId);
        } catch (error) {
            return res.status(500).json({ message: 'Cannot get user data', details: error });
        }

        // transform user avatar to url
        userData['avatar'] =
            'https://cdn.discordapp.com/avatars/' + userData['id'] + '/' + userData['avatar'] + '.png?size=4096';

        // transform user banner to url if present
        if (userData['banner'])
            userData['banner'] =
                'https://cdn.discordapp.com/banners/' + userData['id'] + '/' + userData['banner'] + '.png?size=4096';

        // transform user avatar decoration to url if present
        if (userData['avatar_decoration_data'])
            userData['avatar_decoration_data']['asset'] =
                'https://cdn.discordapp.com/avatar-decoration-presets/' +
                userData['avatar_decoration_data']['asset'] +
                '.png?size=4096';

        // transform user accent color to hex color
        userData['accent_color'] = '#' + userData['accent_color'].toString(16).padStart(6, '0');

        res.status(200).json(userData);
    }
);

const { port: PORT } = args;
app.listen(PORT, () => {
    console.log('Server listening on port', PORT);
});
