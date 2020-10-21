import React, { Component } from 'react';

class Account extends Component {
    render() {
        return (
            <section className='account'>
                <div>
                    <p>username</p>
                    <p>email</p>
                    <input placeholder='change username'/>
                    <input placeholder='change email'/>

                </div>
            </section>
        )
    }
}
export default Account