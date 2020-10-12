import {Button} from "react-bootstrap";
import React from "react";
import Menu from "./menu";

export default function Header() {
    return (
        <div>
            <Button variant="primary">ALLO</Button>
            <Menu/>
        </div>
    )
}
