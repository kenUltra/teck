import { selectElement as slideParent } from "./model";
export class PrimaryNumber {
	constructor(numberBase = 0) {
		this.start = numberBase;
	}
	set Number(data) {
		this.start = data;
	}
	get Number() {
		return this.start;
	}
}
export function contentData(analitic) {
	if (!analitic.ok) {
		throw new Error(analitic.statusText, "Can't get the data");
	}
	return analitic.json();
}
export function addition(varrible) {
	let image = document.querySelector(".Section_image__GK3bm");
	return (varrible.start += Math.floor(image.getBoundingClientRect().width));
}
export function negative(varrible) {
	let image = document.querySelector(".Section_image__GK3bm");
	return (varrible.start -= Math.floor(image.getBoundingClientRect().width));
}
export function parentChild(parentE = "" || undefined, leftMove = false, newValue = 0) {
	const parent = slideParent(parentE);
	leftMove ? addition(newValue) : negative(newValue);
	if (newValue.start >= 0) {
		newValue.start = 0;
	}
	const slideC = parent.childNodes.forEach((element) => {
		return element.style.setProperty("--move-image-by", newValue.start + "px");
	});
	return slideC;
}
