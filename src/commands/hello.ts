import {Command, CommandContext} from "@cloudrex/forge";

export default class TestCommand extends Command {
    // Basic information about the bot
    readonly meta = {
        name: "hello",
        description: "Say hello world!"
    };

    readonly restrict: any = {
        // specific: [RestrictGroup.ServerModerator] Only want people with MANAGE_MESSAGES perms to use it?
        cooldown: 5, // Must wait 5 seconds! (per-user)
        
        // ... and some other properties which I will document in the future
    };

    public async executed(context: CommandContext): Promise<void> {
        await context.ok("Hello world!"); // Success embed
        await context.fail("Hello world!"); // Failure embed (auto-deletes; time depends on the message length)

        // ... and some more which I will document in the future!
    }
};