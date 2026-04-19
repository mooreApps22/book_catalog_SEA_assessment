// Intial Rendering Functions

function renderMenuIcon() {

	const	header = document.querySelector(".header");
	const	controlPanel = document.createElement("div");
	const	menuWrap = document.createElement("div");
	const	menuIcon = document.createElement("button");
	const	bar1 = document.createElement("div");
	const	bar2 = document.createElement("div");
	const	bar3 = document.createElement("div");
	const	filterBar = document.createElement("input");
	const	sortMenu = document.createElement("div");

	controlPanel.className = "controlPanel";
	menuWrap.className = "menuWrap";
	menuIcon.className = "menuBox";
	bar1.className = "menuBar1";
	bar2.className = "menuBar2";
	bar3.className = "menuBar3";
	filterBar.className = "filterBar";
	sortMenu.className = "sortMenu hidden";
	
	filterBar.type = "text";
	filterBar.placeholder = "Filter books...";

	sortMenu.innerHTML = `
		<button data-sort="title-asc">Title A-Z</button>
		<button data-sort="title-desc">Title Z-A</button>
		<button data-sort="date-newest">Newest</button>
		<button data-sort="date-oldest">Oldest</button>
	`;
	
	header.append(controlPanel);


	controlPanel.append(menuWrap);
	controlPanel.append(filterBar);

	menuWrap.append(menuIcon);
	menuWrap.append(sortMenu);

	menuIcon.append(bar1);
	menuIcon.append(bar2);
	menuIcon.append(bar3);

	menuIcon.addEventListener("click", (event) => {
		event.stopPropagation();
		sortMenu.classList.toggle("hidden");
	});

	document.addEventListener("click", (event) => {
		if (!event.target.closest(".menuWrap")) {
			sortMenu.classList.add("hidden");
		}
	});

	sortMenu.addEventListener("click", (event) => {
		const button = event.target.closest("button");
		if (!button) return;

		const sortValue = button.dataset.sort;
		console.log("selected sort:", sortValue);

		sortMenu.classList.add("hidden");

		// set currentSort = sortValue;
		renderBooks();
	});
}

function renderHeader() {

	const	header = document.querySelector(".header");
	const	siteName = document.createElement("h1");
	
	siteName.textContent = "NORTH HOLLYWOOD BOOK CLUB";

	header.append(siteName);	
}


function renderFooter() {	
	const	footer = document.querySelector(".footer");
	const	credit = document.createElement("p");
	const	gitHubLink = document.createElement("a");

	credit.textContent = "Developed by Skyy Moore.";
	gitHubLink.href = "https://github.com/mooreApps22?tab=repositories&type=source"; 
	gitHubLink.textContent = "Skyy's GitHub Repo";
	gitHubLink.style.color = "white";
	

	footer.append(credit);
	footer.append(gitHubLink);
}
