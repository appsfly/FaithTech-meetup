export const projects = [
  {
    name: "To-Do List",
    description: "Manage daily tasks with add, complete, and delete features.",
    icon: "fa-solid fa-list-check",
    difficulty: "Beginner",
    imageName: "todo.png",
    tasks: [
      {
        description: "Create input field and add button",
        estimate: "15 min – Easy",
      },
      { description: "Render list of tasks", estimate: "20 min – Easy" },
      { description: "Mark tasks as complete", estimate: "20 min – Easy" },
      { description: "Delete tasks", estimate: "25 min – Medium" },
      {
        description: "Persist tasks with localStorage",
        estimate: "30 min – Medium",
      },
    ],
  },
  {
    name: "Calculator App",
    description: "A simple calculator for basic arithmetic operations.",
    icon: "fa-solid fa-calculator",
    difficulty: "Intermediate",
    imageName: "calculator.png",
    tasks: [
      { description: "Design calculator layout", estimate: "30 min – Easy" },
      {
        description: "Implement number and operator input",
        estimate: "30 min – Medium",
      },
      { description: "Evaluate expressions", estimate: "45 min – Medium" },
      {
        description: "Add clear/reset functionality",
        estimate: "15 min – Easy",
      },
      { description: "Handle edge cases", estimate: "30 min – Medium" },
      { description: "Optional: keyboard support", estimate: "40 min – Hard" },
    ],
  },
  {
    name: "Number Guessing Game",
    description: "Guess the random number with feedback and score tracking.",
    icon: "fa-solid fa-question",
    difficulty: "Beginner",
    imageName: "guess-app.png",
    tasks: [
      { description: "Generate random number", estimate: "15 min – Easy" },
      { description: "Handle user input", estimate: "20 min – Easy" },
      { description: "Provide hint (higher/lower)", estimate: "15 min – Easy" },
      { description: "Track attempts", estimate: "20 min – Medium" },
      { description: "Add reset button", estimate: "15 min – Easy" },
    ],
  },
  {
    name: "Image Gallery with Lightbox",
    description: "Responsive image grid with a fullscreen lightbox viewer.",
    icon: "fa-solid fa-image",
    difficulty: "Intermediate",
    imageName: "image-gallery.png",
    tasks: [
      {
        description: "Create responsive image grid",
        estimate: "30 min – Easy",
      },
      { description: "Open image in lightbox", estimate: "30 min – Medium" },
      {
        description: "Add navigation in lightbox",
        estimate: "30 min – Medium",
      },
      { description: "Add close functionality", estimate: "15 min – Easy" },
      {
        description: "Keyboard navigation (optional)",
        estimate: "30 min – Hard",
      },
    ],
  },
  {
    name: "Weather Dashboard",
    description:
      "Check current weather using a public API with location search.",
    icon: "fa-solid fa-cloud-sun",
    difficulty: "Intermediate",
    imageName: "weather.png",
    tasks: [
      { description: "Add search input", estimate: "15 min – Easy" },
      {
        description: "Fetch weather data from API",
        estimate: "30 min – Medium",
      },
      { description: "Display weather details", estimate: "30 min – Medium" },
      {
        description: "Add loading/error handling",
        estimate: "25 min – Medium",
      },
      { description: "Style UI responsively", estimate: "30 min – Medium" },
    ],
  },
  {
    name: "Pomodoro Timer",
    description:
      "Focus timer with work and break intervals to improve productivity.",
    icon: "fa-solid fa-clock",
    difficulty: "Intermediate",
    imageName: "",
    tasks: [
      { description: "Create timer UI", estimate: "30 min – Easy" },
      { description: "Implement countdown logic", estimate: "30 min – Medium" },
      { description: "Switch between work/break", estimate: "30 min – Medium" },
      {
        description: "Add reset/start/pause features",
        estimate: "30 min – Medium",
      },
      { description: "Play alert sound", estimate: "20 min – Easy" },
    ],
  },
  {
    name: "Currency Converter",
    description: "Convert amounts between currencies with live exchange rates.",
    icon: "fa-solid fa-money-bill-transfer",
    difficulty: "Intermediate",
    imageName: "",
    tasks: [
      {
        description: "Create currency input fields",
        estimate: "20 min – Easy",
      },
      {
        description: "Fetch exchange rates from API",
        estimate: "30 min – Medium",
      },
      { description: "Calculate conversion", estimate: "20 min – Easy" },
      {
        description: "Switch base/target currencies",
        estimate: "20 min – Medium",
      },
      {
        description: "Handle API and input errors",
        estimate: "25 min – Medium",
      },
    ],
  },
  {
    name: "Quiz App",
    description: "Multiple-choice quiz with score tracking and feedback.",
    icon: "fa-solid fa-circle-question",
    difficulty: "Intermediate",
    imageName: "",
    tasks: [
      {
        description: "Display question and choices",
        estimate: "30 min – Medium",
      },
      {
        description: "Check answer and show feedback",
        estimate: "25 min – Medium",
      },
      { description: "Track score", estimate: "20 min – Easy" },
      { description: "Move to next question", estimate: "20 min – Medium" },
      { description: "Show final score screen", estimate: "25 min – Medium" },
    ],
  },
  {
    name: "Recipe Finder",
    description:
      "Search recipes by ingredients and display cooking instructions.",
    icon: "fa-solid fa-utensils",
    difficulty: "Intermediate",
    imageName: "",
    tasks: [
      { description: "Search form for ingredients", estimate: "20 min – Easy" },
      { description: "Fetch recipes from API", estimate: "30 min – Medium" },
      { description: "Display recipe cards", estimate: "25 min – Medium" },
      {
        description: "Show recipe details on click",
        estimate: "25 min – Medium",
      },
      { description: "Handle no results/error", estimate: "20 min – Medium" },
    ],
  },
  {
    name: "Markdown Previewer",
    description:
      "Write markdown text and see the formatted preview in real-time.",
    icon: "fa-solid fa-code",
    difficulty: "Intermediate",
    imageName: "",
    tasks: [
      { description: "Create markdown input area", estimate: "15 min – Easy" },
      { description: "Render markdown preview", estimate: "30 min – Medium" },
      { description: "Update preview on input", estimate: "20 min – Medium" },
      {
        description: "Style editor and preview areas",
        estimate: "25 min – Medium",
      },
      {
        description: "Optional: Load markdown examples",
        estimate: "20 min – Easy",
      },
    ],
  },
  {
    name: "Drag and Drop Kanban Board",
    description: "Organize tasks with draggable columns and cards.",
    icon: "fa-solid fa-grip-vertical",
    difficulty: "Advanced",
    imageName: "",
    tasks: [
      { description: "Build column layout", estimate: "30 min – Medium" },
      { description: "Add cards to columns", estimate: "30 min – Medium" },
      { description: "Implement drag-and-drop", estimate: "45 min – Hard" },
      {
        description: "Save tasks to localStorage",
        estimate: "30 min – Medium",
      },
      {
        description: "Enable adding/removing cards",
        estimate: "30 min – Medium",
      },
    ],
  },
  {
    name: "CSS Animation Playground",
    description:
      "Experiment with various CSS animations and keyframes interactively.",
    icon: "fa-solid fa-wand-magic-sparkles",
    difficulty: "Intermediate",
    imageName: "",
    tasks: [
      {
        description: "Create animation preview box",
        estimate: "20 min – Easy",
      },
      { description: "Select animation types", estimate: "25 min – Medium" },
      { description: "Adjust timing and delay", estimate: "25 min – Medium" },
      {
        description: "Show live preview of animation",
        estimate: "30 min – Medium",
      },
      {
        description: "Optional: Show generated CSS",
        estimate: "30 min – Medium",
      },
    ],
  },
  {
    name: "Memory Matching Game",
    description: "Flip cards to find matching pairs and clear the board.",
    icon: "fa-solid fa-brain",
    difficulty: "Intermediate",
    imageName: "",
    tasks: [
      { description: "Create grid of cards", estimate: "25 min – Easy" },
      { description: "Flip card on click", estimate: "25 min – Medium" },
      {
        description: "Check for match and hide/show",
        estimate: "30 min – Medium",
      },
      { description: "Track score or moves", estimate: "25 min – Medium" },
      { description: "Add reset functionality", estimate: "20 min – Easy" },
    ],
  },
  {
    name: "Infinite Scroll Blog",
    description:
      "Load more blog posts as you scroll down the page dynamically.",
    icon: "fa-solid fa-scroll",
    difficulty: "Intermediate",
    imageName: "",
    tasks: [
      { description: "Create blog post layout", estimate: "25 min – Easy" },
      { description: "Load initial posts", estimate: "20 min – Easy" },
      { description: "Detect scroll near bottom", estimate: "30 min – Medium" },
      {
        description: "Fetch and append more posts",
        estimate: "30 min – Medium",
      },
      { description: "Show loading indicator", estimate: "20 min – Easy" },
    ],
  },
];
