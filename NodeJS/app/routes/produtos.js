module.exports = function(app) {
    app.get("/produtos",function(req, res) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user:'root',
            password: 'verity',
            database:'casadocodigo_nodejs'
        })
        connection.query('select * from livros', function(err,result){
            res.render('produtos/lista',{lista: result});
        });
        connection.end();   
        
    });
}