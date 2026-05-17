import Menu from "./menu";
import { useContext } from "react";
import { UserContext } from "./user";
import MobileMenu from "./mobileMenu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { menuBtn } = useContext(UserContext);

  return (
    <>
      {menuBtn ? <MobileMenu /> : null}
      <main
        className={`w-screen h-screen flex ${menuBtn ? "max-[481px]:hidden" : ""} min-[1200px]:overflow-y-hidden min-[1200px]:fixed`}
      >
        <Menu />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
