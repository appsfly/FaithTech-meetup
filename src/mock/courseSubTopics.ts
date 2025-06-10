export const courseSubTopics: Record<string, Array<any>> = {
  html: [
    {
      id: 1,
      subtopics: [
        "What is HTML?",
        "History and Evolution",
        "Basic Tags Overview",
      ],
      references: [
        {
          name: "MDN: Introduction to HTML",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
          name: "W3Schools: HTML Basics",
          link: "https://www.w3schools.com/html/html_basic.asp",
        },
      ],
    },
    {
      id: 2,
      subtopics: [
        "Doctype Declaration",
        "HTML Skeleton",
        "Head and Body Elements",
      ],
      references: [
        {
          name: "MDN: HTML Document Structure",
          link: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure",
        },
      ],
    },
    {
      id: 3,
      subtopics: [
        "Heading Tags (h1–h6)",
        "Paragraph Tag",
        "Line Breaks and Horizontal Rules",
      ],
      references: [
        {
          name: "W3Schools: HTML Headings",
          link: "https://www.w3schools.com/html/html_headings.asp",
        },
        {
          name: "W3Schools: HTML Paragraphs",
          link: "https://www.w3schools.com/html/html_paragraphs.asp",
        },
      ],
    },
    {
      id: 4,
      subtopics: [
        "Anchor Tags and href",
        "Image Tag and Attributes",
        "Opening Links in New Tabs",
      ],
      references: [
        {
          name: "MDN: Links",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a",
        },
        {
          name: "MDN: Images",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img",
        },
      ],
    },
    {
      id: 5,
      subtopics: [
        "Unordered Lists",
        "Ordered Lists",
        "Nested Lists and List Styles",
      ],
      references: [
        {
          name: "MDN: Lists",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul",
        },
      ],
    },
    {
      id: 6,
      subtopics: ["Form Tag Basics", "Input Types", "Labels and Accessibility"],
      references: [
        {
          name: "MDN: Forms",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
        },
      ],
    },
    {
      id: 7,
      subtopics: [
        "Semantic Elements (header, nav, footer)",
        "Why Semantics Matter",
        "Improving Accessibility with Semantics",
      ],
      references: [
        {
          name: "MDN: Semantics",
          link: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics",
        },
      ],
    },
    {
      id: 8,
      subtopics: [
        "Table Structure: thead, tbody, tfoot",
        "td, th, tr Elements",
        "Table Attributes and Styling Basics",
      ],
      references: [
        {
          name: "W3Schools: HTML Tables",
          link: "https://www.w3schools.com/html/html_tables.asp",
        },
      ],
    },
    {
      id: 9,
      subtopics: [
        "HTML5 Structural Tags",
        "Multimedia Tags: audio, video",
        "New Form Input Types",
      ],
      references: [
        {
          name: "MDN: HTML5",
          link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
        },
      ],
    },
    {
      id: 10,
      subtopics: [
        "Build a Personal Profile Page",
        "Use of Semantic Tags",
        "Including Links, Images, Lists, and Forms",
      ],
      references: [
        {
          name: "MDN: HTML Projects",
          link: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_a_simple_page",
        },
      ],
    },
  ],

  css: [
    {
      id: 1,
      subtopics: [
        "What is CSS?",
        "CSS Syntax and Selectors",
        "Inline, Internal, and External Styles",
      ],
      references: [
        {
          name: "MDN: CSS Basics",
          link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics",
        },
        {
          name: "W3Schools: CSS Introduction",
          link: "https://www.w3schools.com/css/css_intro.asp",
        },
      ],
    },
    {
      id: 2,
      subtopics: [
        "Types of Selectors",
        "Specificity Hierarchy",
        "Combining Selectors",
      ],
      references: [
        {
          name: "MDN: Selectors",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",
        },
      ],
    },
    {
      id: 3,
      subtopics: [
        "Color Formats (Hex, RGB, HSL)",
        "Units (px, %, em, rem)",
        "Custom Properties (CSS Variables)",
      ],
      references: [
        {
          name: "MDN: Color",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/color",
        },
        {
          name: "W3Schools: CSS Units",
          link: "https://www.w3schools.com/cssref/css_units.asp",
        },
      ],
    },
    {
      id: 4,
      subtopics: [
        "Understanding Content, Padding, Border, Margin",
        "Box Sizing: border-box vs content-box",
        "Inspecting Layouts with DevTools",
      ],
      references: [
        {
          name: "MDN: Box Model",
          link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model",
        },
      ],
    },
    {
      id: 5,
      subtopics: [
        "Flex Container & Flex Items",
        "Main Axis vs Cross Axis",
        "Aligning and Justifying Items",
      ],
      references: [
        {
          name: "CSS Tricks: A Complete Guide to Flexbox",
          link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
        },
      ],
    },
    {
      id: 6,
      subtopics: [
        "Grid Container & Items",
        "Grid Template Areas",
        "Implicit vs Explicit Grids",
      ],
      references: [
        {
          name: "MDN: CSS Grid Layout",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout",
        },
      ],
    },
    {
      id: 7,
      subtopics: [
        "Static, Relative, Absolute, Fixed, Sticky",
        "Z-index and Overlapping Elements",
        "Positioning Techniques in Layouts",
      ],
      references: [
        {
          name: "W3Schools: CSS Position",
          link: "https://www.w3schools.com/css/css_positioning.asp",
        },
      ],
    },
    {
      id: 8,
      subtopics: [
        "Media Queries Syntax",
        "Breakpoints and Responsive Design",
        "Mobile-First Design Approach",
      ],
      references: [
        {
          name: "MDN: Responsive Design",
          link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
        },
      ],
    },
    {
      id: 9,
      subtopics: [
        "Transitions with duration and easing",
        "Keyframes and @keyframes Rule",
        "Creating Animations with CSS",
      ],
      references: [
        {
          name: "MDN: Transitions",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions",
        },
        {
          name: "MDN: Animations",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations",
        },
      ],
    },
    {
      id: 10,
      subtopics: [
        "Apply Styling to HTML Profile Page",
        "Use Flexbox or Grid for Layout",
        "Implement Hover Effects and Media Queries",
      ],
      references: [
        {
          name: "MDN: Project Example with CSS",
          link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction",
        },
      ],
    },
  ],
  js: [
    {
      id: 1,
      subtopics: [
        "What is JavaScript?",
        "Where JS Runs (Browser, Node.js)",
        "Connecting JS to HTML",
      ],
      references: [
        {
          name: "MDN: JavaScript Guide",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction",
        },
        {
          name: "W3Schools: JS Introduction",
          link: "https://www.w3schools.com/js/js_intro.asp",
        },
      ],
    },
    {
      id: 2,
      subtopics: [
        "var, let, const",
        "Primitive Data Types",
        "Type Coercion and Type Checking",
      ],
      references: [
        {
          name: "MDN: Values and Variables",
          link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables",
        },
      ],
    },
    {
      id: 3,
      subtopics: [
        "Declaring and Calling Functions",
        "Parameters and Return Values",
        "Function Expressions and Arrow Functions",
      ],
      references: [
        {
          name: "MDN: Functions",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
        },
      ],
    },
    {
      id: 4,
      subtopics: [
        "if-else, switch",
        "for, while, do-while loops",
        "Loop control: break, continue",
      ],
      references: [
        {
          name: "MDN: Control Flow and Loops",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling",
        },
      ],
    },
    {
      id: 5,
      subtopics: [
        "Creating and Accessing Arrays",
        "Array Methods (map, filter, etc.)",
        "Object Literals and Properties",
      ],
      references: [
        {
          name: "MDN: Arrays",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
        },
        {
          name: "MDN: Objects",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects",
        },
      ],
    },
    {
      id: 6,
      subtopics: [
        "Selecting Elements (getElementById, querySelector)",
        "Changing DOM Content",
        "Creating and Appending Elements",
      ],
      references: [
        {
          name: "MDN: Introduction to the DOM",
          link: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
        },
      ],
    },
    {
      id: 7,
      subtopics: [
        "addEventListener",
        "Mouse & Keyboard Events",
        "Event Object and Delegation",
      ],
      references: [
        {
          name: "MDN: Events",
          link: "https://developer.mozilla.org/en-US/docs/Web/Events",
        },
      ],
    },
    {
      id: 8,
      subtopics: [
        "Synchronous vs Asynchronous",
        "Callbacks and Callback Hell",
        "Promises and .then/.catch",
      ],
      references: [
        {
          name: "MDN: Promises",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises",
        },
      ],
    },
    {
      id: 9,
      subtopics: [
        "What is Fetch API?",
        "Making GET and POST Requests",
        "Handling JSON Responses",
      ],
      references: [
        {
          name: "MDN: Fetch API",
          link: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
        },
      ],
    },
    {
      id: 10,
      subtopics: [
        "Designing a Quiz Interface",
        "Using JS for Dynamic Questions",
        "Storing and Checking Answers",
      ],
      references: [
        {
          name: "FreeCodeCamp: Quiz App Tutorial",
          link: "https://www.freecodecamp.org/news/build-a-quiz-app-with-html-css-and-javascript/",
        },
      ],
    },
  ],
  "project development": [
    {
      id: 1,
      subtopics: [
        "What is a project?",
        "Project lifecycle overview",
        "Project goals and outcomes",
      ],
      references: [
        {
          name: "Atlassian: What is Project Management?",
          link: "https://www.atlassian.com/agile/project-management",
        },
      ],
    },
    {
      id: 2,
      subtopics: [
        "Creating a wireframe (low/high fidelity)",
        "User flows and storyboarding",
        "Tools: Figma, Balsamiq, Pen & Paper",
      ],
      references: [
        {
          name: "Figma: Getting Started",
          link: "https://help.figma.com/hc/en-us/articles/360040514973",
        },
        {
          name: "Mockplus: Wireframe Guide",
          link: "https://www.mockplus.com/blog/post/website-wireframe",
        },
      ],
    },
    {
      id: 3,
      subtopics: [
        "Organizing folders and files",
        "Asset management (images, fonts, etc.)",
        "Naming conventions and consistency",
      ],
      references: [
        {
          name: "MDN: Project Structure Best Practices",
          link: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Website_structure",
        },
      ],
    },
    {
      id: 4,
      subtopics: [
        "What is Git and GitHub?",
        "Basic Git commands (init, commit, push, pull)",
        "Creating and using repositories",
      ],
      references: [
        {
          name: "GitHub Docs: Getting Started",
          link: "https://docs.github.com/en/get-started/quickstart",
        },
        {
          name: "Git SCM: Documentation",
          link: "https://git-scm.com/doc",
        },
      ],
    },
    {
      id: 5,
      subtopics: [
        "Understanding APIs",
        "REST vs GraphQL (intro)",
        "Using tools like Postman or Thunder Client",
      ],
      references: [
        {
          name: "MDN: APIs - Introduction",
          link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction",
        },
        {
          name: "Postman: What is an API?",
          link: "https://www.postman.com/api-platform/api-tools/",
        },
      ],
    },
    {
      id: 6,
      subtopics: [
        "Types of errors (syntax, runtime, logic)",
        "Browser DevTools usage",
        "Writing error messages and handling them",
      ],
      references: [
        {
          name: "MDN: Handling errors in JavaScript",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling",
        },
      ],
    },
    {
      id: 7,
      subtopics: [
        "Importance of code reviews",
        "Debugging techniques",
        "Using linters and formatters",
      ],
      references: [
        {
          name: "Google: Code Review Developer Guide",
          link: "https://google.github.io/eng-practices/review/",
        },
      ],
    },
    {
      id: 8,
      subtopics: [
        "Deployment types: static vs dynamic",
        "Platforms: GitHub Pages, Vercel, Netlify",
        "Domain setup and environment variables",
      ],
      references: [
        {
          name: "Vercel Docs",
          link: "https://vercel.com/docs",
        },
        {
          name: "Netlify Docs",
          link: "https://docs.netlify.com/",
        },
      ],
    },
    {
      id: 9,
      subtopics: [
        "Final testing and polish",
        "Gathering user feedback",
        "Checklist before delivery",
      ],
      references: [
        {
          name: "Toptal: Final QA Checklist",
          link: "https://www.toptal.com/project-managers/project-delivery-checklist",
        },
      ],
    },
    {
      id: 10,
      subtopics: [
        "How to present your work",
        "Live demo and walkthrough",
        "Collecting and applying feedback",
      ],
      references: [
        {
          name: "CareerFoundry: How to Present a Project",
          link: "https://careerfoundry.com/en/blog/ui-design/how-to-present-your-portfolio-project/",
        },
      ],
    },
  ],
};
