import SearchBar from "../SearchBar/SearchBar.jsx";
import style from './NavBar.module.css'
import { NavLink } from "react-router-dom";

const NavBar = ({onSearch}) =>{
    return (
        <nav className ={style.nav} >
            <ul>
                <SearchBar onSearch = {onSearch}/>
            </ul>

            <div className={style.buttonContainer}>
                <button className={style.Link}>
                    <NavLink to= '/home'>Home</NavLink> 
                </button>
                <button className={style.Link}>
                    <NavLink to='/about'>about</NavLink>
                </button>
                
            </div>
        </nav>
    )
}

export default NavBar;