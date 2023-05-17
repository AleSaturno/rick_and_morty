const http = require('http');

http.createServer( (req , res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('/rickandmorty/character/')){
        const id = req.url.split('/').at(-1);

        const characterFound = data.find((character) =>{
           return character.id === +id
        });

       return res.writedHead(200 , {"content-type": "application/json"})
        .end(JSON.stringify(characterFound))
    }

}).listen(3001, "localhost" );