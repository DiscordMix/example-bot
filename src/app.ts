// Environment Variables (defined in .env)
require("dotenv").config();

import {Bot, Settings} from "@cloudrex/forge";
import path from "path";
import fs from "fs";

// Verify that .env file exists
if (!fs.existsSync(".env")) {
    console.log("Hold up! You haven't created the .env file. Copy the .env.example to .env and configure the bot first.");
    process.exit(0);
}

async function init(): Promise<void> {
    const bot: Bot = new Bot({
        settings: new Settings({
            general: {
                prefixes: [process.env.PREFIX] as string[],
                token: process.env.TOKEN as string,
            },

            paths: {
                commands: path.join(__dirname, process.env.COMMANDS_DIR as string),
                services: path.join(__dirname, process.env.SERVICES_DIR as string)
            }
        }),

        owner: process.env.OWNER_ID
    });

    // Start the bot!
    await bot.connect();
}

init();
