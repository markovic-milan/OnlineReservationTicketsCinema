module.exports = (sequalize, DataTypes) =>{

    const Filmovi = sequalize.define("Filmovi",{

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
    return Filmovi

}