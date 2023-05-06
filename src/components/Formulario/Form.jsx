import style from './For.module.css'
import Imagen from './Imagen/Logo.jpg'

const Form = () =>{
    return(
        <div>
            <form className={style.login}>
               
                <img className={style.logo} src={Imagen}/>

                <h1>Bienvenido</h1>

                <label htmlFor="email"></label>
                <input type="text" name="email" placeholder="Usuario" />

                <label htmlFor="password"></label>
                <input type="password" name="password" placeholder="Contraseña" />

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