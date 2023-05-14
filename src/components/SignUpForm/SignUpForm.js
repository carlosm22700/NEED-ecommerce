import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
/*
1) Creation phase - when the component first mounts to the DOM
2) Update phase - when state changes and the component needs to be re-rendered
3) Destruction Phase - when the UI needs to be replaced with a newer version
*/

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    };

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };

    // define the handleSubmit event handler method here per the instructions provided
    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const formData = {...this.state};
            delete formData.confirm;
            delete formData.error;

            const user = await signUp(formData);


            // set user state with the user object returned by signUp
            this.props.setUser(user);

        } catch {
            this.setState({error: 'Sign Up Failed - Try Again'});
        }
    };

    render() {
        const disabled = this.state.password !== this.state.confirm;
        return (
            <div>
                <div className="form-container">
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={this.state.name}
                            onChange={this.handleChange}
                            required 
                        />
                        <label>Email</label>
                        <input 
                            type="email" 
                            name="email"  
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                        <label>Password</label>
                        <input 
                            type="password" 
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        />
                        <label>Confirm</label>
                        <input 
                            type="password" 
                            name="confirm"
                            value={this.state.confirm}
                            onChange={this.handleChange}
                            required
                        />
                        <button type="submit" disabled={disabled}>Sign Up</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        );
    }
}