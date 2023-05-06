import style from './For.module.css'
import Imagen from './Imagen/Logo.jpg'
import { useState } from 'react'
import validation from '../Validation/Validation'

const Form = () =>{
    const [errors, setErrors] = useState({});


    const [userData , SetUserData] = useState({
        email : '',
        password: ''

    });

    const handleChange = (event) =>{
        SetUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }


   




    return(
        <div>
            <form className={style.login}>
               
                <img className={style.logo} src={Imagen}/>

                <h1>Bienvenido</h1>

                <label htmlFor="email"></label>
                <input type="text" name="email" placeholder="Usuario" value={userData.email} onChange={handleChange} />

                <label htmlFor="password"></label>
                <input type="password" name="password" placeholder="Contraseña" value={userData.password} onChange={handleChange}  />

                <button type="submit" className={style.custom}>Iniciar Sesión</button>
                <br />
                <a href="#">Crear cuenta nueva</a>
                <br />
                <a href="#">¿Olvidaste tu contraseña?</a>
            </form>
        </div>
    )
}

export default Form;