import React, { Component } from 'react'
import './SelectCharacter.css'
import './Character.css'

import Character from './Character'
import characterData from './charactersData'

class SelectCharacter extends Component {
    state = {
        characterData : characterData
    }

    render(){ 
        return (
            <section id="characterSelection">
                <div className="row sideContainer">
                    <div className="column player-content"><h2>PLAYER 1</h2></div>

                        <div className="character-container">
                            <div className = "rows">
                                <div className = "x">
                                    <div className="character-box" >
                                        {this.state.characterData.map( sCharacter => <Character 
                                            key  = {sCharacter.id} 
                                            id   = {sCharacter.id} 
                                            name = {sCharacter.name}
                                            sImg = {sCharacter.smallImg}/>
                                        )}
                                    </div> 
                                </div>
                            </div>
                        </div>

                    <div className="column player-content"><h2>PLAYER 2</h2></div>
                </div>
                
            </section>
        )
    }
}

export default  SelectCharacter;

  /* <div className="".slice(0,5)>

                    {/* <div className=" ">
                            <div className="">
                                <div className="">
                                {this.state.characterData.slice(5,10).map( sCharacter => <Character 
                                key ={sCharacter.id} 
                                id_row2 ={sCharacter.id} 
                                name_row2 = {sCharacter.name}
                                sImg_row2 = {sCharacter.smallImg}/>
                                )}
                                </div>
                            </div>
                    </div>  */

                /* </div> */

