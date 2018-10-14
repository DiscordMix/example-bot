// Environment Variables (defined in .env)
require("dotenv").config();

import {Bot} from "forge";

// NOTE: There will be an error could not create dir, ignore it; it's an unfixed bug.

async function init(): Promise<void> {
    const bot: Bot = new Bot({
        settings: {
            general: {
                prefixes: [process.env.PREFIX] as string[],
                token: process.env.TOKEN as string,
            },

            paths: {
                commands: process.env.COMMANDS_DIR as string,
                services: process.env.SERVICES_DIR as string,
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

    // Setup the bot (internal stuff)
    await bot.setup();

    // Start the bot!
    await bot.connect();
}

init();