// src/db.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("myappdb", "sa", "Str0ngPassw0rd!", {
  host: "localhost",
  dialect: "mssql",
  port: 1433,
  dialectOptions: {
    options: {
      encrypt: false, // set true if using Azure cloud DB
      trustServerCertificate: true,
    },
  },
  logging: console.log, // set to console.log to debug
});

module.exports = sequelize;
