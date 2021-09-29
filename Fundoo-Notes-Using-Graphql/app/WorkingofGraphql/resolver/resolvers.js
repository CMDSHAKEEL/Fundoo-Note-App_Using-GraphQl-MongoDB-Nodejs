 const Event = require('../../../models/model');
 const User = require('../../../models/user')
 const bcrypt =require('bcryptjs')
 

const userResolver ={

    
    events:()=>{
     return Event.find()
     .then(events=>{
        return events.map(event=>{
            return{ ...event._doc};
        })
         }
     )
     .catch(err=>{
         throw err;
     });
      
    },
    // Creating User
    createUser:  args=>{
        const event = new Event({
            firstName: args.eventInput.firstName,
            lastName:args.eventInput.lastName,
            email:args.eventInput.email,
            Address:args.eventInput.Address,
        })
         return event
          .save()
          .then(result =>{
              console.log(result);
              return {...result._doc};
          })
          .catch(err =>{
              console.log(err);
              return err;
          })
    },
    // Login 
    
     loginuser:args=>{
         return  bcrypt
         .hash(args.userInput.password, 12)
         .then(hashedPassword =>{
            const user = new User({
                email:args.userInput.email,
                password: hashedPassword 
            });  
            return user.save();
         })
         .then(result=>{
             return {...result._doc,_id:result._id}
         })
         .catch(err=>{
             throw err;
         })
         
            
     }
}

module.exports = userResolver; 