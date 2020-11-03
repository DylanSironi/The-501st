import React, { Component } from 'react';
import { connect } from 'react-redux';
import './account.scss'

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
            <section className='account-section' style={{background: "url(https://i1.wp.com/opendoorpride.org/wp-content/uploads/2017/05/simple-one-color-grey-background-1920x1200.jpg?ssl=1)"}}>
                <div className='account-menu'>
                    <p>Your current Username is {this.props.userInfo.user.username}</p>
                    <input placeholder='change username'/>
                    <button>Change</button>
                    <p>Your current Email is {this.props.userInfo.user.email}</p>
                    <input className='email-input' placeholder='change email'/>
                    <button>Change</button>
                </div>
            </section>
        )
    }
}
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(Account);
