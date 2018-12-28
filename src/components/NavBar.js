import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './NavBar.scss';

import Texts from '../pages/texts/Texts';
import Typing from '../pages/typing/Typing';


class NavBar extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            activePage: this.props.activePage
        };
        this.ClassToActivePage = this.ClassToActivePage.bind(this);
        this.Btn_ChangePage = this.Btn_ChangePage.bind(this);
    }
    Btn_ChangePage(element)
    {
        switch(element)
        {
            case "Typing":
                ReactDOM.render(<Typing/>, document.getElementById('root'));
                break;
            case "Texts":
                ReactDOM.render(<Texts/>, document.getElementById('root'));
                break;
        }
    }
    ClassToActivePage(page)
    {
        return ((this.props.activePage === page)? "active": "");
    }
    render()
    {
        return(
        <div className="nav">
            <h2 className="nav__logo">TypingSpeed</h2>
            <div className="nav__menu">
                <ul>
                    <li className={this.ClassToActivePage("Typing")} onClick={() => this.Btn_ChangePage("Typing")}>Typing</li>
                    <li className={this.ClassToActivePage("Texts")} onClick={() => this.Btn_ChangePage("Texts")}>Texts</li>
                </ul>
            </div>
        </div>
        );
    }
}

export default NavBar;