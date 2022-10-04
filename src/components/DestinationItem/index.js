import './index.css'

const DestinationItem = props => {
  const {eachDestination} = props
  const {name, imgUrl} = eachDestination

  return (
    <li className="destination-card-container">
      <img src={imgUrl} alt={name} className="image" />
      <p className="paraa">{name}</p>
    </li>
  )
}

export default DestinationItem
