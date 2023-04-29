import React from "react";
import { Link } from "react-router-dom";
import { HostAir, hostPage, second } from "../../../util/hostPage";
import head from "./head.module.css";

export default function Head() {
	const [btnOne, setBtnOne] = React.useState("");
	const [lastBtn, setLastBtn] = React.useState("");
	React.useEffect(() => {
		const airL = document.querySelector(".airbnb-main>span");
		hostPage()
			.then((data) => {
				airL.innerHTML = data.airbnb;
			})
			.catch((e) => {
				console.error(e, "one page");
			});
		second()
			.then(setup => {
				setBtnOne((other) => {
					return other = setup.btnAir
				})
			}
			)
			.catch(err => {
				console.error(err);
			})
		HostAir()
			.then(superHost => {
				setLastBtn(list => {
					return list = superHost.txtb;
				})
			})
			.catch(err => {
				console.error(err);
			})
	}, []);
	return (
		<React.Fragment>
			<header className={head.header}>
				<div className={head.wrapHeader}>
					<div className={head.airIcon}>
						<Link to={"/"}>
							<div className={head.icons + " airbnb-main"}>
								<span></span>
							</div>
						</Link>
					</div>
					<div className={head.airOther}>
						<div className={head.airFirstSide}>
							<Setting txt={btnOne} />
						</div>
						<div className={head.airSecondSide}>
							<TextingHost txtDef={lastBtn} />
						</div>
					</div>
				</div>
			</header>
		</React.Fragment>
	);
}
export function Setting({ txt }) {
	React.useEffect(() => {
		const icon = document.body.querySelector(".head_iconLeft__BdGHt > span");
		hostPage()
			.then(house => {
				icon.innerHTML = house.tinyHouse;
			})
			.catch(err => {
				console.error(err);
			})
	}, [])
	return (<div className={head.one}>
		<div className={head.iconLeft}>
			<span></span>
		</div>
		<div className={head.text}>
			<h1>{txt}</h1>
		</div>
	</div>)
}
export function TextingHost({ txtDef }) {
	return (<div className={head.chat}>
		<div className={head.line}>
			<Link to="http://airbnb.com" aria-autocomplete="inline">
				<h1>{txtDef}</h1>
			</Link>
		</div>
	</div>)
}