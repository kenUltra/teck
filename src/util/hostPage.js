import {contentData} from './actions';
const url = "https://airbnb-api-l62o.onrender.com/home";

export async function hostPage(){
	const start = await fetch(url);
	const usePoint = await contentData(start);
	return usePoint;
}
export async function PrimaryHost(){
	const mainPoint = await fetch(url);
	const use = await contentData(mainPoint);
	return use;
}
export async function main() {
	const one = await fetch(url);
	const use = await contentData(one);
	return use.mainOne;
}
export async function second() {
	const secon = await fetch(url);
	const use = await contentData(secon);
	return use.second;
}
export async function images() {
	const image = await fetch(url);
	const use = await contentData(image);
	return use.contentImage;
}
export async function airCover() {
	const data = await fetch(url);
	const useD = await contentData(data);
	return useD.AirCover;
}
export async function HostAir() {
	const host = await fetch(url);
	const see = await contentData(host);
	return see.superHost;
}
export async function ApartAirbnb() {
	const apart = await fetch(url);
	const ap = await contentData(apart);
	return ap.airbnbApart;
}
export async function question() {
	const all = await fetch(url);
	const res = await contentData(all);
	return res.question;
}
export async function footer(){
	const end = await fetch(url);
	const use = await contentData(end);
	return use.footer;
}
export async function stack(){
	const ip = await fetch(url);
	const ips = await contentData(ip);
	return ips.userplace;
}