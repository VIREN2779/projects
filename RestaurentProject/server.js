
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
hostname= '127.0.0.1';
const port = process.env.port || 8080;

app.use(cors({
    origin: '*'
}))

app.get('/', (req,res) => {
    res.status(200).json('helloooooo');
})

const post_route_TableBook = require('./routes/postTableBook');
app.use('/api' , post_route_TableBook);


mongoose
  .connect( "mongodb+srv://virenpatadiya073:<password>@clusterviren0.7czkwhi.mongodb.net/RestaurentProject" )
  .then(() => {
    console.log('connected to MongoDB!!');
    app.listen(port, () => {
      console.log(`conected to port http://${hostname}:${port}`);
    });
  })
  .catch((error) => {
    console.log('mongoose connect catch error', error);
  });