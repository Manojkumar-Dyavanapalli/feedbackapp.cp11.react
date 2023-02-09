import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: false}

  onClickEmoji = () => {
    this.setState({isEmojiClicked: true})
  }

  renderEmojisContainer = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-question-container">
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="emojis-list"></ul>
      </div>
    )
  }
}

export default Feedback
