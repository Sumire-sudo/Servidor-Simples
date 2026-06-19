
function rotaProdutos(req, res){
    const url = req.url;
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

module.exports = rotaProdutos;