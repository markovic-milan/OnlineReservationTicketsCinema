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
        
    },{
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true
    })
    return VrsteSjedista

}