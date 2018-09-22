import React, {Component} from 'react';
import { Card, Icon } from 'semantic-ui-react';


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
                    <h3>{Math.floor(Math.random() * 20)} mins</h3>
                </Card>
            </div>
        );
    }


};

export default AverageHandleTime;