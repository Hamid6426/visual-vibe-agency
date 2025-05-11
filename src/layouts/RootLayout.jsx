import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  const { pathname } = useLocation();
  const isContactPage = pathname === "/contact";

  return (
    <div className={isContactPage 
      ? "min-h-dvh bg-white dark:bg-[#141414] flex justify-between flex-col items-center w-full" : "min-h-dvh bg-white dark:bg-[#141414]"}>
      <Navbar />
      <main className={isContactPage 
      ? "w-full" : ""}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
