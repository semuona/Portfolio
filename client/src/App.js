import "./App.css";
import TimeLine from "./components/Timeline/Timeline";
import ContactMe from "./components/contactMe/ContactMe";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import { Route, Switch } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import CV from "./components/CV/CV";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Route to="/menu" component={Menu} />
      <About />
      <TimeLine />
      <Skills />
      <CV />
      <ContactMe />
    </div>
  );
}

export default App;
