import React from 'react';
import { NavLink } from 'react-router-dom';
import "@/styles/tailwind.css";


export default function NavBar() {
  const linkStyle = `
    navbar__link
    px-4 text-white
    font-bold text-xl h-full
    flex items-center hover:bg-blue-600
    transition duration-300
  `

  const activeLinkStyle = `
    navbar__link--active
    text-red-500
  `
  
  return (
    <div className="w-full flex h-16 px-16 justify-between align-center bg-blue-700 shadow-xl">
      <NavLink
        to={'/home'}
        className={linkStyle}
        activeClassName={activeLinkStyle}
      >
        <h1>Home</h1>
      </NavLink>

      <NavLink
        to={'/contact'}
        className={linkStyle}
        activeClassName={activeLinkStyle}
      >
        Contact
      </NavLink>

      <NavLink
        to={'/about'}
        className={linkStyle}
        activeClassName={activeLinkStyle}
      >
        About
      </NavLink>
    </div>
  );
}
