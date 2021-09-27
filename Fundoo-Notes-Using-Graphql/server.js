const express = require('express');
const bodyParser = require('body-parser');
const PORT =8000;
const  { graphqlHTTP } = require('express-graphql');
 
const app = express();
app.use(bodyParser.json());

// Configuring the database
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

//working of graphql

app.use('/graphql', graphqlHTTP ({
    schema : buildSchema,
    rootValue: appReslover ,
    graphiql :true
})
);

app.listen(PORT ,()=>{
    console.log(`server is listening port ${PORT}`)
    });