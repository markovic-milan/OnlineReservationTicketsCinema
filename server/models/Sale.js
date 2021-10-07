module.exports = (sequelize, DataTypes) =>{
    const Sale = sequelize.define("Sale", {
        
        
    });


    Sale.associate = (models)=>{
        Sale.hasMany(models.Sjedista, {
            onDelete: "cascade",
        });
    };

    return Sale

};
