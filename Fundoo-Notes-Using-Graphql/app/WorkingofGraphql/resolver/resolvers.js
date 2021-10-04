 const Event  = require('../../../models/model');
 const User   = require('../../../models/user')
 const bcrypt = require('bcryptjs')
 const jwt    = require('jsonwebtoken')

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
    createUser:   async args=>{
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
       return  Event.findOne({email:args.userInput.email})
         .then(user =>{
             if(user){
                 throw new Error('User or email id Already Exixt')
             }
             return  bcrypt
         .hash(args.userInput.password, 7)
         })
         .then(hashedPassword =>{
            const users = new User({
                email:args.userInput.email,
                password: hashedPassword 
            });  
            return users.save();
         })
         .then(result=>{
             return {...result._doc,_id:result._id}
         })
         .catch(err=>{
             throw err;
         })   
     },
     login:async({email ,password})=>{
        const user = await Event.findOne({email:email});
        if(!user){
            throw new Error('User or email id does not exist')
        }
        const isEqual =await bcrypt.compare(password,user.password)
        if(!isEqual){
            throw new Error ('password is incorrect or invalid')
        }
        const token =jwt.sign({userId:user.id, email:user.email },'supersecretkey',{
            expiresIn:'1h'
        })
     return{ userId: user.id,token:token,tokenExpiration:1 }
    },
    //forgetpassword

    forgotpassword :async args=>{
        const user = new User({email :args.forgotInput.email,password :args.forgotInput.password});
        return user
         
        .then(result =>{
            console.log(result)
            return{...result._doc}
        })
        .catch(err=>{
            console.log(err)
            return err;
        })
    }

}

module.exports = userResolver; 