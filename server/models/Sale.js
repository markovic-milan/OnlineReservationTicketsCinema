module.exports = (sequelize, DataTypes) =>{
    const Sale = sequelize.define("Sale", {
        naziv: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          
        
    },
    {
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });


    Sale.associate = (models)=>{
        Sale.hasMany(models.Sjedista, {
            onDelete: "cascade",
        });
    };

    return Sale

};
