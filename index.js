const express = require('express')
const app = express();
const port = 3000;

app.listen(port, function() {
    console.log('listening to port: ', port);
});

app.get('/home', function(req, res) {
    res.sendFile('./home.html', { root: __dirname })
});

app.get('/about', function(req, res) {
    res.sendFile('./about.html', { root: __dirname })
});

app.get('/pop', function(req, res) {
    res.sendStatus(401)
});
app.get('/contact', function(req, res){
    res.sendFile('./contact.html', { root: __dirname })

});