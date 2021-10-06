module.exports = (sequelize, DataTypes) =>{


    const Kino = sequelize.define("Kino",{

        adresa:{
            type: DataTypes.STRING,
            allowNull: false,
        
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
        
        },
        brojTelefona:{
            type:DataTypes.STRING,
            allowNull:false,
          
        },
        faxTelefon:{
            type:DataTypes.STRING,
            allowNull:false,
           
        }
        
    },{
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true
    })
    return Kino

}