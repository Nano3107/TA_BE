'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cucian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.transaksi,{
        foreignKey: "id_cucian", as:"transaksi"
      })
    }
  }
  cucian.init({
    jenis_pakaian: DataTypes.ENUM('pakaian', 'sprei', 'karpet'),
    price: DataTypes.DOUBLE,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cucian',
  });
  return cucian;
};