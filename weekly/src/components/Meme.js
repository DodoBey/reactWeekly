import React from "react";

class Meme extends React.Component{
    constructor(){
        super();
        this.state = {
            text1: "",
            text2: "",
            font: "",
            img: "https://i.imgflip.com/30b1gx.jpg",
            allImg: []
        }
    }

    handleClick = () => {
        let randomNumber = Math.floor(
            Math.random() * this.state.allImg.length
        );
        this.setState({img: this.state.allImg[randomNumber].url})
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name] : value})
    };

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes").then(response => {
            if (response.status !== 200) {
                console.log("No more memes!")
            }
            response.json().then(memeData => {
                const memes = memeData.data.memes;
                this.setState({ allImg: memes })
            })
            .catch(err=> {
                console.log(err)
            })
        })
        
    }
    

    render() {
        return (
            <div className="meme">
            <div className="inputForm">
                <input type="text" name="text1" value={this.state.text1} onChange={this.handleChange} placeholder="First Word"/>
                <input type="text" name="text2" value={this.state.text2} onChange={this.handleChange} placeholder="Second Word"/>
                <input type="number" name="font" value={this.state.font} onChange={this.handleChange} placeholder="Font Size" />
                <button onClick={this.handleClick}>Generate</button>
            </div>
            <div className="memeArea">
                <h3 style= {{fontSize: Number(this.state.font)}}>{this.state.text1}</h3>
                <img src={this.state.img}/>
                <h3 style= {{fontSize: Number(this.state.font)}}>{this.state.text2}</h3>
            </div>
            </div>
        )
    }

}

export default Meme;