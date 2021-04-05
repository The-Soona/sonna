import test from 'ava';
import * as path from 'path';
import { run } from './helper';

test('should publish', async t => {
    const fixturePath = path.join(process.cwd(), 'test/fixtures/publish');
    await run('publish', fixturePath);
    t.pass();
});
