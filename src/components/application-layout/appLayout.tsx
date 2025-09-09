import GetImage from "../GetImage";
import GetAppSlogen from "./appSlogan";
import { Link, Outlet } from "react-router";
import "../../styles/layout.css";
export default function Layout() {
  return (
    <>
      <header>
        <GetAppSlogen />
        <div className="app-logo">
          <GetImage imgSrc="/images/app-logo.jpeg" alt="app-logo-image" />
        </div>
      </header>

      <div className="page-structure">
        <div className="navbar">
          <Link className="navbar-link" to="/">
            Home
          </Link>
          <Link className="navbar-link" to="postSearch">
            post search
          </Link>
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
}
