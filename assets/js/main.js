input.addEventListener("keydown", (e) => {
  e.preventDefault();
  
  setTimeout(() => {
  input.value += poem[index];
}, 50);

if (Math.random() < 0.2) return;

  if (e.key === "Backspace") {
    input.value = input.value.slice(0, -1);
    index = Math.max(0, index - 1);
    return;
  }

  if (index >= poem.length) {
    index = 0;
  }

  input.value += poem[index];
  index++;
});