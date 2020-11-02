import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { getUser } from '../../ducks/reducer';
import './Auth.scss';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
        }
    }
    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleRegister = () => {
        const { username, password, email } = this.state;
        axios.post('/api/register', { username, password, email })
            .then(res => {
                this.props.getUser(res.data);
                this.props.history.push('/home');
            })
            .catch(err => console.log(err));
    }
    handleLogin = () => {
        const { username, password, email } = this.state;

        axios.post('/api/login', { username, password, email })
            .then(res => {
                console.log(res.data)
                this.props.getUser(res.data);
                this.props.history.push('/home');
            })
            .catch(err => console.log(err));
    }
    handleLogout = () => {
        axios.get('/api/logout')
            .then(() => {
                this.props.clearUser();
                this.props.history.push('/');
            })
            .catch(err => console.log(err))
        // console.log(this.state)
    }
    render() {
        return (
            <section className='auth' style={{ background: "url(https://i1.wp.com/opendoorpride.org/wp-content/uploads/2017/05/simple-one-color-grey-background-1920x1200.jpg?ssl=1)" }}>
                <div className='auth-header'>
                    <img className='auth-logo' src='https://cdn.custom-cursor.com/cursors/pack2150.png' alt='clone trooper' />
                    <div className='title'>Welcome to the 501st Legion</div>
                </div>
                <div className='login-box'>
                    <div className='log-title'>Login</div>
                    <div className='inputs'>
                        <input className='input1'
                            value={this.state.username}
                            placeholder='Username'
                            name='username'
                            onChange={(e) => this.handleInput(e)} />

                        <input
                            value={this.state.password}
                            name='password'
                            onChange={(e) => this.handleInput(e)}
                            placeholder='Password'
                            type='password' />

                        <input
                            placeholder='email'
                            value={this.state.email}
                            name='email'
                            onChange={(e) => this.handleInput(e)} />
                    </div>
                    <div className='buttons'>
                        <button onClick={this.handleLogin}>Login</button>
                        <button onClick={this.handleRegister}>Register</button>
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, { getUser })(Auth);