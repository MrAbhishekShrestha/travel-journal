import "../App.css";

export function Tile(props) {
	console.log(props);
	return (
		<section className="tile">
			<img src={props.imageUrl} alt="" className="tile-image" width="300px"/>
			<div className="tile-content">
				<div className="tile-location">
					<span>📍{props.location.toUpperCase()}</span>
					<a href={props.googleMapsUrl}>Google Maps</a>
				</div>
				<h1 className="tile-title">{props.title}</h1>
				<p className="tile-date">{props.startDate} - {props.endDate}</p>
				<p ckassName="tile-descr">{props.description}</p>
			</div>
		</section>
	);
}