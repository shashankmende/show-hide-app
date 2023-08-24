// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstname: false, lastname: false}

  onfirstName = () => {
    const {firstname} = this.state
    if (firstname === true) {
      this.setState(() => ({firstname: false}))
    } else {
      this.setState(() => ({firstname: true}))
    }
  }

  onlastName = () => {
    const {lastname} = this.state
    if (lastname === true) {
      this.setState(() => ({lastname: false}))
    } else {
      this.setState(() => ({lastname: true}))
    }
  }

  render() {
    const {firstname, lastname} = this.state
    return (
      <div className="bg_container">
        <h1>Show/Hide</h1>
        <div className="buttons-container">
          <div className="first-name-container">
            <button type="button" className="button" onClick={this.onfirstName}>
              Show/Hide Firstname
            </button>
            {firstname && (
              <div className="show-hide-container">
                <p className="text">Joe</p>
              </div>
            )}
          </div>
          <div className="first-name-container">
            <button type="button" className="button" onClick={this.onlastName}>
              Show/Hide Lastname
            </button>
            {lastname && (
              <div className="show-hide-container">
                <p className="text">Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
