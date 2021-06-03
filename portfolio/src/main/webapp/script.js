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
