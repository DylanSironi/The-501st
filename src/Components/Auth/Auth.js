import React, { Component } from 'react';

class Auth extends Component {
    render() {
        return (
            <section className='auth'>
                <img src='' alt='' />
                <div className='inputs'>
                    <input placeholder='Username' />
                    <input placeholder='Password' type='password' />
                    <input placeholder='email' />
                </div>
                <div>
                    <button onClick=''>Login</button>
                    <button onClick=''>Register</button>
                </div>
            </section>
        )
    }
}
export default Auth