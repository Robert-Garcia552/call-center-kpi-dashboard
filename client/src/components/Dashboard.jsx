import React, {Component} from 'react';
import CallsAnswered from './CallsAnswered';
import Queue from './Queue';
import Csat from './Csat';
import AverageHandleTime from './AverageHandleTime';
import Graph from './Graph';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';

class Dashboard extends Component   {
    state = {
        data: [],
        csat: '',
        callsAnswered: '',
        averageHandleTime: '',
        queue: '',
        agents: [{name: 'Jon', status: 'available'}, {name: 'Nancy', status: 'unavailable'}]
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

async componentDidUpdate() {
    await axios.get('/api/data')
    .then(({data}) => {
        setTimeout(() => {
            this.setState({
            data: data
          })
          console.log(this.state.data)
        }, 9000);
    }).catch(err => {
        console.log(err.message);
    });
    await axios.get('/api/csat')
        .then((res) => {
            setTimeout(() => {
                this.setState({
                csat: res.data
                })
                console.log(`CSAT: ${this.state.csat}`)
            }, 7000);
        }).catch(err => {
            console.log(err.message);
        });
    await axios.get('/api/callsAnswered')
        .then((res) => {
            setTimeout(() => {
                this.setState({
                callsAnswered: res.data
                })
                console.log(`Calls Answered: ${this.state.callsAnswered}`)
            }, 7000);
        }).catch(err => {
            console.log(err.message);
        });
    await axios.get('/api/averageHandleTime')
        .then((res) => {
            setTimeout(() => {
                this.setState({
                averageHandleTime: res.data
                })
                console.log(`Average Handle Time: ${this.state.averageHandleTime}`)
            }, 7000);
        }).catch(err => {
            console.log(err.message);
        });
    await axios.get('/api/queue')
        .then((res) => {
            setTimeout(() => {
                this.setState({
                queue: res.data
                })
                console.log(`Queue: ${this.state.queue}`)
            }, 7000);
        }).catch(err => {
            console.log(err.message);
        });
  }

    render()   {
        return  (
            <div>
            <Grid centered columns='equal'>
                <Grid.Row  columns={2} style={{marginTop: '20px'}}>
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
                        data={this.state.data}
                    />
                </Grid.Row>
            </Grid>
            </div>
        );
    }

};

export default Dashboard;