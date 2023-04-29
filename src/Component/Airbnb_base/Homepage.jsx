import React from "react";
import HomeStyle from "./Homepage.module.css";
import Loading from "./loading";
import Section, { Image } from "./Section";
import { lotData as inifinity } from "../../util/model";
import { parentChild } from "../../util/actions";
import { one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fitheen, sixteen } from "../../util/var";

class HomePage extends React.Component {
	constructor() {
		super();
		this.state = {
			loading: true,
			showingData: [],
		};
		this.infinite = this.infinite.bind(this);
		this.imagesContent = this.imagesContent.bind(this);
		this.loadingTimes = ["loading"];
	}
	componentDidMount() {
		inifinity()
			.then((list) => {
				this.setState({ showingData: list, loading: false });
			})
			.catch((err) => {
				console.error(err);
			});
	}
	loadPage() {
		for (let a = 0; a < 31; a++) {
			this.loadingTimes.push("loading....");
		}
		return this.loadingTimes.map((main, indexing) => {
			return <Loading key={indexing} />;
		});
	}
	imagesContent(list) {
		const i = list.map((all, inc) => {
			return <div key={inc} className={HomeStyle.sizeImages}><Image key={inc} images={all} /></div>;
		});
		return i;
	}
	infinite() {
		function us(price = 0) {
			const usMoney = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
			return usMoney.format(price);
		}
		function rmClass(classEl = "" || undefined, thingToRemove = "hide-A") {
			const getEl = document.querySelector(classEl).nextElementSibling.childNodes[0];
			const getE = document.querySelector(classEl).nextElementSibling.childNodes[1];
			if (getEl.classList.contains(thingToRemove)) {
				getEl.classList.remove(thingToRemove);
			}
			if (getE.classList.contains("hide-B")) {
				getE.classList.remove("hide-B");
			}
		}
		function addClass(classEl = "" || undefined, addCls = "hide-A") {
			const getEl = document.querySelector(classEl).nextElementSibling.childNodes[0];
			const getE = document.querySelector(classEl).nextElementSibling.childNodes[1];
			getEl.classList.add(addCls);
			getE.classList.add("hide-B");
		}
		function moveLeft(id) {
			switch (id) {
				case 1:
					parentChild(".img1", true, one);
					if (one.start >= 0) addClass(".img1");
					break;
				case 2:
					parentChild(".img2", true, two);
					if (two.start >= 0) addClass(".img2");
					break;
				case 3:
					parentChild(".img3", true, three);
					if (three.start >= 0) addClass(".img3");
					break;
				case 4:
					parentChild(".img4", true, four);
					if (four.start >= 0) addClass(".img3");
					break;
				case 5:
					parentChild(".img5", true, five);
					if (five.start >= 0) addClass(".img5");
					break;
				case 6:
					parentChild(".img6", true, six);
					if (six.start >= 0) addClass(".img6");
					break;
				case 7:
					parentChild(".img7", true, seven);
					if (seven.start >= 0) addClass(".img7");
					break;
				case 8:
					parentChild(".img8", true, eight);
					if (eight.start >= 0) addClass(".img8");
					break;
				case 9:
					parentChild(".img9", true, nine);
					if (nine.start >= 0) addClass(".img9");
					break;
				case 10:
					parentChild(".img10", true, ten);
					if (ten.start >= 0) addClass(".img10");
					break;
				case 11:
					parentChild(".img11", true, eleven);
					if (eleven.start >= 0) addClass(".img11");
					break;
				case 12:
					parentChild(".img12", true, twelve);
					if (twelve.start >= 0) addClass(".img12");
					break;
				case 13:
					parentChild(".img13", true, thirteen);
					if (thirteen.start >= 0) addClass(".img13");
					break;
				case 14:
					parentChild(".img14", true, fourteen);
					if (fourteen.start >= 0) addClass(".img14");
					break;
				case 15:
					parentChild(".img15", true, fitheen);
					if (fitheen.start >= 0) addClass(".img15");
					break;
				default:
					parentChild(".img16", true, sixteen);
					if (sixteen.start >= 0) addClass(".img16");
					break;
			}
		}
		function moveRight(id) {
			switch (id) {
				case 1:
					parentChild(".img1", false, one);
					rmClass(".img1");
					break;
				case 2:
					parentChild(".img2", false, two);
					rmClass(".img2");
					break;
				case 3:
					parentChild(".img3", false, three);
					rmClass(".img3");
					break;
				case 4:
					parentChild(".img4", false, four);
					rmClass(".img4");
					break;
				case 5:
					parentChild(".img5", false, five);
					rmClass(".img5");
					break;
				case 6:
					parentChild(".img6", false, six);
					rmClass(".img6");
					break;
				case 7:
					parentChild(".img7", false, seven);
					rmClass(".img7");
					break;
				case 8:
					parentChild(".img8", false, eight);
					rmClass(".img8");
					break;
				case 9:
					parentChild(".img9", false, nine);
					rmClass(".img9");
					break;
				case 10:
					parentChild(".img10", false, ten);
					rmClass(".img10");
					break;
				case 11:
					parentChild(".img11", false, eleven);
					rmClass(".img11");

					break;
				case 12:
					parentChild(".img12", false, twelve);
					rmClass(".img12");
					break;
				case 13:
					parentChild(".img13", false, thirteen);
					rmClass(".img13");
					break;
				case 14:
					parentChild(".img14", false, fourteen);
					rmClass(".img14");
					break;
				case 15:
					parentChild(".img15", false, fitheen);
					rmClass(".img15");
					break;
				default:
					parentChild(".img16", false, sixteen);
					rmClass(".img16");
					break;
			}
		}
		return this.state.showingData.map((rep) => {
			return (
				<Section
					key={rep.id}
					ids={rep.id}
					location={rep.places}
					rating={rep.rate}
					placesDetail={rep.views}
					dates={"Mar 24 - 15"}
					prices={us(rep.price)}
					time={"night"}
					leftAction={() => {
						moveLeft(rep.id);
					}}
					rigthAction={() => {
						moveRight(rep.id);
					}}
				>
					{this.imagesContent(rep.imagesUrl)}
				</Section>
			);
		});
	}
	render() {
		return (
			<React.Fragment>
				<div className={HomeStyle.host}>
					<div className={HomeStyle.container}>{this.state.loading ? this.loadPage() : this.infinite()}</div>
				</div>
			</React.Fragment>
		);
	}
}
export default HomePage;
