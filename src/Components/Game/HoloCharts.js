import React, {Component} from 'react';

class HoloCHarts extends Component {
    handleRecruit = () => {
        const {troopers} = this.props;
        let newTrooper = {
            name: troopers.name,
            image: troopers.url
        }

        this.props.recruitFn(newTrooper);
        this.props.refreshFn();
    }

    render(){
        return (
            <div onClick={this.handleRecruit}>
                <img src={this.props.troopers.url} alt={this.props.troopers.name}/>
                <p>{this.props.troopers.name}</p>
            </div>
        )
    }
}
export default HoloCHarts;