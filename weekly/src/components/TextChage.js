import React from "react";

class TextChange extends React.Component{
    constructor (){
        super();
        this.state = {
            text: "test",
        };
    }

        toggleLeft = () => {
            this.setState({
                text: "Left",
            })
        }

        toggleRight = () => {
            this.setState({
                text:"Right",
            })
        }


    
    render(){
        return(
        <div className="toggle">
                <div>
                    <h1>This is the {this.state.text}</h1>
                </div>
                <div>
                    <button onClick={this.toggleLeft}>Show Left</button>
                    <button onClick={this.toggleRight}>Show Right</button>
                </div>
        </div>
        )
    }
}

export default TextChange;