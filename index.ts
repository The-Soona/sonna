'use strict';

import * as pkg from './package.json';
import { getLogger } from "./src/logger";

export default async (sonnaOptions = {}, { 
    cwd = process.cwd(),
    env = process.env,
    stdout,
    stderr,
}: {
    cwd?: string;
    env?: NodeJS.ProcessEnv;
    stdout: NodeJS.WriteStream;
    stderr: NodeJS.WriteStream;
}) => {
    const context = {
        cwd, env, stdout, stderr,
        logger: getLogger({ stdout, stderr }),
    };

    context.logger.info(`running ${pkg.name}@${pkg.version}..`);
}
