const server = require('./app')
const { conn } = require('./DB_connection');
const PORT = 3001;



conn.sync({force: true})

server.listen(PORT , () =>{
  console.log(`Server escuchando en el puerto: ${PORT}`)
});

