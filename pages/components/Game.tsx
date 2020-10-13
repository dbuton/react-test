import React from "react";
import {Alert, Button, Col, Container, Row} from "react-bootstrap";
import Player from "./Player";
import BoardGame from "./BoardGame";
import Dice from "./Dice";


export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.finishTurn = this.finishTurn.bind(this);

        console.log('init game')
        this.state = {
            players : props.players,
            gameName : props.gameName,
            activePlayerIndex : props.activePlayerIndex,
            boardGameCards : props.boardGameCards,
            diceValue: props.diceValue,
            isDiceLaunched: props.isDiceLaunched,
        }
    }

    render() {

        let isDiceLaunched = this.props.isDiceLaunched;

        return (
            <>
                {!isDiceLaunched &&
                <Dice
                    activePlayerIndex={this.props.activePlayerIndex}
                    diceValue={this.props.diceValue}
                    launchDice={this.props.launchDice}
                    diceLaunched={this.props.diceLaunched}
                />
                }
                <Container>
                    <Row>
                        <Col>
                            <Alert variant='info'>{this.props.gameName}</Alert>
                            <Alert variant='info'>Joueur {this.props.activePlayerIndex + 1}, à toi de jouer ...</Alert>

                            {this.props.players.map((player) =>
                                <Player
                                    key={player.id}
                                    id={player.id}
                                    name={player.name}
                                    money={player.money}
                                    nbLulu={player.nbLulu}
                                    isActive={player.isActive}
                                    boardPosition={player.boardPosition}
                                />
                            )}

                            <Button variant="danger" onClick={this.finishTurn}>SUIVANT</Button>
                        </Col>
                        <Col>
                            <BoardGame
                                boardGameCards={this.props.boardGameCards}
                                activePlayerIndex={this.props.activePlayerIndex}
                                toBuyCard={this.props.toBuyCard}
                                toPayCard={this.props.toPayCard}
                                makeAction={this.props.makeAction}
                            />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }

    finishTurn() {
        this.props.finishTurn();
    }
}
