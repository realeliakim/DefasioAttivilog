import Sequelize, { Model } from 'sequelize';

class Historico extends Model{
  static init(sequelize) {
    super.init({
      origem: Sequelize.STRING,
      destino: Sequelize.STRING,
      km: Sequelize.STRING,
      tempo: Sequelize.STRING,
    }, {
      sequelize,
    });
  }
}

export default Historico;