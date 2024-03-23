<h1 align="center">REST API</h1>
<p align="center">My own REST API for generic purposes, written using Node.js and <a href="https://expressjs.com/">Express</a></p>

## 📂 Routes

### `GET` /discord/users/:userId

Get [profile information of a Discord user](https://discord.com/developers/docs/resources/user#get-user) given their ID. The JSON data is slightly different from the original API specification, transforming media hashes into media URLs.

> [!IMPORTANT]
>
> A Discord bot token is **REQUIRED** for this route to work, [learn how to get one](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot). The bot token must be stored in a `.env` file in the root directory of the project under the `TOKEN` key.
>
> Example: `TOKEN=abcd1234`

### `POST` /tiktok/video/info

Get video information of a TikTok video given its URL.

> [!IMPORTANT]
>
> The request body must be structured the following way:

```json
{ "url": "tiktok video url here" }
```

## 🛠️ Build it yourself

Clone the repository and install all the dependencies:

```
git clone https://github.com/madkarmaa/rest-api.git && cd rest-api && npm i
```

Start the **development** server:

```
npm run dev
```

Start the **production** server:

```
npm run start
```
