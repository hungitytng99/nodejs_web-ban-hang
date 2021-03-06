const path = require('path');
const express = require('express')
const morgan = require('morgan')
var handlebars = require('express-handlebars');

const app = express()
const port = 3000

//Config
const route = require('./routes');
//jquery

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));
app.engine('hbs', handlebars({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));



//Route
route(app);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})