// This is the Entrypoint script. 

let currentSort = "default";

function openBookPopup(book) {
	let	popupOverlay = document.querySelector(".popupOverlay");

	if (!popupOverlay) {
		popupOverlay = document.createElement("div");
		popupOverlay.className = "popupOverlay";
		document.body.append(popupOverlay);
	}

	popupOverlay.innerHTML = "";
	
	const	popupBox = document.createElement("button");
	popupBox.className = "popupBox";

	const	closeButton = document.createElement("button");
	closeButton.className = "popupClose";
	closeButton.type = "button";
	closeButton.textContent = "x";
	
	const	img = document.createElement("img");
	img.src = book.coverImage;
	img.alt = `Cover of ${book.title}`;
	img.width = 180;

	const	title = document.createElement("h2");
	title.textContent = book.title;

	const	author = document.createElement("p");
	author.innerHTML = `<strong>Author:</strong> ${book.author}`;

	const	publicationDate = document.createElement("p");
	publicationDate.innerHTML = `<strong>Publication Date:</strong> ${book.publicationDate}`;

	const	description = document.createElement("p");
	description.innerHTML = `<strong>Description:</strong> ${book.description}`;

	const	quote = document.createElement("p");
	quote.innerHTML = `<strong>Quote:</strong> "${book.quote}"`;

	closeButton.addEventListener("click", () => {
		popupOverlay.remove();
	});

	popupOverlay.addEventListener("click", (event) => {
		if (event.target === popupOverlay) {
			popupOverlay.remove();
		}
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === 'Escape') {
			popupOverlay.remove();
		}
	});

	popupBox.append(
		closeButton,
		img,
		title,
		author,
		publicationDate,
		description,
		quote
	);

	popupOverlay.append(popupBox);
}

function getRenderedBooks() {
	const visibleBooks = books.filter((books) => books.show);

	if (currentSort === "default") {
		return [...visibleBooks].sort((a,b) => a.originalIndex - b.originalIndex);
	}

	if (currentSort === "title-asc") {
		return [...visibleBooks].sort((a,b) => a.title.localeCompare(b.title));
	}

	if (currentSort === "title-desc") {
		return [...visibleBooks].sort((a,b) => b.title.localeCompare(a.title));
	}

	if (currentSort === "date-newest") {
		return [...visibleBooks].sort((a,b) => Number(b.publicationDate) - Number(a.publicationDate));
	}

	if (currentSort === "date-oldest") {
		return [...visibleBooks].sort((a,b) => Number(a.publicationDate) - Number(b.publicationDate));
	}
	return (visibleBooks);
}

function renderBooks(books) {

	const	bookGrid = document.getElementById("bookShelf");
	bookGrid.innerHTML = "";

	const	renderedBooks = getRenderedBooks();

	renderedBooks.forEach( book => {

		const bookCard = document.createElement("div");
		bookCard.className = "bookCard";

		const	img = document.createElement("img");
		img.src = book.coverImage;
		img.alt = `Cover of ${book.title}`;
		img.loading = "lazy";
		img.width = 180;

		bookCard.append(img);
		bookCard.addEventListener("click", () => {
			openBookPopup(book);
		});

		bookGrid.appendChild(bookCard);
	});
}

//
books.forEach((book, index) => {
	book.originalIndex = index;
});

renderHeader();
renderMenuIcon();
renderBooks();
renderFooter();
