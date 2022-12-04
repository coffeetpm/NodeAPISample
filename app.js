
const express = require('express')
const { Client } = require("pg");
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const nodeMailer = require('nodemailer');
const cors=require("cors");
const { json } = require('sequelize');
const port = 3001
const { rows } = []
const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(cookieParser())
var urlencodedParser = bodyParser.urlencoded({extended: false })

var TaskData=[
    {id:1, title:"Frontpage layout issue in Firefox 107", desc:"Author: Sam", ddate:'2016-05-02', status:'checked'},
    {id:2, title:"Cannot redirect to CMS page", desc:"Author: Martin", ddate:'2016-05-03', status:''},
    {id:3, title:"Relocation of system files", desc:"Author: Georgio", ddate:'2016-05-03', status:'checked'},
    {id:4, title:"Dim button not working", desc:"Author: William", ddate:'2016-05-11', status:''},
    {id:5, title:"DNS not working", desc:"Author: Ross", ddate:'2016-05-12', status:'checked'}
]

var mailUser = "Testing"
var mailPassword = "Testing"
var mailHost = "smtp.testing.com"
var mailPort = "8888"
var mailMain = nodeMailer.createTransport({
    host:mailHost,
    port:mailPort,
    secureConnection: true,
    auth: {
        user:mailUser,
        pass:mailPassword,
    },
})

// -------------------------------------------------------------------------------------

app.get('/', function (req,res){
    res.send('Welcome to the API!');
})

app.get('/get_all_items', function(req,res){
    res.send(JSON.stringify(TaskData));
})

app.post('/update_all_items', express.json(), function(req,res, next){
    var results = JSON.stringify(req.body);
    /*results = results.replace('\"id\"', 'id')
    results = results.replace('\"title\"', 'title')
    results = results.replace('\"desc\"', 'desc')
    results = results.replace('\"ddate\"', 'ddate')
    results = results.replace('\"status\"', 'status')*/
    TaskData = results;
})

app.delete('/delete_item', (req,res)=>{
    TaskData.splice(parseInt(req.body), 1);
})

app.post('/sendEmail', urlencodedParser, function(req,res){
    var MailDetails = req.body;

    let mailResult = mailMain.sendMail(
        {
            from: Maildetails[0],
            to: Maildetails[1],
            subject: Maildetails[2],
            html: Maildetails[3],
        },function(error){
            if(error){
                console.log('Failed to send email, details: ' + error);
            }
        }
    )
})

var server = app.listen(port, function (){
    var host = server.address().address
    var port = server.address().port
    console.log("Browse address is %s:%s", host,port)
})
