function renderMenuIcon() {

	const	header = document.querySelector(".header");
	const	controlPanel = document.createElement("div");
	const	menuIcon = document.createElement("button");
	const	bar1 = document.createElement("div");
	const	bar2 = document.createElement("div");
	const	bar3 = document.createElement("div");
	const	searchBar = document.createElement("input");

	controlPanel.className = "controlPanel";
	menuIcon.className = "menuBox";
	bar1.className = "menuBar1";
	bar2.className = "menuBar2";
	bar3.className = "menuBar3";
	searchBar.className = "searchBar";
	
	header.append(controlPanel);

	controlPanel.append(menuIcon);
	controlPanel.append(searchBar);

	menuIcon.append(bar1);
	menuIcon.append(bar2);
	menuIcon.append(bar3);
		
	
}

function renderHeader() {

	const	header = document.querySelector(".header");
	const	siteName = document.createElement("h1");
	
	siteName.textContent = "NORTH HOLLYWOOD BOOK CLUB";

	header.append(siteName);	
}

function renderBooks(books) {

	const container = document.getElementById("bookShelf");

	books.forEach( book => {

		const article = document.createElement("article");
		article.className = "book";

		const	img = document.createElement("img");
		img.src = book.coverImage;
		img.alt = `Cover of ${book.title}`;
		img.loading = "lazy";
		img.width = 180;

		article.append(img);

		container.appendChild(article);
	});
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


renderHeader();
renderMenuIcon();
renderBooks(books);
renderFooter();
