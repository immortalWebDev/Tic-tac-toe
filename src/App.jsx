import React from "react";
import Game from "./components/Game";
import Footer from "./components/Footer/Footer.jsx";
import Rules from "./components/Rules/Rules.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="app-container">
        <Rules />
        <Game />
      </div>
      <Footer />
    </>
  );
}

export default App;
