import { Routes, Snowflake, RESTGetAPIUserResult } from 'discord-api-types/v10';
import { REST } from '@discordjs/rest';
import 'dotenv/config';

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN!);

export const fetchUser = async (id: Snowflake): Promise<RESTGetAPIUserResult> =>
    rest.get(Routes.user(id)) as Promise<RESTGetAPIUserResult>;
