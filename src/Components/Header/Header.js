import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <section className='header'>
                <div>
                    <img  className='logo' src='https://cdn.custom-cursor.com/cursors/pack2150.png' alt='clone trooper' />
                    <p> {this.props.username}username </p>
                    <button onclick=''>Account</button>
                </div>
            </section>
        )
    }
}
export default Header