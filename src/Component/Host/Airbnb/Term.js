import "./Term.css";

export default function Term(props) {
	return (
		<>
			<div className="term">
				<div className="over-term hero-term">
					<h1 className={props.hide}>Airbnb</h1>
					<div className="full-screen" onClick={props.full}>
						F
					</div>
					<div className="scrolling-page" onClick={props.down}>
						<div className="fixed-cirle">D</div>
					</div>
					<div className="title">
						<h1>{props.type}</h1>
					</div>
					<div className="detail">{props.children}</div>
				</div>
			</div>
		</>
	);
}
