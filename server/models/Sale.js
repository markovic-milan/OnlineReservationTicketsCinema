module.exports = (sequalize, DataTypes) =>{

    const Sale = sequalize.define("Sale",{

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