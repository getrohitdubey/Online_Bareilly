const express = require('express'),
    bodyParser = require('body-parser'),
    routes=require('./routes'),
    connection=require('./config/db.config'),
    app = express();

// parse application/json 
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extends: false }));

app.use("/api",routes);

const port = process.env.port || 1300;
app.listen(port, function () {
    console.log("Server is running at http://localhost:" + port);
})