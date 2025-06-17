let count = parseInt(localStorage.getItem("clickCount")) || 0;
const countEl = document.getElementById("count");
countEl.textContent = count;

function incrementCounter() {
  count++;
  localStorage.setItem("clickCount", count);
  countEl.textContent = count;
}

function resetCounter() {
  count = 0;
  localStorage.setItem("clickCount", count);
  countEl.textContent = count;
}
