const http = require ("http")
const character= require ("./utils/data")


                  //es el clinete
http.createServer((req, res)=>{//el servidor
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("/rickandmorty/character")){
        const id = req.url.split("/").at(-1)

        let characterFind = character.find((char)=>
          char.id === Number(id))//se pude parsear con parseInt

          return res.writeHead(200,{ "Content-type": "application/json"}).end(JSON.stringify(characterFind))
        }


}).listen(3001, "localhost");