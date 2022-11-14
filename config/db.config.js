let Sequelize = require("sequelize");
let db = new Sequelize(
  "santatra_tickets_support",
  "santatra",
  "ticket@support*.",
  {
    host: "mysql-santatra.alwaysdata.net",
    dialect: "mysql",
    logging: false, //passer a true pour voir les différentes requêtes effectuées par l'ORM
  }
);
//on exporte pour utiliser notre connexion depuis les autre fichiers.
module.exports = db;
