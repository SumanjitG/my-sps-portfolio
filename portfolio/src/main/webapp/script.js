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
      '"My cabbages!" - Cabbage Merchant'];

  // Pick a random quote.
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  // Add it to the page.
  const quoteContainer = document.getElementById('quote-container');
  quoteContainer.innerText = quote;

}

function addRandomATLAQuote() {
  const quotes =
      ['"Appa, yip yip!" - Aang', 
      '"That\'s rough, buddy." - Prince Zuko', 
      '"My own mother thought I was a monster. She was right of course, but it still hurt." - Princess Azula', 
      '"When we hit our lowest point, we are open to the greatest change." - Aang', 
      '"It is important to draw wisdom from different places. If you take it only from one place it becomes stale and rigid." - Uncle Iroh',
      '"Love is brightest in the dark." - Katara',
      '"My cabbages!" - Cabbage Merchant'];

  // Pick a random quote.
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  // Add it to the page.
  const quoteContainer = document.getElementById('quote-container');
  quoteContainer.innerText = quote;

}

function addRandomMusicRecommendation(){
    // Create arrays for song titles and their track images; both are related by indices
    const songTitles = ['"telepatía" - Kali Uchis',
                        '"She" - Harry Styles',
                        '"Adiós" - Selena Gomez',
                        '"Call My Friends" - Shawn Mendes',
                        '"My Hair" - Ariana Grande'];
    const songImages = ['/images/telepatia.jpg', 
                        '/images/She.jpg',
                        '/images/Adios.png',
                        '/images/CallMyFriends.JPG',
                        '/images/MyHair.JPG'];

    // Pick a random song index and access the song title and corresponding image
    const songIndex = Math.floor(Math.random() * songTitles.length);
    const song = songTitles[songIndex];
    const songImage = songImages[songIndex];

    // Add song to page
    const songContainer = document.getElementById('song-container');
    songContainer.innerText = song + '\n';

    var chosenSong = document.createElement("img");
    chosenSong.setAttribute("src", songImage);
    chosenSong.setAttribute("width", "250");
    chosenSong.setAttribute("height", "250");
    chosenSong.setAttribute("align", "center");

    songContainer.appendChild(chosenSong);
}