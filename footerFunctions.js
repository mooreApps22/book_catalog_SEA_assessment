function renderFooter() {	
	const	footer = document.querySelector(".footer");
	const	signature = document.createElement("p");
	const	gitHubLink = document.createElement("a");
	const	listCredit = document.createElement("p");
	const	listCreditLink = document.createElement("a");

	signature.textContent = "Developed by Skyy Moore.";

	gitHubLink.href = "https://github.com/mooreApps22?tab=repositories&type=source"; 
	gitHubLink.textContent = "Skyy's GitHub Repository";
	gitHubLink.style.color = "white";

	listCredit.textContent = "This reading list is from the Modern Library's 1998 100 Best Novels of the 20th century.";
	listCredit.style.color = "white";

	listCreditLink.href = "https://sites.prh.com/modern-library-top-100"; 
	listCreditLink.textContent = "Modern Library Website";
	listCreditLink.style.color = "white";

	footer.append(signature, gitHubLink, listCredit, listCreditLink);
}
