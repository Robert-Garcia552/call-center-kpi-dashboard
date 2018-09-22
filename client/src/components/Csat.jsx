import React, {Component} from 'react';
import { Card, Icon } from 'semantic-ui-react';


const card = {
    width: '300px',
    height: '300px',
    textAlign: 'center',
    justifyContent:'center'
}

class Csat extends Component   {

    render()   {
        return (
            <div>
                <Card style={card}>
                    <h1>CSAT</h1>
                    <h3>{Math.floor(Math.random() * 20)}%</h3>
                </Card>
            </div>
        );
    }


};

export default Csat;