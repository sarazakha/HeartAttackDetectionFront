import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

class ChartEvolutionScore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {},
        }
    }

    componentDidMount() {
        this.getScoreData();
    }

    getScoreData() {
        let listScores = [];
        let listIndex = [];
        let count = 1;

        axios.get("http://localhost:8080/api/score-data")
            .then(response => {
                for (const dataObj of response.data) {
                    listScores.push(dataObj);
                    listIndex.push(count);
                    count += 1;
                }
            })

        this.setState({
            chartData: {
                labels: listIndex,
                datasets: [
                    {
                        label: 'Score ',
                        data: listScores,
                        backgroundColor: [
                            '#7eb9bd',
                        ]
                    }
                ]
            }
        });
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
    }

    render() {
        return (
            <div>
                <h5 style={{ textAlign: "left", color: "black", margin: "20px" }}>Statistics</h5>
                <Line
                    width="500px"
                    height="500px"
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio: false,
                        title: {
                            display: this.props.displayTitle,
                            text: "Evolution of the heart disease score",
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

export default ChartEvolutionScore;