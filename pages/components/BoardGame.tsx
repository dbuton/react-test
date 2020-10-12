import React from "react";
import LandCardGame from "./LandCardGame";
import BonusCardGame from "./BonusCardGame";
import Game from "./Game";

export default class BoardGame extends React.Component {
    constructor(props) {
        super(props);

        console.log('init board game')
        this.state = {
            boardGameCards : this.props.boardGameCards,
            activePlayerIndex : this.props.activePlayerIndex
        }
    }

    render() {
        return (
            <div>
                PLATEAU
                {this.props.boardGameCards.map((card) =>
                    card.type === 'land' ?
                        <LandCardGame
                            key={card.index}
                            index={card.index}
                            name={card.name}
                            owner={card.owner}
                            priceToBuy={card.priceToBuy}
                            priceToPay={card.priceToPay}
                            players={card.players}
                            activePlayerIndex={this.props.activePlayerIndex}
                            toBuyCard={this.props.toBuyCard}
                            toPayCard={this.props.toPayCard}
                        />
                    :
                        <BonusCardGame
                            key={card.index}
                            index={card.index}
                            name={card.name}
                            money={card.money}
                            lulu={card.lulu}
                            players={card.players}
                            activePlayerIndex={this.props.activePlayerIndex}
                            makeAction={this.props.makeAction}
                        />
                )}
            </div>
        );
    }
}
