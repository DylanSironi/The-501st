import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Community.scss'

class Community extends Component {
    render() {
        // console.log(this.props)
        return (
            <section className='community' style={{background: "url(https://i1.wp.com/opendoorpride.org/wp-content/uploads/2017/05/simple-one-color-grey-background-1920x1200.jpg?ssl=1)"}}>
                <div className='post'>
                <div className='recent'>{this.props.posts}Recent</div>
                    <input className='posty' placeholder='Type here'/>
                    <button className='post-button'>Post</button>
                </div>
            </section>
        )
    }
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(Community);