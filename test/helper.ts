import { WritableStreamBuffer } from 'stream-buffers';
import runner from '../';

export async function run(command: string) {
    const stdout = new WritableStreamBuffer();

    await runner(command.split(/\s+/g), {
        stdout,
        stderr: process.stderr,
    });

    const stdoutString = stdout.getContentsAsString('utf-8');
    console.log('run %s, %s', command, stdoutString);
    return stdoutString;
}