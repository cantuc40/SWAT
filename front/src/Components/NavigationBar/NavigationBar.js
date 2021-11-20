import {Component} from 'react';
import {Link} from 'react-router-dom';



export default class NavigationBar extends Component {

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
                <p className="navbar-brand">SWAT</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/archives' className="nav-link">Archives</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/add_issue' className="nav-link">Add New Issue</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        );

    }

}