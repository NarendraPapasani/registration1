// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {f: '', l: '', p1: '', p2: '', buttClick: false}
  firstInput = event => {
    if (event.target.value === '') {
      this.setState({p1: 'Required'})
    } else {
      this.setState({p1: '', f: event.target.value})
    }
  }
  lastInput = event => {
    if (event.target.value === '') {
      this.setState({p2: 'Required'})
    } else {
      this.setState({p2: '', l: event.target.value})
    }
  }
  clickedButt = () => {
    const {buttClick} = this.state
    this.setState(prev => ({buttClick: true}))
  }
  onSubmitProgress = event => {
    event.preventDefault()
    const {p1, p2, buttClick, f, l} = this.state
    if (f !== '' && l !== '') {
      this.clickedButt()
      this.setState({p1: 'Required'})
    } else if (f === '' && l === '') {
      this.setState({p1: 'Required', p2: 'Required'})
    } else if (l === '') {
      this.setState({p2: 'Required'})
    } else if (f === '') {
      this.setState({p1: '', p2: 'Required'})
    }
  }
  another = () => {
    const {buttClick} = this.state
    this.setState(prev => ({buttClick: false, f: '', l: '', p1: '', p2: ''}))
  }
  render() {
    const {p1, p2, buttClick} = this.state
    let a, b
    if (p1 === 'Required') {
      a = 'blurred'
    } else {
      a = ''
    }
    if (p2 === 'Required') {
      b = 'blurreds'
    } else {
      b = ''
    }
    return (
      <div className="main-container">
        <h1 className="head">Registration</h1>
        {buttClick ? (
          <div className="login-form">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p className="p">Submitted Successfully</p>
            <button className="butt" onClick={this.another}>
              Submit Another Response
            </button>
          </div>
        ) : (
          <div className="login-form">
            <form onSubmit={this.onSubmitProgress}>
              <label htmlFor="first-name" className="name">
                FIRST NAME
              </label>
              <br />
              <input
                type="text"
                placeholder="First name"
                className={`input-name ${a}`}
                onBlur={this.firstInput}
              />
              <p className="para">{p1}</p>
              <label htmlFor="first-name" className="name">
                LAST NAME
              </label>
              <br />
              <input
                type="text"
                placeholder="Last name"
                className={`input-name ${b}`}
                onBlur={this.lastInput}
              />
              <p className="para">{p2}</p>
              <br />
              <button type="submit" className="butt">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    )
  }
}
export default RegistrationForm
