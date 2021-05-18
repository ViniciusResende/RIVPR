const connection = require('../database/connection');
module.exports = {
  async index(request, response){
    const { report_id } = request.query;
    const disagreeCounting = await connection('confirmaStatus')
    .count('confirma', {as: 'count'})
    .where({
      report_id: report_id,
      confirma: false
    })
  
    return response.json(disagreeCounting);
  },
}