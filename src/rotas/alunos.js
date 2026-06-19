function rotaAlunos(req, res){
    const url =  req.url

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
        

}

module.exports = rotaAlunos;