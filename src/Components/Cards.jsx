import React, { Component } from 'react';
import { Card, CardDeck } from 'react-bootstrap';

class Cards extends Component {
    render() {
        return (
            <div>
                <h5 style={{ textAlign: "left", color: "black", margin: "20px" }}>Patient informations</h5>
                <CardDeck>
                    <Card style={{ backgroundColor: '#ccd0d5' }}>
                        <Card.Header> Name :</Card.Header>
                        <Card.Body> Mohamed Alaoui </Card.Body>
                    </Card>
                    <Card style={{ backgroundColor: '#ccd0d5' }}>
                        <Card.Header> Age :</Card.Header>
                        <Card.Body> 60 </Card.Body>
                    </Card>
                    <Card style={{ backgroundColor: '#ccd0d5' }}>
                        <Card.Header> Current state :</Card.Header>
                        <Card.Body> Normal </Card.Body>
                    </Card>
                    <Card style={{ backgroundColor: '#ccd0d5' }}>
                        <Card.Header> Last score :</Card.Header>
                        <Card.Body> 100 </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        );
    }
}

export default Cards;