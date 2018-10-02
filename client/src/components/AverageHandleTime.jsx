import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';


const card = {
  width: '300px',
  height: '300px',
  textAlign: 'center',
  justifyContent:'center'
}

class AverageHandleTime extends Component   {
  render()   {
    return (
      <div>
        <Card style={card}>
          <h1>Average Handle Time</h1>
          <h2>{this.props.averageHandleTime} mins</h2>
        </Card>
      </div>
    );
  }
};

export default AverageHandleTime;