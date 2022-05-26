import { Link } from "react-router-dom";

type Props = {
  showMenu: () => void;
  active: boolean;
};

const MenuItems = ({ showMenu, active }: Props) => {
  return (
    <div>
      <ul
        className={
          active
            ? "flex flex-col items-center fixed inset-0 left-1/4 justify-center p-8 bg-black/40 backdrop-blur-md gap-12 z-50 md:hidden"
            : "hidden"
        }
      >
        <li>
          <Link to="/" onClick={showMenu}>Home</Link>
        </li>
        <li>
          <Link to="/search" onClick={showMenu}>Search</Link>
        </li>
        <li>
          <Link to="/" onClick={showMenu}>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
