import React from "react";
import Matters from "./Matter.module.css";
import { Link } from "react-router-dom";

function Matter() {
	React.useEffect(() => {
		const topLevel = document.querySelector("html");
		topLevel.style.height = "100%";
		topLevel.style.overflow = "hidden";
	}, []);
	function link() {
		const aTag = React.createElement("a", { href: "mailto:frankkarim52@gmail.com" }, "contact");
		return aTag;
	}
	return (
		<React.Fragment>
			<div className={Matters.removeContent}>
				<div className={Matters.content}>
					<h1>The page that you try to reach is not available yet. <Link to="/">Home</Link></h1>
					<br />
					<div className={Matters.detail}>
						<h2>If you want to give your opinion</h2>
						{link()}

					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
export default Matter;
