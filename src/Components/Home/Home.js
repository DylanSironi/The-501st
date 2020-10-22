import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className='homepage'>
                <button className='button' id='button1'><Link to='/community'>Community</Link></button>
                <button className='button' id='button2'><Link to='/rules'>Rules and Objectives</Link></button>
                <button className='button' id='button3'><Link to='/game'>Game Coming Soon</Link></button>
            </div>
        )
    }
}
export default Home