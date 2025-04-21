import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        <NavLink to="/" className="text-xl font-bold text-primary">
          PSMeta 
        </NavLink>
        <ul className="flex gap-6">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Services", "/services"],
            ["Portfolio", "/portfolio"],
            ["Blog", "/blog"],
            ["Contact", "/contact"],
          ].map(([name, path]) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-primary font-medium" : "hover:text-primary"
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
