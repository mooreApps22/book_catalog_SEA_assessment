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

renderBooks(books);
