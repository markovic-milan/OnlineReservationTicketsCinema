module.exports = (sequelize, DataTypes) =>{

    const Sale = sequelize.define("Sale",{

        naslov: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        opis: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vrijemePrikaza:
        {
            type: DataTypes.STRING, 
            allowNull: false
        }


    })
    return Sale

}