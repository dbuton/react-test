import React from "react";
import {Button, Card, Col, ListGroup, Modal} from "react-bootstrap";


export default class Dice extends React.Component {
    constructor(props) {
        super(props);

        this.launchDice = this.launchDice.bind(this);
        this.diceLaunched = this.diceLaunched.bind(this);
        console.log('init dice')
        this.state = {
            show: true
        }
    }

    render() {

        return (
            <Modal
                show={this.state.show}
                onHide='false'
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>Lancez le dé Joueur {this.props.activePlayerIndex + 1}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Button variant="primary" onClick={this.launchDice}>LANCER de dés</Button>
                    <div> Dés : {this.props.diceValue && this.props.diceValue} </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.diceLaunched}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    diceLaunched() {
        this.props.diceLaunched();
    }

    launchDice() {
        this.props.launchDice();
    }
}
