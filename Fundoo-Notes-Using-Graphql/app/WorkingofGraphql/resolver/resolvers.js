 
const events  = [];

const userResolver ={

    
    events:()=>{
     return  events;
      
    },
    createEvent:  args=>{
      
         const event = {
             _id:Math.random().toString,
             firstName:args.eventInput.firstName,
             lastName:args.eventInput.lastName,
             email:args.eventInput.email,
             Address:args.eventInput.Address,
         };
         console.log(event)
         events.push(event);
         return event;
  
    } 
}

module.exports = userResolver; 