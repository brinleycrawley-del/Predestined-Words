const input = document.getElementById("poemInput");
const originalOutput = document.getElementById("originalOutput");
const systemOutput = document.getElementById("systemOutput");

// words the system might "optimize" into
const replacements = [
  "efficiency",
  "clarity",
  "engagement",
  "optimized",
  "refined",
  "improved",
  "acceptable",
  "approved"
];

function alterText(text) {
  let words = text.split(" ");

  return words.map(word => {
    let rand = Math.random();

    // 20% chance to replace word
    if (rand < 0.2) {
      return replacements[Math.floor(Math.random() * replacements.length)];
    }

    // 15% chance to delete word
    if (rand < 0.35) {
      return "";
    }

    // 15% chance to strike through word
    if (rand < 0.5) {
      return `<span class="glitch">${word}</span>`;
    }

    return word;
  }).join(" ");
}

input.addEventListener("input", () => {
  const text = input.value;

  // show original (faded)
  originalOutput.textContent = text;

  // system version (altered)
  systemOutput.innerHTML = alterText(text);
});