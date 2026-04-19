// This is the Entrypoint script. 

function renderBooks(books) {

	const	bookGrid = document.getElementById("bookShelf");

	const	visibleBooks = books.filter(book => book.show);

	visibleBooks.forEach( book => {

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

renderHeader();
renderMenuIcon();
renderBooks(books);
renderFooter();
