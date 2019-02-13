import React from 'react'

class Newsletter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      adv: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const target = event.target;
    this.setState({
      [target.name]: target.type === 'checkbox'
        ? target.checked
        : target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // Your submit logic here
    console.log(`First name: ${this.state.firstName}, Last name: ${this.state.lastName}, Email: ${this.state.email}, Receive Adv: ${this.state.adv ? 'YES' : 'NO' }`)

    
    // event.preventDefault();
    // let reqBody = {
    //   firstName: this.firstName.value,
    //   lastName: this.lastName.value,
    //   email: this.email.value,
    //   adv: this.adv.value
    // };

    // fetch("/", {
    //   method: "POST",
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(reqBody)
    // })
    //   .then((res) => {
    //     if (res.ok){
    //       return res.json();
    //     } else {
    //       throw new Error ('Something went wrong with your fetch');
    //     }
    //   }).then((json) => {
    //     console.log(json);
    //   })
  }

  render() {
    return (
      <div className="form-group">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">
            First name
          </label>
          <input 
            ref="firstName"
            name="firstName"
            type="text"
            autoComplete="off"
            maxLength="80"
            tabIndex="0"
            className="form-control"
            placeholder="First name"
            value={this.state.firstName}
            onChange={this.handleChange} />
          <label htmlFor="lastName">
            Last name
          </label>
          <input 
            ref="lastName"
            name="lastName"
            type="text"
            autoComplete="off"
            maxLength="80"
            tabIndex="0"
            className="form-control"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={this.handleChange} />
          <label htmlFor="email">
            Email address
          </label>
          <input 
            ref="email"
            name="email"
            type="email"
            autoComplete="off"
            maxLength="80"
            tabIndex="0"
            className="form-control"
            placeholder="Email address"
            value={this.state.email}
            onChange={this.handleChange}
            required="true" />
          <input 
            ref="adv"
            name="adv"
            type="checkbox"
            checked={this.state.adv}
            onChange={this.handleChange} />
          <input type="submit" value="Subscribe" className="btn btn-danger"/>
        </form>
      </div>
    ) 
  }
}

export default Newsletter;









// import React from 'react'

// class Newsletter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstName: "",
//       lastName: "",
//       email: "",
//       adv: true
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange = (event) => {
//     const target = event.target;
//     this.setState({
//       [target.name]: target.type === 'checkbox'
//         ? target.checked
//         : target.value
//     })
//   }

//   handleSubmit = (event) => {
//     event.preventDefault()
//     // Your submit logic here
//     alert(`First name: ${this.state.firstName}, Last name: ${this.state.lastName}, Email: ${this.state.email}, Receive Adv: ${this.state.adv ? 'YES' : 'NO' }`)
//     // console.log(this.state.firstName, this.state.lastName, this.state.email)
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input name="firstName"
//           type="text"
//           value={this.state.firstName}
//           onChange={this.handleChange} />
//         <input name="lastName"
//           type="text"
//           value={this.state.lastName}
//           onChange={this.handleChange} />
//         <input name="email"
//           type="email"
//           value={this.state.email}
//           onChange={this.handleChange} />
//         <input name="adv"
//           type="checkbox"
//           checked={this.state.adv}
//           onChange={this.handleChange} />
//         <input type="submit" value="Subscribe" />
//       </form>
//     ) 
//   }
// }

// export default Newsletter;