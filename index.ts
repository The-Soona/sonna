'use strict';
import * as stream from 'stream';
import { Signale } from 'signale';


import { getLogger } from './src/core/logger';
import cli from './src/core/cli';

import * as publish from './src/command/publish';

import * as pkg from './package.json';

export interface SoonaOptions {
    cwd: string;
    env: NodeJS.ProcessEnv;
    stdout: stream.Writable;
    stderr: stream.Writable;
    logger: Signale<"error" | "success" | "log">;
}

export default async (argv: string[], {
    cwd = process.cwd(),
    env = process.env,
    stdout = process.stdout,
    stderr = process.stdin,
}: Partial<Omit<SoonaOptions, 'logger'>>) => {
    const context = {
        cwd, env, stdout, stderr,
        logger: getLogger({ stdout, stderr }),
    };

    context.logger.info(`running ${pkg.name}@${pkg.version}..`);
    
    return cli(argv, cwd, context)
        .command(publish)
        .parse(argv, context);
        
}
