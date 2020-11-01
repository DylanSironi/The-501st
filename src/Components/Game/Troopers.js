import React, {Component} from 'react';

class Troopers extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            nameInput: ''
        }
    }

    handleInput = (val) => {
        this.setState({nameInput: val})
    }

    handleToggle = () => {
        this.setState({isEditing: !this.state.isEditing})
    }

    handleEdit = (id) => {
        this.props.nameFn(id, this.state.nameInput);
        this.handleToggle();
    }

    render(){
        return (
            <div>
                <img src={this.props.troopers.image} alt={this.props.troopers.name}/>
                <p>{this.props.troopers.name}</p>
            </div>
        )
    }
}

export default Troopers;