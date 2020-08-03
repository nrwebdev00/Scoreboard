import React, { Component } from 'react';

import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

class Scoreboard extends Component{
    constructor(props) {
        super(props);

        this.state = {
            players: [
                {
                    name: 'Nathon',
                    score: 0,
                },
                {
                    name: 'Cara',
                    score: 0
                },
                {
                    name: 'Amber',
                    score: 0
                }
            ]
        }
        this.onScoreChange = this.onScoreChange.bind(this);
        this.onAddPlayer = this.onAddPlayer.bind(this);
        this.onRemovePlayer = this.onRemovePlayer.bind(this);

    }

    onScoreChange = (index, delta) =>{
        this.state.players[index].score += delta;
        this.setState(this.state);
    }
    onAddPlayer = (name) => {
        this.state.players.push({ name: name, score: 0});
        this.setState(this.state);
    }
    onRemovePlayer = (index) =>{
        this.state.players.splice(index, 1);
        this.setState(this.state)
    }

    render(){

        return(
            <div className={"scoreboard"}>
                <Header players={this.state.players} />
                <div className={"players"}>
                    {this.state.players.map(function(player, index){
                        return(
                            <Player
                                name={player.name}
                                score={player.score}
                                key={player.name}
                                onScoreChange = {(delta) => this.onScoreChange(index, delta)}
                                onRemove={() => this.onRemovePlayer(index)}
                            />
                        );
                    }.bind(this))}
                </div>
                <AddPlayerForm onAdd={this.onAddPlayer} />
            </div>
        )
    }
}

export default Scoreboard;