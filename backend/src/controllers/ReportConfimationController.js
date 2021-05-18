const connection = require('../database/connection');

module.exports = {
  async create(request, response){
    const { confirma, novoStatus, datahoraCadastro, report_id } = request.body;
    const user_id = request.headers.authorization;
    
    const result = await connection('confirmaStatus').insert({
      confirma,
      novoStatus,
      datahoraCadastro,
      user_id,
      report_id,
    });
    const id = result[0];

    return response.json({ id });
  },
}