const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const indexRouter = require('./routes/index');

app.use(express.json());
app.set('json spaces', 2);
app.use(express.urlencoded({ extended: false }));
/*app.use(express.static(path.join(__dirname, 'views')));*/

app.use('/', indexRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

