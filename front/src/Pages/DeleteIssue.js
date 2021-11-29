import {Component} from 'react';
//import axios from 'axios';



export default class DeleteIssue extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            ticket_num: 0,
            project_name: "",
            file_location: "",
            filename: "",
            row: 0,
            col: 0,
            status: "",
            description: "",
            id: 0
        }
    }

    /*
    //this.props.issue.params._id
    componentDidMount() {
        axios.get(`http://localhost:5000/issues/${this.state.id}`)
        .then(response => {
            this.setState({
                name: response.data.name,
                ticket_num: response.data.ticket_num,
                project_name: response.data.project_name,
                file_location: response.data.file_location,
                filename: response.data.filename,
                row: response.data.row,
                col: response.data.col,
                status: response.data.status,
                description: response.data.description
            })
        })

        .catch(error => {
            console.log(error);
        })



    } */


    render() {
        return (
            <div>
                <h1>Delete</h1>
            </div>
        );

    }

}