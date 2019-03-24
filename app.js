var http = require('http');
const express = require('express');
const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.set('port', process.env.PORT || 4000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
const routes = require('./router')(app);

app.listen(app.get('port'), function() {
    console.log('Switches on playing mode at port number: ' + app.get('port'));
});

module.exports = app;