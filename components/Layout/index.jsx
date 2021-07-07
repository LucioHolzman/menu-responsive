import React from "react";
import { Header } from "../Header";
import { Navigation } from "../Navigation";

export const Layout = () => {
  return (
    <>
      <Header />
      <Navigation
        itemsMenu={["Home", "Portfolio", "About me", "Contact"]}
        itemsDesc={[
          "Description Home",
          "Description Portfolio",
          "Description About me",
          "Description Contact",
        ]}
        itemsLink={["/", "/portfolio", "/about", "/contact"]}
      />

    </>
  );
};
