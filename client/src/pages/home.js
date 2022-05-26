import {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const mystyle = {
    color: "red"
};


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            issues: []
        }

        this.deleteIssue = this.deleteIssue.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:5000/api/issues/")
        .then(response => {
            this.setState({issues: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    deleteIssue(id){
        axios.delete(`http://localhost:5000/api/issues/${id}`)
        .then(response => {
            console.log("issue deleted")
        })
        .catch(error => {
            console.log(error)
        })
      }

    




    //Return all exercises from th mongodb
    issueList() {
        return this.state.issues.map(issue => (
            <tr className="table-active">
                <td>{issue.ticket_num}</td>
                <td>{issue.name}</td>
                <td>{issue.project_name}</td>
                <td>{issue.filename}</td>
                <td>{issue.file_location}</td>
                <td>{issue.row}</td>
                <td>{issue.col}</td>
                <td style = {mystyle}>{issue.status}</td>
                <td>{issue.description}</td>
                <td>
                    <button className='btn' onClick={() => this.deleteIssue(issue._id)}>Delete</button>
                </td>
            </tr>
        ))
      }



    render() {
        return (
            <div>
                <h1>List of Issues</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Issue Name</th>
                            <th scope="col">Project</th>
                            <th scope="col">File Name</th>
                            <th scope="col">Directory</th>
                            <th scope="col">Row</th>
                            <th scope="col">Col</th>
                            <th scope="col">Status</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.issueList()}
                    </tbody>
                </table>
            </div>       
        );
    }
}