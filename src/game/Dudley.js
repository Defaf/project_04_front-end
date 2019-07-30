import React, { Component } from 'react'
import './Dudley.css'

class Dudley extends Component {

    constructor(props) {
        super(props)
        this.Character = React.createRef()
    }

    dudleyAttack = (event) => {
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

        }else  if (event.keyCode === 90) {// Z

            // if (this.props.distance() <= 50 ){
                this.Character.current.classList.add('jab');
                setTimeout( () => { this.Character.current.classList.remove('jab'); }, 500);
                // this.props.healthP1()
                console.log("heeey you're kick")

            // }else{
            //     console.log('no kick')
            // }
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.dudleyAttack, false);
    }

    render() {
        return (
            <div className= "dudleyContainer">
                <section className="Dudley" ref={this.Character} onKeyDown={ (e) =>  this.dudleyAttack(e) } >
                </section>
            </div>
        )
    }
}

export default Dudley ;
