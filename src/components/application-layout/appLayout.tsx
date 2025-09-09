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
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="postSearch">post search</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
