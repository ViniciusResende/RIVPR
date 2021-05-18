const connection = require('../database/connection');

module.exports = {
  async index(request, response){
    const { tipo, status, local } = request.body;
    
    const comments = await connection('reports')
      .where({'tipo': tipo, 'status': status, 'local': local})
      .select('id');
    
    return response.json(comments);
  },
}