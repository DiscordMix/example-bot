// Environment Variables (defined in .env)
require("dotenv").config();

import path from "path";
import fs from "fs";
import {StoreActionType, LogReducer, IState} from "./store";
import {Bot, Settings, Command, Context, Log, EBotEvents} from "@cloudrex/forge";
import {Env} from "./defs";

// Verify that .env file exists (bot configuration)
if (!fs.existsSync(".env")) {
    console.log("Hold up! Your bot isn't configured. Run 'npm run config' to configure it. Alternatively, you can configure the .env file manually.");
    process.exit(0);
}

const env: Env = process.env as any;

const bot: Bot = new Bot<IState, StoreActionType>({
    settings: new Settings({
        general: {
            prefixes: [env.PREFIX],
            token: env.TOKEN,
        },

        paths: {
            commands: path.join(__dirname, env.COMMANDS_DIR),
            services: path.join(__dirname, env.SERVICES_DIR)
        }
    }),

    owner: env.OWNER_ID
});

// BONUS: Log commands using the store
bot.store.addReducer(LogReducer);

// Dispatch log event upon command execution
bot.on(EBotEvents.CommandExecuted, (command: Command, context: Context) => {
    bot.store.dispatch(StoreActionType.LogCommand, {
        command: command.meta.name,
        user: context.sender.tag,
        time: Date.now()
    });

    Log.info(`Command '${command.meta.name}' was executed by '${context.sender.tag}'`);
});

// Connect and start the bot
bot.connect();
