import {useTheme} from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

const ThemeToggleBttn=()=>{
    const {theme, toggleTheme}=useTheme();

    return(
        <button onClick={toggleTheme}
        className='fixed top-4 right-4 z-50 p-2 rounded-full shadow-md 
        bg-gray-200 dark:bg-gray-800 text-black dark:text-white
        hover:scale-105 transition-transform'aria-label='Toggle Theme'>
            {theme === 'dark'?(
                <Sun className='h-5 w-5 text-yellow-400'/>
            ):(<Moon className='h-5 w-5 text-cyan-800'/>
            )}
        </button>
    );
};
export default ThemeToggleBttn;