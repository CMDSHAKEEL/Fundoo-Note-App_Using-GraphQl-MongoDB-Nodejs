const express          =  require('express');
const bodyParser       =  require('body-parser');
const  { graphqlHTTP } =  require('express-graphql');
const  buildSchema     =  require('./app/WorkingofGraphql/Schema/index')
const userResolvers    =  require('./app/WorkingofGraphql/resolver/index')
const app              =  express();
app.use(bodyParser.json());
 const dbConfig = require('./config/database.configs')
 require('dotenv').config();
 
dbConfig.dbConnection();

//working of graphql

app.use('/graphql', graphqlHTTP({
    schema: buildSchema,
    rootValue: userResolvers,
     graphiql:true
})  
);

app.listen(process.env.PORT,()=>{
    console.log(`server is listening port 3000`)
    });