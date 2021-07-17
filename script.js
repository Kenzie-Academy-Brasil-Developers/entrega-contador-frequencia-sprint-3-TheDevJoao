const button = document.getElementById('countButton');

button.addEventListener('click', function () {
  countLetters();
  countWords();
});

// ****************** FUNCTIONS ******************

function countLetters() {
  let typedText = document.getElementById('textInput').value;
  typedText = typedText.toLowerCase();
  typedText = typedText.replace(/[^a-z'\s]+/g, '');

  const letterCounts = {};

  for (let i = 0; i < typedText.length; i++) {
    currentLetter = typedText[i];

    if (letterCounts[currentLetter] === undefined) {
      letterCounts[currentLetter] = 1;
    } else {
      letterCounts[currentLetter]++;
    }
  }
  for (let letter in letterCounts) {
    const span = document.createElement('span');
    const textContent = `"${letter}": ${letterCounts[letter]}, `;
    span.innerText = textContent;
    const letters = document.getElementById('lettersDiv');
    letters.appendChild(span);
  }
}

function countWords() {
  let typedText = document.getElementById('textInput').value;
  typedText = typedText.toLowerCase();
  typedText = typedText.replace(/[^a-z'\s]+/g, '');
  words = typedText.split(/\s/);

  const wordCounts = {};
  for (let i = 0; i < words.length; i++) {
    currentWords = typedText[i];
    if (wordCounts[words[i]] === undefined) {
      wordCounts[words[i]] = 1;
    } else {
      wordCounts[words[i]] = wordCounts[words[i]] + 1;
    }
  }

  for (let word in wordCounts) {
    let span = document.createElement('span');
    const textContent = `Total de palavras: "${word}": ${wordCounts[word]}, `;
    span.innerText = textContent;
    const wordz = document.getElementById('wordsDiv');
    wordz.appendChild(span);
  }
}
