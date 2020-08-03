import React, { Component } from 'react';

export default class AddPlayerForm extends Component{
    constructor(props) {
       super(props);

       this.state = {
           name: '',
       }
       this.onNameChange = this.onNameChange.bind(this);
       this.onSubmit = this.onSubmit.bind(this);
    }

    onNameChange = (event) => {
        const name = event.target.value;
        this.setState({ name: name})
    }

    onSubmit = (event) => {
        if(event) event.preventDefault();
        this.props.onAdd(this.state.name);
        this.setState({ name: '' });
    };

    render(){

        return(
            <div className="add-player-form">
                <form onSubmit={this.onSubmit}>
                    <input
                        type={"text"}
                        value={this.state.name}
                        onChange={this.onNameChange}
                        placeholder={"Player Name"}
                    />
                    <input type={"submit"} value={"Add Player"} />
                </form>
            </div>
        );
    }
}