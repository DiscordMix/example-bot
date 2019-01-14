import {Command, Context, Name, Description, Constraint} from "@cloudrex/forge";

@Name("hello")
@Description("Say hello world")
@Constraint.Cooldown(3) // Must wait 3 seconds between executions (per-user)
export default class HelloCommand extends Command {
    public async run(context: Context): Promise<void> {
        await context.ok("Hello world"); // Success embed
        await context.fail("Hello world"); // Failure embed (auto-deletes; time depends on the message length)
    }
};
