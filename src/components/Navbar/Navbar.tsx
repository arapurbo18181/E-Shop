import { Nav } from "./Nav";
import { NavMenuModal } from "./NavMenuModal";

export const Navbar = () => {
  return (
    <main className="relative w-full h-full">
      <Nav />
      {/* <MenuBar /> */}
      <NavMenuModal />
    </main>
  );
};
