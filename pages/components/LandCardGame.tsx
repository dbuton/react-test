import React from "react";
import {Button, Card} from "react-bootstrap";

export default class LandCardGame extends React.Component {
    constructor(props) {
        super(props);

        this.toBuyCard = this.toBuyCard.bind(this);
        this.toPayCard = this.toPayCard.bind(this);

        console.log('init land game card')
        this.state = {
            index : this.props.index,
            name : this.props.name,
            owner : this.props.owner,
            building : this.props.building,
            priceToBuy : this.props.priceToBuy,
            priceToPay : this.props.priceToPay,
            activePlayerIndex : this.props.activePlayerIndex
        }
    }

    render() {
        let players = this.props.players
        let haveAction = players.includes(this.props.activePlayerIndex)

        return (
            <Card bg='success' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                            Achat : {this.props.priceToBuy} <br/>
                            A payer : {this.props.priceToPay} <br/>
                            Players : {players.map((player) => player + 1)} <br/>
                            Propriétaire : {this.props.owner + 1}
                    </Card.Text>
                    {haveAction &&
                        <div>
                            {this.props.owner ?
                                <Button variant="secondary" onClick={() => this.toPayCard(this.props.index)}>Payer</Button>
                            :
                                <Button variant="primary" onClick={() => this.toBuyCard(this.props.index)}>Acheter</Button>
                            }
                        </div>
                    }
                </Card.Body>
            </Card>
        );
    }

    toBuyCard(index) {
        this.props.toBuyCard(index);
    }

    toPayCard(index) {
        this.props.toPayCard(index);
    }
}
