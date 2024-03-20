<p align="center">
    <h1>REST API</h1>
    My own REST API for generic purposes
</p>

## 📂 Routes

### `GET` /discord/user/:userId

Get [profile information for a Discord user](https://discord.com/developers/docs/resources/user#get-user) given their ID. The JSON data is slightly different from the original API specification, transforming media hashes into media URLs.

## 🛠️ Contributing

```
git clone https://github.com/madkarmaa/rest-api.git && cd rest-api && npm i
```

If the `/dist` directory is not present or is empty (eg. first time run), please run the following command to generate it before starting the server:

```
npm run build && npm run dev
```

Start the development server

```
npm run dev
```
