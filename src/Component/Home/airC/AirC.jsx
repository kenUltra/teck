import React from "react";
import { images as coverI, airCover, hostPage as iconLoader } from "../../../util/hostPage";
import Cover from "./AirC.module.css";

class AirC extends React.Component {
	constructor() {
		super();
		this.state = {
			cover: "",
			imageAirCover: "",
			own: "",
			others: "",
			ACover: "",
			tableArea: [],
		};
		this.table = this.table.bind(this);
	}
	componentDidMount() {
		coverI()
			.then((cover) => {
				this.setState({ imageAirCover: cover.detailImage });
			})
			.catch((err) => {
				console.error(err, "on line");
			});
		airCover()
			.then((covers) => {
				this.setState((last) => {
					return {
						cover: (last.cover = covers.airCover),
						own: (last.own = covers.topLeft),
						others: (last.others = covers.topright),
						ACover: (last.ACover = covers.outTable),
						tableArea: (last.tableArea = covers.compare),
					};
				});
			})
			.catch((err) => {
				console.error(err, "some err");
			});
		iconLoader()
			.then((icon) => {
				const nice = document.body.querySelectorAll(".matches"),
					notMatch = document.body.querySelectorAll(".not-good");

				nice.forEach((styleIcon) => {
					return (styleIcon.innerHTML = icon.checkIcon);
				});
				notMatch.forEach((not) => {
					return (not.innerHTML = icon.notCheckIcon);
				});
			})
			.catch((err) => {
				console.error(err, "on line");
			});
	}
	componentDidUpdate() {
		iconLoader()
			.then((icon) => {
				const nice = document.body.querySelectorAll(".matches"),
					notMatch = document.body.querySelectorAll(".not-good");

				nice.forEach((styleIcon) => {
					return (styleIcon.innerHTML = icon.checkIcon);
				});
				notMatch.forEach((not) => {
					return (not.innerHTML = icon.notCheckIcon);
				});
			})
			.catch((err) => {
				console.error(err, "on line");
			});
	}
	airbnCompare() {
		const txt = "here";
		const link = Cover.link;
		const a = React.createElement("a", { className: link, href: "https://www.airbnb.com/aircover-for-hosts" }, txt);
		return a;
	}
	table() {
		const check = function () {
			const hold = React.createElement("h5", { className: "matches" }, "hi");
			return hold;
		};
		const unCheck = function () {
			const data = React.createElement("h5", { className: "not-good" }, "bye");
			return data;
		};
		const p = this.state.tableArea.map((l) => {
			return <Table key={l.id} area={l.title} aboutArea={l.subTitle} unicCase={l.case} iconsA={l.air ? check() : unCheck()} iconsB={l.comp ? check() : unCheck()} />;
		});
		return p;
	}
	render() {
		return (
			<React.Fragment>
				<section className={Cover.sec}>
					<div className={Cover.airCover}>
						<div className={Cover.images}>
							<img src={this.state.imageAirCover} alt="airCover" />
						</div>
					</div>
					<div className={Cover.title}>
						<h1>{this.state.cover}</h1>
					</div>
					<div className={Cover.compare}>
						<table className={Cover.table}>
							<thead>
								<tr>
									<th className={Cover.top + " en-p"}></th>
									<th className={Cover.top}>
										<p>{this.state.own}</p>
									</th>
									<th className={Cover.top}>
										<p>{this.state.others}</p>
									</th>
								</tr>
							</thead>
							<tbody>{this.table()}</tbody>
						</table>
						<div className={Cover.why}>
							<div className={Cover.deepWhy}>
								<p>
									{this.state.ACover} {this.airbnCompare()}
								</p>
							</div>
							<Btnlink urlPage="http://airbnb.com"/>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}
export default AirC;

export function Table({ area, aboutArea, unicCase, iconsA, iconsB }) {
	return (
		<>
			<tr className={Cover.list}>
				<th className={Cover.compB}>
					<h4>{area}</h4>
					<span>{unicCase}</span>
					<p>{aboutArea}</p>
				</th>
				<td className={Cover.iconA}>
					<span>{iconsA}</span>
				</td>
				<td className={Cover.iconO}>
					<span>{iconsB}</span>
				</td>
			</tr>
		</>
	);
}
export const Btnlink = ({ urlPage }) => {
	function pages() {
		return React.createElement("a", { href: urlPage }, "Learn more");
	}
	return (
		<div className={Cover.info}>
			<div className={Cover.information}>{pages()}</div>
		</div>
	);
};
