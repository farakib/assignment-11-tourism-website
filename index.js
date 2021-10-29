const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();



const app = express();
const port = process.env.PORT || 7000;


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.agcun.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run(){
    try{
        await client.connect();
        console.log('database connencted');
    }
    finally{

    }
}
run().catch(console.dir);
//tourism-assignment-11
//Ec6s5tiNahFf9Gxz







app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  



  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })