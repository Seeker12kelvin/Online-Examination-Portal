import Menu from "./menu";
import { Outlet } from "react-router-dom";
import MobileMenu from "./mobileMenu";
import { UserContext } from "./user";
import { useContext } from "react";

const Layout = () => {
  const { menuBtn } = useContext(UserContext);

  return (
    <>
      {menuBtn ? <MobileMenu /> : null}
      <main className="w-screen h-screen flex">
        <Menu />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
