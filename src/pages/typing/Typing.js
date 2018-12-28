import React, { Component } from 'react';
import './Typing.scss';

import Text from '../../components/Text';
import Speed from '../../components/Speed';

import NavBar from '../../components/NavBar';

import TextObject from '../../models/TextObject';
import '../../utils/Array';

class Typing extends Component {
    PreventTextSelecting(e)
    {
        var len = e.target.value.length * 2;
        e.target.setSelectionRange(len, len);
    }
    PreventKeyPressOnInput(e)
    {
        var backspace = 8;
        var arrows = [37, 38, 39, 40];
        if (e.keyCode === backspace)
            e.preventDefault();
        else if(e.keyCode >= arrows[0] && e.keyCode <= arrows[arrows.length - 1])
            e.preventDefault();
    }
    TextAreaOnInput(e)
    {
        try
        {
            if(!this.state.startSpeedCalc)
            {
                this.setState({
                    startSpeedCalc: true
                });
            }
            var lastIndex = e.target.value.length - 1;
            var lastChar = e.target.value[lastIndex];

            var should_lastChar = this.state.wordsFiltered[this.state.wordNode][this.state.charWordNode];
            var isLastCharEnter = (lastChar === "\n")? true: false;
            var isLastCharSpace = (lastChar === " ")? true: false;
            var tmpWord = (!isLastCharSpace || !isLastCharEnter)? this.state.tmpWord + lastChar: this.state.tmpWord;
            this.setState((state) => ({
                tmpWord: tmpWord
            }));
            if(isLastCharSpace || isLastCharEnter)
            {
                if(!this.state.mistakeInWordFlag && this.state.wordsFiltered[this.state.wordNode] === this.state.tmpWord)
                {
                    this.setState((state) => ({
                        mistakesArr: state.mistakesArr.replaceAt(state.wordNode, 2)
                    }));
                }
                else
                {
                    this.setState((state) => ({
                        mistakesArr: state.mistakesArr.replaceAt(state.wordNode, 1)
                    }));
                }
                this.setState((state) => ({
                    wordNode: state.wordNode + 1,
                    charNode: state.charNode + 1,
                    charWordNode: 0,
                    tmpWord: "",
                    mistakeInWordFlag: false
                }));
            }
            else
            {
                if(lastChar !== should_lastChar)
                {
                    this.setState((state) => ({
                        mistakes: state.mistakes + 1,
                        mistakesArr: state.mistakesArr.replaceAt(state.wordNode, 1),
                        mistakeInWordFlag: true
                    }));
                }
                this.setState((state) => ({
                    charNode: state.charNode + 1,
                    charWordNode: state.charWordNode + 1
                }));
            }
            if(this.state.wordsAmount - 1 === this.state.wordNode)
            {
                if(tmpWord.length === this.state.wordsFiltered[this.state.wordNode].length)
                {
                    if(tmpWord === this.state.wordsFiltered[this.state.wordNode])
                    {
                        this.setState((state) => ({
                            mistakesArr: state.mistakesArr.replaceAt(state.wordNode, 2),
                            stopSpeedCalc: true,
                            disableInputFlag: true,
                            wordNode: state.wordNode + 1
                        }));
                    }
                    else
                    {
                        this.setState((state) => ({
                            mistakes: state.mistakes + 1,
                            mistakesArr: state.mistakesArr.replaceAt(state.wordNode, 1),
                            stopSpeedCalc: true,
                            disableInputFlag: true,
                            wordNode: state.wordNode + 1
                        }));
                    }
                }
                
            }
        }
        catch(error)
        {
            console.log(error);
        }
    }
    // TextAreaOnInput(e)
    // {
    //     if(!this.state.startSpeedCalc)
    //     {
    //         this.setState(
    //         {
    //             startSpeedCalc: true
    //         });
    //     }
    //     var lastIndex = e.target.value.length - 1;
    //     var lastChar = e.target.value[lastIndex];
    //     this.setState((state) => ({
    //         tmpWord: state.tmpWord + lastChar
    //     }))
    //     var isLastCharSpace = (lastChar == " ");
    //     if(isLastCharSpace ||  (this.state.words.length - 1 == this.state.wordNode && this.state.charWordNode == this.state.words[this.state.wordNode].length - 1))
    //     {
    //         if(this.state.mistakeInWordFlag == false || this.state.words[this.state.wordNode - 1] !== this.state.tmpWord)
    //         {
    //             this.setState((state) => ({
    //                 mistakesArr: state.mistakesArr.replaceAt(state.wordNode, 2)
    //             }));
    //         }
    //         this.setState((state) => ({
    //             charNode: state.charNode + 1,
    //             wordNode: state.wordNode + 1,
    //             charWordNode: 0,
    //             mistakeInWordFlag: false
    //         }));
    //         if(this.state.words.length - 1 == this.state.wordNode && this.state.charWordNode == this.state.words[this.state.wordNode].length - 1)
    //         {
    //             this.setState({
    //                 stopSpeedCalc: true,
    //                 disableInputFlag: true
    //             });
    //         }
    //         this.setState({
    //             tmpWord: ""
    //         })
    //     }
    //     else
    //     {
    //         if(lastChar == this.state.words[this.state.wordNode][this.state.charWordNode])
    //         {
    //             this.setState((state) => ({
    //                 charNode: state.charNode + 1,
    //                 charWordNode: state.charWordNode + 1
    //             }));
    //         }
    //         else
    //         {
    //             this.setState((state) => ({
    //                 mistakesArr: state.mistakesArr.replaceAt(state.wordNode, 1),
    //                 mistakes: state.mistakes + 1,
    //                 charNode: state.charNode + 1,
    //                 charWordNode: state.charWordNode + 1,
    //                 mistakeInWordFlag: true
    //             }));
    //         }
    //     }
    // }
    constructor(props)
    {
        super(props);
        var filteredWords = [];
        var words = [];
        var wordsObj;
        if(this.props.textObj instanceof TextObject)
        {
            wordsObj = this.props.textObj;
            for(var i = 0; i < wordsObj.text.length; i++)
            {
                if(Array.isArray(wordsObj.text[i]))
                {
                    var tmp = wordsObj.text[i];
                    words.push(new Array(tmp.length));
                    for(var j = 0; j < tmp.length; j++)
                    {
                        filteredWords.push(tmp[j]);
                        words[i][j] = tmp[j];
                    }
                }
                else
                {
                    filteredWords.push(wordsObj.text[i]);
                    words.push(wordsObj.text[i]);
                }
                
            }
        }
        else
        {
            wordsObj = TextObject.randomTextObject();
            filteredWords = wordsObj.text.slice(0);
            words = filteredWords.slice(0);
        }
        this.state = {
            startSpeedCalc: false,
            stopSpeedCalc: false,
            words: words,
            wordsFiltered: filteredWords,
            wordsAmount: filteredWords.length,
            tmpWord: "",
            wordNode: 0,
            charNode: 0,
            charWordNode: 0,
            mistakes: 0,
            mistakesArr: new Array(filteredWords.length).fill(0),
            mistakeInWordFlag: false,
            disableInputFlag: false
        };
        this.TextAreaOnInput = this.TextAreaOnInput.bind(this);
        this.PreventKeyPressOnInput = this.PreventKeyPressOnInput.bind(this);
        this.PreventTextSelecting = this.PreventTextSelecting.bind(this);
    }
    render() 
    {
        return(
            <React.Fragment>
                <NavBar activePage="Typing"/>        
                <div className="typing">
                    <Text active={this.state.wordNode} text={this.state.words} mistakes={this.state.mistakesArr}/>
                    <div className="typing__textarea">
                        <textarea autoComplete="off" autoCapitalize="off" spellCheck="false" disabled={this.state.disableInputFlag} onInput={this.TextAreaOnInput} onKeyDown={this.PreventKeyPressOnInput} onSelect={this.PreventTextSelecting}/>
                    </div>
                    <Speed started={this.state.startSpeedCalc} stopped={this.state.stopSpeedCalc} charTyped={this.state.charNode} mistakes={this.state.mistakes}/>
                </div>
            </React.Fragment>
        );
    }
}

export default Typing;
