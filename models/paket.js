'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class paket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association
      this.hasMany(models.transaksi,{
        foreignKey: "id_paket", as:"transaksi"
      })
    }
  }
  paket.init({
    id_paket: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    jenis: DataTypes.ENUM('standar', 'express'),
    harga: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'paket',
  });
  return paket;
};