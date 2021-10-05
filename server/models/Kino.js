module.exports = (sequelize, DataTypes) =>{


    const Kino = sequelize.define("Kino",{

        adresa:{
            type: DataTypes.STRING,
            allowNull: false,
            paranoid: true,
            underscored: true,
            freezeTableName: true,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            paranoid: true,
            underscored: true,
            freezeTableName: true,
        },
        brojTelefona:{
            type:DataTypes.STRING,
            allowNull:false,
            paranoid: true,
            underscored: true,
            freezeTableName: true,
        },
        faxTelefon:{
            type:DataTypes.STRING,
            allowNull:false,
            paranoid: true,
            underscored: true,
            freezeTableName: true,
        },
    })
    return Kino

}