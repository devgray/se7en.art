 window.addEventListener('load', function() {
    const loader = document.getElementById('page-loader');
    const content = document.getElementById('page-content');

    content.style.display = 'block';

    loader.style.display = 'none';
    loader.remove();
    });

const container = document.getElementById("text-container");

// 1. Define your array of random phrases
const phrases = [
  "a wild void appears...",
  "loafing page...",
  "sip back and meowlax...",
  "purrhaps you should scroll... jk",
  "meow meow meow meow...",
  "use code 'GREI' on Elgato.com for 5% off..."
];

let lastPhrase = "";
const staggerDelay = 80;    
const letterDuration = 300; 
const holdTime = 2000;      

// Force text color to white
container.style.color = "#000";

function getNewRandomPhrase() {
  // Filter out the last phrase so the text always changes on a new loop
  const availablePhrases = phrases.filter(p => p !== lastPhrase);
  const randomIndex = Math.floor(Math.random() * availablePhrases.length);
  
  lastPhrase = availablePhrases[randomIndex];
  return lastPhrase;
}

function startLoop() {
  // Pick a fresh phrase and split it into wrapped letters
  const currentText = getNewRandomPhrase();
  container.innerHTML = currentText
    .split("")
    .map(letter => `<span class="letter">${letter}</span>`)
    .join("");

  const letters = container.querySelectorAll(".letter");
  let finalLetterFinished = 0;

  // Clear any previous running animations on the letters
  letters.forEach(letter => {
    letter.getAnimations().forEach(anim => anim.cancel());
  });

  // Animate individual letters with a pure vertical bounce
  letters.forEach((letter, index) => {
    const entryFinishTime = (index * staggerDelay) + letterDuration;
    finalLetterFinished = Math.max(finalLetterFinished, entryFinishTime);

    letter.animate(
      [
        { opacity: 0, transform: "translateY(-50px)" }, 
        { opacity: 1, transform: "translateY(0)" }       
      ],
      {
        duration: letterDuration,
        delay: index * staggerDelay,
        easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        fill: "forwards"
      }
    );
  });

  // Wait for text to finish bouncing + hold time, then fade container out
  setTimeout(() => {
    container.getAnimations().forEach(anim => anim.cancel());

    const fadeOut = container.animate(
      [
        { opacity: 1 },
        { opacity: 0 }
      ],
      {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      }
    );

    fadeOut.onfinish = () => {
      fadeOut.cancel(); 
      container.style.opacity = "1";
      startLoop(); // Restart loop with a brand new phrase
    };
  }, finalLetterFinished + holdTime);
}

// Start the dynamic random loop
startLoop();