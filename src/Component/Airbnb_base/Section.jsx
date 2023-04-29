import React from "react";
import section from "./Section.module.css";
import { getHeaderData as iconArr } from "../../util/model";

class Section extends React.Component {
	constructor() {
		super();
		this.state = {
			main: "log",
			leftAr: " "
		};
	}
	componentDidMount() {
		iconArr()
			.then((ar) => {
				const leftArrow = document.querySelectorAll(".ar-L"),
					rightArrow = document.querySelectorAll(".ar-R"),
					favorite = document.body.querySelectorAll(".likes > span");

				favorite.forEach((star) => {
					return star.innerHTML = ar.stars;
				})
				leftArrow.forEach((left) => {
					return (left.innerHTML = ar.arrowIcon);
				});
				rightArrow.forEach((right) => {
					return (right.innerHTML = ar.arrowIcon);
				});
			})
			.catch(err => {
				console.error(err, 'something went wrong');
			});
	}
	render() {
		return (
			<React.Fragment>
				<div className={section.wrapSection}>
					<div className={section.imageSLide}>
						<div className={section.slideI + " img" + this.props.ids}>{this.props.children}</div>
						<div className={section.other}>
							<div className={section.leftAr + " hide-A"} onClick={this.props.leftAction}>
								<span className={section.ArrowLeft + " ar-L"}></span>
							</div>
							<div className={section.rigthAr + " hide-B"} onClick={this.props.rigthAction}>
								<span className={section.ArrowRight + " ar-R"}></span>
							</div>
						</div>
					</div>

					<div className={section.detailCard}>
						<div className={section.main}>
							<div className={section.places}>
								<h3>{this.props.location}</h3>
							</div>
							<div className={section.rating}>
								<div className={section.stars + " likes"}>
									<span></span>
								</div>
								<div className={section.sumRate}>
									<p>
										<span>{this.props.rating}</span>
									</p>
								</div>
							</div>
						</div>
						<div className={section.second}>
							<div className={section.detailHost}>
								<h2>{this.props.placesDetail}</h2>
							</div>
						</div>
						<div className={section.third}>
							<div className={section.date}>
								<span>{this.props.dates}</span>
							</div>
						</div>
						<div className={section.last}>
							<div className={section.prices}>
								<span>{this.props.prices}</span>
							</div>
							<div className={section.dateline}>
								<span>{this.props.time}</span>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Section;

export function Image({ images }) {
	return <img src={images} alt={"detail for all "} className={section.image} loading="lazy" />;
}