const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const dbName = "mydb";

const client = new MongoClient(url);

client.connect()
    .then(() => {
        const db = client.db(dbName);
        var myobj = { name: "Company Inc", address: "Highway 37" };
        return db.collection("chat").insertOne(myobj)
    })
    .then(() => {
        console.log('Collection "chat" created');
        client.close();
    })
    .catch(err => {
        console.error("Failed to connect to the database. Error:", err);
    });
