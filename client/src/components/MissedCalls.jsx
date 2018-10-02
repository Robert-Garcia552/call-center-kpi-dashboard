import React, { Component } from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import { Card } from 'semantic-ui-react';

const card = {
    width: '400px',
    height: '300px',
    textAlign: 'center'
  }
  
class MissedCalls extends Component   {
  render()   {
    return (
      <div>
        <Card style={card}>
          <h1 style={{paddingBottom: '30px'}}>Missed Calls</h1>
          <ReactSpeedometer 
              value={this.props.gauge}
              minValue={0}
              maxValue={10}
              segments={5}
              fluidWidth
          />
        </Card>
      </div>
    );
  }
};
  
  export default MissedCalls;