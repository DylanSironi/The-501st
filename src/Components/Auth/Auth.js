import React, { Component } from 'react';
import './Auth.css';

class Auth extends Component {
    render() {
        return (
            <section className='auth'>
                <div className='auth-header'>
                    <img className='logo' src='https://cdn.custom-cursor.com/cursors/pack2150.png' alt='clone trooper' />
                    <button className='title'>Welcome to the 501st Legion</button>
                </div>
                <div className='inputs'>
                    <input placeholder='Username' />
                    <input placeholder='Password' type='password' />
                    <input placeholder='email' />
                </div>
                <div>
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </section>
        )
    }
}
export default Auth