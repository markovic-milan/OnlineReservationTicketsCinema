module.exports = (sequelize, DataTypes) => {
  /*karta ima strani kljuc FilmId i KorisnikId*/

  const Karte = sequelize.define(
    "Karte",
    {
      ukupanIznos: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      brojSjedista: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      termin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      datum: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sala: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      paranoid: true,
      underscored: true,
      freezeTableName: true,
    }
  );

  return Karte;
};