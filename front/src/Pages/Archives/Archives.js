import {Component} from 'react';


export default class Archives extends Component {

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
                <h1>Archived Issues</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Project</th>
                            <th scope="col">More Info</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        );

    }

}