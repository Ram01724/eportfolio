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
  //   public/me.jpg      → photo: "/ram.jpg"
  //   public/cover.jpg   → cover: "/cover.jpg"
  //
  // `cover` is the wide background image behind the welcome banner.
  // `photo` is your portrait on the About page.
  photo: "/ram.jpg",
  cover:   null,
  photoAlt: "Ram Leliza",

  // ── ABOUT PAGE ──────────────────────────────────────────────────────────
  // Write these yourself. Specific beats impressive.
    about: [
    "I'm a fourth-year BSIT student at Jose Rizal University, Section 402i. This portfolio holds my ITC C508 coursework — the activities, the projects, and the output, term by term.",

    "The course moved in one direction across the three terms. In the prelim I trained a text classifier and learned that a model reads words, not meaning: my classifier called a sarcastic complaint an urgent support request at 79 percent confidence, because every word in the sentence was positive. In the midterm I built a retrieval chatbot over Philippine solid waste law. In the final term I ran nineteen different chunking configurations to find out how a document should be cut up before a chatbot can search it, and then joined Group Purple R, where I owned the evaluation test set for our final project.",

    "If there is one thing I learned to do this term, it is to check the things nobody asked me to check. My midterm chatbot was answering normally while quietly holding two copies of every chunk, and no error ever appeared — I only found it by printing the chunks and reading them. One of my final-term settings looked fine on every score while silently throwing away half its text. And in the group project, after the verification script had already passed all twenty-one of my evidence phrases, I audited them by hand anyway and found one that appears in two different articles of the same law, which would have inflated every relevance figure in our experiment. None of those were caught by the thing built to catch problems. All three were caught by looking again.",

    "Outside of class I ride, swim, play basketball, and cook. Riding is the one that taught me the most about how I work: I learn the machine by noticing when something sounds wrong, then finding out why. Debugging is the same job in a different room.",

    "My goal is to keep learning and to become an IT professional who helps the community — either in the healthcare service or at sea. Both are places where systems have to keep running when conditions are bad and nobody can call for backup.",
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
