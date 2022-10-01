import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
    submitForm: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const firstNameBlur = this.validateFirstName()
    this.setState({firstNameError: !firstNameBlur})
  }

  validateFirstName = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  onBlurLastName = () => {
    const isValidateLastName = this.validateLastName()
    this.setState({lastNameError: !isValidateLastName})
  }

  validateLastName = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName && lastName) {
      this.setState({submitForm: true})
    } else {
      this.setState({firstNameError: true, lastNameError: true})
    }
  }

  renderSuccessView = () => {
    const onClickOpenForm = () => {
      this.setState({submitForm: false, firstName: '', lastName: ''})
    }
    return (
      <div className="form-background2">
        <img
          className="success-image"
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <p className="submitted-success-paragraph">Submitted successfully</p>
        <button
          className="submit-button"
          type="button"
          onClick={onClickOpenForm}
        >
          Submit Another Form
        </button>
      </div>
    )
  }

  render() {
    const {
      firstName,
      lastName,
      firstNameError,
      lastNameError,
      submitForm,
    } = this.state
    return (
      <div className="app-background">
        <h1 className="main-heading">Registration</h1>
        {submitForm ? (
          this.renderSuccessView()
        ) : (
          <form onSubmit={this.submitForm} className="form-background">
            <label className="labels" htmlFor="first-name">
              FIRST NAME
            </label>
            <input
              value={firstName}
              className={firstNameError ? 'input input2' : 'input'}
              id="first-name"
              placeholder="First name"
              type="text"
              onChange={this.onChangeFirstName}
              onBlur={this.onBlurFirstName}
            />
            {firstNameError && <p className="error">Required</p>}
            <label className="labels" htmlFor="second-name">
              LAST NAME
            </label>
            <input
              value={lastName}
              className={lastNameError ? 'input input2' : 'input'}
              id="second-name"
              placeholder="Last name"
              type="text"
              onChange={this.onChangeLastName}
              onBlur={this.onBlurLastName}
            />
            {lastNameError && <p className="error">Required</p>}
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}
export default RegistrationForm
