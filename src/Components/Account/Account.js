import React, { Component } from 'react';
import { connect } from 'react-redux';
import './account.css'

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
        }
    }
    render() {
        console.log(this.props)
        return (
            <section className='account-section'>
                <button className='account-menu'>
                    <p>Your current Username is {this.props.user.username}</p>
                    <input placeholder='change username'/>
                    <button>Change</button>
                    <p>Your current Email is {this.props.user.email}</p>
                    <input className='email-input' placeholder='change email'/>
                    <button>Change</button>
                </button>
            </section>
        )
    }
}
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(Account);