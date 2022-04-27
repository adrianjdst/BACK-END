const express = require('express');
const fs = require ('fs');
const app = express();
const port = 2000;


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


function readFile(path){
    var fileContent = fs.readFileSync(path, "utf-8");
    return fileContent;
}
console.log(readFile('./persons.json'));

//end point
// responde a um pedido HTTP
// 1º argumento e a rota/path do endpoint
// 2º é o codigo que vai ser executado quando
// este endpoint for invocado

app.get('/', (req, res) => {
  res.send('Hello Worldddd!')
})

app.get('/users', (req, res) => {
  var fileContent = readFile('./persons.json');
  res.send(fileContent);
})

app.post('/users', (req, res) => {

  var person = req.body;

  var personsString = readFile ('./persons.json');

  var personsObject = JSON.parse(personsString);

  var size = Object.keys(personsObject).length;
  size++;
  var str = 'person';
  var personId = str + size;

  person.id = size;
  
  personsObject[personId] = person;

  res.send(personsObject);
})

app.put('/users', (req, res) => {
  res.send('THIS IS A PUT');
})

app.delete('/users', (req, res) => {
  res.send('THIS IS A DELETE');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})