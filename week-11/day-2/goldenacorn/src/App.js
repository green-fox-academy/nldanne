import './App.css';
//import SingleGoldenAcornApp from './SingleGoldenAcornApp';
//import SimpleGolden from './SimpleGolden';
import { NavLink } from "react-router-dom";
//import Home from './Home';


function App() {

  return (
    <div className='App'>
      {/*} <SingleGoldenAcornApp /> */}
      {/*<SimpleGolden /> */}
      <h1>Hello</h1>
      <NavLink to='/'>Home Page</NavLink> |{" "}
      <NavLink to='/simple/states'>With States</NavLink>
    </div>
  );
}

export default App;

