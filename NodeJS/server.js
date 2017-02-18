var express = require('express');

var app = express();

//engine que vai ser usada para renderizar o conteudo dinamico
app.set('view engine','ejs');

//rota
app.get('/produtos',function(req,res){
    res.render("produtos/lista");
});

app.listen(3000, function(){
    console.log("servidor rodando");
});