import React, { useState } from "react";
import TabSelector from "./TabSelector";
import "./App.css";

const Home = () => <p>This is the Home component!</p>;
const About = () => <p>This challenge is about tabs!</p>;
const Contact = () => <p>Feel free to contact us!</p>;
const Error = () => (
  <p>
    Something went <strong>wrong</strong>!
  </p>
);

function App() {
  const [activeId, setActiveId] = useState("home");

  function getTabContent() {
    switch (activeId) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Error />;
    }
  }

  return (
    <div className="App">
      <TabSelector activeId={activeId} setActiveId={setActiveId} />
      <div className="App-content">{getTabContent()}</div>
    </div>
  );
}

export default App;
