import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Header from "./header";
import Home from "./homepage";
import About from "./about";
import Departments from "./departments";

import Footor from "./footor";
function App() {
  return (
    <div className="App">
      <header className="Header-section">
        <Header></Header>
      </header>
      <body>
        <Home></Home>
        <About></About>
        <Departments></Departments>
      </body>
      <footer className="Footer-Section">
        <Footor></Footor>
      </footer>
    </div>
  );
}

export default App;
