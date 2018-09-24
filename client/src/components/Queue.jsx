import React, {Component} from 'react';
import { Card } from 'semantic-ui-react'

const card = {
    width: '300px',
    height: '300px',
    textAlign: 'center',
    justifyContent:'center'
}

class Queue extends Component   {

    render()   {
        return (
            <div>
                <Card style={card}>
                    <h1>Queue</h1>
                    <h2>{this.props.queue}</h2>
                </Card>
            </div>
        );
    }


};

export default Queue;