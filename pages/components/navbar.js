import { useEffect } from 'react';
import Contents from "./contents";

export default function Navbar() {
  useEffect(() => {
    const scrollToSection = (e, sectionId) => {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      // Close the drawer if it's open (for mobile)
      document.getElementById('my-drawer-3').checked = false;
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => scrollToSection(e, link.getAttribute('href').slice(1)));
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', (e) => scrollToSection(e, link.getAttribute('href').slice(1)));
      });
    };
  }, []);

  return (
    <div className="drawer overflow-x-hidden">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar bg-gray-900 text-white fixed z-30">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLineJoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <a className="flex-1 px-2 mx-2 font-bold text-xl" href="#home">
            GinanjarTG Portfolio
          </a>
          <div className="flex-none hidden lg:block font-bold">
            <ul className="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        <Contents />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 font-bold">
          {/* <!-- Sidebar content here --> */}
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}