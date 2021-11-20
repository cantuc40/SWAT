import {Component} from 'react';


export default class UpdateIssue extends Component {

    constructor(props) {
        super(props);
        this.state = {
            archived_issues: []
        }
    }

    componentDidMount() {

        //Insert GET Request for archives



    }


    render() {
        return (
            <div>
                Update Issue Component
            </div>
        );

    }

}