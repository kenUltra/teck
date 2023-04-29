import React from "react";
import Foot from "./End.module.css";
import { getHeaderData as mapIcon, selectElement as mapS } from "../../util/model";

export default function End() {
	React.useEffect(function () {
		mapIcon()
			.then((maps) => {
				const mapWrap = mapS(".End_icon__NBqa6>span");
				mapWrap.innerHTML = maps.maps;
			})
			.catch((err) => {
				console.error(err, "maps did get correctly");
			});
	}, []);
	return (
		<React.Fragment>
			<div className={Foot.wrap}>
				<div className={Foot.up}>
					<span className={Foot.era}>
						<div className={Foot.label}>
							<span>Show maps</span>
						</div>
						<div className={Foot.icon}>
							<span></span>
						</div>
					</span>
				</div>
				<div className={Foot.down}>
					<h1>The Airbnb Content</h1>
				</div>
			</div>
		</React.Fragment>
	);
}
