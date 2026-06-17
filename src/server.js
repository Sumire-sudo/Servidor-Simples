const http = require('http');

const server = http.createServer((req, res) => {

    const url= req.url;
    const method = req.method;

    if( url === "/GET"){
        res.writeHead(200, {"Contet-Type" : "text/plain"});
        res.end("Get!");
    }else if(url === "/sobre" && method === "GET"){
        res.writeHead(200, {"Contet-Type" : "text/plain"});
        res.end("Sobre!");
    }else if(url === "/status"){
        const statusDoServidor = {
            status: 'UP',
            mensagem: 'O servidor está ativo',
            uptime: process.uptime(), 
            timestamp: new Date().toISOString() 
        };
        
        res.end(JSON.stringify(statusDoServidor));
    }else {
        req.end("página nâo encontrada");
        res.statusCode = 404;
    }
})

server.listen(3000,()=>{
    console.log('rodando em localhos:3000');
})