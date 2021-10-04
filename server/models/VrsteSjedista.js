module.exports = (sequelize, DataTypes) =>{


    const VrsteSjedista = sequelize.define("VrsteSjedista",{

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