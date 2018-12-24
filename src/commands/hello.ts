import {Command, CommandContext} from "@cloudrex/forge";

export default class HelloCommand extends Command {
    // Basic information about this command
    readonly meta = {
        name: "hello",
        description: "Say hello world"
    };

    readonly restrict: any = {
        cooldown: 3 // Must wait 3 seconds between executions (per-user)
    };

    public async executed(context: CommandContext): Promise<void> {
        await context.ok("Hello world"); // Success embed
        await context.fail("Hello world"); // Failure embed (auto-deletes; time depends on the message length)

        // ... and some more which I will document in the future
    }
};