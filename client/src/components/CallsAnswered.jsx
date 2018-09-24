import React, {Component} from 'react';
import { Card } from 'semantic-ui-react'
import '../Card.css';

const card = {
    width: '300px',
    height: '300px',
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
                    <h3>{Math.floor(Math.random() * 20)}</h3>
                    </Card>
                </div>
            </div>
        )
    }

};

export default CallsAnswered;