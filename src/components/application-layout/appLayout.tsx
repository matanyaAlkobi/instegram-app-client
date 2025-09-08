import GetImage from "../GetImage";
import GetAppSlogen from "./appSlogan";
import {  Outlet, useNavigate } from "react-router";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <GetAppSlogen />
        <GetImage imgSrc="/images/app-logo.jpeg" alt="app-logo-image" />
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}
