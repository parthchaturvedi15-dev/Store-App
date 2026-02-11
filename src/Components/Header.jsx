import { useState } from "react"
import {FaBars, FaTimes} from 'react-icons/fa';
import ThemeToggleBttn from "./ThemeButton";
import {Link} from 'react-router-dom';


const Header = ()=>{
    const [menuOpen, setMenuOpen]=useState(false);

    return(
        <>
        <div className="fixed top-4 right-4 z-50">
            <ThemeToggleBttn/>
        </div>
        <header className='sticky top-0 z-50 
        bg-white text-black dark:bg-black dark:text-white
        p-4 flex justify-between items-center'>
            <button onClick={()=>setMenuOpen(!menuOpen)}
            className='p-2 rounded-md hover:bg-cyan-800 transition' aria-label='Toggle menu'>
                {menuOpen ?<FaTimes size={22}/> : <FaBars size={22}/>}
            </button>
            {menuOpen && (
                <nav className='absolute left-4 top-14 bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-lg p-4 flex flex-col gap-3 w-40'>
                    <Link 
                    to='/'
                    className='hover:text-cyan-300'
                    onClick={()=>setMenuOpen(false)}>
                        Home
                    </Link>
                    <Link to='/SignUp'
                    className='hover:text-cyan-300'
                    onClick={() => setMenuOpen(false)}>Sign Up</Link>
                    <Link to='/Login'
                    className='hover:text-cyan-300'
                    onClick={()=>setMenuOpen(false)}>Login</Link>
                </nav>
            )}
        </header>
        </>
    );
};
export default Header;