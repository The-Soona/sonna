import test from 'ava';
import { WritableStreamBuffer } from 'stream-buffers';
import runner from '../';

test('should run', async t => {
    await runner({}, {
        stdout: new WritableStreamBuffer(),
        stderr: new WritableStreamBuffer(),
    });
    t.pass();
});
