const cards = document.querySelectorAll(".card");
function DisplayCardsWithTag(tag)
{
	for (let i = 0; i < cards.length; i++)
	{
		if (cards[i].getAttribute("data-filter-tag").includes(tag))
		{
			cards[i].style.display = "block";
		}
		else
		{
			cards[i].style.display = "none";
		}
	}
}

const filters = document.querySelectorAll(".filter");
const filterContainer = document.querySelector(".filter-container");
function SelectFilter(filter)
{
	filterContainer.style.setProperty(
		"--selection-width",
		`${filter.offsetWidth}px`
	);
	filterContainer.style.setProperty(
		"--selection-offset-x",
		`${filter.offsetLeft}px`
	);
	DisplayCardsWithTag(filter.getAttribute("data-filter"));
}

filterContainer.addEventListener("mousedown", (event) =>
{
	if (event.target.classList.contains("filter"))
	{
		SelectFilter(event.target);
	}
});

SelectFilter(filters[0]);