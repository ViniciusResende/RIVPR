const connection = require('../database/connection');
module.exports = {
  async index(request, response){
    const { report_id } = request.query;
    const confirmationCounting = await connection('confirmaStatus')
    .count('confirma', {as: 'count'})
    .where({
      report_id: report_id,
      confirma: true
    })
  
    return response.json(confirmationCounting);
  },
}