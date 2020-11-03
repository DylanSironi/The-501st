import React, { Component } from 'react';
import './Rules.scss'

class Rules extends Component {
    render() {
        return (
            <div className='rules' style={{ background: "url(https://i1.wp.com/opendoorpride.org/wp-content/uploads/2017/05/simple-one-color-grey-background-1920x1200.jpg?ssl=1)" }}>
                <div className='rules-div'>
                    Game Objectives:
                    <div className='para'>
                        The aim of the game is to obtain more points than your opponent.  
                    </div>
                    <div className='para'>
                         Players take turns playing cards until they run out of cards. 
                    </div>
                    <div className='para'>
                         The player with the most points at the end of the match wins.
                    </div>
                </div>
                <div className='objectives-div'>
                    Card Types
                    <div className='type'>
                       <div className='card-type'> Rex - Adds +1 to all of the cards in the row</div>
                       <div className='card-type'> Echo - Will destroy all of the highest value cards in play on either side of the board</div>
                       <div className='card-type'> Fives - Destroys all of the highest value Close Combat cards in play</div>
                       <div className='card-type'> Dogma - Place it on your opponent's side of the board in exchange for drawing two cards</div>
                       <div className='card-type'> 99 - Has higher than normal points values</div>
                       <div className='card-type'> Shiney - Place it next to a card with the same name to double their values</div>
                       <div className='card-type'> Kix - After playing this card, choose one from your discarded pile and play it instantly</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Rules