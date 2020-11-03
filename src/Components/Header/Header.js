import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.scss'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
        }
    }
    render() {
        return (
            <div className='header-container'>
                    <Link to='/home' ><img  className='logo' src='https://cdn.custom-cursor.com/cursors/pack2150.png' alt='clone trooper' /></Link>
                    <div className='username'> Hello {this.props.userInfo.user.username}</div>
                    <button className='account'><Link to ='/account'>Account</Link></button>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps)(Header)