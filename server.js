const express = require('express');
const app = express();
const cors = require('cors');
const knex = require('knex');
const bodyParser = require('body-parser');

const image = require('./controllers/image');


const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  }
});

// const db = { 
  //   user: {
    //     accumulation : 0 
    //   } 
    // };
    
app.use(cors())
app.use(bodyParser.json());
    
app.get('/', (req, res)=> { res.send('It is working') })
 
app.put('/image', (req, res) => { image.handleImage(req, res, db)})

app.post('/imageurl', (req, res) => { image.handleApiCall(req, res)})   

app.listen(process.env.PORT || 3000, ()=> {
    console.log(`App is running on port ${process.env.PORT}`);
})

/*
/ --> res = this is working
/image --> PUT --> Clicking Accumulation
*/