import React from "react";
import { ApartAirbnb } from "../../../util/hostPage";
import { Btnlink } from "../airC/AirC";
import apart from "./Friendly.module.css";

class Friendly extends React.Component {
	constructor() {
		super();
		this.state = {
			apart: "",
			listApart: [],
			endTxt: "",
			loadCard: true,
		};
	}
	componentDidMount() {
		ApartAirbnb()
			.then((matter) => {
				this.setState({ apart: matter.title, endTxt: matter.apartAirbnb, loadCard: false, listApart: matter.typeApartment });
			})
			.catch((err) => {
				console.error(err, "some error on line");
			});
	}
	apartLoad() {
		const apart = [1, 2, 3];
		return apart.map((lo) => {
			return <LoadList key={lo} />;
		});
	}
	aboutAp() {
		const data = this.state.listApart.map((data) => {
			return <ApartDetail key={data.id} showImage={data.image} titles={data.mainTitle} about={data.place} />;
		});
		return data;
	}
	render() {
		return (
			<React.Fragment>
				<section className={apart.friend}>
					<div className={apart.apart}>
						<div className={apart.title}>
							<h1>{this.state.apart}</h1>
						</div>
						<div className={apart.content}>{!this.state.loadCard ? this.aboutAp() : this.apartLoad()}</div>
						<div className={apart.end}>
							<h1>{this.state.endTxt}</h1>
						</div>
					</div>
					<Btnlink />
				</section>
			</React.Fragment>
		);
	}
}
export default Friendly;

export function LoadList() {
	return (
		<div className={apart.eachThing}>
			<div className={apart.images}></div>
			<div className={apart.detail}>
				<div className={apart.main}></div>
				<div className={apart.second}></div>
			</div>
		</div>
	);
}
export function ApartDetail({ titles, about, showImage }) {
	return (
		<main className={apart.wrap}>
			<div className={apart.imagesWrap}>
				<img src={showImage} alt="images" />
			</div>
			<div className={apart.detailContent + " " + apart.some}>
				<h1>{titles}</h1>
				<p>{about}</p>
			</div>
		</main>
	);
}
