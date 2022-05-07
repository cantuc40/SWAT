import {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
//import UpdateIssue from '../../Components/UpdateIssue/UpdateIssue';
//import ViewIssue from './DeleteIssue'

/*
const Issue = props => {
    <tr className="table-active">
        <td>{props.issue.ticket_num}</td>
        <td>{props.issue.name}</td>
        <td>{props.issue.project_name}</td>
        <td>
            <Link to={'/view_issue/'+props.issue._id}>
                <button type="button" className="btn btn-primary ">Click</button>
            </Link>
        </td>
        
    </tr>
};*/


const mystyle = {
    color: "red"
};



//Functional React Component
const Issue = props => (
    <tr className="table-active">
      <td>{props.issue.ticket_num}</td>
      <td>{props.issue.name}</td>
      <td>{props.issue.project_name}</td>
      <td>{props.issue.filename}</td>
      <td>{props.issue.file_location}</td>
      <td>{props.issue.row}</td>
      <td>{props.issue.col}</td>
      <td style = {mystyle}>{props.issue.status}</td>
      <td>{props.issue.description}</td>
      <td>
          <button className='btn'>
              <Link to={"/update_issue/"+props.issue._id}>
                  Update
              </Link>
          </button>
      </td>
      <td>
          <button className="btn">
              <Link to={"/delete_issue/"+props.issue._id}>
                Delete
              </Link>
          </button>
      </td>
    </tr>
  )














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




    //Return all exercises from th mongodb
    issueList() {
        return this.state.issues.map(currentissue => {
          return <Issue issue={currentissue} key={currentissue._id}/>;
        })
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