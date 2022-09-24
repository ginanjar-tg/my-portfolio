import Contents from "./contents";
export default function Navbar() {
  return (
    <div classNameName="drawer overflow-x-hidden">
      <input id="my-drawer-3" type="checkbox" classNameName="drawer-toggle" />
      <div classNameName="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div classNameName="w-full navbar bg-gray-900 text-white fixed z-30">
          <div classNameName="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              classNameName="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                classNameName="inline-block w-6 h-6 stroke-current"
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
          <a classNameName="flex-1 px-2 mx-2 font-bold text-xl" href="#home">
            GinanjarTG Portfolio
          </a>
          <div classNameName="flex-none hidden lg:block font-bold">
            <ul classNameName="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        <Contents />
      </div>
      <div classNameName="drawer-side">
        <label htmlFor="my-drawer-3" classNameName="drawer-overlay"></label>
        <ul classNameName="menu p-4 overflow-y-auto w-80 bg-base-100 font-bold">
          {/* <!-- Sidebar content here --> */}
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
