// Environment Variables (defined in .env)
require("dotenv").config();

import {Bot} from "@cloudrex/forge";
import path from "path";

// NOTE: There will be an error could not create dir, ignore it; it's an unfixed bug.

async function init(): Promise<void> {
    const bot: Bot = new Bot({
        settings: {
            general: {
                prefixes: [process.env.PREFIX] as string[],
                token: process.env.TOKEN as string,
            },

            paths: {
                commands: path.join(__dirname, process.env.COMMANDS_DIR as string),
                services: path.join(__dirname, process.env.SERVICES_DIR as string),
                plugins: "", // Ignore this
                emojis: "" // Ignore this
            },

            keys: {
                bfd: undefined, // Ignore this
                dbl: undefined // Ignore this
            }
        },

        owner: process.env.OWNER_ID
    });

    // Start the bot!
    await bot.connect();
}

init();
