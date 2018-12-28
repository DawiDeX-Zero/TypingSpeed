import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
    multipleClassName(classArray) {
        var classes = "btn";
        classArray.forEach(element => {
            classes += " " + element;
        });
        return classes;
    }
    render()
    {
        var classList;
        (Array.isArray(this.props.classes)) ?
            classList = " " + this.props.classes.length > 0 ? this.multipleClassName(this.props.classes) : "":
            classList = "btn";
        return(
            <button className={classList} onClick={this.props.onClick}>{this.props.name}</button>
        );
    }
}

export default Button;