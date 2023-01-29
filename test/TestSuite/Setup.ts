import { jest } from '@jest/globals';

const modules: Record<string, unknown> = {};

await (async () => {
    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
})();

for (const [id, e] of Object.entries(modules)) {
    jest.unstable_mockModule(id, () => {
        return e;
    }, {
        virtual: true,
    });
}

export {};
