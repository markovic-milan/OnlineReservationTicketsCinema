module.exports = (sequelize, DataTypes) => {
    const Korisnici = sequelize.define("Korisnici", {
        korisnicko_ime: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lozinka: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ime: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        prezime: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Korisnici;
};