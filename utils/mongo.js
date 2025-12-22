const mongo = require("mongodb");

const mongoClinet = mongo.MongoClient;

exports.connectMongoDB = callback => {
    mongoClinet.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.10")
        .then(client => {
            console.log("mongodb connected");
            callback(client);
        })
        .catch(err => {
            console.error(err);
        })
}
