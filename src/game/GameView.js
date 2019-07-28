import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import $ from "jquery"
import './GameView.css'
import Ken from './Ken'
import Ryu from './Ryu'

let width = 1100;
let height = 560
const ratio = window.devicePixelRatio || 1;
// window.innerHeight;

class GameView extends Component {

      constructor(props) {
        super(props)
        this.canvas = React.createRef()
        this.player1 = React.createRef()
        this.player2 = React.createRef()
    }

    state = {
        screen: {
            width: width,
            height: height,
            ratio: ratio
        },
        player1Health : 50,
        player2Health : 50
    };
    
    checkCollision = () => {
        console.log(ReactDOM.findDOMNode(this.player1.current).childNodes[0].getBoundingClientRect().left + "p1")
        console.log(ReactDOM.findDOMNode(this.player2.current).childNodes[0].getBoundingClientRect().left + "p2")

        if(ReactDOM.findDOMNode(this.player1.current).childNodes[0].getBoundingClientRect().left > ReactDOM.findDOMNode(this.player2.current).childNodes[0].getBoundingClientRect().left ){
            console.log('collision happend !!')
            return true
        }else if (ReactDOM.findDOMNode(this.player1.current).childNodes[0].getBoundingClientRect().left == ReactDOM.findDOMNode(this.player2.current).childNodes[0].getBoundingClientRect().left){
            console.log('equal  !!')
            // this.setState({
            //     player1Health: this.state.player1Health - 10
            // })
            // console.log(this.state.player1Health + "health")
            // this.checkHealth()
            return true

        } else {
            console.log('no collision  !!')
            return false

        }
       
    }
    checkHealth = () => {
        if( this.state.player2Health === 0) {
            console.log("p2 is dead " + this.state.player2Health)
        }else {
            this.setState({
                player2Health: this.state.player2Health - 10
            })
            console.log(this.state.player2Health + "health")
        }
        
    }

    //componentDidUpdate
    componentDidMount() {
        this.checkCollision()
        // this.checkHealth()
    }
    render () {  
        
        return (
            <div>
                <h1 onClick={this.handleClick}>The Start</h1> 
                 <main>
                    <canvas ref={this.canvas}
                        width={ this.state.screen.width * this.state.screen.ratio }
                        height={ this.state.screen.height * this.state.screen.ratio } />
                    <Ken ref={this.player1} checkCollision= {this.checkCollision} />
                    <Ryu ref={this.player2} checkCollision= {this.checkCollision} />
                    {/* <selectCharacter /> */}
                </main>
            </div>
        )
    }
}
  
export default GameView;
