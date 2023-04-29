//import {contentData} from './actions';
const url = "https://airbnb-api-l62o.onrender.com/home";

export async function hostPage(){
	const start = await fetch(url);
	const usePoint = await contentData(start);
	return usePoint;
}
export async function PrimaryHost(){
	const mainPoint = await fetch(url);
	return mainPoint;
}
export async function main() {
	const one = await fetch(url);
	return one;
}
export async function second() {
	const secon = await fetch(url);
	return secon;
}
export async function images() {
	const image = await fetch(url);
	return image;
}
export async function airCover() {
	const data = await fetch(url);
	return data;
}
export async function HostAir() {
	const host = await fetch(url);
	return host;
}
export async function ApartAirbnb() {
	const apart = await fetch(url);
	return apart;
}
export async function question() {
	const all = await fetch(url);
	return all;
}
export async function footer(){
	const end = await fetch(url);
	return end;
}
export async function stack(){
	const ip = await fetch(url);
	return ip;
}