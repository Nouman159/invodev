import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { useNavigate } from 'react-router-dom';



const navItems = [
    { name: 'Home', id: '/' },
    { name: 'Appointment', id: '/appointment' },
    { name: 'Order', id: 'experience' },
    { name: 'About', id: 'vision' },
    { name: 'Contact', id: '/contact' },
];

const Navbar = () => {
    const navigate = useNavigate();
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const handleNavigate = (id) => {
        navigate(id)

    }

    return (
        <nav id='navbar' className='h-16 bg-[#E8E8E8] text-black sticky top-0 z-50'>
            <div className='text-3xl flex px-8 pl-20 py-3'>
                <h2
                    // onClick={() => scrollToComponent('hero')}
                    className='hover:cursor-pointer font-bold'>
                    Health Care
                </h2>
                <div className='ml-auto mr-4 max-sm:mr-0'>
                    <ul className='flex text-xl py-2 space-x-4 lg:space-x-8 max-md:hidden'>
                        {navItems.map((navItem, index) => (
                            <div
                                onClick={() => handleNavigate(navItem.id)}
                                key={index} className='cursor-pointer hover:text-[#0074D9] transition-colors duration-300'>
                                {navItem.name}
                            </div>
                        ))}
                    </ul>
                    < IoClose className='my-2 hidden max-md:block cursor-pointer' onClick={toggleNav} />
                </div>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={`fixed top-0 left-0 w-full h-96 bg-[#001f3f] z-0 transition-transform duration-300 ease-in-out ${navOpen ? 'translate-y-0' : '-translate-y-full'} max-md:flex flex-col justify-center`}
            >
                <MdMenu className='ml-auto mr-8 cursor-pointer' onClick={toggleNav} />
                <ul className='flex flex-col space-y-4 text-xl py-2 text-center'>
                    {navItems.map((navItem, index) => (
                        <li key={index}
                            // onClick={() => scrollToComponent(navItem.id)}
                            className='z-50 cursor-pointer hover:text-blue-400 transition-colors duration-300'>
                            {navItem.name}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;