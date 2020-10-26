import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                    <img  className='logo' src='https://cdn.custom-cursor.com/cursors/pack2150.png' alt='clone trooper' />
                    <div> {this.props.username}</div>
                    <button className='account'><Link to ='/account'>Account</Link></button>
            </div>
        )
    }
}
export default Header