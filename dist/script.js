"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Elements
const button = document.querySelector(".random");
const quoteText = document.querySelector(".quote--content");
const quoteName = document.querySelector(".quote--name");
const quoteLang = document.querySelector(".quote--lang");
class App {
    constructor() {
        this.options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
                "X-RapidAPI-Key": "cf041ec36emsh7ea1ee7d0932ebbp18802ajsn5dbf3d50a9b2",
            },
        };
        button.addEventListener("click", () => {
            this.clear();
            this.displayQuote();
        });
    }
    // Fetches Quotes
    getQuote() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield fetch("https://quotes15.p.rapidapi.com/quotes/random/", this.options);
                return yield response.json();
            }
            catch (err) {
                quoteText.textContent = "Try again";
            }
        });
    }
    // Pushes fetched data into DOM elements
    displayQuote() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const quote = yield this.getQuote();
                console.log(quote);
                quoteText.textContent = quote.content;
                quoteName.textContent = quote.originator.name;
                quoteLang.textContent = quote.language_code;
            }
            catch (err) {
                quoteText.textContent = "Try again";
            }
        });
    }
    // Cleats texts and starts a loading process
    clear() {
        quoteText.innerHTML = '<div class="loading">Loading</div>';
        quoteLang.textContent = "";
        quoteName.textContent = "";
        quoteName.classList.remove("underline");
    }
}
const app = new App();
//# sourceMappingURL=script.js.map