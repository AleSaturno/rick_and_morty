import style from './For.module.css'
import Imagen from './Imagen/Logo.jpg'
import { useState } from 'react'
import validation from '../Validation/Validation'
import NavBar from '../NavBar/NavBar'

const Form = ({login}) =>{
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


   const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
   }


  const [loggedIn, setLoggedIn] = useState(true);

  const handleLogOut = () => {
        setLoggedIn(false);
    };
    if (!loggedIn) {
        return (
          <div>
            <h1>Has cerrado sesión correctamente.</h1>
            <p>Vuelve a iniciar sesión para continuar.</p>
          </div>
        );
    }


    return(
        <div>
            <form className={style.login} onSubmit={handleSubmit}>
                
                <img className={style.logo} src={Imagen}/>

                <h1>Bienvenido</h1>

                <label htmlFor="email"></label>
                <input type="text" name="email" placeholder="Usuario" value={userData.email} onChange={handleChange} />

                {errors.email && <p>{errors.email}</p>}

                <label htmlFor="password"></label>
                <input type="password" name="password" placeholder="Contraseña" value={userData.password} onChange={handleChange}  />
                
                {errors.password && <p>{errors.password}</p>}

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