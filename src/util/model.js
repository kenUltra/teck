//import { contentData as data } from "./actions";
// const locationLink = "https://airbnb-api-l62o.onrender.com/home";
const locationLink = "https://airbnb-api-l62o.onrender.com/Airbnb-location";
const languageLink = "https://airbnb-api-l62o.onrender.com/Airbnb-lang";

export function makeUpper(changetext) {
	const start = [...changetext];
	const changeOnce = start[0].toUpperCase();
	start[0] = changeOnce;
	return start.join("");
}
export function selectElement(elementTarget) {
	return document.body.querySelector(elementTarget);
}
export function manyElement(target) {
	return document.body.querySelectorAll(target);
}
export async function getHeaderData() {
	const action = await fetch(locationLink);
	const head = await action.json();
	const icons = await head.Header;
	return icons;
}
export async function textHeader() {
	const main = await fetch(locationLink);
	const firstNave = await main.json();
	return [firstNave.centerNavigation, firstNave.newCenterNavigation];
}
export async function subNavData() {
	const makeSome = await fetch(locationLink);
	const start = await makeSome.json();
	return start.subHeader;
}
export async function lotData() {
	const pount = await fetch(locationLink);
	const usePoint = await pount.json();
	return usePoint.infinite;
}
export async function mobileSize() {
	const m = await fetch(locationLink);
	const mob = await m.json();
	return mob.mobileData;
}
export async function searchTitle() {
	const datas = await fetch(locationLink);
	const get = await datas.json();
	return get.newNavigation.parentNewNav;
}
export async function datesStack() {
	const mainData = await fetch(locationLink);
	const use = await mainData.json();
	return use.dates;
}
export async function searchContent() {
	const d = await fetch(locationLink);
	const get = await d.json();
	return get.newNavigation.childNewNav;
}
export async function Languages() {
	const leng = await fetch(languageLink);
	const use = await leng.json();
	return use.language;
}
export function stringMonth(addOne = 0) {
	let month;
	const defaultYear = new Date(2023);
	const userDate = new Date();
	if (defaultYear.getFullYear() <= userDate.getFullYear()) {
		month = changeDate(userDate.getMonth() + addOne);
	} else {
		month = changeDate(defaultYear.getMonth() + addOne);
	}
	return month;
}
function changeDate(month) {
	let string;
	switch (month) {
		case 0:
			string = "January";
			break;
		case 1:
			string = "February";
			break;
		case 2:
			string = "March";
			break;
		case 3:
			string = "April";
			break;
		case 4:
			string = "May";
			break;
		case 5:
			string = "June";
			break;
		case 6:
			string = "July";
			break;
		case 7:
			string = "August";
			break;
		case 8:
			string = "September";
			break;
		case 9:
			string = "October";
			break;
		case 10:
			string = "November";
			break;
		default:
			string = "December";
			break;
	}
	return string;
}
