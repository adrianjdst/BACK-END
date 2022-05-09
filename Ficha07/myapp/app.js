const express = require ('express');
//const mysql = require ('mysql');
const mysql = require('mysql2')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//Server
var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s",host,port);

});

var conection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'ficha07'
});

//conection.connect();

app.get('/persons',function(req,res){
    conection.query("SELECT * FROM persons", function(err,rows,fields){
        res.send(rows);
    })
});

app.get('/persons/:id',function(req,res){
    var id = req.params.id;
    conection.query("SELECT * FROM persons where id = ?",[id], function(err,rows,fields){
        res.send(rows);
    })
});

app.post('/persons', (req, res) => {
    var person = req.body;
    conection.query("INSERT persons SET ?", [person], function(err,rows,fields){
        res.send("Person inserted with id: "+ rows.insertId);
    });
});  

app.delete('/persons', (req, res) => {
    var person = req.body.id;
    conection.query("SELECT * FROM persons", function(err,rows,fields){
        res.send(rows);
    })
})  

app.get('/persons/:age/:profession', (req, res) => {
    var age = req.params.age;
    var profession = req.params.profession;
    conection.query("SELECT * FROM persons", function(err,rows,fields){
        res.send(rows);
    })
})  

app.put('/persons/:id', (req, res) => {
    var id = req.params.id;
    var person = request.body;
    conection.query("SELECT * FROM persons", function(err,rows,fields){
        res.send(rows);
    })
})  