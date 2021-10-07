module.exports = (sequelize, DataTypes) => {
    const Sjedista = sequelize.define("Sjedista", {
      rezervisano: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      
    },  {
      timestamps: false,
      paranoid: true,
      underscored: true,
      freezeTableName: true
  }
    );
  
    return Sjedista;
  };