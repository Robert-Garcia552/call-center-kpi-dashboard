import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';

const card = {
    width: '300px',
    height: '300px',
    textAlign: 'center',
    justifyContent:'center'
}

class Agents extends Component   {

    render()   {
        return (
            <div>
                <h2>{this.props.agent.name} is {this.props.agent.status}</h2>
            </div>
        );
    }


};

export default Agents;