import React, {Component} from 'react';
import { Card } from 'semantic-ui-react'

const card = {
  width: '300px',
  height: '200px',
  textAlign: 'center',
  justifyContent:'center'
}

class CallsAnswered extends Component   {

  render()   {
    return (
      <div>
        <div>
          <Card style={card}>
            <h1>Calls Answered</h1>
            <h2>{this.props.callsAnswered}</h2>
          </Card>
        </div>
      </div>
    )
  }

};

export default CallsAnswered;