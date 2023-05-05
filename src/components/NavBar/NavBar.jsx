import SearchBar from "../SearchBar/SearchBar.jsx";
import style from './NavBar.module.css'
import { NavLink } from "react-router-dom";

const NavBar = ({onSearch}) =>{
    return (
        <nav className ={style.nav} >
            <div className={style.buttonContainer}>
                <button className={style.Link}>
                    <NavLink to= '/'>Home</NavLink> 
                </button>
                <button className={style.Link}>
                    <NavLink to='/about'>about</NavLink>
                </button>
                
            </div>
            <ul>
                <SearchBar onSearch = {onSearch}/>
            </ul>
        </nav>
    )
}

export default NavBar;