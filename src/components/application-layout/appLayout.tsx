import GetImage from "../GetImage";
import GetAppSlogen from "./appSlogan";
import { Outlet, useNavigate } from "react-router";
import "../../styles/layout.css";
export default function Layout() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <GetAppSlogen />
        <div className="app-logo">
          <GetImage imgSrc="/images/app-logo.jpeg" alt="app-logo-image" />
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}
