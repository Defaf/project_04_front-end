import React, { Component } from 'react'
import './Ryu.css'

class Ryu extends Component {

    constructor(props) {
        super(props)
        this.Character = React.createRef()
    }

    ryuAttack = (event) => {
        if(event.keyCode === 68){// D
            if (!this.props.checkCollision()) {
            this.Character.current.classList.add('walk')
            const originalMargin = this.Character.current.style.marginLeft || "0"
            const originalMarginPx = parseInt(originalMargin.replace('px', '')) 
            this.Character.current.style.marginLeft = originalMarginPx + 10 + "px";
            } else {
                console.log("no moving")
            }

        }else if(event.keyCode === 65){//A
            this.Character.current.classList.add('walk')
            const originalMargin = this.Character.current.style.marginLeft || "0"
            const originalMarginPx = parseInt(originalMargin.replace('px', '')) 
            this.Character.current.style.marginLeft = originalMarginPx - 10 + "px";

        }else  if (event.keyCode === 90) {// Z
            this.Character.current.classList.add('kick');
            setTimeout( () => { this.Character.current.classList.remove('kick'); }, 500);
            console.log("heeey you're kick")

        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.ryuAttack, false);
    }

    // componentWillUnmount(){
    //     document.removeEventListener("keydown", this.kenAttack, false);
    // }
    render() {
        return (
            <div>
                <section className="Ryu" ref={this.Character} onKeyDown={ (e) =>  this.ryuAttack(e) } >
                </section>
            </div>
        )
    }
}

export default Ryu ;
