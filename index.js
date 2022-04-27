/*const{createServer,request}=require('http')
let server = createServer((request,Response)=>{
Response.writeHead(200,{"Content_type": "text/html"});
Response.write('<h1>Ola Mundo</h1><p>Projeto</p>');
Response.end();
});
server.listen(8000);
console.log('Projeto Iniciado');

let express = require('express');
let app = express();

app.get('/', function(req,res){
    res.send('ROTA GET')
});

app.get('/rota1',function(req,res){
    res.send('rota 1');
});

app.listen(3000,function(){
    console.log('Projeto iniciado na porta 3000');
});*/

app.route('/book')
    .get(function(req, res) {
        res.send('get a random book');
    });

    .post(function(req, res){
        res.send('add a book');
    });