import React, { Component } from 'react'
import { Route , Link} from 'react-router-dom'
import './MainMenu.css'
import HowToPlay from './HowToPlay'
import selectCharacter from './SelectCharacter'
import GameView from './GameView'

class MainMenu extends Component{
    render(){
        return (
            <section id="mainMenu">

                <Route path='/characters' component={selectCharacter} />
                <Route path='/How' component={HowToPlay} />
                <Route path='/Game' component={GameView} />

                <div className="btn-menu">
                    <Link exact to="/characters" className="select">Select Character</Link>
                    <br/>
                    <Link exact to="/How" className="how">How To Play</Link>
                    <br/>
                    <Link exact to="/Game" className="game">Game View</Link>
                </div>

            </section>
        )
    }
}

export default MainMenu;