import React, { Component } from 'react';
import './Speed.scss';

class Speed extends Component {
    tick()
    {
        this.setState((state) => ({
            elapsedTime: (new Date() - state.startTime) / 60000,
            wpmSpeed: Math.max(0, Math.round((((this.props.charTyped/5) - this.props.mistakes)/this.state.elapsedTime))),
            wpmSpeedWithoutMistakes: Math.max(0, Math.round(((this.props.charTyped/5)/this.state.elapsedTime))),
            cpmSpeed: Math.max(0, Math.round(((this.props.charTyped-this.props.mistakes)/this.state.elapsedTime))),
            cpmSpeedWithoutMistakes: Math.max(0, Math.round(((this.props.charTyped)/this.state.elapsedTime)))
        }));
    }
    constructor(props)
    {
        super(props);
        this.state = {
            timer: null,
            startedTimer: false,
            startTime: null,
            elapsedTime: null,
            wpmSpeed: 0,
            wpmSpeedWithoutMistakes: 0,
            cpmSpeed: 0,
            cpmSpeedWithoutMistakes: 0
        }
    }
    componentDidUpdate()
    {
        if(this.props.stopped && this.props.started)
        {
            clearInterval(this.state.timer);
        }
        if(this.props.started && !this.state.startedTimer && !this.props.stopped)
        {
            var timer = setInterval(() => 
                this.tick(),
                1000);
            this.setState({
                startedTimer: true,
                timer: timer,
                startTime: new Date()
            });
            
            
        } 
    }
    render()
    {
        return(
            <div className="typing__speed">
                <div className="typing__speed-wpm">
                    <div className="typing__speed-single">
                        WPM: {this.state.wpmSpeed}
                    </div>
                    <div className="typing__speed-single">
                        WPM without mistakes: {this.state.wpmSpeedWithoutMistakes}
                    </div>
                </div>
                <div className="typing__speed-cpm">
                    <div className="typing__speed-single">
                        CPM: {this.state.cpmSpeed}
                    </div>
                    <div className="typing__speed-single">
                        CPM without mistakes: {this.state.cpmSpeedWithoutMistakes}
                    </div>
                </div>
            </div>
        );
    }
}

export default Speed;