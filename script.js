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
    intro:
      "Operate as a 3-person team on one assigned crypto protocol and produce a coordinated content drop as if shipping live under OBG.",
    themeClass: "marketing-hero",
    roles: ["Editorial", "Creative", "Community & Growth"],
    assignment: {
      title: "Crypto Company Content Drop",
      overview:
        "OBG's marketing branch produces institutional-quality content. Your assignment is to work as a three-person team across Editorial, Creative, and Community & Growth on one assigned crypto protocol. The final product should feel coordinated, polished, and ready to ship under OBG.",
      requirementsTitle: "What to Submit",
      requirements: [
        "Editorial: write a 600-800 word article about the company that matches OBG's writing style.",
        "Editorial: include a one-paragraph version that captures the main point, like the part someone would screenshot.",
        "Editorial: write a three-tweet thread where tweet one grabs attention, tweet two builds the case, and tweet three lands the takeaway.",
        "Editorial: write two short briefs of about 250 words each: one telling Creative what visuals to make and why, and one telling Growth what to focus on.",
        "Creative: make three social media graphics: a banner image, the cover slide for an Instagram carousel, and a quote card with a key line from the article.",
        "Creative: redesign one section of the company's actual website with notes on what changed and why.",
        "Creative: write a short paragraph for each piece explaining your choices.",
        "Community & Growth: plan how the content reaches people on X, Instagram, and LinkedIn.",
        "Community & Growth: for each platform, include how often to post, when to post, and two different versions of each post.",
        "Community & Growth: set real number goals, such as 500 likes, 50 replies, or 20 profile clicks.",
        "Community & Growth: pitch one interactive idea, such as an AMA with the founder, meme contest, or thread challenge, and explain how you would run it."
      ],
      diligence: [
        "Each member prepares a one-page diligence note before production begins.",
        "Diligence notes should cover the company, audience, opportunity, risks, and why the protocol matters.",
        "All three roles must complete diligence notes."
      ],
      companies: ["Ethena", "Hyperliquid", "Morpho", "EigenLayer", "Jito", "Across", "Or propose your own"],
      workflow: [
        "Everyone prepares their own one-page brief on the company the team chooses.",
        "Editorial gives Creative the key information and framing.",
        "Creative builds the visual content from the editorial angle.",
        "Community & Growth decides how to ship the content to end viewers for the best exposure."
      ],
      expectations: [
        "Make the drop feel coordinated across writing, visuals, and distribution.",
        "Use specific goals and concrete platform plans.",
        "Keep the tone polished enough to represent OBG publicly.",
        "Show that the team understands the protocol, its audience, and why anyone should care."
      ]
    }
  },
  {
    id: "venture-capital",
    title: "Venture Capital",
    intro:
      "Build professional investment theses with clear recommendations, defensible data, and VC-style reasoning.",
    themeClass: "venture-hero",
    projects: [
      {
        type: "thesis",
        title: "Investment Thesis - Perpetual DEX Competitor to Hyperliquid",
        team: "Carsen + Josh",
        subtitle: "Perp DEX Competitor Thesis",
        objective:
          "Hyperliquid currently holds near-monopoly dominance in the decentralized perpetual futures market. Select one competing perp DEX protocol and build a professional investment thesis on it, as if presenting to a VC fund.",
        submit: [
          "A written investment thesis document: PDF or Word Doc, 2-4 pages.",
          "Minimum 5 on-chain or verifiable data points comparing your protocol to Hyperliquid.",
          "A clear recommendation: invest, with your reasoning."
        ],
        sections: [
          "What Is the Protocol: overview, founding team, chain, token, and how it works.",
          "Utility: mechanics of the perp mechanism, liquidity model, fee structure, and token role.",
          "Differentiation: what makes it unique in the perp DEX space and what it does better than Hyperliquid.",
          "Comparables vs. Hyperliquid: side-by-side data table covering volume, TVL, OI, revenue, and active users.",
          "Investment Thesis: entry rationale, value accrual, catalysts, risks, bull case, bear case, and recommendation.",
          "Macro Reasoning: market trends, regulatory environment, CEX vs. DEX trajectory, and 1-3 year outlook."
        ],
        protocolSuggestions: ["dYdX v4", "GMX v2", "Drift Protocol", "Vertex Protocol", "Aevo", "RabbitX", "Ostium"],
        dataSources: [
          "DefiLlama",
          "Dune Analytics",
          "TokenTerminal",
          "Messari",
          "CoinGecko",
          "Protocol-native dashboards"
        ],
        reminders: [
          "Avoid hype language.",
          "Back every claim with data.",
          "Read the protocol's own docs before reading third-party commentary."
        ]
      },
      {
        type: "thesis",
        title: "Solana vs. Ethereum: Long and Short Investment Thesis Project",
        team: "Miles + Blake",
        subtitle: "Long / Short Protocol Thesis",
        objective:
          "Compare Solana and Ethereum, then take a clear position: long one protocol and short the other. The analysis should evaluate both projects across multiple dimensions and conclude with a specific recommendation backed by data and reasoning.",
        sections: [
          "Protocol Overview and Fundamentals: founding team and key figures, launch date and chain specifications, technical overview, and current market position.",
          "Utility and Mechanics: primary use cases, smart contract functionality, liquidity models and capital flows, fee structures and cost comparisons, and native token roles.",
          "Differentiation and Competitive Moat: what makes each protocol unique and defensible, key advantages over competitors, shared similarities, and technological or network moats.",
          "Macro and Market Analysis: market trends favoring each protocol, regulatory environment and headwinds, 1-3 year outlook for each ecosystem, and broader crypto adoption trends.",
          "Investment Thesis: state whether you are long Solana and short Ethereum or vice versa; explain entry rationale, why now, value accrual, catalysts, risks, bull case, bear case, and final recommendation."
        ],
        evaluation: [
          "Research depth.",
          "Quality of reasoning.",
          "Use of data to support claims.",
          "Clarity of long and short positions.",
          "Coverage of scalability, costs, transaction speed, institutional adoption, and smart contract functionality."
        ],
        reminders: [
          "Take a clear long and short position.",
          "Support the recommendation with data and reasoning.",
          "Make the conclusion specific enough to be investment-useful."
        ]
      }
    ]
  },
  {
    id: "research",
    title: "Research",
    intro:
      "Build an Artemis dashboard and write a data-backed research report explaining a major crypto protocol, its importance, and its biggest risk.",
    themeClass: "research-hero",
    projects: [
      {
        protocol: "AAVE",
        token: "AAVE",
        sector: "Lending & Borrowing Sector",
        team: "Dheer + Katrina",
        objective:
          "Build an Artemis dashboard tracking Aave's on-chain activity and write a 3-page research report interpreting what the data shows. By the end, you should be able to explain what Aave is, why it matters, and what its biggest risk is, backed entirely by data.",
        tools: ["Artemis dashboard", "Crypto news sources: The Block, Blockworks, Decrypt, Galaxy, etc."],
        dashboard: [
          "Aave token price over time",
          "TVL over time",
          "Total borrows outstanding",
          "Active users over time",
          "2 metrics of your choice that you can defend as meaningful",
          "Valuation multiple of your choice"
        ],
        report: [
          "Page 1 - What is Aave: explain what a crypto lending protocol is in plain English, what problem Aave solves, who uses it, and why it is the dominant protocol in its sector. No jargon without explanation.",
          "Page 2 - What the Data Shows: interpret your dashboard. Do not just describe the charts; explain what they mean. Identify the three most important trends in your data. Find at least two specific dates or events visible in the data and explain what caused them.",
          "Page 3 - Risk and Open Questions: identify the single biggest risk to Aave. Explain the mechanism of that risk in simple terms. Find at least one real event that illustrates it, with the Kelp DAO incident in April as a starting point. End with one research question you would investigate if joining the full research program."
        ],
        startingPoints: [
          "Aave documentation at aave.com",
          "The FTX collapse and its effect on Aave: November 2022",
          "The USDC depeg and its effect on Aave: March 2023",
          "The CRV bad debt incident: November 2022",
          "Kelp DAO incident: April 2026"
        ],
        requirements: [
          "Dashboard must have a minimum of 7 charts.",
          "Every chart must have a clean title and legible date range.",
          "Screenshots of the dashboard must be submitted alongside the writeup.",
          "Every claim in the writeup must be supported by data.",
          "No chart should appear in the writeup without being interpreted in at least one sentence.",
          "Report must be 3 or more pages.",
          "Prepare a 5-minute presentation to OBG."
        ]
      },
      {
        protocol: "HYPERLIQUID",
        token: "HYPE",
        sector: "Perps Sector",
        team: "Fatima + Nikita",
        objective:
          "Build an Artemis dashboard tracking Hyperliquid's on-chain activity and write a 3-page research report interpreting what the data shows. By the end, you should be able to explain what Hyperliquid is, why it matters, and what its biggest risk is, backed entirely by data.",
        tools: ["Artemis dashboard + data", "Crypto news sources: The Block, Blockworks, Decrypt, Galaxy"],
        dashboard: [
          "HYPE token price over time",
          "Daily trading volume",
          "Active users over time",
          "Total open interest",
          "2 metrics of your choice that you can defend as meaningful",
          "Valuation multiple of your choice"
        ],
        report: [
          "Page 1 - What is Hyperliquid: explain what a perpetual futures exchange is in plain English, what problem Hyperliquid solves, who uses it, and why it has grown. No jargon without explanation.",
          "Page 2 - What the Data Shows: interpret your dashboard. Do not just describe the charts; explain what they mean. Identify the three most important trends in your data. Find at least two specific dates or events visible in the data and explain what caused them.",
          "Page 3 - Risk and Open Questions: identify the single biggest risk to Hyperliquid. Explain the mechanism of that risk in simple terms. Find at least one real event that illustrates it, with the JELLY incident in March 2025 as a starting point. End with one research question you would investigate if joining the full research program."
        ],
        startingPoints: [
          "Hyperliquid whitepaper and documentation at hyperliquid.xyz",
          "The HYPE airdrop: December 2024",
          "The JELLY incident: March 2025",
          "Announcement of HIP-4 and development of HIP-3"
        ],
        requirements: [
          "Dashboard must have a minimum of 7 charts.",
          "Every chart must have a clean title and legible date range.",
          "Screenshots of the dashboard must be submitted alongside the writeup.",
          "Every claim in the writeup must be supported by data.",
          "No chart should appear in the writeup without being interpreted in at least one sentence.",
          "Report must be 3 or more pages.",
          "Prepare a 5-minute presentation to OBG."
        ]
      }
    ]
  },
  {
    id: "engineering",
    title: "Engineering",
    intro: "Work in pairs to design, build, deploy, and document a blockchain-based engineering solution.",
    themeClass: "engineering-hero",
    partners: ["Kellen + Kevin", "Matt + Bardia"],
    assignment: {
      title: "Blockchain Engineering Project Assignment",
      overview:
        "This is a duo project where you and a partner will design, build, and document a blockchain-based engineering solution. The goal is to combine smart contract development with real-world engineering thinking. Focus on building something that solves a practical problem, not just a basic demo.",
      requirements: [
        "Build and deploy a smart contract.",
        "Any ecosystem is allowed, including Ethereum, Solana, Base, or another chain.",
        "Your project must be related to engineering: systems, infrastructure, data, automation, or a similar practical area.",
        "Use proper Git workflows with feature branches, meaningful commits, and at least a few pull requests.",
        "Submit a GitHub repository with a well-written README."
      ],
      readme: [
        "Project overview: what problem are you solving, and why does it matter?",
        "Technical architecture: what technologies are used, and how does the system flow work?",
        "Smart contract explanation: what does your contract do, and what are the key functions and logic?",
        "Setup instructions: how to run your project locally and interact with the contract.",
        "Team contributions: who worked on what."
      ],
      expectations: [
        "Show clear engineering thinking.",
        "Demonstrate real use case potential.",
        "Have clean, readable code.",
        "Be easy to understand from the README alone."
      ],
      ideas: [
        "Decentralized Supply Chain Tracker: track parts or goods across stages with on-chain verification.",
        "Equipment Usage Logger: record and verify usage of shared machines.",
        "Energy Tracking + Incentives: log energy usage and reward efficient behavior with tokens.",
        "File Verification System: hash files and store proofs on-chain for integrity verification.",
        "Maintenance Log System: create immutable records for machine or service maintenance.",
        "IoT + Blockchain Integration: simulate sensor data and store verified events on-chain."
      ],
      submission: [
        "Submit a GitHub repo link.",
        "Make sure the project runs or is clearly demoable.",
        "Make sure the README is complete and easy to follow."
      ]
    }
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
  document.querySelector("#clock-days").textContent = formatNumber(days);
  document.querySelector("#days").textContent = formatNumber(days);
  document.querySelector("#hours").textContent = formatNumber(hours);
  document.querySelector("#minutes").textContent = formatNumber(minutes);
  document.querySelector("#seconds").textContent = formatNumber(seconds);

  const previousDeadline = [...deadlines].reverse().find((deadline) => deadline.date < now);
  const startDate = previousDeadline?.date || new Date("2026-04-29T00:00:00-07:00");
  const totalWindow = nextDeadline.date - startDate;
  const elapsed = now - startDate;
  const ringProgress = Math.min(100, Math.max(0, (elapsed / totalWindow) * 100));
  document.querySelector("#clock-ring").style.setProperty("--clock-progress", `${ringProgress}%`);
}

function listMarkup(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderProjectBrief(project) {
  if (project.type === "thesis") {
    return renderThesisBrief(project);
  }

  return `
    <article class="project-brief">
      <div class="project-heading">
        <div>
          <p class="eyebrow">${project.sector}</p>
          <h2>${project.protocol}</h2>
          <p>${project.objective}</p>
        </div>
        <div class="token-card">
          <span>Token</span>
          <strong>${project.token}</strong>
          <small>${project.team}</small>
        </div>
      </div>

      <div class="research-grid">
        <section>
          <h3>Tools</h3>
          ${listMarkup(project.tools)}
        </section>
        <section>
          <h3>Dashboard Requirements</h3>
          ${listMarkup(project.dashboard)}
        </section>
        <section>
          <h3>3-Page Report Requirements</h3>
          ${listMarkup(project.report)}
        </section>
        <section>
          <h3>Research Starting Points</h3>
          ${listMarkup(project.startingPoints)}
        </section>
      </div>

      <section class="requirements-strip">
        <h3>Final Requirements</h3>
        ${listMarkup(project.requirements)}
      </section>
    </article>
  `;
}

function renderThesisBrief(project) {
  return `
    <article class="project-brief thesis-brief">
      <div class="project-heading">
        <div>
          <p class="eyebrow">${project.subtitle}</p>
          <h2>${project.title}</h2>
          <p>${project.objective}</p>
        </div>
        <div class="token-card">
          <span>Team</span>
          <strong>${project.team}</strong>
          <small>VC Thesis</small>
        </div>
      </div>

      <div class="research-grid">
        ${
          project.submit
            ? `<section>
                <h3>What to Submit</h3>
                ${listMarkup(project.submit)}
              </section>`
            : ""
        }
        <section>
          <h3>Required Sections</h3>
          ${listMarkup(project.sections)}
        </section>
        ${
          project.protocolSuggestions
            ? `<section>
                <h3>Protocol Suggestions</h3>
                ${listMarkup(project.protocolSuggestions)}
              </section>`
            : ""
        }
        ${
          project.dataSources
            ? `<section>
                <h3>Recommended Data Sources</h3>
                ${listMarkup(project.dataSources)}
              </section>`
            : ""
        }
        ${
          project.evaluation
            ? `<section>
                <h3>Evaluation Criteria</h3>
                ${listMarkup(project.evaluation)}
              </section>`
            : ""
        }
      </div>

      <section class="requirements-strip">
        <h3>Keep in Mind</h3>
        ${listMarkup(project.reminders)}
      </section>
    </article>
  `;
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

    if (branch.projects) {
      page.innerHTML = `
        <section class="branch-hero ${branch.themeClass || ""}">
          <p class="eyebrow">Branch Track</p>
          <h2 id="${branch.id}-title">${branch.title}</h2>
          <p>${branch.intro}</p>
          <div class="partner-row" aria-label="${branch.title} teams">
            ${branch.projects.map((project) => `<span>${project.team}</span>`).join("")}
          </div>
        </section>

        <section class="project-list">
          ${branch.projects.map((project) => renderProjectBrief(project)).join("")}
        </section>

        <section class="branch-grid" aria-label="${branch.title} assignment checkpoints">
          ${deadlines
            .map(
              (deadline) => `
                <article class="assignment-card">
                  <span class="status-pill">${deadline.title}</span>
                  <h3>${deadline.label}</h3>
                  <p>${deadline.summary}</p>
                </article>
              `
            )
            .join("")}
        </section>
      `;
      return;
    }

    if (branch.assignment) {
      page.innerHTML = `
        <section class="branch-hero ${branch.themeClass || ""}">
          <p class="eyebrow">Branch Track</p>
          <h2 id="${branch.id}-title">${branch.title}</h2>
          <p>${branch.intro}</p>
          <div class="partner-row" aria-label="${branch.title} groups">
            ${(branch.partners || branch.roles || []).map((item) => `<span>${item}</span>`).join("")}
          </div>
        </section>

        <section class="assignment-detail">
          <div class="detail-header">
            <p class="eyebrow">Assignment</p>
            <h2>${branch.assignment.title}</h2>
          </div>
          <p class="detail-lead">${branch.assignment.overview}</p>
          <div class="detail-grid">
            <article>
              <h3>${branch.assignment.requirementsTitle || "Core Requirements"}</h3>
              ${listMarkup(branch.assignment.requirements)}
            </article>
            ${
              branch.assignment.readme
                ? `<article>
                    <h3>README Requirements</h3>
                    ${listMarkup(branch.assignment.readme)}
                  </article>`
                : ""
            }
            ${
              branch.assignment.diligence
                ? `<article>
                    <h3>Diligence Notes</h3>
                    ${listMarkup(branch.assignment.diligence)}
                  </article>`
                : ""
            }
            <article>
              <h3>Project Expectations</h3>
              ${listMarkup(branch.assignment.expectations)}
            </article>
            ${
              branch.assignment.submission
                ? `<article>
                    <h3>Submission</h3>
                    ${listMarkup(branch.assignment.submission)}
                  </article>`
                : ""
            }
          </div>
        </section>

        <section class="idea-section">
          <p class="eyebrow">${branch.assignment.ideas ? "Sample Project Ideas" : "Company Suggestions"}</p>
          <h2>${branch.assignment.ideas ? "Pick one of these or create your own" : "Pick one protocol or propose your own"}</h2>
          <div class="idea-grid">
            ${(branch.assignment.ideas || branch.assignment.companies)
              .map((item) => {
                const [title, description] = item.split(": ");
                return `
                  <article class="idea-card">
                    <h3>${title}</h3>
                    <p>${description || "Suggested protocol for the content drop."}</p>
                  </article>
                `;
              })
              .join("")}
          </div>
        </section>

        ${
          branch.assignment.workflow
            ? `<section class="assignment-detail">
                <p class="eyebrow">Workflow</p>
                <h2>How the team should work</h2>
                <div class="workflow-list">
                  ${branch.assignment.workflow.map((step, index) => `<article><span>${index + 1}</span><p>${step}</p></article>`).join("")}
                </div>
              </section>`
            : ""
        }

        <section class="branch-grid" aria-label="${branch.title} assignment checkpoints">
          ${deadlines
            .map(
              (deadline) => `
                <article class="assignment-card">
                  <span class="status-pill">${deadline.title}</span>
                  <h3>${deadline.label}</h3>
                  <p>${deadline.summary}</p>
                </article>
              `
            )
            .join("")}
        </section>
      `;
      return;
    }

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
