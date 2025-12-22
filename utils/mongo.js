const mongo = require("mongodb");

const mongoClinet = mongo.MongoClient;

let _db;

exports.connectMongoDB = callback => {
    mongoClinet.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.10")
        .then(client => {
            console.log("mongodb connected");
            const dataName = "shop";
            _db = client.db(dataName);
            callback(client);
        })
        .catch(err => {
            console.error(err);
        })
}

exports.getDb = ()=>{
    if(_db){
        return _db;
    }
    throw "no database found";
}
