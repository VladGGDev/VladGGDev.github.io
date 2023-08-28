function ScrollDown()
{
	scrollBy(0, screen.availHeight);
}

document.getElementById("about-me-link").addEventListener("click", ScrollDown);
document.getElementById("my-games-link").addEventListener("click", ScrollDown);
document.getElementById("my-web-experiments-link").addEventListener("click", ScrollDown);


// Age
const year = 31536000000;  // 1000ms * 60s * 60m * 24h * 365d
const birthday = 14515200000;  // 1000ms * 60s * 60m * 24h* 168d = time from 1 january to 15 june
let myAge = Math.round((Date.now() - birthday) / year) - 37;
document.getElementById("age").innerText = myAge;
