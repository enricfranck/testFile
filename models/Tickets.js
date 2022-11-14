const sequelize = require("sequelize");
const db = require("../config/db.config");
const { Attachement } = require("./Attachement");
const { Response } = require("./Response");
exports.Tickets = db.define(
  "tickets",
  {
    id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    description: { type: sequelize.STRING, allowNull: false },
    close: { type: sequelize.BOOLEAN, defaultValue: false },
    user_id: { type: sequelize.STRING, allowNull: false },
  },
  { timestamps: false, tableName: "tickets", underscored: true }
);
this.Tickets.hasMany(Attachement, { foreignKey: "tickets_id" });
Attachement.belongsTo(this.Tickets);

this.Tickets.hasMany(Response, { foreignKey: "tickets_id" });
Response.belongsTo(this.Tickets);
