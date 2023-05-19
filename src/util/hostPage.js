//import { from './actions';
const url = "https://airbnb-api-l62o.onrender.com/Home";

export async function hostPage(){
	const start = await fetch(url);
	const usePoints = await start.json();
	return usePoints.icons;
}
export async function PrimaryHost(){
	const mainPoint = await fetch(url);
	const use = await mainPoint.json();
	return use;
}
export async function main() {
	const one = await fetch(url);
	const use = await one.json();
	return use.mainOne;
}
export async function second() {
	const secon = await fetch(url);
	const use = await secon.json();
	return use.second;
}
export async function images() {
	const image = await fetch(url);
	const use = await image.json();
	return use.contentImage;
}
export async function airCover() {
	const data = await fetch(url);
	const useD = await data.json();
	return useD.AirCover;
}
export async function HostAir() {
	const host = await fetch(url);
	const see = await host.json();
	return see.superHost;
}
export async function ApartAirbnb() {
	const apart = await fetch(url);
	const ap = await apart.json();
	return ap.airbnbApart;
}
export async function question() {
	const all = await fetch(url);
	const res = await all.json();
	return res.question;
}
export async function footer(){
	const end = await fetch(url);
	const use = await end.json();
	return use.footer;
}
export async function stack(){
	const ip = await fetch(url);
	const ips = await ip.json();
	return ips.userplace;
}