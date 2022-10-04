import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeDestination = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>

        <div className="search-input-container">
          <input
            type="search"
            className="search-input"
            value={searchInput}
            placeholder="search"
            onChange={this.onChangeDestination}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>

        <ul className="destination-items-container">
          {searchResults.map(each => (
            <DestinationItem eachDestination={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
