//const express          =  require('express');
//const bodyParser       =  require('body-parser');
const {ApolloServer}    = require('apollo-server')
const  graphqlSchema     =  require('./app/WorkingofGraphql/Schema/index')
const  graphqlResolver    =  require('./app/WorkingofGraphql/resolver/index')
 
const PORT             = 2000;
 const dbConfig = require('./config/database.configs')
 require('dotenv').config();
 
dbConfig.dbConnection();

//working of graphql

const server = new ApolloServer({

    typeDefs: graphqlSchema,
    resolvers: graphqlResolver,
  
  });

server.listen(PORT,()=>{
    console.log(`server is listening port 2000`)
    });