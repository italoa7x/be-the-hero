const generateUniqueId = require('../utils/generaUniqueId');

const crypto = require('crypto');
const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },
    // funcao assincronica, a mesma aguarda o retorno da solicitacao de insert no banco de dados. 
    async create(request, response) {
        const { name, email, password, whatsapp, city, uf } = request.body;
        const id = generateUniqueId();
        // quando chegar nessa parte, o node realiza um awai(aguarda), até que o insert seja finalizado.
        await connection('ongs').insert({
            id,
            name,
            email,
            password,
            whatsapp,
            city,
            uf,
        });
        return response.json({ id });
    },
}