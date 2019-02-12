import React from 'react'

class Newsletter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      adv: true
    }
  }

  onChangeHandler = (event) => {
    const target = event.target;
    this.setState({
      [target.name]: target.type === 'checkbox'
        ? target.checked
        : target.value
    })
  }

  onSubmitHandler = (event) => {
    event.preventDefault()
    // Your submit logic here
    alert(`Email: ${this.state.email}, Receive Adv: ${this.state.adv ? 'YES' : 'NO' }`)
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input name="email"
               type="email"
               value={this.state.email}
               onChange={this.onChangeHandler} />
        <input name="adv"
               type="checkbox"
               checked={this.state.adv}
               onChange={this.onChangeHandler} />
        <input type="submit" value="Subscribe" />
      </form>
    ) 
  }

}

export default Newsletter;