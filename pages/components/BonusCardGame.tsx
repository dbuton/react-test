import React from "react";
import {Button, Card} from "react-bootstrap";

export default class BonusCardGame extends React.Component {
    constructor(props) {
        super(props);

        this.makeAction = this.makeAction.bind(this);

        console.log('init bonus game card')
        this.state = {
            index : this.props.index,
            money : this.props.money,
            lulu : this.props.lulu,
            name : this.props.name,
            players : this.props.players,
            activePlayerIndex : this.props.activePlayerIndex
        }
    }

    render() {
        let players = this.props.players
        let haveAction = players.includes(this.props.activePlayerIndex)

        return (
            <Card bg='warning' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                            Argent : {this.props.money}<br/>
                            Lulu : {this.props.lulu}<br/>
                            Players : {players.map((player) => player + 1 )}<br/>
                    </Card.Text>
                    {haveAction &&
                        <Button variant="primary" onClick={() => this.makeAction(this.props.index)}>Action</Button>
                    }
                </Card.Body>
            </Card>
        );
    }

    makeAction(index) {
        this.props.makeAction(index);
    }
}
