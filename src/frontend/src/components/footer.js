import {Component} from 'react';


export default class Footer extends Component {

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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <p className="navbar-brand">&copy; 2022</p>
                </div>
            </nav>
        );
    }
}