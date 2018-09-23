import React, {Component} from 'react';
import CallsAnswered from './CallsAnswered';
import Queue from './Queue';
import Csat from './Csat';
import AverageHandleTime from './AverageHandleTime';
import Graph from './Graph';
import { Grid, Image } from 'semantic-ui-react'

class Dashboard extends Component   {
    state = {
        data: []
    }

componentDidMount() {
    const charting  =   [
        {x: 'Sunday', y: Math.floor(Math.random() * 20)},
        {x: 'Monday', y: Math.floor(Math.random() * 20)},
        {x: 'Tuesday', y: Math.floor(Math.random() * 20)},
        {x: 'Wednesday', y: Math.floor(Math.random() * 20)},
        {x: 'Thursday', y: Math.floor(Math.random() * 20)},
        {x: 'Friday', y: Math.floor(Math.random() * 20)},
        {x: 'Saturday', y: Math.floor(Math.random() * 20)}
    ]
    this.setState({data: charting })
};

    render()   {
        return  (
            <div>
            <Grid centered columns='equal'>
                <Grid.Row  columns={2} style={{marginTop: '20px'}}>
                    <CallsAnswered/>
                    <Queue/>
                </Grid.Row>
                <Grid.Row  columns={2}>
                    <Csat/>
                    <AverageHandleTime/>
                    <Graph 
                        data={this.state.data}/>
                </Grid.Row>
            </Grid>
            </div>
        );
    }

};

export default Dashboard;