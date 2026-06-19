const http = require('http');
const rotaAlunos = require('./rotas/alunos');
const rotaProdutos = require('./rotas/produtos');

const server = http.createServer((req, res) => {

    const url= req.url;
    const method = req.method;

    //"/"
    if( url === "/"){
        res.writeHead(200, {"Contet-Type" : "text/plain"});
        console.log('GET! >.<');
        res.end("Get!");

        //sobre
    }else if(url === "/sobre" && method === 'GET'){
        res.writeHead(200, {"Content-Type" : "text/plain"});
        res.end("Sobre!");
        console.log('Sobre!>//<');

        //status
    }else if(url === "/status" && method === 'GET'){
        res.end(JSON.stringify({mensagem: "Servidor funcionando^.^"}));
        console.log("test");

            //aluno
        }else if(url.startsWith("/aluno") && method === 'GET'){
           rotaAlunos(req, res);
        //produtos
    }else if(url.startsWith("/produtos") && method === 'GET'){
      rotaProdutos(req, res);
    }
      else {
        res.statusCode = 404;
        res.end("página nâo encontrada");
      }

});

server.listen(3000,()=>{
    console.log('rodando em http://localhost:3000');
})