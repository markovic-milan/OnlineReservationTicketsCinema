module.exports = (sequelize, DataTypes) =>{
    const Sale = sequelize.define("Sale", {
        naziv: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        
    });


    Sale.associate = (models)=>{
        Sale.hasMany(models.Sjedista, {
            onDelete: "cascade",
        });
    };

    return Sale

};
