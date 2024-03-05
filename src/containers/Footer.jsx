
import Logo from "../images/FooterLogo.svg";
import Facebook from "../images/facebookLogo.svg";
import Twitter from "../images/twitterLogo.svg";
import Instagram from "../images/instagramLogo.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
   <div className="bg-[#f5f5f5] py-10 md:py-20">
  <div className="container mx-auto">
    <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 md:gap-20">
      <div className="flex items-center justify-center gap-5 md:justify-start">
        <img src={Logo} alt="Logo" className="w-16 md:w-auto" />
        <ul className="gap-10 md:flex">
          <li><NavLink to="/About">About Us</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
          <li><NavLink to="/Conditions">Conditions</NavLink></li>
        </ul>
      </div>
      <ul className="flex-col gap-5 md:flex">
        <li className="flex items-center gap-5">
          <img src={Facebook} alt="Facebook" className="w-5 h-5" />
          Facebook
        </li>
        <li className="flex items-center gap-5">
          <img src={Twitter} alt="Twitter" className="w-5 h-5" />
          Twitter
        </li>
        <li className="flex items-center gap-5">
          <img src={Instagram} alt="Instagram" className="w-5 h-5" />
          Instagram
        </li>
      </ul>
      <form className="md:col-span-2">
        <label htmlFor="emailInput">Subscribe to our newsletter</label>
        <div className="flex mt-3">
          <input type="text" required placeholder="Email Address" id="emailInput" className="px-3 py-2 border border-[#ED165F] rounded-md placeholder-gray-600 focus:outline-none" />
          <button className="ml-2 px-3 py-2 bg-[#ED165F] text-white rounded-md">OK</button>
        </div>
      </form>
      <ul className="flex-col gap-5 md:flex md:col-span-2">
        <li>497 Evengreen Rd. Roseville, CA 95673</li>
        <li>+44 345 678 903</li>
        <li>adobexd@mail.com</li>
      </ul>
    </div>
  </div>
</div>

  );
};

export default Footer;
