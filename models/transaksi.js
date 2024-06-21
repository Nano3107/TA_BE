'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    
      // tbl transaksi join ke tabel users
      
      this.hasMany(models.detail_transaksi,{
        foreignKey: "id_transaksi", as:"detail_transaksi"
      })
    }
  }
  transaksi.init({
    id_transaksi: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_user: DataTypes.INTEGER,
    tgl: DataTypes.DATE,
    tgl_bayar: DataTypes.DATE,
    status: DataTypes.ENUM('lunas', 'belum dibayar'),
    
  }, {
    sequelize,
    modelName: 'transaksi',
    tableName: 'transaksi'
  });
  return transaksi;
};