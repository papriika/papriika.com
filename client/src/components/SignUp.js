import React, { Component } from 'react';
import '../css/SignUp.css';

class SignUp extends Component {
  render() {
    return (
      <form action="/" method="POST">
        <div className="form-group">
          <label htmlFor="email">
            Email address
          </label>
          <input
            type="text"
            autoComplete="off"
            maxLength="80"
            tabIndex="0"
            id="email"
            className="form-control"
            placeholder="Email address"
            aria-invalid="false"
            aria-controls="email"
            aria-label="What is your email address?"
            aria-activedescendant="email-item-0"
            name="email"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-danger">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

export default SignUp;