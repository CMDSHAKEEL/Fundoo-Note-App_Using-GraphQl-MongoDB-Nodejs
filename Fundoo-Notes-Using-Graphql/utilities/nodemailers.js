   
const nodemailer = require('nodemailer');
 
code = Math.random().toString(33).substring(3, 17)  
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'cmdshakeel21@gmail.com',
        pass:'db21051998'
    }
});

let mailoptions = {
    from:'cmdshakeel21@gmail.com',
    to:'cmdshakeel3377@gmail.com', 
    subject:'Fundoo notes Password / resetpass testing',
    text: code
};

transporter.sendMail(mailoptions, function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})