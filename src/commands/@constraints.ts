import {Command, Context, Permission, ChatEnv, RestrictGroup} from "@cloudrex/forge";

// Note: This command will not be loaded by Forge (as instructed by the leading @) and only serves example purposes.

export default class ConstraintsCommand extends Command {
    // Basic information about this command
    readonly meta = {
        name: "constraints",
        description: "Example use of command constraints"
    };

    readonly constraints: any = {
        cooldown: 3, // Cooldown between executions (per-user)
        selfPermissions: [Permission.SendMessages], // Permission(s) required by the bot
        issuerPermissions: [Permission.ManageMessages], // Permission(s) required by the executer
        environment: ChatEnv.Guild, // Limit command to specific environments
        specific: [RestrictGroup.BotOwner] // Limit command to the bot owner
    };

    public async run(context: Context): Promise<void> {
        return;
    }
};
