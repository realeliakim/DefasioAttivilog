import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Historico from '../app/models/Historico';

const models = [Historico];

class Database {
  constructor(){
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();