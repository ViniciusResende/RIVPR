const connection = require('../database/connection');
const { update } = require('../database/connection');
module.exports = {
  async index(request, response){
    const reports = await connection('reports')
    .join('users', 'users.id', '=', 'reports.user_id')
    .join('status', 'status.id', '=', 'reports.status')
    .join('types', 'types.id', '=', 'reports.tipo')
    .select(['reports.*','users.nome', 'status.descricao AS statusDescription', 'types.descricao AS typeDescription', 'types.icone AS typeIcon']);

    // const reports = await connection('reports')
    // .select('*');
  
    return response.json(reports);
  },

  async create(request, response){
    const {local, descricao, foto, datahoraCadastro, tipo} = request.body;
    const user_id = request.headers.authorization;
    const status = 1;
    const {latitude, longitude} = local;
    console.log("ABC", local);

    const result = await connection('reports').insert({
      latitude,
      longitude,
      descricao,
      foto,
      datahoraCadastro,
      tipo,
      user_id,
      status,
    });
    const id = result[0];

    return response.json({ id });
  },

  async delete(request,response){
    const { id } = request.params;
    const user_id = request.headers.authorization;

    const reports = await connection('reports')
      .where('id', id)
      .select('user_id')
      .first();

      if(reports.user_id !== user_id){
        return response.status(401).json({error: 'Operation not permitted.'});
      }

      await connection('reports').where('id', id).delete();

      return response.status(204).send();
  }

}