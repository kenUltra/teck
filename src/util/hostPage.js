//import { from './actions';
const url = "https://airbnb-api-l62o.onrender.com/";

export async function hostPage(){
	const start = await fetch(url);
	const usePoints = await start;
	const usePoint = await usePoints.json();
	return usePoint;
}
export async function PrimaryHost(){
	const mainPoint = await fetch(url);
	const uses = await mainPoint;
	const use = await uses.json();
	return use;
}
export async function main() {
	const one = await fetch(url);
	const uses = await one;
	const use = await uses.json();
	return use.mainOne;
}
export async function second() {
	const secon = await fetch(url);
	const uses = await secon;
	const use = await uses.json();
	return use.second;
}
export async function images() {
	const image = await fetch(url);
	const uses = await image;
	const use = await uses.json();
	return use.contentImage;
}
export async function airCover() {
	const data = await fetch(url);
	const useDs = await data;
	const useD = await useDs.json();
	return useD.AirCover;
}
export async function HostAir() {
	const host = await fetch(url);
	const sees = await host;
	const see = await sees.json();
	return see.superHost;
}
export async function ApartAirbnb() {
	const apart = await fetch(url);
	const aps = await apart;
	const ap = await aps.json();
	return ap.airbnbApart;
}
export async function question() {
	const all = await fetch(url);
	const ress = await all;
	const res = await ress.json();
	return res.question;
}
export async function footer(){
	const end = await fetch(url);
	const uses = await end;
	const use = await uses.json();
	return use.footer;
}
export async function stack(){
	const ip = await fetch(url);
	const ipss = await ip;
	const ips = await ipss.json();
	return ips.userplace;
}