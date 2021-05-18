const connection = require('../database/connection');
//const { create } = require('./IncidentController');

module.exports = {
  async create(request, response){
    const { email, senha } = request.body;

    const user = await connection('users')
      .where('email', email)
      .andWhere('senha', senha)
      .select('*')
      .first();

    if(!user){
      return response.status(400).json({ error: 'No user found with this email or password'});
    }
    response.header('Authorization', user.id );

    return response.json(user);    
  }
}