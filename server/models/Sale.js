module.exports = (sequelize, DataTypes) =>{
    const Sale = sequelize.define("Sale", {
        naziv: {
            type: DataTypes.STRING,
            allowNull: false,
<<<<<<< HEAD
        },
          
        
    },
    {
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true
    })
=======
          },
        
    });


    Sale.associate = (models)=>{
        Sale.hasMany(models.Sjedista, {
            onDelete: "cascade",
        });
    };

>>>>>>> 687d5029a9bab922a4a2efff5b7625d2e271fdd6
    return Sale

};
