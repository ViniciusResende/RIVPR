const connection = require('../database/connection');
const crypto = require('crypto');
const { update } = require('../database/connection');
module.exports = {
  
  async update(request, response){
    // const { id } = request.params;
    const { novaSenha }  = request.body;
    const user_id = request.headers.authorization;

    // const users = await connection('users')
    //   .where('id', id)
    //   .select('id')
    //   .first();

    //   if(users.id !== user_id){
    //     return response.status(401).json({error: 'Operation not permitted.'});
    //   }

    await connection('users')
    .where({ id: user_id })
    .update({ senha: novaSenha }, ['id', 'senha']);

    return response.status(200).send("Alterado com sucesso.")
  }

}