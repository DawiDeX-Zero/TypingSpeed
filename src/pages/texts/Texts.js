import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Texts.scss';

import NavBar from '../../components/NavBar';
import Button from '../../components/Button';

import data from '../../data/Data';
import TextObject from '../../models/TextObject';
import Typing from '../typing/Typing';


class Texts extends Component {
  constructor()
  {
    super();
    this.state = {
      texts: data.map((value) => {
        return new TextObject(value.name, value.text, value.language);
      })
    };
    this.TextBtn_Clicked = this.TextBtn_Clicked.bind(this);
  }
  TextBtn_Clicked(text, e)
  {
    if(text === null)
    {
      ReactDOM.render(<Typing/>, document.getElementById('root'));
    }
    else
    {
      ReactDOM.render(<Typing textObj={text}/>, document.getElementById('root'));
    }
  }
  render() 
  {
    return (
        <React.Fragment>
            <NavBar activePage="Texts"/>
            <div className="textsList">
              <div key="fragmentrandom" className="texts__single">
                <div className="texts__single-name">Random Word</div>
                <div className="texts__single-language">EN</div>
                <div className="texts__single-button"><Button name="USE" classes={["texts__single-btn"]} onClick={() => this.TextBtn_Clicked(null)}></Button></div>
              </div>
              {this.state.texts.map((element, index) => {
                return (
                <div key={"fragment" + index} className="texts__single">
                  <div className="texts__single-name">{element.name}</div>
                  <div className="texts__single-language">{element.language}</div>
                  <div className="texts__single-button"><Button name="USE" classes={["texts__single-btn"]} onClick={() => this.TextBtn_Clicked(element)}></Button></div>
                </div>
                );
              })}
            </div>

        </React.Fragment>
    );
  }
}

export default Texts;
