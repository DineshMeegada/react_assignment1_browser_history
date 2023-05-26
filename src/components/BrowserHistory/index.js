import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem'

class BrowserHistory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInput: '',
      historyList: props.historyList,
    }
  }

  onChangeInput = event => {
    const searchVal = event.target.value
    this.setState({searchInput: searchVal})
  }

  deleteHistoryItem = id => {
    const {historyList} = this.props
    const searchList = historyList.filter(eachHistory => eachHistory.id !== id)
    this.setState({historyList: searchList})
  }

  render() {
    const {searchInput, historyList} = this.state

    const searchList = historyList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    let returnContainer

    if (searchList.length > 0) {
      returnContainer = (
        <ul>
          {searchList.map(eachHistory => (
            <HistoryItem
              historyDetails={eachHistory}
              deleteHistoryItem={this.deleteHistoryItem}
              key={eachHistory.id}
            />
          ))}
        </ul>
      )
    } else {
      returnContainer = (
        <div className="empty-container">
          <p className="empty-content">There is no history to show</p>
        </div>
      )
    }

    return (
      <div className="full-page">
        <div className="top-banner">
          <div className="history-logo-container">
            <img
              className="history-logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
          </div>

          <div className="input-container">
            <div className="search-logo-container">
              <img
                className="search-logo"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <div className="input-box-container">
              <input
                className="input-box"
                placeholder="Search history"
                type="search"
                value={searchInput}
                onChange={this.onChangeInput}
              />
            </div>
          </div>
        </div>
        <div className="history-list-container">{returnContainer}</div>
      </div>
    )
  }
}

export default BrowserHistory
