import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date().toLocaleTimeString()}
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date().toLocaleTimeString()
        });
    }

    render() {
        return (
            <div className="myClock">
                <h2>The time is currently {this.state.date}!</h2>
            </div>
        );
    }
};

