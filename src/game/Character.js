import React, { Component } from 'react'
import './SelectCharacter.css'
import './characterPanel.css'

class Character extends Component {
    
    state = {
        hidden: true
    }
handle = () =>{
    console.log('cliced!!!')
}
    toggleHidden = (event) => {
        this.setState({
            hidden: !this.state.hidden
        })
        console.log(event.target)
    }

    render(){
        
        return (
            <section>
        
                <div className="table">
                    <ul className="horizontal-list">
                        <li  >
                            <img className="character-img" 
                            src={this.props.sImg}  
                            alt={this.props.name}
                            onClick={this.toggleHidden} />
                        </li>
                        {this.state.hidden ? "" : <p> {this.props.name} </p> }
                    </ul>
                </div> 
               
            </section>
        )
    }
}

export default Character;
