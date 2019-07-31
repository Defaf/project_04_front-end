import React, { Component } from 'react'
import './Ken.css'
import kenPunch from '../sound_effect/KenPunch_SE.mp3'
import kenKick from '../sound_effect/KenKick_SE.mp3'
import kenShoryuken from '../sound_effect/KenPunch_SE.mp3'
import kenTatsumaki from '../sound_effect/RyuTatsumaki_SE.mp3'

class Ken extends Component {

    constructor(props) {
        super(props)
        this.Character = React.createRef()

        this.playPunch = this.playPunch.bind(this);
        this.soundPunch = new Audio(kenPunch);
        this.playKick = this.playKick.bind(this);
        this.soundKick = new Audio(kenKick);
        this.playShoryuken = this.playShoryuken.bind(this);
        this.soundShoryuken = new Audio(kenShoryuken);
        this.playTatsumaki = this.playTatsumaki.bind(this);
        this.soundTatsumaki = new Audio(kenTatsumaki);
    }
    
    kenMovement = (event) =>{
        if(event.keyCode === 68){// 68 is the letter D on the keyboard

            if (!this.props.collisionP1()) {
                this.Character.current.classList.add('walk')
                let originalMargin = this.Character.current.style.marginLeft || "0"
                let originalMarginPx = parseInt(originalMargin.replace('px', '')) 
                this.Character.current.style.marginLeft =  originalMarginPx + 15 + "px";
 
            } else {
                console.log("no moving")
            }
 
        }else if(event.keyCode === 65){// 65 is the letter A on the keyboard
             this.Character.current.classList.add('walk')
             const originalMargin = this.Character.current.style.marginLeft || "0"
             const originalMarginPx = parseInt(originalMargin.replace('px', '')) 
             this.Character.current.style.marginLeft = originalMarginPx - 15 + "px";

        }else if (event.keyCode === 87) { // 87 is the letter W on the keyboard

            this.Character.current.classList.add('jump');
            setTimeout( () => { this.Character.current.classList.add('down'); }, 500)
            setTimeout( () => { this.Character.current.classList.remove('jump'); }, 1000)
            setTimeout( () => { this.Character.current.classList.remove('down'); }, 1000)
            console.log("heeey you're jump")
           
        }
        else if(event.keyCode === 83){// 73 is the letter S on the keyboard
            this.Character.current.classList.add('kneel');
            setTimeout( () => { this.Character.current.classList.remove('kneel'); }, 250);
            console.log("heeey you're down")

        }
    }//END kenMovement

    kenAttack = (event) => {
        if(this.props.distance() <= 80 ){

            if ( this.props.healthP2() === true ){
                return false

            }else {
                if (event.keyCode === 70) { // 70 is the letter F on the keyboard
                    this.Character.current.classList.add('punch');
                    setTimeout( () => { this.Character.current.classList.remove('punch'); }, 150)
                    this.props.healthP2()
                    this.playPunch()
                    console.log("heeey you're punch ")

                }else if (event.keyCode === 86) { // 86 is the letter V on the keyboard
                    this.Character.current.classList.add('kick');
                    setTimeout( () => { this.Character.current.classList.remove('kick'); }, 500)
                    this.props.healthP2()
                    this.playKick()
                    console.log("heeey you're kick")  

                } else if (event.keyCode === 67 ) { // 67 is the letter C on the keyboard
                    this.Character.current.classList.add('reversekick');
                    setTimeout( () => { this.Character.current.classList.remove('reversekick'); }, 500)
                    this.props.healthP2()
                    this.playKick()
                    console.log("heeey you're reversekick")
                
                }else  if (event.keyCode === 69 ) { // 69 is the letter E on the keyboard
                    this.Character.current.classList.add('tatsumaki');
                    setTimeout( () => { this.Character.current.classList.add('down'); }, 500)
                    setTimeout( () => { this.Character.current.classList.remove('tatsumaki'); }, 2000)
                    setTimeout( () => { this.Character.current.classList.remove('down'); }, 2000)
                    this.props.healthP2()
                    this.playTatsumaki()
                    console.log("heeey you're tatsumaki")
            
                }else if (event.keyCode === 82 ) { // 82 is the letter R on the keyboard
                    this.Character.current.classList.add('shoryuken');
                    setTimeout( () => { this.Character.current.classList.add('down'); }, 500)
                    setTimeout( () => { this.Character.current.classList.remove('shoryuken'); }, 1000)
                    setTimeout( () => { this.Character.current.classList.remove('down'); }, 1000)
                    this.props.healthP2()
                    this.playTatsumaki()
                    console.log("heeey you're shoryuken")
                }else{
                    console.log('not a key!!')
                }

            }

        }else {
            console.log ("Distance have to be 80 or less to attack")
        }

    }//END kenAttack

    playPunch = () => {
        this.soundPunch.play();
    }
    playKick = () => {
        this.soundKick.play();
    }
    playShoryuken = () => {
        this.soundShoryuken.play();
    }
    playTatsumaki = () => {
        this.soundTatsumaki.play();
    }

    componentDidMount(){
        document.addEventListener("keydown", this.kenMovement, false);
        document.addEventListener("keydown", this.kenAttack, false);
    }

    render() {
        return (
            <div className= "kenContainer">
                <section className="ken" ref={this.Character} onKeyDown={ (e) =>  this.kenMovement(e) } onKeyDown={ (e) =>  this.kenAttack(e) }  >
                </section>
            </div>
        )
    }
}

export default Ken ;


// this.Character.current.animate([{transform: 'translateX(0px)'}, {transform: "translateX(50px)"}], {duration: 1000})
// setTimeout( () => { this.Character.current.classList.remove('walk'); }, 150);
