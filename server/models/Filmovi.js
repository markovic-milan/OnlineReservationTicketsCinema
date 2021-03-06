module.exports = (sequelize, DataTypes) =>{
    const Filmovi = sequelize.define("Filmovi", {
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
        termini:{
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

    Filmovi.associate = (models)=>{
        Filmovi.hasMany(models.Karte, {
            onDelete: "cascade",
        });
    };
    

    return Filmovi

}