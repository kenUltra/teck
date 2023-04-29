import React from "react";
import { second as sections, images as pic, hostPage as houseIcon } from "../../../util/hostPage";
import set from "./Setup.module.css";

const Setup = () => {
	const [sectionTitle, setSecTitle] = React.useState("");
	const [imageLink, setImage] = React.useState("");
	const [detail, setDetail] = React.useState([]);
	React.useEffect(() => {
		sections()
			.then((second) => {
				setSecTitle((last) => {
					return (last = second.title);
				});
				setDetail(second.one);
			})
			.catch((err) => {
				console.log(err, "something goes wroung");
			});
		pic()
			.then((image) => {
				setImage((last) => {
					return (last = image.support);
				});
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);
	return (
		<React.Fragment>
			<main className={set.main}>
				<div className={set.primary}>
					<h1>{sectionTitle}</h1>
				</div>
				<div className={set.secondary}>
					<img src={imageLink} alt={sectionTitle} />
				</div>
				<div className={set.terminary}>
					{detail.map((e) => {
						return <DetailHost key={e.id} titles={e.title} detail={e.content} />;
					})}
				</div>
				<div className={set.detailContent}>
					<KnowMore />
				</div>
			</main>
		</React.Fragment>
	);
};
export default Setup;
export function DetailHost({ titles, detail }) {
	return (
		<>
			<div className={set.mains}>
				<div className={set.titles}>
					<h1>{titles}</h1>
				</div>
				<div className={set.about}>
					<p>{detail}</p>
				</div>
			</div>
		</>
	);
}
export function KnowMore() {
	const [titleHost, setTitle] = React.useState("");
	const [linkName, setLinkName] = React.useState("");
	React.useEffect(() => {
		sections()
			.then((btn) => {
				setTitle((old) => {
					return (old = btn.setupAir);
				});
				setLinkName(link=>{
					return link = btn.btnAir;
				})
			})
			.catch((err) => {
				console.error(err, "in line ");
				console.warn("some thing doesn't be showed");
			});
		houseIcon()
			.then((tinyHouse) => {
				const house = document.querySelector(".house-aircover > span");
				house.innerHTML = tinyHouse.tinyHouse;
			})
			.catch((err) => {
				console.error(err, "the icon ");
			});
	}, []);
	return (
		<>
			<div className={set.wrap}>
				<div className={set.txthost}>
					<div className={set.txt}>
						<h3>{titleHost}</h3>
					</div>
				</div>
				<div className={set.btnAir}>
					<div className={set.btnCore}>
						<div className={set.icon + " house-aircover"}>
							<span></span>
						</div>
						<div className={set.texting}>
							<span>{linkName}</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
