// import logo from "./logo.svg";

import { useEffect } from "react";
import Form from "./Component/ArtWork";
import Person from "./Component/ClassCounter";
import SiteHeader from "./Component/useffHook";
import { Title } from "./Component/UseEff";
// import { Nav, Title } from "./Component/book/Chapt1";

const menus = [
  { key: "home", label: "Home" },
  { key: "product", label: "Product" },
  { key: "about", label: "About" },
  { key: "secure", label: "Secure", disabled: true },
];

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <SiteHeader />
        <Person />
        <br />
        <Form />
      </header> */}
      {/* <Title /> */}
      {/* <Nav items={menus} selected="home" /> */}
      <Title text="Click"/>
    </div>
  );
}

export default App;
