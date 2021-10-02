module.exports = (sequelize, DataTypes) =>{
<<<<<<< HEAD

    const Filmovi = sequelize.define("Filmovi",{
        naslov: {
            type: DataTypes.STRING,
            allowNull: false,
=======

    const Filmovi = sequelize.define("Filmovi",{

        naslov:{
            type:DataTypes.STRING,
            allowNull:false,
>>>>>>> 41fd4decb7b24a9000db16fe844569703211c542
        },
        opis:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        vrijemePrikaza:
        {
<<<<<<< HEAD
            type: DataTypes.STRING, 
            allowNull: false
        },
        slikaURL:
        {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    return Filmovi;
=======
            type:DataTypes.STRING, 
            allowNull:false
        },


    },{
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true
    })
    return Filmovi

>>>>>>> 41fd4decb7b24a9000db16fe844569703211c542
}