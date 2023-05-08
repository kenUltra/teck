export async function secondPageData(){
    const postUrl = await fetch("https://airbnb-api-l62o.onrender.com/Airbnb-hostPage");
    const changejson = await postUrl.json();
    return changejson;
}