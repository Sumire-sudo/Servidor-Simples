const http = require('http');

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
            const id = url.split("/")[2];
        
            const alunos =
               [{id:1, nome:"Ana", turma:"2 ano",curso:"DS"},
                {id:2, nome:"Eva", turma:"2 ano",curso:"DS"},
                {id:3, nome:"Julia", turma:"2 ano",curso:"DS"},
                {id:4, nome:"Letícia", turma:"2 ano",curso:"DS"},
                {id:5, nome:"Narcicia", turma:"2 ano",curso:"DS"}];

                if (!id) {
            console.log("Retornando lista completa");
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(alunos));
                return;
            }

                for(let i = 0; i< alunos.length; i++){
                    const valorid = Object.values(alunos[i])[0];

                    if(id == valorid){
                        
                        console.log(JSON.stringify(alunos[i]));
                        res.end(JSON.stringify(alunos[i]));
                        return;
                    }

                } 
                console.log("Erro: Aluno não encontrado");
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ mensagem: "Aluno não encontrado" }));
        

        //produtos
    }else if(url.startsWith("/produtos") && method === 'GET'){
        const Cat = url.split("/")[2];

        const produtos = 
            [{id:1, nome:"detergente", categoria:"limpeza", preço: 3.50},
            {id:2, nome:"Sabão em pó", categoria:"limpeza", preço: 3.50},
            {id:3, nome:"Pão de forma", categoria:"alimento", preço: 3.50},
            {id:4, nome:"Bolo formigueiro", categoria:"alimento", preço: 3.50}];

                      if (!Cat) {
            console.log("Retornando lista completa(produtos)");
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(produtos));
                return;
            }

            const Catfiltrada = [];
                for(let i = 0; i< produtos.length; i++){
                    const valorCat = produtos[i].categoria;

                    if(valorCat == Cat){
                        Catfiltrada.push(produtos[i]);
                    }

                } 
                if (Catfiltrada.length > 0) {
            console.log("Resultados calculados!");
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(Catfiltrada));
                }else{

                console.log("Erro: Categoria inválida");
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ mensagem: "Categoria inválida" }));
                }
    }
      else {
        res.statusCode = 404;
        res.end("página nâo encontrada");
      }

});

server.listen(3000,()=>{
    console.log('rodando em http://localhost:3000');
})