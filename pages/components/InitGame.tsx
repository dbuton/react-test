import React from "react";
import {Button} from "react-bootstrap";

export default class InitGame extends React.Component {
    constructor(props) {
        super(props);

        this.addPlayer = this.addPlayer.bind(this);
        this.removeLastPlayer = this.removeLastPlayer.bind(this);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            newPlayersName: [],
            gameName: '',
            nbPlayer: 2
        }
    }

    addPlayer() {
        if(this.state.nbPlayer < 5)
            this.setState({nbPlayer: this.state.nbPlayer + 1});
    }

    removeLastPlayer() {
        if(this.state.nbPlayer > 2) {
            let activePlayersName = this.state.newPlayersName;
            activePlayersName.pop()
            this.setState({
                nbPlayer: this.state.nbPlayer - 1,
                newPlayersName : activePlayersName
            });
        }
    }

    handleInputChange(event) {
        if (event.target.name == 'gameName') {
            this.setState({gameName:  event.target.value});
        } else {
            let activePlayersName = this.state.newPlayersName;
            activePlayersName[event.target.name - 1] = event.target.value;
            this.setState({newPlayers: activePlayersName});
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.validatePlayers(this.state.gameName, this.state.newPlayersName);
    }

    render() {

        const items = [];

        for (let index = 1; index <= this.state.nbPlayer; index++) {
            items.push(<label key={index}>Nom Joueur {index} : <input type='text' name={index} key={index} onChange={this.handleInputChange}/></label>)
        }

        return (
            <div>
                PLAYERS : <br/>
                {this.state.nbPlayer} joueurs en cours...<br/>
                <Button variant="primary" onClick={this.addPlayer}>AJOUTER</Button>
                <Button variant="secondary" onClick={this.removeLastPlayer}>SUPPRIMER</Button>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nom de partie :
                        <input type="text" name='gameName' onChange={this.handleInputChange}/>
                    </label>
                    {items}
                    <Button type="submit" variant="danger">VALIDER</Button>
                </form>
            </div>
        );
    }
}
