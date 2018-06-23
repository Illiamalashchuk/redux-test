import React, {Component} from 'react';
import CarsList from '../containers/cars-list'

class WebPage extends Component {
    render() {
        console.log(this.props)
        return(
            <div>
                <h2>Cars:</h2>
                <CarsList />
                <hr />
                <h3>Details:</h3>
            </div>
        )
    }
};

export default WebPage