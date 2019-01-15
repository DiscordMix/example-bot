import {Command, Context, Permission, ChatEnv, RestrictGroup, Name, Description, Constraints} from "d.mix";

// Note: This command will not be loaded by Forge (as instructed by the leading .) and only serves example purposes.

@Name("constraints")
@Description("Example use of command constraints")
@Constraints({
    cooldown: 3, // Cooldown between executions (per-user)
    selfPermissions: [Permission.SendMessages], // Permission(s) required by the bot
    issuerPermissions: [Permission.ManageMessages], // Permission(s) required by the executer
    environment: ChatEnv.Guild, // Limit command to specific environments
    specific: [RestrictGroup.BotOwner] // Limit command to the bot owner
})
export default class ConstraintsCommand extends Command {
    public async run($: Context): Promise<void> {
        //
    }
};
