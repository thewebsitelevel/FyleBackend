const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let _db;

const mongoconnect = () => {
    MongoClient.connect("mongodb+srv://ravinder:rk258444@cluster0.woqrt.mongodb.net/fyle?retryWrites=true&w=majority",  { useNewUrlParser: true })
    .then(client => {
        console.log("database connected");
        _db = client.db();
    })
    .catch(err => {
        console.log(err);
    })
}

const getDb = () =>{
    if(_db){
        console.log("database found")
        return _db;
    }else{
        console.log("not database found");
    }
}

exports.mongoconnect = mongoconnect;
exports.getDb = getDb;

