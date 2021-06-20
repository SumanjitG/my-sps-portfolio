/** Fetches a random fact from the server */
async function showRandomFact() {
    const responseFromServer = await fetch('/fact');
    const textFromResponse = await responseFromServer.json();

    const factContainer = document.getElementById('fact-container');
    const fact = textFromResponse[Math.floor(Math.random() * textFromResponse.length)];

    factContainer.innerText = fact;
}