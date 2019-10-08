import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import routes from './routes/crmRoutes'





//const express = require('express')
const app = express()
const port = 3000;

mongoose.Promise = global.Promise;



//mongoose set-up
mongoose.connect('mongodb://localhost/CRMdb',  {
    //useMongoClient: true
});


//body-parse set-up

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));//to serve public files and images
routes(app);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
