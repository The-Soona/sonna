import yargs from 'yargs';

export default function sonnaCli(argv: string[], cwd: string) {
    const cli = yargs(argv, cwd);

    return cli
        .usage('Usage: $0 <command> [options]')
        .demandCommand(1, 'A command is required. Pass --help to see all available commands and options.')
        .recommendCommands()
        .strict()
        .fail((msg, err) => {

        })
        .alias("h", "help")
        .alias("v", "version");
}
