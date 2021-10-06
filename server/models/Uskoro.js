module.exports = (sequelize, DataTypes) =>{

    const Uskoro = sequelize.define("Uskoro",{
        orginalniNaslov: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        reziser:{
            type:DataTypes.STRING,
            allowNull:false,
            paranoid: true,
            underscored: true,
            freezeTableName: true,
        },
        glumci:
        {

            type:DataTypes.STRING, 
            allowNull:false
        },
        datumPremijere:
        {
            type: DataTypes.STRING, 
            allowNull: false
        },
          trajanjeFilma:
        {
            type: DataTypes.STRING, 
            allowNull: false
        },
          zanr:
        {
            type: DataTypes.STRING, 
            allowNull: false
        },
          sadrzajFilma:
        {
            type: DataTypes.STRING(1024), 
            allowNull: false
        }, 
        slika:{
              type: DataTypes.STRING, 
            allowNull: false
        }
        
    },{
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true
    })
    return Uskoro

}