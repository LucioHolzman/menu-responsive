import { Navigation } from "../components/Navigation";

export default function portfolio() {
  const items = [
    {
      name: "Home",
      desc: "Description Home",
      link: "/",
    },
    {
      name: "Portfolio",
      desc: "Description Portfolio",
      link: "/portfolio",
    },
    {
      name: "About me",
      desc: "Description About me",
      link: "/about",
    },
    {
      name: "Contact",
      desc: "Description Contact",
      link: "/contact",
    },
    {
      name: "ContactPrueba",
      desc: "Description ContactPrueba",
    }
  ]
  return (
      <>
    <div>
    <Navigation
      items={items}
      />
    </div>
    <div>
        <h1>Portfolio</h1>
    </div>
    </>
    );
}
