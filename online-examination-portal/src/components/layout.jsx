import Menu from "./menu";
import { Outlet } from "react-router-dom";
import MobileMenu from "./mobileMenu";
import { UserContext } from "./user";
import { useContext } from "react";

const Layout = () => {
  const { menuBtn } = useContext(UserContext);

  return (
    <main className="w-full h-screen flex">
      {menuBtn ? <MobileMenu /> : null}
      <Menu />
      <Outlet />
    </main>
  );
};

export default Layout;
