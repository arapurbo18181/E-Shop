import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { closeNav, openNav } from "../../store/slices/NavToggleSlice";
import { RootState } from "../../store/store";

export const Nav = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.toggleNav.isOpen);
  return (
    <nav
      className={`fixed top-2 left-0 right-0 bg-transparent w-full flex justify-center items-center z-[1000]`}
    >
      <div
        className={` ${
          state ? "bg-gray-600" : "bg-black bg-opacity-50"
        } w-full md:w-1/2 rounded-full backdrop-blur-2xl text-white py-4 px-4 flex justify-center items-center space-x-16 transition-all duration-500`}
      >
        {!state && <button onClick={() => dispatch(openNav())}>Menu</button>}
        {state && (
          <button
            className="hover:text-slate-800 transition-all duration-300 text-xl"
            onClick={() => dispatch(closeNav())}
          >
            {" "}
            <IoMdClose />{" "}
          </button>
        )}
        <NavLink
          onClick={() => dispatch(closeNav())}
          className={"text-2xl font-bold "}
          to={"/"}
        >
          E-Shop
        </NavLink>
        <button>Cart</button>
      </div>
    </nav>
  );
};
