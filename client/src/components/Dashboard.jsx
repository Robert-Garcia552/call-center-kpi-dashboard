import React, {Component} from 'react';
import CallsAnswered from './CallsAnswered';
import Queue from './Queue';
import Csat from './Csat';
import AverageHandleTime from './AverageHandleTime';
import Graph from './Graph';
import { Grid, Image } from 'semantic-ui-react';
import axios from 'axios';

class Dashboard extends Component   {
    state = {
        data: []
    }

async componentDidMount() {
    await axios.get('/api/data')
    .then(({data}) => {
        this.setState({data: data})
        console.log(this.state.data);
      }).catch(err => {
        console.log(err.message);
      });
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