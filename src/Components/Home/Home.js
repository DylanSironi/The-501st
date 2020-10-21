import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <section className='homepage'>
                <p>Welcome to the 501st Legion</p>
                <button>Community</button>
                <button>Rules and Objectives</button>
                <button>Game Coming Soon</button>
            </section>
        )
    }
}
export default Home