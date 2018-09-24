import React, {Component} from 'react';
import CallsAnswered from './CallsAnswered';
import Queue from './Queue';
import Csat from './Csat';
import AverageHandleTime from './AverageHandleTime';
import Graph from './Graph';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';

class Dashboard extends Component   {
    state = {
        data: [],
        csat: ''
    }



async componentDidMount() {
    await axios.get('/api/data')
        .then(({data}) => {
            this.setState({data: data})
            console.log(this.state.data);
        }).catch(err => {
            console.log(err.message);
        });
    await axios.get('/api/csat')
        .then((res) => {
            this.setState({csat: res.data})
            console.log(this.state.csat)
        }).catch(err => {
            console.log(err.message);
        });
};

// async componentDidUpdate(prevState) {
//     await axios.get('/api/data')
//     .then(setInterval(5000), ({data}) => {
//             var result = { data }
//             console.log(this.state.data);
//             if (result !== prevState) {
//                 this.setState({data: data});
//               }
//           }).catch(err => {
//             console.log(err.message);
//           });
//   }


    render()   {
        return  (
            <div>
            <Grid centered columns='equal'>
                <Grid.Row  columns={2} style={{marginTop: '20px'}}>
                    <CallsAnswered/>
                    <Queue/>
                </Grid.Row>
                <Grid.Row  columns={2}>
                    <Csat
                        csat={this.state.csat}
                    />
                    <AverageHandleTime/>
                    <Graph 
                        data={this.state.data}/>
                </Grid.Row>
            </Grid>
            </div>
        );
    }

};

export default Dashboard;