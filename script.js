let words = document.querySelectorAll(".word");

words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => { // Fixed inner variable name
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

// Call `changeText` periodically every 3 seconds
setInterval(changeText, 3000);


//    Circle Skill //


const circles = document.querySelectorAll('.circle');

circles.forEach(elem => {
    // Get the attributes and parse them as integers
    const dots = parseInt(elem.getAttribute("data-dots"), 10);
    const marked = parseInt(elem.getAttribute("data-percent"), 10);
    
    // Calculate the number of marked points
    const percent = Math.floor((dots * marked) / 100);
    const rotate = 360 / dots;
    let points = "";

    // Generate points dynamically
    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    // Insert points into the circle
    elem.innerHTML = points;

    // Add 'marked' class to the required percentage of points
    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});
