export default function Card(props) {
  return (
    <div className="card">
      <img src={props.item.imageUrl} />

      <div className="details">
        <div className="location">
          <img
            className="landmark"
            src="/images/location.png"
            height="9.55px"
            width="7px"
          />
          <p className="text-country">{props.item.location}</p>
          <a href={props.item.googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h2 className="title">{props.item.title}</h2>
        <p className="date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="title-text">{props.item.description}</p>
      </div>
    </div>
  )
}
