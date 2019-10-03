const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const indexRouter = require('./routes/index');
const companyRouter = require('./routes/company');

const db = require('./config/database');

/* Test mssql forbindelse*/
db.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database: ', err);
    });

app.use(express.json());
app.set('json spaces', 2);
app.use(express.urlencoded({ extended: false }));
/*app.use(express.static(path.join(__dirname, 'views')));*/

app.use('/', indexRouter);
app.use('/company', companyRouter);

db.sequelize.sync().then(() => {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});