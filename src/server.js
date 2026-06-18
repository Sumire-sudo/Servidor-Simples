const http = require('http');

const server = http.createServer((req, res) => {

    const url= req.url;
    const method = req.method;

    if( url === "/"){
        res.writeHead(200, {"Contet-Type" : "text/plain"});
        console.log('GET! >.<');
        res.end("Get!");
    }else if(url === "/sobre" && method === 'GET'){
        res.writeHead(200, {"Contet-Type" : "text/plain"});
        res.end("Sobre!");
        console.log('Sobre!>//<');
    }else if(url === "/status" && method === 'GET'){
        res.end(JSON.stringify({mensagem: "Servidor funcionando^.^"}));
        console.log("test");
        }else if(url.startsWith("/aluno") && method === 'GET'){
            const id = url.split("/")[2];
        
            const alunos = [{id:1, nome:"ana", turma:"2 ano",curso:"DS"},
                {id:2, nome:"ana", turma:"2 ano",curso:"DS"},
                {id:3, nome:"ana", turma:"2 ano",curso:"DS"},
                {id:4, nome:"ana", turma:"2 ano",curso:"DS"},
                {id:5, nome:"ana", turma:"2 ano",curso:"DS"}];
           
            //if(id){
            //}
            console.log(JSON.stringify(alunos));
            res.end(JSON.stringify(alunos));
        } 
        else {
        res.end("página nâo encontrada");
        res.statusCode = 404;
    }
});

server.listen(3000,()=>{
    console.log('rodando em http://localhost:3000');
});