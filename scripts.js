function renderMenuIcon() {

	const	header = document.querySelector(".header");
	const	menuIcon = document.createElement("button");
	const	bar1 = document.createElement("div");
	const	bar2 = document.createElement("div");
	const	bar3 = document.createElement("div");

	menuIcon.className = "menuBox";
	bar1.className = "menuBar";
	bar2.className = "menuBar";
	bar3.className = "menuBar";
	
	header.append(menuIcon);
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


renderHeader();
renderMenuIcon();
renderBooks(books);
