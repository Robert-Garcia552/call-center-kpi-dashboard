import React, {Component} from 'react';
import CallsAnswered from './CallsAnswered';
import Queue from './Queue';
import Csat from './Csat';
import AverageHandleTime from './AverageHandleTime';
import Graph from './Graph';
import Agents from './Agents';
import MissedCalls from './MissedCalls';
import { Card, Grid } from 'semantic-ui-react';
import axios from 'axios';

const card = {
  width: '300px',
  height: '300px',
  textAlign: 'center',
  justifyContent:'center'
}

class Dashboard extends Component   {
  state = {
    data: [
      {x: 'Sunday', y: 0},
        {x: 'Monday', y: 0},
        {x: 'Tuesday', y: 0},
        {x: 'Wednesday', y: 0},
        {x: 'Thursday', y: 0},
        {x: 'Friday', y: 0},
        {x: 'Saturday', y: 0}
    ],
    csat: '0',
    callsAnswered: '0',
    averageHandleTime: '0',
    queue: '0',
    agents: [
            {name: 'Jon', status: 'available'}, 
            {name: 'Nancy', status: 'unavailable'},
            {name: 'Tim', status: 'available'},
            {name: 'Jack', status: 'available'}
            ],
    missed_calls: ''
  }
  pollInterval = null

componentDidMount() {
 this.loadDataFromServer
 if(this.pollInterval == null) {
   this.pollInterval = setInterval(this.loadDataFromServer, 15000);
 }
}
  
loadDataFromServer = () => {
  axios.get('/api/data')
  .then(({data}) => {
    this.setState({data: data})
    console.log(this.state.data);
  }).catch(err => {
    console.log(err.message);
  });
  axios.get('/api/dashboard')
    .then((res) => {
      this.setState({csat: res.data})
      console.log(`CSAT: ${this.state.csat}`)
    }).catch(err => {
      console.log(err.message);
    });
  axios.get('/api/dashboard')
    .then((res) => {
      this.setState({callsAnswered: res.data})
      console.log(`Calls Answered: ${this.state.callsAnswered}`)
    }).catch(err => {
      console.log(err.message);
    });
  axios.get('/api/dashboard')
    .then((res) => {
      this.setState({averageHandleTime: res.data})
      console.log(`Average Handle Time: ${this.state.averageHandleTime}`)
    }).catch(err => {
      console.log(err.message);
    });
  axios.get('/api/dashboard')
    .then((res) => {
      this.setState({queue: res.data})
      console.log(`Queue: ${this.state.queue}`)
    }).catch(err => {
      console.log(err.message);
    });
  axios.get('/api/missed-calls')
  .then((res) => {
    this.setState({missed_calls: res.data})
    console.log(`Missed Calls: ${this.state.missed_calls}`)
  }).catch(err => {
    console.log(err.message);
  });
};

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
          <Grid.Row columns={2}>
            <Card style={card} >
              <h1>Agents Scheduled</h1>
              {this.state.agents.map((agent) => {
                  return <Agents agent={agent} />
              })}
            </Card>
              <MissedCalls 
                gauge={this.state.missed_calls}
              />
          </Grid.Row>
        </Grid>
      </div>
    );
  }

};

export default Dashboard;