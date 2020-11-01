import React, { Component } from 'react';
import Recruiter from './Recruiter';
import Roster from './Roster';
import axios from 'axios';
import './Game.css'

class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
          myTroopers: []
        }
        this.recruitTroopers = this.recruitTroopers.bind(this);
      }

    componentDidMount() {

        axios.get('/api/my-troopers')
            .then(res => {
                this.setState({ myTroopers: res.data })
            })
            .catch(err => console.log(err));
    }

    recruitTroopers(troopers) {
        axios.post('/api/my-troopers', { troopers: troopers })
            .then(res => {
                this.setState({ myTroopers: res.data })
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    editName = (id, newName) => {
        let body = { name: newName };

        axios.put(`/api/my-troopers/${id}`, body)
            .then(res => {
                this.setState({ myTroopers: res.data })
            })
            .catch(err => console.log(err));
    }

    KIATroopers = (id) => {
        axios.delete(`/api/my-troopers/${id}`)
            .then(res => {
                this.setState({ myTroopers: res.data })
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <section className='game' style={{ background: "url(https://i1.wp.com/opendoorpride.org/wp-content/uploads/2017/05/simple-one-color-grey-background-1920x1200.jpg?ssl=1)" }}>
                <div className='troops' id='el'>enemy long range troops</div>
                <div className='troops' id='ec'>enemy close range troops</div>
                <div className='troops' id='mc'>my close range troops</div>
                <div className='troops' id='ml'>my long range troops</div>
                <div id='cards'>
                    <Recruiter
                        recruitFn={this.recruitTroopers} />
                    <Roster
                        myTroopers={this.state.myTroopers}
                        nameFn={this.editName}
                        KIAFn={this.KIATroopers} />
                </div>
            </section>
        )
    }
}
export default Game