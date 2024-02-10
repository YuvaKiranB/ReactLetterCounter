// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {letterCount: 0}

  updateCount = event => {
    const count = event.target.value.length
    this.setState({letterCount: count})
  }

  render() {
    const {letterCount} = this.state
    return (
      <div className="main">
        <div className="part1">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
        <div className="part2">
          <h1 className="h1">Calculate the Letters you enter</h1>
          <label className="label" htmlFor="inputElement">
            Enter the phrase
          </label>
          <input
            id="inputElement"
            className="inputElement"
            placeholder="Enter the phrase"
            type="text"
            onChange={this.updateCount}
          />
          <p className="p2">No.of letters: {letterCount}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
