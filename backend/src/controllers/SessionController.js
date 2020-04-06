const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { email, password } = request.body;
        const ong = await connection('ongs')
        .where('email', email)
        .andWhere('password', password)
        .select('*')
        .first();
        if(!ong){
            return response.status(400).json({ error: 'No ong found this ID.' });
        }
        return response.json(ong);
    }
}