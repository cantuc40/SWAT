import {Component} from 'react';
import axios from 'axios';


export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }

        this.onChangeUsername = this.onChangeUsername.bin(this);
        this.onChangeEmail = this.onChangeEmail.bin(this);
        this.onChangePassword = this.onChangePassword.bin(this);
    };

    onChangeUsername = e => {
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmail = e => {
        this.setState({
            email: e.target.value
        });
    }
    
    onChangePassword = e => {
        this.setState({
            password: e.target.value
        });
    }
    




    render() {
        return (
            <div>
                <h1>Register</h1>
                <form>
                    <div>
                        <label for="username">Username</label>
                        <input type="text" value={this.state.username} onChange={this.onChangeUsername} name="username" required />
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input type="email" value={this.state.email} onChange={this.onChangeEmail} id="email" name="email" required />
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" value={this.state.password} onChange={this.onChangePassword} id="password" name="password" required />
                    </div>
                    <button type="submit">Register</button>
                </form>
                <a href="/login">Login</a>
            </div>       
        );
    }
}