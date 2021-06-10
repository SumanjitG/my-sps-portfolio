/** Fetches a random fact from the server */
async function showRandomFact() {
  const responseFromServer = await fetch('/fact');
  const textFromResponse = await responseFromServer.text();

  const factContainer = document.getElementById('fact-container');
  factContainer.innerText = textFromResponse;
}