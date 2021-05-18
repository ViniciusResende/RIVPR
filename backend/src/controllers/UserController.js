const connection = require('../database/connection');
const crypto = require('crypto');
const { update } = require('../database/connection');
module.exports = {
  async index(request, response){
    const user_id = request.headers.authorization;

    // const users = await connection('users')
    // .where('id', user_id)
    // .select('*');

    const users = await connection('users').select('*');
  
    return response.json(users);
  },

  async create(request, response){
    const {nome, senha, email, foto} = request.body;
    
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('users').insert({
      id,
      nome,
      senha,
      email,
      foto,
    });

    return response.json({ id });
  },

  async delete(request,response){
    const { id } = request.params;
    const user_id = request.headers.authorization;

    const users = await connection('users')
      .where('id', id)
      .select('id')
      .first();

      if(users.id !== user_id){
        return response.status(401).json({error: 'Operation not permitted.'});
      }

      await connection('users').where('id', id).delete();

      return response.status(204).send()
  },

  async update(request, response){
    // const { id } = request.params;
    const {nome, email, foto} = request.body;
    const user_id = request.headers.authorization;

    // const userID = await connection('users')
    //   .where('id', user_id)
    //   .select('id')

    //   if(userID !== user_id){
    //     return response.status(401).json({error: 'Operation not permitted.'});
    //   }

    await connection('users')
    .where({ id: user_id })
    .update({ nome: nome, email: email, foto: foto }, ['id', 'nome', 'email', 'foto']);

    return response.status(200).send("Alterado com sucesso.")
  }

}