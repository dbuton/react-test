import {Nav, Navbar} from "react-bootstrap";
import React from "react";

export default function Menu() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/profile">Mon profile</Nav.Link>
                    <Nav.Link href="/trello">Trello</Nav.Link>
                    <Nav.Link href="/gamePage">Monopolulu</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
