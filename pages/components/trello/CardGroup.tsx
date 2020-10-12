import React, {useEffect, useState} from "react";
import Card from "./Card";

export default function CardGroup(props) {

    const [cards, setCard] = useState([{header:'Header', body:'Body'}]);
    const [header, setHeader] = useState('Header');
    const [body, setBody] = useState('Body');

    const handleChange = (event) => {
        console.log(event.target.value);
        if (event.target.name === 'header') {
            setHeader(event.target.value)
        }

        if (event.target.name === 'body') {
            setBody(event.target.value)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        cards.push({header: header, body: body});
    }

    useEffect(() => {
        setCard(cards);
    });

    return (
        <div>
            <ul>
                {cards.map((card, index) =>
                    <Card key={index} header={card.header} body={card.body}/>
                )}
            </ul>
            <form onSubmit={handleSubmit}>
                <label>
                    Header :
                    <input type="text" name='header' onChange={handleChange}/>
                </label>
                <label>
                    Body :
                    <input type="text" name='body' onChange={handleChange}/>
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    )
}
