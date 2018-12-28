import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Start.scss';

import Typing from '../typing/Typing';

import Button from '../../components/Button';

class Start extends Component {
  constructor()
  {
    super();
    this.Btn_StartClicked = this.Btn_StartClicked.bind(this);
  }
  Btn_StartClicked()
  {
    ReactDOM.render(<Typing/>, document.getElementById("root"));
  }
  render() {
    return (
      <div className="startScreen">
        <h1 className="startScreen__header">TypingSpeed</h1>
        <small className="startScreen__header-author">by DawiDeX-Zero</small>
        <Button name="Start" classes={['btn--start']} onClick={this.Btn_StartClicked}/>
      </div>
    );
  }
}

export default Start;
