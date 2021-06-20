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
    const quote = quotes[Math.floor(Math.random() * quotes.length)];

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
        albumCoverURL: '/images/telepatia.jpg',
        youtubeLinkToSong: 'https://www.youtube.com/watch?v=Dwzk-XZxZ4k'
    },
    {
        songTitle: 'She',
        artistName: 'Harry Styles',
        songAlbum: 'Fine Line',
        yearReleased: '2019',
        albumCoverURL: '/images/She.jpg',
        youtubeLinkToSong: 'https://www.youtube.com/watch?v=zQ3PeDGswz4'
    },
    {
        songTitle: 'Adiós',
        artistName: 'Selena Gomez',
        songAlbum: 'Revelación',
        yearReleased: '2021',
        albumCoverURL: '/images/Adios.png',
        youtubeLinkToSong: 'https://www.youtube.com/watch?v=9H_368c2Hzw'
    },
    {
        songTitle: 'Call My Friends',
        artistName: 'Shawn Mendes',
        songAlbum: 'Wonder',
        yearReleased: '2020',
        albumCoverURL: '/images/CallMyFriends.JPG',
        youtubeLinkToSong: 'https://www.youtube.com/watch?v=rpFjfpBZ-qA'
    },
    {
        songTitle: 'my hair',
        artistName: 'Ariana Grande',
        songAlbum: 'positions',
        yearReleased: '2020',
        albumCoverURL: '/images/MyHair.JPG',
        youtubeLinkToSong: 'https://www.youtube.com/watch?v=Sujm6756pZU'
    }];

    // Pick a random song index and access a song object
    const songIndex = Math.floor(Math.random() * songs.length);
    const song = songs[songIndex];

    // Add song to page
    const songContainer = document.getElementById('song-container');

    songContainer.innerText = '\n"' + song.songTitle + '" - ' + song.artistName + '\n'
        + song.songAlbum + ' (' + song.yearReleased + ')' + '\n\n'
        + 'To listen to the song on YouTube, click the photo of the song below!\n\n';

    var chosenSong = document.createElement("img");
    var songLink = document.createElement("a");

    chosenSong.setAttribute("src", song.albumCoverURL);
    chosenSong.setAttribute("width", "250");
    chosenSong.setAttribute("height", "250");
    chosenSong.setAttribute("align", "center");

    console.log(song.albumCoverURL);

    // Connect YouTube link to image and add into page
    songLink.setAttribute("href", song.youtubeLinkToSong);
    songLink.appendChild(chosenSong);

    songContainer.appendChild(songLink);
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

    console.log(message);
    console.log(translatedMessage);
}