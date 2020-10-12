import React from "react";
import {Button, Card, ListGroup} from "react-bootstrap";


export default class Player extends React.Component {
    constructor(props) {
        super(props);

        console.log('init player')
        this.state = {
            id : props.id,
            name : props.name,
            money : props.money,
            isActive : props.isActive,
            nbLulu : props.nbLulu,
            hasFundraiser : props.nbLulu,
            hasSalaryFreeze : props.nbLulu,
            nbSkipTurn : props.nbLulu,
            boardPosition : props.nbLulu
        }
    }

    render() {
        const isActive = this.props.isActive
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Header>Player {this.props.id + 1} : {this.props.name}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>{this.props.name}</ListGroup.Item>
                    <ListGroup.Item>{this.props.money}</ListGroup.Item>
                    <ListGroup.Item>{this.props.nbLulu}</ListGroup.Item>
                    <ListGroup.Item>{this.props.boardPosition}</ListGroup.Item>
                </ListGroup>
            </Card>
        );
    }
}
