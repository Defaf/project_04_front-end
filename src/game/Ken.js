import React, { Component } from 'react'
import './Ken.css'

class Ken extends Component {

    constructor(props) {
        super(props)
        this.Character = React.createRef()
    }
    state ={
        kenHealth: 50
    }
    
    kenAttack = (event) => {
        if(event.keyCode === 39){// 39 is the right arrow on the keyboard
           if (!this.props.checkCollision()) {
            this.Character.current.classList.add('walk')
            const originalMargin = this.Character.current.style.marginLeft || "0"
            const originalMarginPx = parseInt(originalMargin.replace('px', '')) 
            this.Character.current.style.marginLeft = originalMarginPx + 15 + "px";

           } else {
               console.log("no moving")
           }

        }else if(event.keyCode === 37){// 37 is the left arrow on the keyboard
            this.Character.current.classList.add('walk')
            const originalMargin = this.Character.current.style.marginLeft || "0"
            const originalMarginPx = parseInt(originalMargin.replace('px', '')) 
            this.Character.current.style.marginLeft = originalMarginPx - 15 + "px";

            // this.Character.current.animate([{transform: 'translateX(0px)'}, {transform: "translateX(50px)"}], {duration: 1000})
            // setTimeout( () => { this.Character.current.classList.remove('walk'); }, 150);

        }else if (event.keyCode === 80) { // 80 is the letter P on the keyboard
            
            this.Character.current.classList.add('punch');
            setTimeout( () => { this.Character.current.classList.remove('punch'); }, 150);
            console.log("heeey you're punch ")

        }else  if (event.keyCode === 66) { // 66 is the letter B on the keyboard
            this.Character.current.classList.add('kick');
            setTimeout( () => { this.Character.current.classList.remove('kick'); }, 500);
            console.log("heeey you're kick")

        }else  if (event.keyCode === 67 ) { // 67 is the letter C on the keyboard
            this.Character.current.classList.add('reversekick');
            setTimeout( () => { this.Character.current.classList.remove('reversekick'); }, 500);
            console.log("heeey you're reversekick")

        }else  if (event.keyCode === 69 ) { // 69 is the letter E on the keyboard
            this.Character.current.classList.add('tatsumaki');
            setTimeout( () => { this.Character.current.classList.add('down'); }, 500)
            setTimeout( () => { this.Character.current.classList.remove('tatsumaki'); }, 2000)
            setTimeout( () => { this.Character.current.classList.remove('down'); }, 2000)
            console.log("heeey you're tatsumaki")

        }else  if (event.keyCode === 71 ) { // 71 is the letter G on the keyboard
            this.Character.current.classList.add('shoryuken');
            setTimeout( () => { this.Character.current.classList.add('down'); }, 500)
            setTimeout( () => { this.Character.current.classList.remove('shoryuken'); }, 1000)
            setTimeout( () => { this.Character.current.classList.remove('down'); }, 1000)
            console.log("heeey you're shoryuken")

        }else  if (event.keyCode === 72 ) { // 72 is the letter H on the keyboard
            this.Character.current.classList.add('jump');
            setTimeout( () => { this.Character.current.classList.add('down'); }, 500)
            setTimeout( () => { this.Character.current.classList.remove('jump'); }, 1000)
            setTimeout( () => { this.Character.current.classList.remove('down'); }, 1000)
            console.log("heeey you're jump")
        }else if(event.keyCode === 73){// 73 is the letter I on the keyboard
            this.Character.current.classList.add('down');
            setTimeout( () => { this.Character.current.classList.remove('down'); }, 250);
            console.log("heeey you're down")

        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.kenAttack, false);
    }

    // componentWillUnmount(){
    //     document.removeEventListener("keydown", this.kenAttack, false);
    // }
    render() {
        return (
            <div>
                <section className="ken" ref={this.Character} onKeyDown={ (e) =>  this.kenAttack(e) } >
                </section>
            </div>
        )
    }
}

export default Ken ;
// if(this.state.kenHealth == 0 ){
//     console.log("you're die !!")
// }else {
//     this.setState({
//         kenHealth: this.state.kenHealth - 10
//     })
// }