import React, { Component } from 'react'
import './HowToPlay.css'

class HowToPlay extends Component{
    render(){
        return (
            <section id="HowToPlay">

                <div className="row">
                    <div className="column">
                        <h3>PLAYER 1</h3>
                        <p className="movement">Movement</p>
                        <div className="moveKeys1">
                            <div id="A" className='keys main-move keyA'>A</div>
                            <div id="S" className='keys main-move keyS'>S</div>
                            <div id="W" className='keys keyW'>W</div>
                            <div id="D" className='keys main-move keyD'>D</div>
                        </div>
                        <p className="attack">Attack</p>
                        <div className="attackKeys1">
                            <div id="E" className='keys keyE'>E</div>
                            <div id="F" className='keys keyF'>F</div>
                            <div id="R" className='keys main-attack keyR'>R</div>
                            <div id="C" className='keys main-attack keyC'>C</div>
                            <div id="V" className='keys main-attack keyV'>V</div>
                        </div>

                    </div>


                    <div className="column">
                        <h3>PLAYER 2</h3>
                        <p className="movement">Movement</p>
                        <div className="moveKeys1">
                            <div id="rightA" className='keys main-move keyRightA'>=</div>
                            <div id="leftA" className='keys main-move keyLeftA'>=</div>
                            <div id="upA" className='keys keyUpA'>||</div>
                            <div id="downA" className='keys main-move keyDownA'>||</div>
                        </div>
                        <p className="attack">Attack</p>
                        <div className="attackKeys1">
                            <div id="I" className='keys keyI'>I</div>
                            <div id="O" className='keys keyO'>O</div>
                            <div id="P" className='keys main-attack keyP'>P</div>
                            <div id="L" className='keys main-attack keyL'>L</div>
                            <div id="shift" className='keys main-attack keyShift'>shift</div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

export default HowToPlay;