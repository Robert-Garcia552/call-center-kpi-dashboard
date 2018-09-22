import React, {Component} from 'react';
import { Card, Icon } from 'semantic-ui-react';
import {BarChart} from 'react-easy-chart';

const card = {
    width: '600px',
    height: '300px',
    textAlign: 'center',
    justifyContent:'center'
}

class Graph extends Component   {

    render()   {
        return (
            <div>
                <div>
                    <Card style={card}>
                    <h1>Daily Call Volume</h1>
                    <span container>
                        <BarChart
                            axes
                            colorBars
                            grid
                            data={[
                            {x: 'Sunday', y: Math.floor(Math.random() * 20)},
                            {x: 'Monday', y: Math.floor(Math.random() * 20)},
                            {x: 'Tuesday', y: Math.floor(Math.random() * 20)},
                            {x: 'Wednesday', y: Math.floor(Math.random() * 20)},
                            {x: 'Thursday', y: Math.floor(Math.random() * 20)},
                            {x: 'Friday', y: Math.floor(Math.random() * 20)},
                            {x: 'Saturday', y: Math.floor(Math.random() * 20)}
                          ]}
                          />
                    </span>
                    </Card>
                </div>
            </div>
        )
    }

};

export default Graph;

