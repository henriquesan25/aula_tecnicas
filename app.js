let express = require ("express");
let app = express();

app.get('/', function(req, res){
    res.send('ola Henrique');
    
});
app.get('/chamar', function(req, res){
    res.send('ola Santiago');
    
});
app.listen(8000, function servir(){
    console.log('servidor iniciado')
}); 
