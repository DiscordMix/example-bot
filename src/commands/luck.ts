import {Command, Name, Description, Context, Utils} from "@cloudrex/forge";

@Name("luck")
@Description("Determine your luck")
export default class LuckCommand extends Command {
    public async run(context: Context): Promise<void> {
        await context.send(`Your luck is ${Utils.hash(context.sender.id, 100)}%!`);
    }
}
