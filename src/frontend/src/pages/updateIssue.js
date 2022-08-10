import {Component} from 'react';
import axios from 'axios';


export default class UpdateIssue extends Component {

    constructor(props) {
        super(props);
        this.state = {
            issue: []                   
        }
    }

    onSubmit = e => {
        e.preventDefault();

        const updatedIssue = {
            name: this.state.name,
            project_name: this.state.project_name,
            file_location: this.state.file_location,
            filename: this.state.filename,
            row: this.state.row,
            col: this.state.col,
            status: this.state.status,
            description: this.state.description
        }

        console.log(updatedIssue)

        axios.patch("http://localhost:5000/api/issues/add", updatedIssue)
            .then(res => console.log(res.data))

        window.location = "/";

    }
    
    render() {
        return (
        <div>
            <h1>Update Issue</h1>
            <form >
                <fieldset>
                    <div className="form-group">
                        <label for="name" className="form-label mt-4">Issue Name</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeIssueName} className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Issue Name" />
                        
                        <label for="projectName" className="form-label mt-4">Project Name</label>
                        <input type="text" value={this.state.project_name} onChange={this.onChangeProjectName} className="form-control" id="project_name" aria-describedby="emailHelp" placeholder="Enter Project Name" />
                        
                        <label for="issueName" className="form-label mt-4">File Name</label>
                        <input type="text" value={this.state.filename} onChange={this.onChangeFileName} className="form-control" id="filename" aria-describedby="emailHelp" placeholder="Enter File Name" />
                        
                        <label for="issueName" className="form-label mt-4">Directory</label>
                        <input type="text" value={this.state.file_location} onChange={this.onChangeDirectory} className="form-control" id="file_location" aria-describedby="emailHelp" placeholder="Enter the Directory where the file is located" />
                        
                        <label for="issueName" className="form-label mt-4">Row</label>
                        <input type="number" value={this.state.row} onChange={this.onChangeRow} className="form-control" id="row" aria-describedby="emailHelp" placeholder="Enter the row where the issue is located" />
                        
                        <label for="issueName" className="form-label mt-4">Column</label>
                        <input type="number" value={this.state.col} onChange={this.onChangeColumn} className="form-control" id="col" aria-describedby="emailHelp" placeholder="Enter the column where the issue is located" />

                        <div class="form-group">
                            <label for="exampleTextarea" className="form-label mt-4">Issue Description</label>
                            <textarea value={this.state.description} onChange={this.onChangeDescription} className="form-control" id="exampleTextarea" rows="3" placeholder="Describe issue here"></textarea>
                         </div>

                         <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Update</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );

}

}