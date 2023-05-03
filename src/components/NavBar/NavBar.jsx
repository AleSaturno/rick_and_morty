import SearchBar from "../SearchBar/SearchBar.jsx";
import style from './NavBar.module.css'


const NavBar = () =>{
    return (
        <div className= {style.nav}>
            <SearchBar/>
        </div>
    )
}

export default NavBar;