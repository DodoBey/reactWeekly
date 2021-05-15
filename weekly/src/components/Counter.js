import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count1: 0,
            count2: 0,
            count3: 0,
            count4: 0
        }
    }

    render() {
        return (
            <div className="counterComp">
                <h2 className="counterTitle">Vote Your Language!</h2>
                <div className="counterArea">
                    <span>{this.state.count1}</span>
                    <span>Php</span>
                    <button onClick={() => this.setState({ count1: this.state.count1 + 1})}>Click Here!</button>
                </div>
                <div className="counterArea">
                    <span>{this.state.count2}</span>
                    <span>Python</span>
                    <button onClick={() => this.setState({ count2: this.state.count2 + 1})}>Click Here!</button>
                </div>
                <div className="counterArea">
                    <span>{this.state.count3}</span>
                    <span>Go</span>
                    <button onClick={() => this.setState({ count3: this.state.count3 + 1})}>Click Here!</button>
                </div>
                <div className="counterArea">
                    <span>{this.state.count4}</span>
                    <span>Java</span>
                    <button onClick={() => this.setState({ count4: this.state.count4 + 1})}>Click Here!</button>
                </div>
            </div>
        )
    }
}

export default Counter;