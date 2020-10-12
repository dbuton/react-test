import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

export default function Card(props) {
    return (
        <li key={props.index}>
            <CardHeader header={props.header}/>
            <CardBody body={props.body}/>
        </li>
    )
}
