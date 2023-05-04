import SearchBar from "../SearchBar/SearchBar.jsx";
import style from './NavBar.module.css'


const NavBar = ({onSearch}) =>{
    return (
        <div className= {style.nav}>
            <SearchBar onSearch = {onSearch}/>
            
        </div>
    )
}

export default NavBar;