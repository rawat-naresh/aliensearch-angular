const express = require('express');
const path = require('path');
const app = express();



//path of our application after build
let appPath = '/dist/aliensearch/';

//serve all the static files given directory
app.use(express.static(path.join(__dirname,appPath)));

//for any route we serve index.html
app.get('/*', function(req, res, next) {
    res.sendFile(path.join(__dirname,appPath,'index.html'));
});

/* Finally we start our server */
let server = app.listen(process.env.PORT || 8000, function(){
    console.log('Listening on port '+ server.address().port);
});






