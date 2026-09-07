import { Outlet } from "react-router";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import Topbar from "../../components/shared/Topbar";


export default function MainLayouts() {
  return (
    <>
      <div className="desktop-fixed-header">
        <Topbar />
        <Navbar />
      </div>

      <main className="desktop-header-offset">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}