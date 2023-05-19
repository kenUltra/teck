export async function secondPageData() {
	const postUrl = await fetch("https://airbnb-api-l62o.onrender.com/Airbnb-hostPage");
	const changejson = await postUrl.json();
	return changejson;
}
export async function PrivacyData() {
	const url = await fetch("https://airbnb-api-l62o.onrender.com/Airbnb-about");
    const useU = await url.json();
    return useU;
}
export async function Play(){
    const url = await fetch("https://airbnb-api-l62o.onrender.com/Airbnb-activity");
    const use = await url.json();
    return use;
}