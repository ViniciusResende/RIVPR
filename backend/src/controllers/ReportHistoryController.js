const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const { page = 1} = request.query;
    const user_id = request.headers.authorization;

    const [count] = await connection('reports').where('user_id', user_id).count();

    console.log(count);

    // const reports = await connection('reports')
    //   .join('users', 'users.id', '=', 'reports.user_id')
    //   .select('reports.*', 'users.nome');

    const reports = await connection('reports')
      .join('users', 'users.id', '=', 'reports.user_id')
      .join('status', 'status.id', '=', 'reports.status')
      .join('types', 'types.id', '=', 'reports.tipo')
      .where('user_id', user_id)
      .limit(5)
      .offset((page -1) * 5)
      .select(['reports.*','users.nome', 'status.descricao AS statusDescription', 'types.descricao AS typeDescription', 'types.icone AS typeIcon']);
    
    // console.log(reports);

    response.header('X-Total-Count', count['count(*)']);
    
    return response.json(reports);
  }
}