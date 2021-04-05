import test from 'ava';
import { run } from './helper';

test('should run', async t => {
    await run('-v');
    t.pass();
});
