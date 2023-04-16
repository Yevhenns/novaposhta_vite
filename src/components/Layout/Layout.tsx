import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import { Footer } from "../Footer/Footer";
import css from "./Layout.module.css";

export const Layout: React.FC = () => {
  return (
    <div className={css.mainWrapper}>
      <header>
        <Nav />
      </header>
      <main className={css.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
