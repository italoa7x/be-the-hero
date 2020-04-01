const generate = require('../../src/utils/generaUniqueId');

describe ('generateUniqueId', () => {
    const id = generate();
    it('gera um único ID', () => {
        expect(id).toHaveLength(8);
    });
});