import React, { Component } from 'react';
import './Text.scss';

class Text extends Component {
    IndicateWord(flag)
    {
        switch(flag)
        {
            case 0:
                return "";
            case 1:
                return "word--negative";
            case 2:
                return "word--positive";
        }
    }
    ActiveWord(current, active)
    {
        return (current === active)? "word--active": "";
    }
    constructor(props)
    {
        super(props);
        this.state = {
            elements: [],
        };
        this.IndicateWord = this.IndicateWord.bind(this);
        this.ActiveWord = this.ActiveWord.bind(this);
    }
    componentDidMount()
    {
        var elementsArray = [];
        var wordIterator = 0;
        for(var i = 0; i < this.props.text.length; i++)
        {
            if(Array.isArray(this.props.text[i]))
            {
                var tmp = this.props.text[i];
                for(var j = 0; j < tmp.length; j++)
                {
                    elementsArray.push(<span key={"word" + wordIterator} className="word">{tmp[j]}</span>);
                    wordIterator++;
                }
                elementsArray.push(<br key={"newline" + wordIterator}/>);
            }
            else
            {
                elementsArray.push(<span key={"word" + i} className="word">{this.props.text[i]}</span>);
                wordIterator++;
            }
            
        }
        this.setState({elements: elementsArray});
    }
    componentDidUpdate(prevProps)
    {
        if(prevProps.mistakes !== this.props.mistakes || prevProps.active !== this.props.active)
        {
            if(this.props.active < this.props.mistakes.length - 1)
                (Array.from(this.textRef.children)).filter((element) => {
                    return (element.nodeName.toLowerCase() !== "br");
                })[this.props.active].scrollIntoView();
            var elementsArray = [];
            var wordIterator = 0;
            for(var i = 0; i < this.props.text.length; i++)
            {
                if(Array.isArray(this.props.text[i]))
                {
                    var tmp = this.props.text[i];
                    for(var j = 0; j < tmp.length; j++)
                    {
                        elementsArray.push(<span key={"word" + wordIterator} className={"word " + this.IndicateWord(this.props.mistakes[wordIterator]) + " " + this.ActiveWord(wordIterator, this.props.active)}>{tmp[j]}</span>);
                        wordIterator++;
                    }
                    elementsArray.push(<br key={"newline" + i}/>);
                }
                else
                {
                    elementsArray.push(<span key={"word" + i} className={"word " + this.IndicateWord(this.props.mistakes[i]) + " " + this.ActiveWord(i, this.props.active)}>{this.props.text[i]}</span>);
                    wordIterator++;
                }
            }
            this.setState({elements: elementsArray});
        }
    }
    render()
    {
        return(
            <div ref={ref => this.textRef = ref} className={"typing__text" + ((this.props.mistakes.length === this.props.active)? " typing__text--scrollable": "")}>
                {this.state.elements}
            </div>
        );
    }
}

export default Text;