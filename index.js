const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.agcun.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run(){
    try{
      await client.connect();
      console.log('connected successfully');
      const database = client.db('tourBd');
      const tourCollection = database.collection('services');


      //get tours api 
      app.get('/services', async(req, res) => {
        const cursor = tourCollection.find({});
        const services = await cursor.toArray();
        res.send(services);
      })
    }
    finally{
      //await client.close();
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