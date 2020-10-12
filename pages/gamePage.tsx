import React from "react";
import Head from "next/head";
import Game from "./components/Game";
import InitGame from "./components/InitGame";

const players = [
    {id: 0, name: 'Damien', isActive: false, boardPosition: 0, money: 15000, nbLulu: 0},
    {id: 1, name: 'Eric', isActive: true, boardPosition: 0, money: 15000, nbLulu: 0},
    {id: 2, name: 'Gerald', isActive: false, boardPosition: 0, money: 15000, nbLulu: 0}
];

const boardGameCards = [
    {index: 0,type: 'land', name:'St Paul' ,owner: null, building: null, players: [0, 1, 2], priceToBuy: 2000, priceToPay: 500},
    {index: 1,type: 'land', name:'Commerce' ,owner: null, building: null, players: [], priceToBuy: 3000, priceToPay: 1000},
    {index: 2,type: 'bonus', lulu: 5, money: 1000, name: 'Jour de paie', players: []},
    {index: 3,type: 'land', name:'Gambetta' ,owner: null, building: null, players: [], priceToBuy: 4000, priceToPay: 1200},
    {index: 4,type: 'bonus', lulu: -3, money: -500, name: 'By-pass', players: []},
    {index: 5,type: 'land', name:'Gambetta' ,owner: null, building: null, players: [], priceToBuy: 4000, priceToPay: 1200},
    {index: 6,type: 'bonus', lulu: 1, money: 0, name: '+1 Lulu', players: []},
]

const diceValue = 6;

export default class GamePage extends React.Component {
    constructor(props) {
        super(props);

        this.gameIsInitialized = this.gameIsInitialized.bind(this);
        this.launchDice = this.launchDice.bind(this);
        this.finishTurn = this.finishTurn.bind(this);
        this.toPayCard = this.toPayCard.bind(this);
        this.toBuyCard = this.toBuyCard.bind(this);
        this.makeAction = this.makeAction.bind(this);

/*
        this.state = {
            players : [],
            gameName : '',
            isGameInitialized : false
        }
*/

        console.log('init game page')
        this.state = {
            players: players,
            boardGameCards: boardGameCards,
            gameName: 'Partie TEST',
            isGameInitialized: true,
            activePlayerIndex: 1,
            diceValue: null
        }
    }

    render() {
        const isGameInitialized = this.state.isGameInitialized

        return (
            <div>
                <Head>
                    <title>MONOPOLULU</title>
                </Head>

                {isGameInitialized
                    ? <Game
                        gameName={this.state.gameName}
                        players={this.state.players}
                        activePlayerIndex={this.state.activePlayerIndex}
                        boardGameCards={this.state.boardGameCards}
                        diceValue={this.state.diceValue}
                        launchDice={this.launchDice}
                        finishTurn={this.finishTurn}
                        toBuyCard={this.toBuyCard}
                        toPayCard={this.toPayCard}
                        makeAction={this.makeAction}
                    />
                    : <InitGame
                        validatePlayers={this.gameIsInitialized}
                    />
                }

            </div>
        );
    }

    gameIsInitialized(gameName, newPlayersName) {
        let beginnerIndex = this.whoBegin(newPlayersName)
        newPlayersName = newPlayersName.map((playerName, index) => {
            return {id: index, name: playerName, isActive: ((index + 1) === beginnerIndex)}
        });

        this.setState(
            {
                gameName: gameName,
                players: newPlayersName,
                isGameInitialized: true,
                activePlayerIndex: beginnerIndex
            })
    }

    whoBegin(newPlayersName) {
        return Math.floor(Math.random() * newPlayersName.length) + 1
    }

    launchDice() {
        let players = this.state.players;
        let activePlayerIndex = this.state.activePlayerIndex;
        let boardGameCards = this.state.boardGameCards;
        let diceValue = Math.floor(Math.random() * 6) + 1;

        //active player object
        let activePlayer = players[activePlayerIndex];

        //remove player from old card
        boardGameCards[activePlayer.boardPosition].players = boardGameCards[activePlayer.boardPosition].players.filter(player => player !== activePlayerIndex);

        //set player position
        activePlayer.boardPosition = (activePlayer.boardPosition + diceValue) % this.state.boardGameCards.length;
        //set player updated
        players[activePlayerIndex] = activePlayer;

        //add player to new card
        boardGameCards[activePlayer.boardPosition].players.push(activePlayerIndex)

        this.setState({
                players : players,
                boardGameCard: boardGameCards,
                diceValue: diceValue
            })
    }

    finishTurn() {
        let activePlayerIndex = this.state.activePlayerIndex;

        this.setState({
            activePlayerIndex : (activePlayerIndex + 1) % players.length,
        })
    }

    toBuyCard(index) {
        console.log('toBuyCard');
        console.log(index);

        let players = this.state.players;
        let activePlayerIndex = this.state.activePlayerIndex;
        let boardGameCards = this.state.boardGameCards;

        players[activePlayerIndex].money -= boardGameCards[index].priceToBuy;
        boardGameCards[index].owner = players[activePlayerIndex].id;

        this.setState({
            players : players,
            boardGameCard: boardGameCards
        })
    }

    toPayCard(index) {
        console.log('toPayCard');
        console.log(index);

        let players = this.state.players;
        let activePlayerIndex = this.state.activePlayerIndex;
        let boardGameCards = this.state.boardGameCards;

        players[activePlayerIndex].money -= boardGameCards[index].priceToPay;
        players[boardGameCards[index].owner].money += boardGameCards[index].priceToPay;

        this.setState({
            players : players
        })
    }

    makeAction(index) {
        console.log('makeAction');
        console.log(index);

        let players = this.state.players;
        let activePlayerIndex = this.state.activePlayerIndex;

        players[activePlayerIndex].money += boardGameCards[index].money;
        players[activePlayerIndex].nbLulu += boardGameCards[index].lulu;

        this.setState({
            players : players
        })
    }
}
