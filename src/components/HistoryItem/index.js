import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="history-item-container">
      <p className="time">{timeAccessed}</p>
      <div className="history-item">
        <img className="history-logo" src={logoUrl} alt="domain logo" />
        <p className="title">{title}</p>
        <p className="pageUrl">{domainUrl}</p>
      </div>
      <button
        className="delete-btn"
        type="button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
