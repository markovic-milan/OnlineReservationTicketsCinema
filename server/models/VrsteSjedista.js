module.exports = (sequelize, DataTypes) =>{


    const VrsteSjedista = sequelize.define("VrsteSjedista",{
        brojSale:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
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