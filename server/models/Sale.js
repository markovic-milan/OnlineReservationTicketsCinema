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
    });

=======
        },
        opis: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vrijemePrikaza:
        {
            type: DataTypes.STRING, 
            allowNull: false
          },
>>>>>>> newBranch02

    Sale.associate = (models)=>{
        Sale.hasMany(models.Sjedista, {
            onDelete: "cascade",
        });
    };

<<<<<<< HEAD
=======
    },
    {
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true
    })
>>>>>>> newBranch02
    return Sale

};
