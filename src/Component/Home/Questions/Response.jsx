import React from "react";
import { hostPage as Arrow, question } from "../../../util/hostPage";
import Qa from "./Response.module.css";

class Response extends React.Component {
	constructor() {
		super();
		this.state = {
			leftdata: "",
			showC: "res",
			right: [],
		};
		this.airbnbQuestion = this.airbnbQuestion.bind(this);
	}
	componentDidMount() {
		const icon = document.body.querySelectorAll(".Response_icon__SPzs4");
		question()
			.then((QA) => {
				this.setState((data) => {
					return {
						leftdata: (data.leftdata = QA.title),
						right: (data.right = QA.reply),
					};
				});
			})
			.catch((err) => {
				console.error(err);
			});
		Arrow()
			.then((iconAr) => {
				icon.forEach((l) => {
					return (l.innerHTML = iconAr.iconExpend);
				});
			})
			.catch((err) => {
				console.error(err);
			});	
	}
	componentDidUpdate() {
		const icon = document.body.querySelectorAll(".Response_icon__SPzs4");
		Arrow()
			.then((iconAr) => {
				icon.forEach((l) => {
					return (l.innerHTML = iconAr.iconExpend);
				});
			})
			.catch((err) => {
				console.error(err);
			});
	}
	airbnbQuestion() {
		const list = this.state.right.map((reply) => {
			return (
				<ListQuestion
					key={reply.id}
					question={reply.question}
					reply={reply.reply}
					more={reply.classR}
					moreContent={()=>{
						this.props.expendContent(reply.id)
					}}
				/>
			);
		});
		return list;
	}
	render() {
		return (
			<React.Fragment>
				<section className={Qa.main}>
					<div className={Qa.wrapper}>
						<div className={Qa.left}>
							<div className={Qa.stack}>
								<h1>{this.state.leftdata}</h1>
							</div>
						</div>
						<div className={Qa.right}>{this.airbnbQuestion()}</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}
export default Response;

export function ListQuestion({ question, reply, moreContent, more }) {
	return (
		<div className={Qa.asking}>
			<div className={Qa.asker} onClick={()=>{ moreContent() }}>
				<div className={Qa.head}>
					<h1>{question}</h1>
				</div>
				<div className={Qa.icon}>
					<span></span>
				</div>
			</div>
			<div className={Qa.reply + " " + more}>
				<p>{reply}</p>
			</div>
		</div>
	);
}
