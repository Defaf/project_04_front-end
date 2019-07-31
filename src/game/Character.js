import React, { Component } from 'react'
import './SelectCharacter.css'
import './Character.css'

class Character extends Component {
    
    state = {
        hidden: true,
        choice: ''
    }

handle = () =>{
    console.log('cliced!!!')
}
    toggleHidden = (event) => {
        this.setState({
            hidden: !this.state.hidden
        })

        console.log('this is' + event.target.value)
    }

    display = (event) => {
        let name = event.target.value
        console.log(event.target.value)
        this.setState({
           choice: name
        })

    }

    render(){
        
        return (
            <section>
        
                <div className="table">
                    <ul className="horizontal-list">
                        <li>
                            <img className="character-img" 
                            src={this.props.sImg}  
                            alt={this.props.name}
                            // onClick={(e) => this.toggleHidden (e)}
                            onClick={this.display} />
                        </li>
                        {this.state.hidden ? "" : <p> {this.props.name} </p> }
                    </ul>
                </div> 

            </section>
        )
    }
}

export default Character;
