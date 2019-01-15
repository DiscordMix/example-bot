import {Command, Name, Description, Context, Utils} from "d.mix";

@Name("luck")
@Description("Determine your luck")
export default class LuckCommand extends Command {
    public async run($: Context): Promise<void> {
        await $.send(`Your luck is ${Utils.hash($.sender.id, 100)}%!`);
    }
}
