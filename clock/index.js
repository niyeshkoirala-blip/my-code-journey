const min = document.querySelector(".min");
const sec = document.querySelector(".seconds");
const hour = document.querySelector(".hour");
const interval = document.querySelector(".interval");

function updateClock() {
  const now = new Date();
  console.log("haha")

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Determine AM/PM
  const ampm = hours >= 12 ? "pm" : "am";

  // Convert to 12-hour format
  hours = hours % 12 || 12

  // Add leading zeros
  hours = hours < 10 ? "0" + hours : hours
  minutes = minutes < 10 ? "0" + minutes : minutes
  seconds = seconds < 10 ? "0" + seconds : seconds

  // Update DOM
  hour.innerText = hours;
  min.innerText = minutes;
  sec.innerText = seconds;
  interval.innerText = ampm;
}

// Call once immediately to avoid delay
updateClock();

// Update clock every 1000ms (1 second)
setInterval(updateClock, 1000);
