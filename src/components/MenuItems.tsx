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
          <Link className="text-4xl text-white" to="/" onClick={showMenu}>Home</Link>
        </li>
        <li>
          <Link className="text-4xl text-white" to="/about" onClick={showMenu}>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
