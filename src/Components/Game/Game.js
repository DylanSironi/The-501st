import React, { Component } from 'react';
import './Game.css'

class Game extends Component {
    render() {
        return (
            <section className='game' style={{background: "url(https://i1.wp.com/opendoorpride.org/wp-content/uploads/2017/05/simple-one-color-grey-background-1920x1200.jpg?ssl=1)"}}>
                <div>enemy long range troops</div>
                <div>enemy close range troops</div>
                <div>my close range troops</div>
                <div>my long range troops</div>
                <div>my cards</div>
            </section>
        )
    }
}
export default Game