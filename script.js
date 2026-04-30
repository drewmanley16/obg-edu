const deadlines = [
  {
    title: "Idea Submission",
    date: new Date("2026-05-06T23:59:59-07:00"),
    label: "Wednesday, May 6, 2026",
    summary: "Initial branch project idea is due before Week 5."
  },
  {
    title: "Rough Draft",
    date: new Date("2026-05-13T23:59:59-07:00"),
    label: "Wednesday, May 13, 2026",
    summary: "A rough draft is due one week after the idea submission."
  },
  {
    title: "Final Submission",
    date: new Date("2026-05-20T23:59:59-07:00"),
    label: "Wednesday, May 20, 2026",
    summary: "Final assignment package is due one week after the rough draft."
  }
];

const branches = [
  {
    id: "marketing",
    title: "Marketing",
    intro: "Assignment details for the Marketing branch will live here once you send them over."
  },
  {
    id: "venture-capital",
    title: "Venture Capital",
    intro: "Assignment details for the Venture Capital branch will live here once you send them over."
  },
  {
    id: "research",
    title: "Research",
    intro: "Assignment details for the Research branch will live here once you send them over."
  },
  {
    id: "engineering",
    title: "Engineering",
    intro: "Assignment details for the Engineering branch will live here once you send them over."
  }
];

const todoStorageKey = "obg-education-todos";
const retiredDefaultTodoTexts = [
  "Collect branch assignment explanations",
  "Confirm Week 5 submission format",
  "Remind students about idea deadline"
];
const defaultTodos = [
  { id: crypto.randomUUID(), text: "Schedule 3 networking chats", branch: "All Branches", done: false }
];

const formatNumber = (number) => String(number).padStart(2, "0");

function getNextDeadline(now = new Date()) {
  return deadlines.find((deadline) => deadline.date > now) || deadlines[deadlines.length - 1];
}

function updateCountdown() {
  const now = new Date();
  const nextDeadline = getNextDeadline(now);
  const distance = Math.max(0, nextDeadline.date - now);

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.querySelector("#home-title").textContent = nextDeadline.title;
  document.querySelector("#next-deadline-copy").textContent = nextDeadline.label;
  document.querySelector("#days").textContent = formatNumber(days);
  document.querySelector("#hours").textContent = formatNumber(hours);
  document.querySelector("#minutes").textContent = formatNumber(minutes);
  document.querySelector("#seconds").textContent = formatNumber(seconds);
}

function renderTimeline() {
  const now = new Date();
  const start = new Date("2026-04-29T00:00:00-07:00");
  const end = deadlines[deadlines.length - 1].date;
  const progress = Math.min(100, Math.max(0, ((now - start) / (end - start)) * 100));
  const nextDeadline = getNextDeadline(now);

  document.querySelector("#timeline-progress").style.width = `${progress}%`;
  document.querySelector("#timeline-position").textContent =
    now > end ? "All tracked deadlines have passed." : `${Math.round(progress)}% of the assignment sprint has passed.`;

  const milestones = document.querySelector("#milestones");
  milestones.innerHTML = deadlines
    .map((deadline) => {
      const isDone = now > deadline.date;
      const isNext = deadline.title === nextDeadline.title && !isDone;
      const status = isDone ? "Complete" : isNext ? "Next Up" : "Upcoming";
      const statusClass = isDone ? "done" : isNext ? "next" : "";

      return `
        <article class="milestone ${isNext ? "current" : ""}">
          <span class="status-pill ${statusClass}">${status}</span>
          <h3>${deadline.title}</h3>
          <p class="milestone-date">${deadline.label}</p>
          <p>${deadline.summary}</p>
        </article>
      `;
    })
    .join("");
}

function renderBranchPages() {
  branches.forEach((branch) => {
    const page = document.querySelector(`#${branch.id}`);
    page.innerHTML = `
      <section class="branch-hero">
        <p class="eyebrow">Branch Track</p>
        <h2 id="${branch.id}-title">${branch.title}</h2>
        <p>${branch.intro}</p>
      </section>
      <section class="branch-grid" aria-label="${branch.title} assignment checkpoints">
        ${deadlines
          .map(
            (deadline) => `
              <article class="assignment-card">
                <span class="status-pill">${deadline.title}</span>
                <h3>${deadline.label}</h3>
                <p>Add the ${branch.title.toLowerCase()} instructions for this checkpoint here.</p>
              </article>
            `
          )
          .join("")}
      </section>
      <section class="branch-placeholder">
        <p class="eyebrow">Assignment Explanation</p>
        <h3>Ready for details</h3>
        <p>When you send the exact prompt, rubric, deliverables, or notes for ${branch.title}, this tab can be updated with the full assignment explanation.</p>
      </section>
    `;
  });
}

function getTodos() {
  const stored = localStorage.getItem(todoStorageKey);
  if (!stored) {
    localStorage.setItem(todoStorageKey, JSON.stringify(defaultTodos));
    return defaultTodos;
  }

  try {
    const todos = JSON.parse(stored);
    const hasOnlyRetiredDefaults =
      todos.length === retiredDefaultTodoTexts.length &&
      todos.every((todo) => retiredDefaultTodoTexts.includes(todo.text));

    if (hasOnlyRetiredDefaults) {
      localStorage.setItem(todoStorageKey, JSON.stringify(defaultTodos));
      return defaultTodos;
    }

    return todos;
  } catch {
    localStorage.setItem(todoStorageKey, JSON.stringify(defaultTodos));
    return defaultTodos;
  }
}

function saveTodos(todos) {
  localStorage.setItem(todoStorageKey, JSON.stringify(todos));
}

function renderTodos() {
  const list = document.querySelector("#todo-list");
  const todos = getTodos();

  if (!todos.length) {
    list.innerHTML = `<li class="todo-item"><span></span><div>No todos yet.</div><span></span></li>`;
    return;
  }

  list.innerHTML = todos
    .map(
      (todo) => `
        <li class="todo-item ${todo.done ? "done" : ""}" data-id="${todo.id}">
          <input type="checkbox" ${todo.done ? "checked" : ""} aria-label="Mark ${todo.text} complete" />
          <div>
            <div class="todo-text">${todo.text}</div>
            <span class="todo-branch">${todo.branch}</span>
          </div>
          <button class="delete-todo" type="button">Delete</button>
        </li>
      `
    )
    .join("");
}

function setupTodos() {
  document.querySelector("#todo-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#todo-input");
    const branch = document.querySelector("#todo-branch");
    const text = input.value.trim();

    if (!text) return;

    const todos = getTodos();
    todos.unshift({ id: crypto.randomUUID(), text, branch: branch.value, done: false });
    saveTodos(todos);
    input.value = "";
    renderTodos();
  });

  document.querySelector("#todo-list").addEventListener("click", (event) => {
    const item = event.target.closest(".todo-item");
    if (!item?.dataset.id) return;

    const todos = getTodos();
    const index = todos.findIndex((todo) => todo.id === item.dataset.id);
    if (index === -1) return;

    if (event.target.matches("input[type='checkbox']")) {
      todos[index].done = event.target.checked;
      saveTodos(todos);
      renderTodos();
    }

    if (event.target.matches(".delete-todo")) {
      todos.splice(index, 1);
      saveTodos(todos);
      renderTodos();
    }
  });
}

function setupTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
      document.querySelectorAll(".page").forEach((page) => page.classList.remove("active-page"));
      tab.classList.add("active");
      document.querySelector(`#${tab.dataset.tab}`).classList.add("active-page");
    });
  });
}

renderBranchPages();
renderTimeline();
renderTodos();
setupTabs();
setupTodos();
updateCountdown();
setInterval(updateCountdown, 1000);
setInterval(renderTimeline, 60 * 1000);
