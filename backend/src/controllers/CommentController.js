const connection = require('../database/connection');

module.exports = {
  async index(request, response){
    const { report_id, page=1 } = request.query;

    const [count] = await connection('comentario').where('report_id', report_id).count();

    console.log(count);
    
    const comments = await connection('comentario')
      .join('users', 'user_id', '=', 'users.id')
      .where('report_id', report_id)
      .limit(8)
      .offset((page -1) * 8)
      .select('comentario.*', 'users.nome');
    
    // console.log(comments);

    response.header('X-Total-Count', count['count(*)']);
    
    return response.json(comments);
  },

  async create(request, response){
    const { report_id, texto, datahoraCadastro } = request.body;
    const user_id = request.headers.authorization;

    const result = await connection('comentario').insert({
      report_id,
      texto,
      datahoraCadastro,
      user_id,
    });
    const id = result[0];    

    return response.json({ id });
  }
}