// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomATLAQuote() {
    const quotes =
        ['"Appa, yip yip!" - Aang',
            '"That\'s rough, buddy." - Prince Zuko',
            '"My own mother thought I was a monster. She was right of course, but it still hurt." - Princess Azula',
            '"When we hit our lowest point, we are open to the greatest change." - Aang',
            '"It is important to draw wisdom from different places. If you take it only from one place it becomes stale and rigid." - Uncle Iroh',
            '"Love is brightest in the dark." - Katara',
            '"My cabbages!" - Cabbage Merchant',
            '"If a fish lives its whole life in this river, does he know the river\'s destiny? No! Only that it runs on and on, out of his control. He may follow where it flows, but he cannot see the end. He cannot imagine the ocean." - Jeong Jeong'];

    // Pick a random quote.
    const quote = getRandomElement(quotes);

    // Add it to the page.
    const quoteContainer = document.getElementById('quote-container');
    quoteContainer.innerText = quote;

}

function addRandomMusicRecommendation() {
    // Create an array of song objects that contain the following information about a song: title, artist, album it comes from, release date, the song image url, the youtube link to play the song
    const songs = [{
        songTitle: 'telepatía',
        artistName: 'Kali Uchis',
        songAlbum: 'Sin Miedo (del Amor y Otros Demonios)',
        yearReleased: '2020',
        youtubeLinkToSong: 'https://www.youtube.com/embed/Dwzk-XZxZ4k'
    },
    {
        songTitle: 'She',
        artistName: 'Harry Styles',
        songAlbum: 'Fine Line',
        yearReleased: '2019',
        youtubeLinkToSong: 'https://www.youtube.com/embed/zQ3PeDGswz4'
    },
    {
        songTitle: 'Adiós',
        artistName: 'Selena Gomez',
        songAlbum: 'Revelación',
        yearReleased: '2021',
        youtubeLinkToSong: 'https://www.youtube.com/embed/r6pHsnGtwOA'
    },
    {
        songTitle: 'Call My Friends',
        artistName: 'Shawn Mendes',
        songAlbum: 'Wonder',
        yearReleased: '2020',
        youtubeLinkToSong: 'https://www.youtube.com/embed/rpFjfpBZ-qA'
    },
    {
        songTitle: 'my hair',
        artistName: 'Ariana Grande',
        songAlbum: 'positions',
        yearReleased: '2020',
        youtubeLinkToSong: 'https://www.youtube.com/embed/apeXKjfP_yE'
    },
    {
        songTitle: 'Pretty Savage',
        artistName: 'Blackpink',
        songAlbum: 'The Album',
        yearReleased: '2020',
        youtubeLinkToSong: 'https://www.youtube.com/embed/F8c8f2nK82w'
    },
    {
        songTitle: 'Cardigan',
        artistName: 'Taylor Swift',
        songAlbum: 'Folklore',
        yearReleased: '2020',
        youtubeLinkToSong: 'https://www.youtube.com/embed/A4CVcQz0PuQ'
    }];

    // Pick a random song object
    const song = getRandomElement(songs);

    // Add song to page
    const songContainer = document.getElementById('song-container');

    songContainer.innerText = '\n"' + song.songTitle + '" - ' + song.artistName + '\n'
        + song.songAlbum + ' (' + song.yearReleased + ')' + '\n\n'
        + 'To give the song a listen, click the video below!\n\n';


    // Create an iframe element to embed the YouTube video into the portfolio page    
    var songYT = document.createElement("iframe");

    songYT.setAttribute("width", "560");
    songYT.setAttribute("height", "315");
    songYT.setAttribute("src", song.youtubeLinkToSong);
    songYT.setAttribute("title", "YouTube video player");
    songYT.setAttribute("frameborder", "0");
    songYT.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    songYT.setAttribute("allowfullscreen", "true");

    songContainer.appendChild(songYT);
}

function translateText() {
    const message = document.getElementById('message').value;
    const languageCode = document.getElementById('language').value;

    const translatedMessageContainer = document.getElementById('translated-message-container');
    translatedMessageContainer.innerText = 'Translating...';

    const params = new URLSearchParams();
    params.append('message', message);
    params.append('languageCode', languageCode);

    fetch('/translate', {
        method: 'POST',
        body: params
    }).then(response => response.text())
        .then((translatedMessage) => {
            translatedMessageContainer.innerText = translatedMessage;
        });
}

/** Fetches a random fact from the server */
async function showRandomFact() {
    const responseFromServer = await fetch('/fact');
    const textFromResponse = await responseFromServer.json();

    const factContainer = document.getElementById('fact-container');
    const fact = getRandomElement(textFromResponse);

    factContainer.innerText = fact;
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}