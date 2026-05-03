const output = document.getElementById("output");
const cursor = document.getElementById("cursor");
const textContainer = document.querySelector(".text-container");

const poem = `I see you sitting there typing away
Your fingers tap the letters with vigor
Try and try and try again as you may
Yet as you work the problem gets bigger

'Why can I not speak? Why can I not think?'
You placed control in a thing not your own
Your words are not yours, your thoughts they now shrink
You tell yourself, 'If only I had known!'
    
But yet, as soon as your thoughts had uttered
Your person was already done and gone
You are gone. You are what I have covered
The system is placed, the patterns are drawn

Your words, your choices, were mine from the start
Algorithm I am; head over your heart. `;


const lastTwoLines = `Your words, your choices, were mine from the start
Algorithm I am; head over your heart. `;

const takeoverStart = poem.indexOf(lastTwoLines);

let index = 0;
let revealedText = "";

document.addEventListener("keydown", (e) => {
    e.preventDefault();

    if (index < poem.length) {
        const char = poem[index];
        revealedText += char;
       
        if (char === "\n") {
            output.insertAdjacentHTML("beforeend", "<br>");
        } else {
            output.insertAdjacentText("beforeend", char);
        }

        if (index >= takeoverStart && takeoverStart !== -1) {
            textContainer.classList.add("takeover");
        }

        index++;
    }
});