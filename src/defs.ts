import {Snowflake} from "discord.js";

export interface Env {
    readonly TOKEN: string;
    readonly OWNER_ID: Snowflake;
    readonly PREFIX: string;
    readonly COMMANDS_DIR: string;
    readonly SERVICES_DIR: string;
}