/*MSSQL config*/ 
var Sequelize = require('sequelize');

const sequelize = new Sequelize('AllbookedApiDB', 'sa', 'password', {
  host: 'localhost',
  dialect: 'mssql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.companies = require('../models/companyModel.js')(sequelize, Sequelize);
db.amenities = require('../models/amenityModel.js')(sequelize, Sequelize);

//Relations
db.companies.belongsToMany(db.amenities, {through: 'companyAmenities'});
db.amenities.belongsToMany(db.companies, {through: 'companyAmenities'});

module.exports = db;