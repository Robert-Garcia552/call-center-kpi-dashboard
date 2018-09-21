import React, {Component} from 'react';
import CallsAnswered from './CallsAnswered';
import Queue from './Queue';
import Csat from './Csat';
import AverageHandleTime from './AverageHandleTime';
import { Grid, Image } from 'semantic-ui-react'


class Dashboard extends Component   {

    render()   {
        return  (
            <div>
            <Grid centered columns='equal'>
                <Grid.Row  columns={2}>
                    <CallsAnswered/>
                    <Queue/>
                </Grid.Row>
                <Grid.Row  columns={2}>
                    <Csat/>
                    <AverageHandleTime/>
                </Grid.Row>

            </Grid>
            </div>
        );
    }

};

export default Dashboard;