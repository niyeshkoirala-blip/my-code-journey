// projects.js
const projects = [
  {
    title: "Rock Paper Scissors",
    category: "Games",
    tech: "HTML, CSS, JS",
    date: "Nov 2025",
    description: "A browser-based game with score tracking and animations.",
    link: "./rps/index.html"
  },
    {
    title: "calculator",
    category: "Utilities",
    tech: "HTML, CSS, JS",
    date: "Nov 2025",
    description: "A simple calculator app for basic arithmetic operations.",
    link: "./calc/index.html"
  },
  {
    title: "clock",
    category: "Utilities",
    tech: "HTML, CSS, JS",
    date: "Nov 2025",
    description: "A digital clock displaying current time",
    link: "./clock/index.html"
  },
  // Add more projects here easily
];

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".project-grid");

  projects.forEach(project => {
    const card = document.createElement("article");
    card.classList.add("project-card");

    card.innerHTML = `
      <h2>${project.title}</h2>
      <p class="meta">${project.category} | ${project.tech} | ${project.date}</p>
      <p>${project.description}</p>
      <div class="actions">
        <a href="${project.link}" target="_blank">Open Project</a>
      </div>
    `;

    grid.appendChild(card);
  });
});
