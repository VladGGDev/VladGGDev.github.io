const filterContainer = document.querySelector(".filter-container");
filterContainer.addEventListener("mousedown", (event) =>
{
	if (event.target.classList.contains("filter"))
	{
		filterContainer.style.setProperty(
			"--selection-width",
			`${event.target.offsetWidth}px`
		);
		filterContainer.style.setProperty(
			"--selection-offset-x",
			`${event.target.offsetLeft}px`
		);
		console.log("width: " + event.target.offsetWidth + "\nx pos: " + event.target.offsetLeft);
	}
});
