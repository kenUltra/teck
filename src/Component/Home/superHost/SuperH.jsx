import React from "react";
import superHost from "./SuperH.module.css";
import { HostAir as superOffer, images as photoSuper } from "../../../util/hostPage";
import { Link } from "react-router-dom";

const SuperH = () => {
	const [titleOne, setOneT] = React.useState("");
	const [titleSecond, setSecond] = React.useState("");
	const [superImage, setSuperimage] = React.useState("");
	const [link, setLink] = React.useState("");
	React.useEffect(() => {
		photoSuper()
			.then((hostIm) => {
				setSuperimage((l) => {
					return (l = hostIm.superHost);
				});
			})
			.catch((err) => {
				console.error(err);
			});
		superOffer()
			.then((second) => {
				setOneT((la) => {
					return (la = second.title);
				});
				setSecond((ot) => {
					return (ot = second.subT);
				});
				setLink((l) => {
					return (l = second.txtb);
				});
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);
	function alt() {
		return "superhost image";
	}
	return (
		<React.Fragment>
			<section className={superHost.super}>
				<div className={superHost.wrap}>
					<div className={superHost.left}>
						<img src={superImage} alt={alt()} />
					</div>
					<div className={superHost.right}>
						<div className={superHost.container}>
							<div className={superHost.def}>
								<h1>{titleOne}</h1>
								<h2>{titleSecond}</h2>
							</div>
							<div className={superHost.link}>
								<Link to={"www.apple.com"} className={superHost.a}>
									{link}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};
export default SuperH;
