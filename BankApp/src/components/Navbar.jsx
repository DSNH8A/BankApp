import { useState } from "react";
import close from '../assets/close.svg'
import logo from '../assets/logo.svg'
import menu from '../assets/menu.svg'
import styles from '../style'



const NavLinks = [
    {
        id : "home",
        title : "Home",
    },

    {
        id: "faetures",
        title : "Features",
    },

    {
        id: "product",
        title : "Product", 
    },

    {
        id : "clients",
        title : "Clients",
    },
];


function Navbar()
{
    const [toggle, setToggle] = useState(false);

    return(
        <nav className="w-full flex py-6 justify-between items-center">
            <img src={logo} alt="hoobank" className={styles.logoImage}></img>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {NavLinks.map((nav ,index) => (
                    <li  key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${index=== NavLinks.length-1 ? 'mr-0' : 'mr-10'} text-white`}>
                       
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img src={toggle ? close : menu} alt="menu"
                className="w-[128px] h-[28px] object-contain"
                onClick={() => setToggle((prev) => !prev) }></img>
               <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient my-2 top-20 absolute right-0 mx-4 sidebar min-w-[140px] rounded-xl`}>
                <ul className="list-none sm:flex justify-end items-center flex-1">
                    {NavLinks.map((nav ,index) => (
                        <li  key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${index=== NavLinks.length-1 ? 'mr-0' : 'mb-4'} text-white`}>
                       
                            <a href={`#${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>
               </div>

            </div>
        </nav>
    );

}

export default Navbar