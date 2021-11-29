import {Component} from 'react';


export default class UpdateIssue extends Component {

    constructor(props) {
        super(props);
        this.state = {
            test: []                   
        }
    }

    /*
    componentDidMount() {

        //Insert GET Request for archives



    }

*/
    render() {
        return (
            <div>
                <h1>Update</h1>
                <form>
                    <fieldset>
                        <div className="form-group">
                            <label for="issueName" className="form-label mt-4">Issue Name</label>
                            <input type="email" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Issue Name" />
                            
                            <label for="projectName" className="form-label mt-4">Project Name</label>
                            <input type="email" className="form-control" id="project_name" aria-describedby="emailHelp" placeholder="Enter Project Name" />
                            
                            <label for="issueName" className="form-label mt-4">File Name</label>
                            <input type="email" className="form-control" id="filename" aria-describedby="emailHelp" placeholder="Enter File Name" />
                            
                            <label for="issueName" className="form-label mt-4">Directory</label>
                            <input type="email" className="form-control" id="file_location" aria-describedby="emailHelp" placeholder="Enter the Directory where the file is located" />
                            
                            <label for="issueName" className="form-label mt-4">Row</label>
                            <input type="email" className="form-control" id="row" aria-describedby="emailHelp" placeholder="Enter the row where the issue is located" />
                            
                            <label for="issueName" className="form-label mt-4">Column</label>
                            <input type="email" className="form-control" id="col" aria-describedby="emailHelp" placeholder="Enter the column where the issue is located" />

                            <div class="form-group">
                                <label for="exampleTextarea" className="form-label mt-4">Issue Description</label>
                                <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Describe issue here"></textarea>
                             </div>

                             <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </fieldset>
                </form>
                
            </div>
        );

    }

}