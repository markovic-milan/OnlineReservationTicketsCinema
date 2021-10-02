module.exports = (sequelize, DataTypes) =>{


    const VrstaSjedista = sequelize.define("VrsteSjedista",{

        naziv:{
            type: DataTypes.STRING,
            allowNull: false,
            paranoid: true,
            underscored: true,
            freezeTableName: true,
        },
        opis:{
            type:DataTypes.STRING,
            allowNull:false,
            paranoid: true,
            underscored: true,
            freezeTableName: true,
        },


    })
    return VrstaSjedista

}