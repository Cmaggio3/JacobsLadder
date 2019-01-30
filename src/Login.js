import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './register.css'


import {
  Alert,
  Button,
  FormGroup,
  InputGroup,
  Input,
  Label
} from "reactstrap";


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      email: "",
      password: "",
      startsHidden:true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit(e) {
    e.preventDefault();

    const password = ReactDOM.findDOMNode(this.password).value;
    const email = ReactDOM.findDOMNode(this.email).value;
    var errors = this.validate(email, password);
    const isAdmin = this.isAdmin(email);

    if (errors.length > 0) {
      this.setState({ errors });
      return;
    } else {
      if (isAdmin) {
        this.props.history.push("/adminhome");
      } else {
        // this.props.history.push("/parenthome");
      }    
    }
  }

  // Login/register might benefit from a parent class & inheritance
  validate(email, password) {
    // TEMP! Will validate against database in future
    var errors = [];
    var valid = true;
    if (!valid) {
      errors.push("Email or password incorrect");
      return;
    }
    // TEMP! Will validate against database in future
    return errors;
  }

  isAdmin(email) {
    return true;
  }


  handleChange (event) {
    let change = {}
    change[event.target.id] = event.target.value
    this.setState(change)

  }

  renderForm() {
    const { errors } = this.state;

    return (

      <form className="form-style" onSubmit={this.handleSubmit}>
      <div className="login-page-title">
      <h1> Existing User Login</h1>
      </div>
        <div className = "question-fields">
        {errors.map(error => (
                        <Alert color = "warning" key={error}>Error: {error}</Alert>
                      ))}
        <FormGroup check>
        </FormGroup>
          <InputGroup id="email">
            <Label>Email</Label>
            <Input
                autoFocus
                ref={email => (this.email = email)}
                type="text"
                value={this.state.id}
                onChange={event => this.handleChange(event)}
            />
          </InputGroup>
        <InputGroup id="password">
          <Label>Password</Label>
          <Input
            value={this.state.id}
            ref={password => (this.password = password)}
            onChange={event => this.handleChange(event)}
            type="password"
          />
        </InputGroup>
        <div className="button-div">
        <Button
        onClick={this.validForm}
        color="success"
          type="submit"
          className="submit-button"
        > Submit </Button>
        </div>
        </div>
      </form>
    );
  }

  render() {
    return (
      <div className="Login">
          {this.renderForm()}
      </div>
    );
  }
}
export default Login;