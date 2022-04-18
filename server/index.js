import express from 'express'; // node web framework
import bodyParser from 'body-parser'; // body parsing middleware to parse request bodies in a middle ware before it is handled
import mongoose from 'mongoose'; // object data modeling  
import cors from 'cors'; //Access-Control-Allow-Origin

import postRoutes from './routes/posts.js';
//initalizing the APP
const app = express();

app.use('/posts',postRoutes);
//Setting body parser to complete request
app.use(bodyParser.json({limit: "30mb",extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb",extended:true}));
app.use(cors());

//Connecting server application with database specifically mongodb
const CONNECTION_URL = 'mongodb+srv://MemoriesTest:pE6te8Cmv3vuKOi3@cluster0.9niki.mongodb.net/MemoriesTest?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

//Function that accepts two parameter ; CONNECTION_URL and objects with all the options
mongoose.connect(CONNECTION_URL,{useNewURLParser:true, useUnifiedTopology: true})
    // promise to send message if connection is successful 
    .then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch ((error) => console.log(error.message));
