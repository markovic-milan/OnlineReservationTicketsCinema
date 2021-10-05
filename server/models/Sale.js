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
          },


    },
    {
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true
    })
    return Sale

}