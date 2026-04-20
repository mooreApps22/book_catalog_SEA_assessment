function applyFilter(input) {
	const	words = input
		.toLowerCase()
		.trim()
		.split(/\s+/)
		.filter(Boolean);

	books.forEach((book) => {
		const	text = `${book.title} ${book.description} ${book.author}`.toLowerCase();

		const	matchesAllWords = words.every((word) =>
			text.includes(word)
		);

		book.show = matchesAllWords;
	});
	renderBooks();
}

function createSortMenuBar(className) {
	
	const	bar = document.createElement("div");
	bar.className = className;
	return (bar);
}

function createSortMenu() {

	const	sortMenu = document.createElement("div");

	sortMenu.className = "sortMenu hidden";
	sortMenu.innerHTML = `
		<button data-sort="default">Default</button>
		<button data-sort="title-asc">Title A-Z</button>
		<button data-sort="title-desc">Title Z-A</button>
		<button data-sort="date-newest">Newest</button>
		<button data-sort="date-oldest">Oldest</button>
	`;
	return (sortMenu);
}

function wireSortMenu(menuWrap, menuIcon, sortMenu) {

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
		currentSort = sortValue;
		console.log("selected sort:", sortValue);

		sortMenu.classList.add("hidden");
		renderBooks();
	});	
}


function renderMenuIcon() {

	const	header = document.querySelector(".header");

	const	controlPanel = document.createElement("div");
	controlPanel.className = "controlPanel";

	const	menuWrap = document.createElement("div");
	menuWrap.className = "menuWrap";

	const	menuIcon = document.createElement("button");
	menuIcon.className = "menuBox";

	menuIcon.append(
		createSortMenuBar("menuBar1"),
		createSortMenuBar("menuBar2"),
		createSortMenuBar("menuBar3")
	);

	const	filterBar = document.createElement("input");
	filterBar.className = "filterBar";
	filterBar.type = "text";
	filterBar.placeholder = "Filter books...";

	filterBar.addEventListener("input", (event) => {
		const value = event.target.value;
		applyFilter(value);
	});

	const	sortMenu = createSortMenu();	

	header.append(controlPanel);
	controlPanel.append(menuWrap, filterBar);
	menuWrap.append(menuIcon, sortMenu);

	wireSortMenu(menuWrap, menuIcon, sortMenu);
}

function renderHeader() {

	const	header = document.querySelector(".header");
	const	siteName = document.createElement("h1");
	
	siteName.textContent = "NOHO. BOOK CLUB READING LIST";

	header.append(siteName);	
}
