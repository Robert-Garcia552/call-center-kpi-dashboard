import React, {Component} from 'react';

class Agents extends Component   {
  render()   {
    return (
      <div>
        <h2 key={this.props.agent.name}>{this.props.agent.name} is {this.props.agent.status}</h2>
      </div>
    )
  }
};
export default Agents;