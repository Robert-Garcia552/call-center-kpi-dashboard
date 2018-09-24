import React, {Component} from 'react';
import CallsAnswered from './CallsAnswered';
import Queue from './Queue';
import Csat from './Csat';
import AverageHandleTime from './AverageHandleTime';
import Graph from './Graph';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';
import '../Card.css';

class Dashboard extends Component   {
    state = {
        data: [],
        csat: '',
        callsAnswered: '',
        averageHandleTime: '',
        queue: ''
    }

async componentDidMount() {
    await axios.get('/api/data')
        .then(({data}) => {
            this.setState({data: data})
            console.log(this.state.data);
        }).catch(err => {
            console.log(err.message);
        });
    await axios.get('/api/csat')
        .then((res) => {
            this.setState({csat: res.data})
            console.log(`CSAT: ${this.state.csat}`)
        }).catch(err => {
            console.log(err.message);
        });
    await axios.get('/api/callsAnswered')
    .then((res) => {
        this.setState({callsAnswered: res.data})
        console.log(`Calls Answered: ${this.state.callsAnswered}`)
    }).catch(err => {
        console.log(err.message);
    });
    await axios.get('/api/averageHandleTime')
    .then((res) => {
        this.setState({averageHandleTime: res.data})
        console.log(`Average Handle Time: ${this.state.averageHandleTime}`)
    }).catch(err => {
        console.log(err.message);
    });
    await axios.get('/api/queue')
    .then((res) => {
        this.setState({queue: res.data})
        console.log(`Queue: ${this.state.queue}`)
    }).catch(err => {
        console.log(err.message);
    });   
};

// async componentDidUpdate(prevState) {
//     await axios.get('/api/data')
//     .then(setInterval(5000), ({data}) => {
//             var result = { data }
//             console.log(this.state.data);
//             if (result !== prevState) {
//                 this.setState({data: data});
//               }
//           }).catch(err => {
//             console.log(err.message);
//           });
//   }


    render()   {
        return  (
            <div>
            <Grid centered columns='equal'>
                <Grid.Row  columns={2} id="toprow">
                    <CallsAnswered
                        callsAnswered={this.state.callsAnswered}
                    />
                    <Queue
                        queue={this.state.queue}
                    />
                </Grid.Row>
                <Grid.Row  columns={2}>
                    <Csat
                        csat={this.state.csat}
                    />
                    <AverageHandleTime
                        averageHandleTime={this.state.averageHandleTime}
                    />
                    <Graph 
                        data={this.state.data}/>
                </Grid.Row>
            </Grid>
            </div>
        );
    }

};

export default Dashboard;