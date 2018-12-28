import React, { Component } from 'react';

import Start from './pages/start/Start';
import Typing from './pages/typing/Typing';

class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            activePage: this.props.page
        };
    }
  render(){
    if(this.state.activePage === "StartScreen")
        return(<Start/>);
    else
        return(<Typing/>);
  }
}

export default App;
