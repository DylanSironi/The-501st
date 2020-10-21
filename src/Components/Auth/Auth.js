import React, { Component } from 'react';

class Auth extends Component {
    render() {
        return (
            <section className='auth'>
                <p>The 501st</p>
                <img src='' alt='' />
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