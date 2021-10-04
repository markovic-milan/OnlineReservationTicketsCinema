module.exports = (sequelize, DataTypes) =>{


    const VrsteSjedista = sequelize.define("Vrste_Sjedista",{

        naziv:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        opis:{
            type:DataTypes.STRING,
            allowNull:false,

        }


    })
    return VrsteSjedista

}