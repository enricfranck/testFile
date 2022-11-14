const sequelize = require("sequelize");
const db = require("../config/db.config");
const { Attachement } = require("./Attachement");

exports.Response = db.define(
  "response",
  {
    id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    text: { type: sequelize.STRING, allowNull: false },
    user_id: { type: sequelize.INTEGER, allowNull: false },
    tickets_id: { type: sequelize.INTEGER, allowNull: false },
  },
  { timestamps: false, tableName: "response", underscored: true }
);
this.Response.hasMany(Attachement);
Attachement.belongsTo(this.Response);
