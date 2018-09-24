import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';
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
                            data={this.props.data}
                          />
                    </span>
                    </Card>
                </div>
            </div>
        )
    }

};

export default Graph;

