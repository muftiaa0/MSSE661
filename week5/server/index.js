const express = require('express');
const app = express();
const port = 4000;
var cors = require('cors');
app.use(cors());

app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/src'));

app.listen(port, function() {
    console.log('Server started at http://localhost:%s', port);
});