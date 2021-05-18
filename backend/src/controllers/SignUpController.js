const connection = require('../database/connection');
const crypto = require('crypto');
module.exports = {
  async index(request, response){
    const {nome, senha, email, foto} = request.body;
    const users = await connection('users').select('*').where('email', email);
  
    return response.json(users);
  },
}