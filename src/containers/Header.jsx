import { NavLink } from "react-router-dom";

import Logo from "../images/Logo.svg";
import Search from "../images/Search.svg";
import Avatar from "../images/Avatar.svg";
import Shop from "../images/Shop.svg";
import Like from "../images/Like-icon.svg";

const Header = () => {

  return (
    <div className="bg-gray-100">
  <div className="container flex items-center justify-between py-4 mx-auto md:py-6">
    <ul className="flex gap-6 md:gap-10">
      <NavLink to="/" className="text-xl text-gray-800 transition-colors duration-300 hover:text-gray-600">Home</NavLink>
      <NavLink to="/clothes" className="text-xl text-gray-800 transition-colors duration-300 hover:text-gray-600">Clothes</NavLink>
      <NavLink to="/shoes" className="text-xl text-gray-800 transition-colors duration-300 hover:text-gray-600">Shoes</NavLink>
      <NavLink to="/accessories" className="text-xl text-gray-800 transition-colors duration-300 hover:text-gray-600">Accessories</NavLink>
    </ul>
    <img src={Logo} alt="Logo" className="h-12 md:h-16" />
    <div className="flex items-center gap-6 md:gap-10">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-48 h-full p-2 border border-gray-300 rounded-md shadow-md md:p-3 md:w-64 focus:outline-none focus:border-gray-400"
        />
        <img src={Search} alt="Search" className="absolute h-4 transform -translate-y-1/2 top-1/2 right-2 md:h-6" />
      </div>
      <div className="flex gap-6 md:gap-10">
        <NavLink to="/login">
          <img src={Avatar} alt="Avatar" className="h-8 md:h-7" />
        </NavLink>
        <NavLink to="/shop">
          <img src={Shop} alt="Shop" className="h-8 md:h-7" />
        </NavLink>
        <NavLink to="/like">
          <img src={Like} alt="Like" className="h-8 md:h-7" />
        </NavLink>
      </div>
    </div>
  </div>
</div>

  );
};

export default Header;
