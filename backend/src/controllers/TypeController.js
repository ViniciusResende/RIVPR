const connection = require('../database/connection');

module.exports = {
  async index(request, response){  

    const types = await connection('types').select('*');
    
    return response.json(types);
  },

  async create(request, response){
    const { descricao, icone } = request.body;

    const result = await connection('types').insert({
      descricao,
      icone
    });
    const id = result[0];    

    return response.json({ id });
  },

  
}