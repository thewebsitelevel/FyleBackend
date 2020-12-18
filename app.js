const express = require('express');
const bodyParser = require("body-parser");
const { nextTick } = require('process');

const mongoconnect = require('./util/database').mongoconnect;
const getDb = require('./util/database').getDb;

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));


app.use('/r', (req, res, next) => {
    const db = getDb();
    let dbop = db.collection('bankbranch').insertOne({name: "ravinder"});
    return dbop.then(result => {
        console.log(result);
        res.send("done");
    })
})

app.use('/', (req, res,next)=> {
    res.send("yeah working!");
    
})



mongoconnect(
    app.listen(8080)
    )