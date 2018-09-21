import React, {Component} from 'react';
import CallsAnswered from './CallsAnswered';
import Queue from './Queue';
import { Grid, Image } from 'semantic-ui-react'


class Dashboard extends Component   {

    render()   {
        return  (
            <div>
            <Grid centered>
                <Grid.Row columns={2}>
                    <CallsAnswered/>
                    <Queue/>
                </Grid.Row>
            </Grid>
            </div>
        );
    }

};

export default Dashboard;