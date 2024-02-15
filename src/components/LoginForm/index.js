// Write your JS code here
import './index.css'
import {Component} from 'react'

class LoginForm extends Component {
  state = {username: '', password: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    console.log(history)
    history.replace('/')
  }

  onSubmitClick = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userObj = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userObj),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const tokenObj = await response.json()
    if (response.ok) {
      this.onSubmitSuccess()
    } else {
      this.setState({
        isError: true,
        statusText: tokenObj.error_msg,
      })
    }
  }

  onNameChange = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onPasswordChange = event => {
    this.setState({
      password: event.target.value,
    })
  }

  render() {
    const {username, password, isError, statusText} = this.state
    return (
      <div className="bg-container">
        <img
          className="login-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
          alt="website login"
        />
        <form className="form" onSubmit={this.onSubmitClick}>
          <div className="website-logo-container">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </div>

          <div className="input-container">
            <label className="label" htmlFor="name-input">
              USERNAME
            </label>
            <input
              placeholder="Username"
              value={username}
              type="text"
              id="name-input"
              className="input"
              onChange={this.onNameChange}
            />
          </div>
          <div className="input-container">
            <label className="label" htmlFor="password-input">
              PASSWORD
            </label>
            <input
              placeholder="Password"
              value={password}
              type="password"
              id="password-input"
              className="input"
              onChange={this.onPasswordChange}
            />
          </div>
          <button type="submit" className="button">
            Login
          </button>
          {isError ? <p className="error-msg">*{statusText}</p> : null}
        </form>
      </div>
    )
  }
}

export default LoginForm
