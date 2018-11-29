import React, { Component } from 'react';
import { Navbar, NavItem} from 'react-materialize'
import Formulario from './Components/Formulario';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar brand='Yaydoo' className="color" right>
  <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
  <NavItem href='components.html'>Components</NavItem>
</Navbar>
       <Formulario/>
      </div>
    );
  }
}

export default App;
