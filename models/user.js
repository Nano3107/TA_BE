'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.detail_transaksi,{
        foreignKey: "id_user", as:"detail_transaksi"
      })
      
    }
  }
  user.init({
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nama: {
      type : DataTypes.STRING,
      allowNull: false,
    },

    username: {
      type : DataTypes.STRING,
      allowNull: false,
    },
    password: 
    {
      type : DataTypes.STRING,
      allowNull: false,
    },

    role: DataTypes.ENUM('user', 'admin','manajer')
  }, {
    sequelize,
    modelName: 'user',
    tableName:'user'
  });
  return user;
};