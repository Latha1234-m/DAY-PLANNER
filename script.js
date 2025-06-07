const planner = document.getElementById("planner");
const hours = [
  "9 AM", "10 AM", "11 AM", "12 PM",
  "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"
];

const now = new Date();
const currentHour = now.getHours();

hours.forEach((label, i) => {
  const hour24 = i + 9;
  const timeClass =
    hour24 < currentHour ? "past" :
    hour24 === currentHour ? "present" : "future";

  const savedTask = localStorage.getItem(`task-${hour24}`) || "";

  const block = document.createElement("div");
  block.className = "time-block";

  block.innerHTML = `
    <div class="hour">${label}</div>
    <textarea class="${timeClass}" data-hour="${hour24}">${savedTask}</textarea>
    <button class="saveBtn" data-hour="${hour24}">💾</button>
  `;

  planner.appendChild(block);
});

planner.addEventListener("click", function (e) {
  if (e.target.classList.contains("saveBtn")) {
    const hour = e.target.getAttribute("data-hour");
    const text = document.querySelector(`textarea[data-hour="${hour}"]`).value;
    localStorage.setItem(`task-${hour}`, text);
    alert("Task saved!");
  }
});

// ✅ Clear All Button
document.getElementById("clearBtn").addEventListener("click", () => {
  localStorage.clear();
  alert("All tasks cleared!");
  location.reload();
});

// ✅ Show Current Date
document.getElementById("date").innerText = new Date().toDateString();

// ✅ Inspirational Quotes
const quotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Discipline is the bridge between goals and accomplishment.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it."
];

document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];

// ✅ Dark Mode Toggle
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
