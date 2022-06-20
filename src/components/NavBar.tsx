import { MenuOutlined } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";

const NavBar = () => {

  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  }

  return (
    <div className="w-full text-black flex justify-between p-6 items-center border-b-2 border-black">
      <div className="text-2xl font-bold text-center">
        <a href="/" className="block text-4xl">React Cooking</a>
      </div>

      <nav>

        <div className="right-6 md:hidden">
          <MenuOutlined onClick={showMenu} />
        </div>
        
        <ul className="hidden md:flex gap-8">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>

        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
}

export default NavBar;
