import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

class ChartCurrentData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {}
        }
    }

    componentDidMount() {
        this.getScoreData();
    }

    getScoreData() {

        let listValues = [];
        let listAttributes = ["cp", "thalach", "oldpeak", "slope", "ca", "target"];

        axios.get("http://localhost:8080/api/enregistrement-actuel")
            .then(response => response.data)
            .then((data) => {
                listValues.push(data.cp);
                listValues.push(data.thalach);
                listValues.push(data.oplpeak);
                listValues.push(data.slope);
                listValues.push(data.ca);
                listValues.push(data.target);
            })

        this.setState({
            chartData: {
                labels: listAttributes,
                datasets: [
                    {
                        label: 'Value ',
                        data: listValues,
                        backgroundColor: [
                            '#7eb9bd',
                            '#cae3e6',
                            '#7eb9bd',
                            '#cae3e6',
                            '#7eb9bd',
                            '#cae3e6'
                        ]
                    }
                ]
            }
        });
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: false,
        legendPosition: 'right',
    }

    render() {
        return (
            <div>
                <h5 style={{ textAlign: "left", color: "black", margin: "20px" }}>Last measure </h5>
                <Bar
                    width="500px"
                    height="500px"
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio: false,
                        title: {
                            display: this.props.displayTitle,
                            text: "Values of the last measure",
                            fontSize: 15
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition,
                        }
                    }}
                />
            </div>
        );
    }
}

export default ChartCurrentData;