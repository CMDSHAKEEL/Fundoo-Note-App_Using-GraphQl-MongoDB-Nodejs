
const buildSchema = require('graphql')

module.exports= buildSchema(`  
       type Event {
           _id:ID!
           firstName:String!
           lastName:String!
           email:String!
           Address : String!
       }
        
       input EventInput {
           _id:ID!
           firstName:String!
           lastName:String!
           email:String!
           Address : String!
        }
      
   type RootQuery{
       events : [Event!]!
    }
    type RootMutation {
       createEvent(eventInput: EventInput): Event
  
    }
       schema{
           query: RootQuery
           mutation: RootMutation
       }
   `)