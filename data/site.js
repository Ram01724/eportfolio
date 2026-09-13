// ─── YOUR INFORMATION ─────────────────────────────────────────────────────
// This is the only file you need to touch to make the site yours.

export const site = {
  name: "Ram Kelly Jersen Leliza",
  shortName: "Ram Leliza",
  handle: "leliza",
  role: "ITC C508 — ITE Elective 4",
  school: "BSIT 402i · Jose Rizal University",
  location: "Mandaluyong, Philippines",

  // Shown under your name on the home page. One sentence.
  tagline: "Everything here is my coursework for ITC C508. Each term — expectations, prelim, midterm, finals — has its own page with the activities, the project, and the files attached.",
  // ── IMAGES ──────────────────────────────────────────────────────────────
  // Drop the files into the  public/  folder, then reference them with a
  // leading slash. Set either to null to turn it off.
  //
  //   public/me.jpg      → photo: "/me.jpg"
  //   public/cover.jpg   → cover: "/cover.jpg"
  //
  // `cover` is the wide background image behind the welcome banner.
  // `photo` is your portrait on the About page.
  photo: "/rammy.jpg",
  cover:   null,
  photoAlt: "Ram Leliza",

  // ── ABOUT PAGE ──────────────────────────────────────────────────────────
  // Write these yourself. Specific beats impressive.
    about: [
     "I'm a fourth-year BSIT student at Jose Rizal University, Section 402i. This portfolio holds my ITC C508 coursework — the activities, the projects, and the output.",
     "Outside of class I ride, swim, play basketball, and cook. Riding is the one that taught me the most about how I work: I learn the machine by noticing when something sounds wrong, then finding out why. Debugging is the same job in a different room.",
     "Right now I'm focused on ITC C508 and My goal is to keep learning and become an IT professional who helps the community with technology that I learn on this Course.",
    ],
  // Optional. Delete any row you don't want.
  facts: [
    { label: "Program", value: "BS Information Technology" },
    { label: "Year and section", value: "Fourth year · 402i" },
    { label: "School", value: "Jose Rizal University" },
    { label: "Based in", value: "Mandaluyong, Philippines" },
  ],

  skills: [
    { group: "Machine learning", items: ["Keras / TensorFlow", "scikit-learn", "LangChain", "ChromaDB"] },
    { group: "Data", items: ["pandas", "NumPy", "Matplotlib", "Excel", "SQL"] },
    { group: "Web", items: ["Next.js", "React", "PHP", "MySQL", "Git"] },
    { group: "Documentation", items: ["IEEE format reports", "Experiment logs", "Technical writing"] },
  ],

  links: [
    { label: "GitHub", href: "https://github.com/Ram01724" },
    { label: "Email", href: "mailto:ramkellyjersenleliza@gmail.com" },
  ],
};
