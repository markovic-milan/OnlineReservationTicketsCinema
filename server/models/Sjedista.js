module.exports = (sequelize, DataTypes) => {
    const Sjedista = sequelize.define("Sjedista", {
      rezervisano: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    });
  
    return Sjedista;
  };