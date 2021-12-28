require('dotenv').config();
const mongoose = require('mongoose');

const conn = () =>{
    mongoose.connect( process.env.CONN_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( ()=> console.log("Successfully connect to MongoDB."))
    .catch( (err)=>  {
        console.error(">>> Connection error <<<\n", err);
        process.exit();
      });
}
module.exports = conn;