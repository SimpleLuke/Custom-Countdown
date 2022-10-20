const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

let countdownTitle = "";
let countdownDate = "";

// Set Date Input Min with Today's Date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

// Take Values from From input
const updateCountdown = (e) => {
  e.preventDafault();
};

// Event Listeners
countdownForm.addEventListener("submit", updateCountdown);
