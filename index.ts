'use strict';
import * as stream from 'stream';
import * as pkg from './package.json';
import { getLogger } from './src/logger';
import cli from './src/core/cli';

export default async (argv: string[], {
    cwd = process.cwd(),
    env = process.env,
    stdout = process.stdout,
    stderr = process.stdin,
}: {
    cwd?: string;
    env?: NodeJS.ProcessEnv;
    stdout?: stream.Writable;
    stderr?: stream.Writable;
}) => {
    const context = {
        cwd, env, stdout, stderr,
        logger: getLogger({ stdout, stderr }),
    };

    context.logger.info(`running ${pkg.name}@${pkg.version}..`);
    
    return cli(argv, cwd)
        .parse(argv);
        
}
