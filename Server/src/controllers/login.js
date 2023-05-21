const users = require('../utils/users')

const login = (req , res) =>{
    const {email, password} = req.query

    const foudUsers = users.find(user => user.email === email && user.password === password); // Va verificar si email y el password, son correctos.

    if(foudUsers){
        //Esta función verificar si el acceso es correcto
        res.status(200).json({access: true}); // Esta 

        //Sino verfica si el acceso es Incorrecto
    }else{
        res.status(200).json({access: false});
    }


}

module.exports = {
    login
};