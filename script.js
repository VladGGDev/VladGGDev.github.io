// Utility functions
function RandomBetween(a, b)
{
	return a + Math.floor(Math.random() * (b - a));
}

function RandomFromCollection(collection)
{
	return collection[RandomBetween(0, collection.length)];
}



// Age
const year = 31536000000;  // 1000ms * 60s * 60m * 24h * 365d
const myBirthday = new Date("2007-06-15T12:00:00");
const myAge = Math.floor((Date.now() - myBirthday) / year);
document.getElementById("age").innerText = myAge;



// ===== Hero =====
// Hero background scrolling
const hero = document.getElementById("hero");

const backgroundGradients = [
	["#2d4de0", "#9f71f0", "#fc6277", "#f8ef6f"],
	["#37fafd", "#2d36e0"],
	// ["#12c2e9", "#c471ed", "#f64f59"],
	// ["#40E0D0", "#ffd129", "#f64f59"],
	["#03001e", "#7303c0", "#f64f59", "#fdeff9"]
];

function GenerateBackgroundGradient()
{
	const colors = RandomFromCollection(backgroundGradients);
	let colorText = colors.join() + ",";
	colors.reverse().shift();
	colorText += colors.join();
	return "repeating-linear-gradient(90deg," + colorText + ")";
}

hero.style.backgroundImage = GenerateBackgroundGradient();

let bgOffset = 0;
setInterval(() =>
{
	hero.style.backgroundPositionX = bgOffset + "%";
	bgOffset += 0.05;
}, 10);


// Hero splash text
// Splash texts can be:
// - strings => returned if selected
// - arrays with the format [text, display chance, isItalic]
const splashTexts = [
	"Lorem ipsum dolor sit amet",
	["S... Skibidi? (I'm sorry)", 0.1],
	"This is some splash text!",
	"Anyone can code",
	"Web development is easy",
	'Web development is "easy"',
	["💪💪💪", 0.5, false],
	"Probably reading some API documentation rn",
	"Cooking something fresh",
	"!?!?!?!?!?!?",
	"!!!!!!!!!!!!",
	"Refresh this page for new splash text",
	"Who doesn't love video games?",
	["Celeste is one of my favourite games", 0.75],
	["Hollow Knight is one of my favourite games", 0.75],
	["How could you tell I watch anime?", 0.75],
	["Are these splash texts a little narcissistic?", 0.25],
	"Professionalism!",
	"To be or not to be?",
	"Hmmmmm...",
	["As a matter of fact, I am pushing P.<br>That's pushing powder down my musket so I may smite another opp!<br>😈😈😈", 0.1, false],
	["🤓", 0.5, false],
	["😎😎😎", 0.8, false],
	['These were coded so I could use &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <span style="display: inline-block; transform: scale(2) perspective(50px) rotateX(34deg) ">HTML and CSS</span> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp in splash texts', 1, false],
	"This one's a little <b>bold</b>",
	"Don't stop reading books",
	["1 million beers!", 0.5],
	"Narwhals are real animals",
	["You have just lost <b>The Game</b>", 0.5],
	"Ice cream time!",
	"Don't burn yourself out",
	"Kebab is my favourite food!!",
	["E = mc<sup>2</sup>", 1, false],
	["Minecraft was revolutionary when it came out", 0.5],
	"Hello world!",
	"Don't forget to drink water!",
	"I'm also a game developer",
	"I'm alsa a web developer",
	"I can also do pixel art",
	"I know Blender somewhat",
	"Quality over quantity",
	["Sometimes I play video games instead of programming 😏", 0.5, false],
	["😏😏😏", 0.5, false],
	'Say "no!" to bugs',
	"Bugs are my worst enemy >:(",
	"<u>Bugless</u> as of now",
];


const splash = document.getElementById("splash-text");

// Used for debug
function ForceSplash(text)
{
	if (typeof text === "string")
	{
		splash.innerHTML = text;
	}
	else
	{
		// Is an array with commands
		if (text[2] === false)
		{
			splash.style.fontStyle = "normal";
			console.log("Set font style " + text[0] + " to normal");
		}
		splash.innerHTML = text[0];
		console.log("Splash text is " + text[0]);
	}
}

function ChangeSplash()
{
	let selectedFromCollection;
	// Keep selecting if the selection is an object and the chance check doesn't work
	selectedFromCollection = RandomFromCollection(splashTexts);

	if (typeof selectedFromCollection === "string")
	{
		splash.innerHTML = selectedFromCollection;
	}
	else
	{
		// Is an array with commands
		if (selectedFromCollection[1] <= Math.random())
		{
			ChangeSplash();
			return;
		}
		if (selectedFromCollection[2] === false)
		{
			splash.style.fontStyle = "normal";
		}
		splash.innerHTML = selectedFromCollection[0];
	}
}

ChangeSplash();