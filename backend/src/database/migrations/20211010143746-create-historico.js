module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('historicos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      origem: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      destino: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      km: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tempo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('historicos');
  },
};
