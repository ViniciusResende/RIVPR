const connection = require('../database/connection');

module.exports = {
  async index(request, response){
    // const { status_id } = request.query;

    const status = await connection('status')
      // .where('id', status_id)
      .select('status.*');
  
    return response.json(status);
  },

  async create(request, response){
    const { descricao } = request.body;

    const result = await connection('status').insert({
      descricao
    });
    const id = result[0];    

    return response.json({ id });
  },

  async update(request, response){
    const {id, descricao} = request.body;

    await connection('status')
    .where({ id: id })
    .update({ descricao: descricao }, ['id', 'descricao']);

    return response.status(200).send("Alterado com sucesso.")
  }
}