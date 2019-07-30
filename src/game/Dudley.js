import React, { Component } from 'react'
import './Dudley.css'

class Dudley extends Component {

    constructor(props) {
        super(props)
        this.Character = React.createRef()
    }

    dudleyMovement = (event) => {
        if(event.keyCode === 39){// 39 is the right arrow on the keyboard

            if (!this.props.collisionP1() ) {

                this.Character.current.classList.add('walk_Dudley')
            const originalMargin = this.Character.current.style.marginLeft || "0"
            const originalMarginPx = parseInt(originalMargin.replace('px', '')) 
            this.Character.current.style.marginLeft = originalMarginPx + 10 + "px";
            
            } else {
                console.log("no moving")
            }

        }else if(event.keyCode === 37){// 37 is the left arrow on the keyboard

            this.Character.current.classList.add('walk-backwards')
            const originalMargin = this.Character.current.style.marginLeft || "0"
            const originalMarginPx = parseInt(originalMargin.replace('px', '')) 
            this.Character.current.style.marginLeft = originalMarginPx - 10 + "px";

        }else if (event.keyCode === 38){// 38 is the up arrow on the keyboard

            this.Character.current.classList.add('jump_Dudley');
            setTimeout( () => { this.Character.current.classList.remove('jump_Dudley'); }, 1000);
            console.log("heeey you're jumpping ")
        }
        else if (event.keyCode === 40){// 40 is the down arrow on the keyboard

            this.Character.current.classList.add('duck');
            setTimeout( () => { this.Character.current.classList.remove('duck'); }, 1000);
            console.log("heeey you're down ")

        }
    }

    dudleyAttack = (event) => {
       if (event.keyCode === 80) {// 80 is the letter P on the keyboard

            if (this.props.distance() <= 85 ){
                // console.log("hp1 is ", this.props.healthP2())
                // if (this.props.healthP2() === true){
                //    return false
                // }else {
                    this.Character.current.classList.add('jab');
                    setTimeout( () => { this.Character.current.classList.remove('jab'); }, 500);
                    this.props.healthP1()
                    console.log("heeey you're jab")
                // }
            }else{
                console.log('no kick')
            }

        }else if (event.keyCode === 76) {// 76 is the letter L on the keyboard

            this.Character.current.classList.add('cross');
            setTimeout( () => { this.Character.current.classList.remove('cross'); }, 500);
            console.log("heeey you're cross")

        }else if (event.keyCode === 73) {// 73 is the letter I on the keyboard
            this.Character.current.classList.add('hook');
            setTimeout( () => { this.Character.current.classList.remove('hook'); }, 1000);
            console.log("heeey you're hook")

        }else if (event.keyCode === 79) {// 79 is the letter O on the keyboard
            this.Character.current.classList.add('uppercut');
            setTimeout( () => { this.Character.current.classList.remove('uppercut'); }, 1000);
            console.log("heeey you're uppercut")

        }else if (event.keyCode === 16 ) {// 16 is the shift  on the keyboard
            this.Character.current.classList.add('block');
            setTimeout( () => { this.Character.current.classList.remove('block'); }, 500);
            console.log("heeey you're block")
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.dudleyMovement, false);
        document.addEventListener("keydown", this.dudleyAttack, false);
    }

    render() {
        return (
            <div className= "dudleyContainer">
                <section className="Dudley" ref={this.Character} onKeyDown={ (e) =>  this.dudleyMovement(e) } onKeyDown={ (e) =>  this.dudleyAttack(e) } >
                </section>
            </div>
        )
    }
}

export default Dudley ;
