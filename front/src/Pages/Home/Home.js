import {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            issues: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/issues/")
        .then(response => {
            this.setState({issues: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }


    IssueInfoonClick(){

    }

    UpdateInfoonClick(){

    }




    render() {
        return (
            <div>
                <h1>List of Issues</h1>
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
                        {this.state.issues.map((currentissue, key) => {
                            return(
                            <tr className="table-active" key={key}>
                                <td>{currentissue.ticket_num}</td>
                                <td>{currentissue.name}</td>
                                <td>{currentissue.project_name}</td>
                                <td>
                                    <Link to='/view_issue'>
                                        <button type="button" className="btn btn-primary">Click</button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to='/update_issue'>
                                        <button type="button" className="btn btn-primary">Click</button>
                                    </Link>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>       
        );
    }
}