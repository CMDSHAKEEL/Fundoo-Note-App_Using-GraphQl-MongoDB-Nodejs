 const Event = require('../../../models/model')
const events  = [];

const userResolver ={

    
    events:()=>{
     return  events;
      
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
         
  
    }
}

module.exports = userResolver; 