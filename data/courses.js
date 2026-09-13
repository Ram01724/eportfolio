// ─── YOUR COURSES ─────────────────────────────────────────────────────────
// One object per course. Each course has four terms:
//   expectations · prelim · midterm · finals
//
// Each term holds two lists:
//   activities → exercises, labs, reviewers, seatwork
//   projects   → the bigger graded output for that term
//
// A file entry needs a `kind`, which decides how it opens on the page:
//   "pdf"      → opens inline           file: "/files/report.pdf"
//   "image"    → opens inline           file: "/files/matrix.png"
//   "notebook" → opens inline if you supply `html`, otherwise links to Colab
//   "sheet"    → downloads (.xlsx / .csv)
//   "doc"      → downloads (.docx)
//   "code"     → links to a repo
//   "link"     → links out (live demo, Drive folder, video)
//
// Put the actual files in  public/files/  and reference them as  /files/<name>
// Set status to "done" once a term is finished and published.

export const courses = [
  {
    slug: "itc-c508",
    code: "ITC-C508",
    title: "ITE Elective 4 — Machine Learning and Neural Networks",
    instructor: "Prof. Rodolfo C. Raga Jr., PhDCS",
    summary:
      "Supervised learning, feed-forward backpropagation networks, and retrieval-augmented generation, taught through build-and-measure exercises.",
    terms: {
            expectations: {
        status: "done",
        heading: "Course Expectations",
        reflection: [],
        sections: [
          {
            title: "A business problem deep learning can solve: customer churn",
            body: [
              "One business problem that deep learning can help with is customer churn. Churn means customers leave a company and go to another one. This is a big problem because it costs a lot of money. The reading says that if a company keeps just 5% more customers, its profit can go up by 25% to 95%. That is a big number.",
              "The problem is churn is hard to predict. Many things can make a customer leave — how often they use the service, how many complaints they make, and how happy they are. All this data is messy and hard to understand.",
              "Deep learning can help because it can find patterns in this messy data. In the reading, Castanedo built a model using billions of phone call records. His model got the right answer 77.9% of the time (AUC score). This is better than an older method called random forest, which was right only 73.2% of the time. So deep learning did a better job.",
              "But deep learning has one problem. It works like a “black box.” It gives an answer, but it does not explain why. This makes it hard to trust. To fix this, a company can use a confidence score. This is what DigitalGenius does with their tool called CoPilot. If the model is very sure, it gives the answer right away. If not, a real person checks it first.",
              "A churn model can work the same way. Companies can also use tools that show which factors caused the result, like low usage or many complaints. Checking the model often against real results also helps build trust.",
            ],
          },
          {
            title: "NLP for context-aware conversational systems",
            body: [
              "Companies today use NLP together with big language models to build chatbots that understand people better. In the past, chatbots like ELIZA just matched words. Now, tools like Siri, Alexa, and Cortana keep improving through machine learning. New models like BERT and XLNet can understand the meaning of a whole sentence, not just single words.",
              "This is what makes a chatbot feel “smart” in real time. Sentiment analysis lets a chatbot know if a person is angry, confused, or happy. Then it can change how it replies. In the education part of the reading, chatbots keep a record for each student. This record is called a “learner model.” The chatbot changes its lessons and pace based on that student's needs.",
              "Companies also use something called transfer learning. This means they start with a model that already understands general language, like BERT. Then they train it a little more with their own smaller set of data. The reading calls this method ULMFit. This makes it easier for companies to build a chatbot that understands their own customers and their own words, without needing huge amounts of data.",
            ],
          },
          {
            title: "My expectations for ITC-C508",
            body: [
              "Our capstone group, 4Sight, already uses a ready-made AI model called BERT for sentiment analysis in our tourism project for CCAT Mandaluyong. We got this model from HuggingFace, a platform that lets developers download AI models that are already built and trained, instead of building one from scratch. BERT is good at understanding the meaning of sentences, which is why it works well for telling if a review or comment is positive or negative.",
              "After reading these two papers, I noticed something. Our project already uses the same ideas these papers talk about. We know it works, but I do not fully know why it works. If someone asks me during our defense, I am not sure I can explain it well.",
              "In ITC-C508, I want to really understand the basics. I want to know the difference between feed-forward and recurrent networks. I want to understand how gradient descent changes the model's numbers during training. I also want to know why BERT understands context better than older methods.",
              "I also want to learn how to make a model's answers easier to explain, instead of just accepting the result. If I learn these things well, I can explain and defend our capstone's sentiment analysis part with more confidence. As I get closer to graduating, I also want this knowledge for my future work, not just for school.",
            ],
          },
        ],
        activities: [],
        projects: [],
      },

      prelim: {
        status: "done",
        heading: "Prelim",  
        reflection: [
          "Most of my prelim output is here: the Wix ePortfolio from Week 1, two IEEE-format reports, the PT-P1 performance worksheet and training screenshot, and the neural network training and testing notebook with its FFBP log. The parts I found hardest were the reports. Writing up what a model did is different from getting it to run, and I had to go back to my own worksheet more than once because I had not recorded enough while I was working.",

          "Week 5 was the long quiz, taken through Google Forms, and Week 6 was the preliminary examination, written by hand in a blue book. The exam covered much of the same ground as the quiz. That turned out to be harder than I expected — I could not clearly remember what I had answered the first time, so I could not tell which parts I had gotten right and which I had only guessed at.",

          "That is the main thing I am taking from the prelim period. When I write something down, I can check it and improve it. When I do not, I am relying on memory, and memory ran out at exactly the point I needed it. For the midterm I want to keep notes after every quiz and every exercise, not only for the graded output.",
        ],
                        activities: [
          {
            name: "Week 1 — ePortfolio (Wix)",
            kind: "link",
            href: "https://ramkellyjersenleli.wixsite.com/ram-eportfolio",
            note: "First prelim task: building an ePortfolio on Wix.",
          },
          {
            name: "Week 2 — WW-P2 IEEE Report",
            kind: "pdf",
            file: "/files/WW-P2_IEEE_Report_Leliza.pdf",
            note: "Written work #WW-P2, IEEE-format report.",
          },
          {
            name: "Week 2 — Verification of Completion Proofs",
            kind: "pdf",
            file: "/files/Verify_Completion_Proofs_Leliza.pdf",
            note: "Proof of completion submitted with WW-P2.",
          },
          {
            name: "Week 3 — PT-P1 IEEE Report",
            kind: "pdf",
            file: "/files/PT-P1_IEEE_Report_Leliza.pdf",
            note: "IEEE-format report for performance task PT-P1.",
          },
          {
            name: "Week 3 — PT-P1 Performance Worksheet",
            kind: "notebook",
            file: "/files/PT-P1_Performance_Worksheet_Leliza.xlsx",
            html: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR1tYoKUEutVpGebEQHhUYR6kOh-K3po7b-7A3u5mXcHzRHiENsD9p46Tb1iGiRug/pubhtml?widget=true&headers=false",
            note: "Worksheet recording the PT-P1 results. Opens in the page, or download the .xlsx.",
          },
          {
            name: "Week 3 — PT-P1 Training Screenshot",
            kind: "image",
            file: "/files/PT-P1_Training_Screenshot_Leliza.png",
            note: "Screenshot of the model training run.",
          },
          {
            name: "Week 4 — IEEE Report",
            kind: "pdf",
            file: "/files/RamKellyJersen_IEEE_Report.pdf",
            note: "IEEE-format report for the neural network training and testing exercise.",
          },
          {
            name: "Week 4 — Neural Network Training and Testing",
            kind: "notebook",
            file: "/files/RamKellyJersen_Neural_Network_Training_Testing.ipynb",
            html: "/files/RamKellyJersen_Neural_Network_Training_Testing.html",
            note: "Notebook for the training and testing exercise. Opens in the page, or download the .ipynb to run it.",
          },
          {
            name: "Week 4 — FFBP Training Log",
            kind: "notebook",
            file: "/files/RamKellyJersen_FFBP_Training_Log_Template.xlsx",
            html: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRlZMDDs1pXpY-aTmrhU_F6N5TMXM6f77E-lpg9a_niWmzSLWpMOgLCM9LvAQNOUw/pubhtml?widget=true&headers=false",
            note: "Feed-forward backpropagation training log. Opens in the page, or download the .xlsx.",
          },
          {
            name: "Week 5 — Long Quiz",
            kind: "image",
            file: "/files/Week5_Long_Quiz_Leliza.jpg",
            note: "Face-to-face long quiz, ITC 508 (402i) Set B. Screenshot of the closed submission form as proof of completion.",
          },
        ],
      },

            midterm: {
        status: "done",
        heading: "Midterm",
        reflection: [
          "Week 7 was lost to the habagat. Classes were suspended from 24 to 29 August because of continuous heavy rain and flooded streets, so there is no output for that week.",

          "Week 8 was the PT-M1 lab exercise, building and evaluating a retrieval-augmented generation chatbot. [Write two or three sentences here: what you built, what broke, what you would do differently.]",

          "Week 9 covered Lecture 5 on developing a RAG-based chatbot research proposal aligned with a UN Sustainable Development Goal, and the WW-M1 task of updating this ePortfolio with my prelim output. The portfolio you are reading is that output.",
        ],
        activities: [
          {
            name: "Week 8 — PT-M1 Lab Exercise",
            kind: "pdf",
            file: "/files/Leliza_ITCC508_PT-M1_Notebook.ipynb - Colab.pdf",
            note: "Building and evaluating a RAG chatbot. Notebook exported to PDF with all outputs.",
          },
          {
            name: "Week 8 — PT-M1 Report",
            kind: "pdf",
            file: "/files/Leliza_ITCC508_PT-M1_Report.pdf",
            note: "Written report on the RAG chatbot build and evaluation.",
          },
        ],
        projects: [],
      },
    },
  },
];

export const TERM_ORDER = ["expectations", "prelim", "midterm", "finals"];

export const TERM_LABELS = {
  expectations: "Expectations",
  prelim: "Prelim",
  midterm: "Midterm",
  finals: "Final term",
};

export const TERM_BLURB = {
  expectations: "What I wanted out of this course before it started",
  prelim: "Activities and project output for the prelim period",
  midterm: "Activities and project output for the midterm period",
  finals: "Activities and project output for the final term",
};

export function getCourse(slug) {
  return courses.find((c) => c.slug === slug);
}

export function termFileCount(term) {
  if (!term) return 0;
  return (term.activities?.length || 0) + (term.projects?.length || 0);
}

export function courseFileCount(course) {
  return TERM_ORDER.reduce((n, key) => n + termFileCount(course.terms[key]), 0);
}

export function totalFiles() {
  return courses.reduce((n, c) => n + courseFileCount(c), 0);
}
