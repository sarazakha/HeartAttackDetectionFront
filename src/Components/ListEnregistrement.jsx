import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class ListEnregistrement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            enregistrements: []
        }

    }

    getEnregistrements() {
        axios.get("http://localhost:8080/api/enregistrements")
            .then(response => response.data)
            .then((data) => {
                this.setState({ enregistrements: data });
            })
    }

    componentDidMount() {
        this.getEnregistrements();
    }

    render() {
        return (
            <div>
                <h5 style={{ textAlign: "left", color: "black", margin: "20px" }}>Total data list</h5>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Sex</th>
                            <th>Cp</th>
                            <th>Thalach</th>
                            <th>Oldpeak</th>
                            <th>Slope</th>
                            <th>Ca</th>
                            <th>Target</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.enregistrements.map((enregistrement) =>
                                <tr key={enregistrement.id}>
                                    <td> {enregistrement.id} </td>
                                    <td> {enregistrement.sex} </td>
                                    <td> {enregistrement.cp} </td>
                                    <td> {enregistrement.thalach} </td>
                                    <td> {enregistrement.oldpeak} </td>
                                    <td> {enregistrement.slope} </td>
                                    <td> {enregistrement.ca} </td>
                                    <td> {enregistrement.target} </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                <br />
            </div>
        );
    }
}

export default ListEnregistrement;