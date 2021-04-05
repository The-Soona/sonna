import { WritableStreamBuffer } from 'stream-buffers';
import runner from '../';

export async function run(command: string, cwd = process.cwd()) {
    const stdout = new WritableStreamBuffer();

    await runner(command.split(/\s+/g), {
        cwd,
        stdout: stdout as any,
        stderr: process.stderr,
    });

    const stdoutString = stdout.getContentsAsString('utf-8');
    console.log('run %s, %s', command, stdoutString);
    return stdoutString;
}