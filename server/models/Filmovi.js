module.exports = (sequelize, DataTypes) =>{

    const Filmovi = sequelize.define("Filmovi",{
<<<<<<< HEAD
        orginalniNaslov: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        reziser:{
=======


        orginalniNaslov:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        datumPremijere:{
>>>>>>> newBranch02
            type:DataTypes.STRING,
            allowNull:false,
     
        },
<<<<<<< HEAD
        glumci:
=======
        termini:
>>>>>>> newBranch02
        {

            type:DataTypes.STRING, 
            allowNull:false
        },
<<<<<<< HEAD
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
=======
        zanr:{
            type:DataTypes.STRING, 
            allowNull:false
        },
        sadrzajFilma:{
             type:DataTypes.STRING, 
            allowNull:false

        }

    },
    {
>>>>>>> newBranch02
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true
    })
    return Filmovi

}