import SearchBar from "../SearchBar/SearchBar.jsx";
import style from './NavBar.module.css'
import { Link } from "react-router-dom";
import Image from './Image/kindpng_1567373.png'

const NavBar = ({onSearch}) =>{

    const checkLocalStorage = () => {
        if (!localStorage.getItem('auth')) {
            window.location.href = "/"
            return
        }
        return
    }
   

    return (

        <nav className ={style.nav} >
            <img className={style.custom} src={Image} onClick={checkLocalStorage} />
            
            <div className={style.botones}>
                <button className={style.Link}>
                    <Link to= '/home'>Home</Link> 
                </button>
                <button className={style.Link}>
                    <Link to= '/favorites'>Favoritos</Link>
                </button>
                <button className={style.Link}>
                    <Link to='/about'>About</Link>
                </button>
                
            </div>
            <ul>
                <SearchBar onSearch = {onSearch}/>
            </ul>

            
        </nav>
    )
}

export default NavBar;