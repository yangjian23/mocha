
const assert = require('assert');
const hello = require('../async');

describe('#async hello', () => {
    describe('#asyncCalculate()', () => {
        it('#async with done', (done) => {
            (async function () {
                try {
                    let r = await hello();
                    assert.strictEqual(r, 15);
                    done();
                } catch (err) {
                    done(err);
                }
            })();
        });

        // 用try...catch太麻烦。还有一种更简单的写法，就是直接把async函数当成同步函数来测试
        it('#async function', async () => {
            let r = await hello();
            assert.strictEqual(r, 15);
        });

        it('#sync function', () => {
            assert(true);
        });
    });
});