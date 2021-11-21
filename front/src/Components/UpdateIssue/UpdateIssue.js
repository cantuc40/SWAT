import {Component} from 'react';


export default class UpdateIssue extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name                    
        }
    }

    componentDidMount() {

        //Insert GET Request for archives



    }


    render() {
        return (
            <div>
                {this.state.name}
            </div>
        );

    }

}