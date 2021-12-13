
import './App.css';
import { Route } from "react-router-dom";
import  CssBaseline  from '@material-ui/core/CssBaseline';
import Home from "./components/Home"
import Skills from './components/Skills';
import Projects from './components/Projects'
import Contacts from './components/Contacts';
function App() {
  return (
    <>
    <CssBaseline/>
    <Route exact path="/" component={Home}/>
    <Route path="/skills" component={Skills}/>
    <Route path="/project" component={Projects}/>
    <Route path="/contact" component={Contacts}/>
  </>
  );
}

export default App;
