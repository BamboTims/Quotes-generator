// Elements
const button = document.querySelector(".random")! as HTMLButtonElement;
const quoteText = document.querySelector(".quote--content")! as HTMLElement;
const quoteName = document.querySelector(".quote--name")! as HTMLElement;
const quoteLang = document.querySelector(".quote--lang")! as HTMLElement;

class App {
	private options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Host": "quotes15.p.rapidapi.com",
			"X-RapidAPI-Key": "cf041ec36emsh7ea1ee7d0932ebbp18802ajsn5dbf3d50a9b2",
		},
	};
	constructor() {
		button.addEventListener("click", () => {
			this.clear();
			this.displayQuote();
		});
	}

	// Fetches Quotes
	private async getQuote() {
		try {
			let response = await fetch(
				"https://quotes15.p.rapidapi.com/quotes/random/",
				this.options
			);
			return await response.json();
		} catch (err) {
			quoteText.textContent = "Try again";
		}
	}

	// Pushes fetched data into DOM elements
	private async displayQuote() {
		try {
			const quote = await this.getQuote();
			console.log(quote);
			quoteText.textContent = quote.content;
			quoteName.textContent = quote.originator.name;
			quoteLang.textContent = quote.language_code;
		} catch (err) {
			quoteText.textContent = "Try again";
		}
	}

	// Cleats texts and starts a loading process
	private clear() {
		quoteText.innerHTML = '<div class="loading">Loading</div>';
		quoteLang.textContent = "";
		quoteName.textContent = "";
		quoteName.classList.remove("underline");
	}
}

const app = new App();
