import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './GameView.css'
import Ken from './Ken'
import Dudley from './Dudley'

let width = 1100
let height = 540
const ratio = window.devicePixelRatio || 1;
// window.innerHeight;

class GameView extends Component {

      constructor(props) {
        super(props)
        this.canvas = React.createRef()
        this.player1 = React.createRef()
        this.player2 = React.createRef()
        this.progress = React.createRef()
    }

    state = {
        screen: {
            width: width,
            height: height,
            ratio: ratio
        },
        playersDist : 300,
        player1Health : 300,
        player2Health : 300,
        player1Win : 0, 
        player2Win: 0 
    };
    
    checkCollisionP1 = () => {
        console.log(ReactDOM.findDOMNode(this.player1.current).childNodes[0].getBoundingClientRect().left + "p1")
        console.log(ReactDOM.findDOMNode(this.player2.current).childNodes[0].getBoundingClientRect().left + "p2")

        let player1Pos = ReactDOM.findDOMNode(this.player1.current).childNodes[0].getBoundingClientRect().left
        let player2Pos = ReactDOM.findDOMNode(this.player2.current).childNodes[0].getBoundingClientRect().left

        if(player1Pos >= player2Pos ){
            console.log('collision happend  !!')
            return true

        }else {
            console.log('no collision  !!')
            return false
        }
    }

    calculateDistance = () => {
        let distP1 = ReactDOM.findDOMNode(this.player1.current).childNodes[0].getBoundingClientRect()
        let distP2 = ReactDOM.findDOMNode(this.player2.current).childNodes[0].getBoundingClientRect()

        let distP1x = distP1.left + distP1.width/2  
        let distP1y = distP1.top + distP1.height/2

        let distP2x = distP2.left + distP2.width/2  
        let distP2y = distP2.top + distP2.height/2

        let sqrtDist = Math.pow(distP1x - distP2x, 2) + Math.pow(distP1y - distP2y, 2)
        let distance = Math.sqrt(sqrtDist)
        this.setState({
            playersDist : distance
        })
        console.log("dis " +distance)
        return distance
    }

    healthPlayer1 = () => {
        if( this.state.player1Health === 0) {
           alert("p1 is dead " + this.state.player1Health + " p2 is the winner !!") 
           return true ;
        }else {
            this.setState({
                player1Health: this.state.player1Health - 10
            })
        }
    }

    healthPlayer2 = () => {
        if( this.state.player2Health === 0) {
           alert("p2 is dead " + this.state.player2Health + " p1 is the winner !!")
           return true ;
        }else {
            this.setState({
                player2Health: this.state.player2Health - 10
            })
        }
    }

    componentDidMount() {
        this.checkCollisionP1()
    }

    render () {  
        
        return (
            <main id="GameView">
                    <aside className="split leftSide">
                    <div className="healthBarP1">
                        <div className="progressP1" style={{width: this.state.player1Health}}>
                            {/* {this.state.player1Health +" health p1"} */}
                        </div>
                    </div>
                    </aside>

                    <aside className="split rightSide">
                    <div className="healthBarP2">
                        <div className="progressP2" style={{width: this.state.player2Health}}>
                            {/* {this.state.player2Health +" health p2"} */}
                        </div>
                    </div>
                    </aside>
                    
                {/* <canvas id="GameCanvas" ref={this.canvas}
                    width={ this.state.screen.width * this.state.screen.ratio }
                    height={ this.state.screen.height * this.state.screen.ratio } />  */}

                <Ken ref={this.player1} 
                collisionP1= {this.checkCollisionP1} 
                distance ={this.calculateDistance}
                healthP2 = {this.healthPlayer2} />
                <p>{this.state.player1Health +" health p1"}</p>

                <Dudley ref={this.player2} 
                collisionP1= {this.checkCollisionP1}
                distance ={this.calculateDistance}
                healthP1 = {this.healthPlayer1} />
                <p>{this.state.player2Health +" health p2"}</p>
                {/* <selectCharacter /> */}
            </main>
        )
    }
}
  
export default GameView;
// if (this.state.player1Win === 2 ){
//     alert("player 1 win ")
// }else {
//     this.setState({
//         player1Win: this.state.player2Health + 1 
//     })
// }