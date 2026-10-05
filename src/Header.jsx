import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Load saved preference on mount
        if (localStorage.getItem('theme') === 'light') {
            document.documentElement.classList.add('light');
            setIsDark(false);
        }
    }, []);

    function toggleTheme() {
        const root = document.documentElement;
        root.classList.toggle('light');
        const isNowLight = root.classList.contains('light');
        setIsDark(!isNowLight);
        localStorage.setItem('theme', isNowLight ? 'light' : 'dark');
    }

    return (
        <header className="header">
            <h1 className="logo">Gurvir.</h1>
            <nav className="navbar">

                <nav>

                    <button className="theme-toggle" onClick={toggleTheme}>
                        {isDark ? '☼' : '❨'}
                    </button>
                    <Link to="/" className='nav-link'>Home</Link>
                    {/*<Link to="/about" className='nav-link'>About</Link>*/}
                    {/*<Link to="/contact" className='nav-link'>Contact</Link>*/}
                </nav>
            </nav>
        </header>
    )
}