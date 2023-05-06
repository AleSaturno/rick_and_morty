const validation = (userData) =>{
    const errors = {};

    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userData.email)) {
        errors.email = 'Usuario invalido';
    }
    if(!userData.email){ // userData.email.length === ""
        errors.email = 'Debe ingresar su Usuario';
    }
    if(!userData.email.length > 35){
        errors.email = 'El usuario no debe superar 35 caracteres';
    }
    
}

export default validation;