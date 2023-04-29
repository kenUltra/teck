import React, { Component } from "react";
import { datesStack as today, stringMonth } from "../../util/model";
import { TwoSlider } from "../Home/Imagine/AreaPlace";
import dates from "./Search.module.css";

class Dates extends Component {
	constructor() {
		super();
		this.state = {
			free: "",
			notfree: "",
			peek: [],
			listDate: true,
			monthDate: false,
		};
		this.dateBar = this.dateBar.bind(this);
		this.monthBar = this.monthBar.bind(this);
		this.datePick = this.datePick.bind(this);
	}
	componentDidMount() {
		today()
			.then((base) => {
				this.setState((last) => {
					return {
						free: (last.free = base.titles[0]),
						notfree: (last.notfree = base.titles[1]),
						peek: (last.peek = base.days),
					};
				});
			})
			.catch((err) => {
				console.error(err);
			});
	}
	dateBar() {
		this.setState((last) => {
			return {
				listDate: (last.listDate = true),
				monthDate: (last.monthDate = false),
			};
		});
	}
	monthBar() {
		this.setState((last) => {
			return {
				listDate: (last.listDate = false),
				monthDate: (last.monthDate = true),
			};
		});
	}
	datePick() {
		const someSay = this.state.peek;
		const addCl = document.body.querySelectorAll(".Search_footerDate__yIkZu");
		let a;

		function makeClass(goal) {
			addCl.forEach((la) => {
				return la.classList.remove("expose");
			});
			addCl[goal].classList.add("expose");
		}
		addCl.forEach((act, where) => {
			act.addEventListener("click", () => {
				return makeClass(where);
			});
		});

		return someSay.map((list) => {
			list === "Exact dates" || list === "exact dates" ? (a = false) : (a = true);
			return <RightTime key={list} monent={list} showIcon={a} />;
		});
	}
	render() {
		return (
			<React.Fragment>
				<div className={dates.main}>
					<div className={dates.primary}>
						<TwoSlider leftText={this.state.free} rightText={this.state.notfree} Once={this.dateBar} Twice={this.monthBar} />
					</div>
					<div className={dates.secondary}>
						{this.state.listDate && <Calendar monthTitle={stringMonth()} year={2023} />}
						{this.state.listDate && <Calendar monthTitle="May" year={2023} endMonth={30} />}
						{this.state.listDate && <div className={dates.piker}>{this.datePick()}</div>}
						{this.state.monthDate && <WholeMonth />}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Dates;
export function WholeMonth() {
	const [next, setNext] = React.useState([]);

	const [dateLine, setDateLine] = React.useState("Week");
	React.useEffect(() => {
		today()
			.then((choose) => {
				setNext((last) => {
					return (last = choose.list);
				});
			})
			.catch((err) => {
				console.error(err);
			});
		
	}, []);
	function changeTitle(id) {
		setDateLine(id);
	}
	const list = () => {
		const start = next.map((cont) => {
			return (
				<ManySlide
					key={cont}
					gap={cont}
					changeTitle={() => {
						changeTitle(cont);
					}}
				/>
			);
		});
		return start;
	};
	return (
		<div className={dates.newMonth}>
			<div className={dates.upper}>
				<div className={dates.headT}>
					<h1>
						Stay for a <span>{dateLine}</span>
					</h1>
				</div>
				<div className={dates.makeList}>{list()}</div>
			</div>
			<div className={dates.lower}>
				<div className={dates.secondT}>
					<h1>Go anytime</h1>
				</div>
				<div className={dates.slideMonth}></div>
			</div>
		</div>
	);
}

export function Calendar({ monthTitle, year, endMonth }) {
	const allDay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
	const table = (unic, inside) => {
		return React.createElement("td", { className: null, key: unic }, inside);
	};
	const listMaker = (dataPoint = []) => {
		return React.createElement(
			"tr",
			{ className: null },
			dataPoint.map((point, others) => {
				return React.createElement("td", { className: null, key: others }, point);
			})
		);
	};
	const day = () => {
		const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
		return days.map((sort, ids) => {
			return table(ids, sort);
		});
	};
	const firstWeek = () => {
		const oneRow = allDay.slice(0, 7);
		return listMaker(oneRow);
	};
	const secondWeek = () => {
		const second = allDay.slice(7, 14);
		return listMaker(second);
	};
	const thirdWeek = () => {
		const third = allDay.slice(15, 22);
		return listMaker(third);
	};
	const lastWeek = (end = 30) => {
		const last = allDay.slice(23, end);
		return listMaker(last);
	};
	return (
		<div className={dates.wrapper}>
			<div className={dates.insideWrapper}>
				<div className={dates.title}>
					<h1>
						{monthTitle} <span>{year}</span>{" "}
					</h1>
				</div>
				<div className={dates.insider}>
					<table>
						<thead>
							<tr>{day()}</tr>
						</thead>
						<tbody>
							{firstWeek()}
							{secondWeek()}
							{thirdWeek()}
							{lastWeek(endMonth)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
export function RightTime({ monent, showIcon }) {
	return (
		<div className={dates.footerDate}>
			<div className={dates.footerWrap}>
				{showIcon ? <PlusI /> : null}
				<div className={dates.time}>
					<span>{monent}</span>
				</div>
			</div>
		</div>
	);
}
export function PlusI() {
	return (
		<div className={dates.smalIcon}>
			<div className={dates.ups}>
				<span>+</span>
				<span></span>
			</div>
		</div>
	);
}
export const ManySlide = ({ gap, changeTitle }) => {
	return (
		<div
			className={dates.many}
			onClick={() => {
				changeTitle();
			}}
		>
			<h2>{gap}</h2>
		</div>
	);
};
