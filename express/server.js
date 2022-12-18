const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 8090;

// connection for mongoDB
var mongoDB = 'mongodb://127.0.0.1/vocab';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB failed to connect to vocab:'));
db.on('connected', console.log.bind(console,'MongoDB connected to vocab:'));

app.use(express.json())
app.use('/api', require('./route/request'))
//app.get('/', (req, res) => {
//  res.send('Expressive!')
//})
app.use(
    function(req, res, next){
        res.header('Acces-Controll-Allow-Origin', 
        'http://localhost:3000');
        res.header('Acces-Controll-Allow-Origin', 
        'Origin.X-Requested-With, Content-Type, Accept');
        next();
    }
);

app.listen(port, () => {
 console.log(`Server Listening on ${port}`)
})