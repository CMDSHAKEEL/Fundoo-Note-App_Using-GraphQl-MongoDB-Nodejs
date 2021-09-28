const userModel = require('../../../models/model')

const userResolver ={

    
    events:()=>{
     return Event.find()
      .then(events=>{
          return events.map(events=>{
              return {...events._doc}
          })
      })
      .catch(err=>{
          throw err
      })
    },
    createUser:(args)=>{
      
        const usermodel = new Event({
                 firstName: args.eventInput.firstName,
                 lastName: args.eventInput.lastName,
                 email: args.eventInput.email,
                 Address: args.eventInput.Address,

        })
        const registerValidation =  joiValidation.validate(usermodel._doc)
       return Event
        .save()
        .then(result=>{
            console.log(result);
            return { ...result._doc };
        })
        .catch(err=>{
            console.log(err);
            throw err;
        });
    },
    
    // Login 
    
    loginUser: args =>{
        return bcrypt
         .hash(args.userInput.password,  12)
         .then(hashedpassword=>{
             const user = new User({
                 email: args.userInput.email,
                 password: hashedpassword,
             })
             return user.save();
         })
         .then(result =>{
             return { ...result._doc, _id: result._id}
         })
         
         .catch(err =>{
             throw err;
         })
         
     }
}

module.exports = userResolver; 