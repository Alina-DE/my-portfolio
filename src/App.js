import { Switch, Route } from 'react-router-dom';
import './App.scss';

// importing the components
import NavBar from './components/navBar/NavBar';

// importing pages
import About from './pages/about/About'
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';

import { FaGithub, FaLinkedin } from 'react-icons/fa';


function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path='/' component={Home} />

        <Route exact path='/about' component={About} />

        <Route exact path='/projects' component={Projects} />

        <Route exact path='/contact' component={Contact} />

      </Switch>

      <div className="icons">
        <a href="https://www.linkedin.com/in/alina-reinalt" target="_blank" rel="noreferrer"><FaLinkedin /></a>

        <a href="https://github.com/Alina-DE" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>
      
    </div>
  );
}

export default App;