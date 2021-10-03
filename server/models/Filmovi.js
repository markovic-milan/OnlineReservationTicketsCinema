module.exports = (sequelize, DataTypes) =>{

    const Filmovi = sequelize.define("Filmovi",{
        naslov: {
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
        vrijemePrikaza:
        {
       type: DataTypes.STRING, 
            allowNull: false,
            paranoid: true,
            underscored: true,
            freezeTableName: true,
        },
        slikaURL:
        {
            type: DataTypes.STRING,
            allowNull: false,
            paranoid: true,
            underscored: true,
            freezeTableName: true,
        }
    },{
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    return Filmovi;
}