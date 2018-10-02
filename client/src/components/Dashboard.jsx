import React, {Component} from 'react';
import CallsAnswered from './CallsAnswered';
import Queue from './Queue';
import Csat from './Csat';
import AverageHandleTime from './AverageHandleTime';
import Graph from './Graph';
import Agents from './Agents';
import { Grid } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import axios from 'axios';

const card = {
  width: '300px',
  height: '200px',
  textAlign: 'center',
  justifyContent:'center'
}

class Dashboard extends Component   {
  state = {
    data: [],
    csat: '',
    callsAnswered: '',
    averageHandleTime: '',
    queue: '',
    agents: [
            {name: 'Jon', status: 'available'}, 
            {name: 'Nancy', status: 'unavailable'},
            {name: 'Tim', status: 'available'},
            {name: 'Jack', status: 'available'}
            ]
  }
  pollInterval = null

componentDidMount() {
 this.loadDataFromServer
 if(this.pollInterval == null) {
   this.pollInterval = setInterval(this.loadDataFromServer, 10000);
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
          <Grid.Row columns={1}>
            <Card style={card}>
              <h1>Agents Scheduled</h1>
              {this.state.agents.map((agent) => {
                  return <Agents agent={agent} />
              })}
            </Card>
          </Grid.Row>
        </Grid>
      </div>
    );
  }

};

export default Dashboard;