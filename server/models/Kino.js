module.exports = (sequelize, DataTypes) =>{


    const Kino = sequelize.define("Kino",
    {

        adresa:{
            type: DataTypes.STRING,
            allowNull: false,
<<<<<<< HEAD
        
=======

>>>>>>> newBranch02
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
        
        },
        brojTelefona:{
            type:DataTypes.STRING,
            allowNull:false,
<<<<<<< HEAD
          
=======
         
>>>>>>> newBranch02
        },
        faxTelefon:{
            type:DataTypes.STRING,
            allowNull:false,
           
<<<<<<< HEAD
        }
        
    },{
=======
          },


    },
    {
>>>>>>> newBranch02
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true
    })
    return Kino

}