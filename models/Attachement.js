const sequelize = require("sequelize");
const db = require("../config/db.config");

exports.Attachement = db.define(
  "file",
  {
    id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    filepath: { type: sequelize.STRING, allowNull: false },
    tickets_id: {
      type: sequelize.INTEGER,
      allowNull: true,
    },
    response_id: { type: sequelize.INTEGER, allowNull: true },
  },
  { timestamps: false, tableName: "file", underscored: true }
);
