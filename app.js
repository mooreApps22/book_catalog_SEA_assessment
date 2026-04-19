// This is the Entrypoint script. 

let currentSort = "default";

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
