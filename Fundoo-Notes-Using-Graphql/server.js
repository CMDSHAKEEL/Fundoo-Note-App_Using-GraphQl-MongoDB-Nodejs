const express          =  require('express');
const bodyParser       =  require('body-parser');
const PORT             =  2000;
const  { graphqlHTTP } =  require('express-graphql');
const  buildSchema     =  require('./app/WorkingofGraphql/Schema/index')
const userResolvers    =  require('./app/WorkingofGraphql/resolver/index')
const app              =  express();
app.use(bodyParser.json());
 const dbConfig = require('./config/database.configs')

dbConfig.dbConnection();

//working of graphql

app.use('/graphql', graphqlHTTP({
    schema: buildSchema,
    rootValue: userResolvers,
     graphiql:true
})  
);

app.listen(PORT ,()=>{
    console.log(`server is listening port 3000`)
    });