import yargs, { Arguments } from 'yargs';
import { SoonaOptions } from '../..';

export type SoonaArgs = Arguments<{
    cwd: string;
}>;

export default function sonnaCli(argv: string[], cwd: string, context: SoonaOptions) {
    const cli = yargs(argv, cwd);
    
    return cli
        .usage('Usage: $0 <command> [options]')
        .demandCommand(1, 'A command is required. Pass --help to see all available commands and options.')
        .recommendCommands()
        .strict()
        .fail((msg, err) => {
            context.logger.error(msg);
        })
        .alias("h", "help")
        .alias("v", "version");
}
