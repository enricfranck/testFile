const sequelize = require("sequelize");
const db = require("../config/db.config");
const { Response } = require("./Response");
const { Tickets } = require("./Tickets");

exports.User = db.define(
  "User",
  {
    id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: sequelize.STRING, allowNull: false, unique: true },
    password: { type: sequelize.STRING, allowNull: false },
    admin: { type: sequelize.BOOLEAN, defaultValue: false, unique: true },
  },
  { timestamps: false, tableName: "user" }
);

this.User.hasMany(Tickets, { foreignKey: "user_id" });
Tickets.belongsTo(this.User);

this.User.hasMany(Response, { foreignKey: "user_id" });
Response.belongsTo(this.User);
