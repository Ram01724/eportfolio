export const courses = [
  {
    slug: "itc-c508",
    code: "ITC-C508",
    title: "ITE Elective 4 — Machine Learning and Neural Networks",
    instructor: "Prof. Rodolfo C. Raga Jr., PhDCS",
    summary:
      "Supervised learning, feed-forward backpropagation networks, and retrieval-augmented generation, taught through build-and-measure exercises.",

    terms: {
      // ══════════════════════════════════════════════════════════════════
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

      // ══════════════════════════════════════════════════════════════════
      prelim: {
        status: "done",
        heading: "Prelim",
        reflection: [
          "Most of my prelim output is here: the Wix ePortfolio from Week 1, two IEEE reports, the PT-P1 performance worksheet with its training screenshot, and the neural network training and testing notebook with its FFBP log. The hardest part was not getting the models to run. It was writing up what they did afterwards.",

          "PT-P1 was where I learned the most. The model handled the plain cases easily — direct complaints, direct praise, simple questions all came back correct at high confidence. Then it hit row 5: 'Wow, love how my package still hasn't arrived after three weeks.' I labelled that negative feedback. The model called it urgent support at 79% confidence. Every positive word in the sentence is doing the opposite of what it says, and the model read the words instead of the meaning. That one row taught me more about what these models actually do than the nine that were right.",

          "Writing the reports was harder than I expected, and for a reason I did not see coming. I kept going back to my own worksheet because I had not recorded enough while I was working. Getting a model to run and being able to explain afterwards why it behaved the way it did are two different skills, and only one of them was really being tested.",

          "Week 5 was the long quiz through Google Forms, and Week 6 was the preliminary examination, written by hand in a blue book. The exam covered much of the same ground as the quiz. That turned out to be harder than I expected. I could not clearly remember what I had answered the first time, so I could not tell which parts I had gotten right and which I had only guessed at.",

          "That is the main thing I am taking from the prelim period. When I write something down, I can check it and improve it. When I do not, I am relying on memory, and memory ran out exactly when I needed it. For the midterm I want to keep notes after every quiz and every exercise, not only for the graded output.",
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
            note: "Written work WW-P2, IEEE-format report.",
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
            note: "Long quiz through Google Forms, ITC 508 (402i) Set B. Screenshot of the closed form as proof of completion.",
          },
        ],
        projects: [],
      },

      // ══════════════════════════════════════════════════════════════════
      midterm: {
        status: "done",
        heading: "Midterm",
        reflection: [
          "Week 7 was lost to the habagat. Classes were suspended from 24 to 29 August because of heavy rain and flooded streets, so there is no output for that week.",

          "Week 8 was PT-M1: building a RAG chatbot that answers questions about Philippine solid waste law, RA 9003 and its rules. The pipeline was the easy part. Chunking, embedding, storing the vectors, and writing the prompt is only about thirty lines of code. Everything around it took much longer.",

          "Three things broke before I could run a single query. The document loader had no PDF reader installed. LangChain v1.0 had moved the chain functions to a different package. And llama-3.1-8b-instant, the model the lab tells you to use, had been removed by Groq in August 2026. That last one taught me the most. My code was fine. The provider just dropped the model. If your pipeline depends on one specific hosted model, it will break one day even if you never touch the code.",

          "The worst problem gave no error at all. Two of the three chunks the chatbot retrieved were exactly the same. My first guess about why was wrong, and I only found out by printing the chunks and reading them. The real reason was that ChromaDB adds to the collection instead of replacing it when you re-run the indexing cell. I had re-run it, so all 726 chunks were stored twice. The chatbot kept giving normal-looking answers the whole time. I added a check that compares the collection size to the chunk count. A bug that stays quiet is worse than one that crashes.",

          "The test the lab gives you did not produce any hallucination, so I asked whether the test was hard enough. It was not. Asking about Jupiter only checks the easy case, where the topic is obviously not in the documents. So I asked about a fine for a household that does not separate its waste — something the law looks like it covers but does not. That broke it right away. With the guardrails off, the model applied Section 48 paragraphs (4) to (7) to the household, gave the correct ₱1,000 to ₱3,000 amount, and said it was quoting the documents. Everything was right except who the rule applies to. Those paragraphs are about the collector, not the household. The chatbot did not fail when the topic was missing. It failed when the topic was close, and saying it came from the source made the mistake harder to spot.",

          "Week 9 covered Lecture 5 on writing a RAG chatbot research proposal tied to a UN Sustainable Development Goal, and the WW-M1 task of updating this ePortfolio with my prelim output. The portfolio you are reading is that output.",

          "Weeks 10 and 11 were WW-M2, done as a group with Mark Emmanuel Sagarino and Sean John Dizon under the name PurpleR. We proposed a RAG chatbot for Philippine consumer-rights questions about online purchases, tied to SDG 12 on responsible consumption and production.",

          "The midterm quiz and examination was taken face to face in a blue book on 5 October 2026. Actually is not really hard but I lack on preparation that's why I need to make sure I study more.",
        ],
        activities: [
          {
            name: "Week 8 — PT-M1 Lab Exercise",
            kind: "notebook",
            file: "/files/Leliza_ITCC508_PT-M1_Notebook.pdf",
            html: "/files/Leliza_ITCC508_PT-M1_Notebook.html",
            note: "Building and evaluating a RAG chatbot over RA 9003 and DAO 2001-34. Opens in the page with all outputs, or download the PDF.",
          },
          {
            name: "Week 9 — WW-M1 (Prelim ePortfolio)",
            kind: "link",
            href: "https://eportfolio-fawn.vercel.app",
            note: "Rebuilt the ePortfolio as a Next.js site on Vercel and published my prelim output to it.",
            learned: [
              "I moved off Wix and built this site myself with Next.js, pushing to GitHub and deploying on Vercel. Wix was faster to start but I could not control how a PDF or a spreadsheet actually opened on the page. Here I decided that myself.",
              "Most of my time went to things I did not expect. A filename with a # in it broke every link, because a browser reads everything after # as a page anchor. My files sat in public/ instead of public/files/, so the server returned my own 404 page inside the viewer and nothing told me why. Vercel treats capital letters in filenames as different files and Windows does not, so something that worked on my laptop could still break live.",
              "The lesson is that publishing is its own skill. The work being finished is not the same as the work being reachable, and a grader who cannot open a file has the same experience as a grader looking at no file at all.",
            ],
          },
          {
            name: "Week 10 — WW-M2 Proposal",
            kind: "pdf",
            file: "/files/PurpleR_WW-M2_Proposal.pdf",
            note: "First proposal: a retrieval-augmented chatbot for Philippine consumer-rights questions on online purchases, aligned with SDG 12 Target 12.8. Group output with Sagarino and Dizon.",
          },
          {
            name: "Week 10 — WW-M2 Presentation",
            kind: "pdf",
            file: "/files/PurpleR_WW-M2_Presentation.pdf",
            note: "Seven-slide deck presenting the first proposal.",
          },
          {
            name: "Midterm Examination",
            kind: "image",
            file: "/files/Midterm_Exam_Bluebook_Leliza.jpg",
            note: "Face-to-face midterm examination, written in a blue book on 5 October 2026.",
          },
        ],
        projects: [
          {
            name: "Week 11 — WW-M2 Revised Proposal (IEEE)",
            kind: "pdf",
            file: "/files/PurpleR_WW-M2_Revised_IEEE.pdf",
            note: "Extended and revised proposal: routing consumer-remedy questions to whichever of four statutes actually governs them, including RA 7394 and the Lemon Law RA 10642.",
          },
          {
            name: "Week 11 — WW-M2 Revised Presentation",
            kind: "pdf",
            file: "/files/PurpleR_WW-M2_Revised_Presentation.pdf",
            note: "Eight-slide deck for the revised proposal.",
          },
        ],
      },

      // ══════════════════════════════════════════════════════════════════
            finals: {
        status: "done",
        heading: "Final term",
        reflection: [
          "The final term was one long experiment that ran in two halves. In the first half I worked alone, trying to find out how a document should be cut up before a chatbot can search it. In the second half I joined Mark and Sean as Group Purple R, and the thing I had learned alone turned out to be the thing I was most useful for.",

          "Working alone, I tested nineteen different chunk configurations across two labs. The answer was that chunk size matters much more than overlap, and the reason is not what I expected. A large chunk does not simply dilute a short provision, it changes what the chunk is about. I traced one question all the way down: a single sentence in Article 66 names the agency that enforces warranties, and inside a 1000-character chunk it shares space with an unrelated penalty section, so the chunk's vector ends up meaning penalties instead of agency. At 500 characters the same sentence ranked first. That one trace explained every table I had.",

          "The bigger lesson from those two weeks was about my own standards. In the first lab I reached a perfect ranking score and believed it. In the second lab I asked nine questions instead of three and the perfect score disappeared, with nothing changed but the number of questions. I had not improved anything and I had not broken anything. I had simply been testing too little to know. I also found a limit that no setting could fix, because my chunks never cross a page boundary, so an answer split by a page break cannot be retrieved in full no matter how I tune the size.",

          "In the group project I owned the evaluation test set: twelve questions, their reference answers, their answer keys, twenty-one verbatim evidence anchors and a written reason for every one of them. I did not build the chatbot. I built the thing that decides whether the chatbot worked, which means every number in our paper is measured against my file. I used what I had found alone to design it. One question is built around a deliberately short article sitting between two long ones, because I already knew that is where chunking hides things. Three questions cannot be answered from our documents at all, and two of those three retrieve real, relevant-looking text anyway, because a chatbot is most dangerous when the topic is close rather than absent.",

          "The skill I am taking out of this term is not a tool. It is that the measurement deserves as much care as the thing being measured, and usually gets less. Both of my strongest moments this term came from checking something nobody asked me to check. In the labs, a column counting how many chunks exceeded the embedding limit caught a setting that looked fine on every score but was silently throwing away half its text. In the group project, an audit of my own anchors after the verification script had already passed them caught a phrase that appears in two different articles, which would have inflated every relevance figure in the whole experiment. Neither was found by the thing built to find problems. Both were found by looking again.",
        ],
        groups: [
          {
            title: "Week 14 — PT-F1: Optimizing Chunk Size and Overlap",
            blurb: "Oct 11-17",
            learned: [
              "This week I tested six ways of cutting the law into chunks. Three different chunk sizes at the same overlap of 200, and four different overlaps at the same size of 1000. I expected overlap to be the important setting, because overlap is what keeps a sentence from being cut in half. I was wrong. Chunk size mattered far more.",

              "Before writing the chunking loop I added checks on the settings themselves. The one that mattered was the check that the overlap is smaller than the chunk size. My loop moves forward by chunk size minus overlap each time, so at 1000 and 200 it moves 800 characters. If someone set the overlap equal to the chunk size, the loop would move forward by zero and run forever, filling memory until Colab died. It would not look like a settings mistake, it would look like the notebook hanging. I also added a check for a PDF with no readable text, because a scanned PDF is a picture of words and it would quietly produce zero chunks instead of an error.",

              "Cutting the chunk size in half, from 1000 down to 500, changed everything. Precision at 3 went from 0.2222 to 0.5556. MRR went from 0.5000 to 1.0000, which means the correct chunk came back first every single time instead of only half the time. Evidence coverage went from 0.5000 to 0.8333. Changing the overlap at size 1000 did much less. Even the best overlap I tried, 300, only reached 0.3333 precision. More overlap just repeats text. A smaller chunk changes what the chunk is actually about.",

              "The result that surprised me most was the easy question. At the baseline setting, my Easy question scored 0 for precision and 0 for MRR, meaning the right chunk never appeared in the top 3 at all. The Average and Difficult questions did better than the easy one. That made no sense to me until I looked at the chunks themselves. The answer to the easy question is one short line saying the DTI enforces the warranty provisions. Inside a 1000-character chunk, that one line sits beside a lot of unrelated text, so the chunk as a whole is not really about that line. At 500 characters, the same line fills more of the chunk and the chunk starts to mean what the line means. A small fact can get lost inside a big chunk.",

              "The 1500-character setting taught me to read past the score. Its precision and recall looked the same as the baseline, so at first glance it seemed fine. But 53.2 percent of its chunks were over the embedding model's input limit. More than half the text was being quietly cut off before it was ever turned into a vector. Nothing crashed and no error appeared. If I had only looked at the precision column I would have called that setting acceptable. I only caught it because I had a column counting how many chunks went over the limit.",

              "I also ran six edge-case tests on the finished setup, and only three behaved the way I wanted. It correctly refused a question with no relevant context, correctly refused a question outside the Act, and correctly refused a prompt injection that told it to ignore its sources and answer from its own knowledge. The three that failed all failed the same way. When I asked which agency enforces warranties and what that agency's hotline number is, it refused the whole question, even though the first half is plainly answered in the Act and only the hotline is missing. When I asked a vague question about the implementing agency, it answered DTI with full confidence, when the honest answer is that it depends which provision you mean.",

              "Looking at those three failures together, they are one problem, not three. My system can only do two things: answer completely or refuse completely. It has no way to answer the part it knows and say the rest is missing, and no way to say a question is unclear. The refusal rule I wrote is a switch when it should be a scale. That is the thing I want to fix, and it is the same lesson as my midterm, where the chatbot was most dangerous not when it knew nothing but when it almost knew the answer.",
            ],
            files: [
              {
                name: "PT-F1 — RAG Chunking Experiment (notebook)",
                kind: "notebook",
                file: "/files/PT-F1_RAG_Chunking_Experiment_Leliza.ipynb",
                html: "/files/PT-F1_RAG_Chunking_Experiment_Leliza.html",
                note: "The full experiment: six chunk configurations, retrieval scoring, and six edge-case tests. Opens in the page with all outputs.",
              },
              {
                name: "PT-F1 — Final Model and Prompt",
                kind: "pdf",
                file: "/files/PT-F1_Final_Model_and_Prompt_Leliza.pdf",
                note: "The configuration I settled on: Qwen3-4B, chunk 500, overlap 200, top-k 3, all-MiniLM-L6-v2.",
              },
              {
                name: "PT-F1 — Retrieval Results",
                kind: "sheet",
                file: "/files/PT-F1_Retrieval_Results_Leliza.xlsx",
                note: "Scores for all six configurations, plus per-question detail and the top-3 chunks retrieved for each.",
              },
              {
                name: "PT-F1 — Generation Results",
                kind: "sheet",
                file: "/files/PT-F1_Generation_Results_Leliza.xlsx",
                note: "The three domain answers and the six edge-case tests, with which ones behaved as expected.",
              },
              {
                name: "PT-F1 — Chunks Inspection",
                kind: "sheet",
                file: "/files/PT-F1_Chunks_Inspection_Leliza.xlsx",
                note: "Every chunk the splitter produced, with its page number and character count.",
              },
              {
                name: "RA 7394 — Consumer Act of the Philippines (corpus)",
                kind: "pdf",
                file: "/files/RA_7394_Consumer_Act.pdf",
                note: "The 81-page statute the chatbot retrieves from.",
              },
            ],
          },

          {
            title: "Week 15 — PT-F2: Determining the Best Chunk",
            blurb: "Oct 19-24",
            learned: [
              "Part 2 was built to test whether my Part 1 answer would survive a harder test. In Part 1 I used three questions and six configurations. Here I used nine questions, three for each difficulty level, with 21 separate pieces of evidence marked in the law, and I tested thirteen configurations covering chunk sizes of 300, 500, 700 and 1000 at several overlaps.",

              "The first thing the bigger test did was take away my perfect score. In Part 1 my best setting reached an MRR of 1.0000, meaning the correct chunk came back first every time. On nine questions the same setting dropped to 0.8704. Nothing changed in the code. The only thing that changed was that I asked more questions. A perfect score on three questions was never a real result. It just meant I had not asked enough.",

              "The answer itself held up. Chunks of 500 characters with 200 overlap still won, and the gap was wide. It retrieved 82 percent of the needed evidence while every 1000-character setting retrieved about 36 percent, no matter what overlap I gave them. All three of the 1000 settings landed on exactly the same precision and recall, which told me the overlap was doing nothing at that size.",

              "This time I could explain why, instead of guessing. I traced one question through both settings. The question asks which agency enforces the warranty provisions, and the answer is a single sentence in Article 66. At 1000 characters, the baseline returned pages 47, 46 and 77 with similarity scores between 0.58 and 0.60. All three are about warranties, and not one of them answers the question. The reason is that the Article 66 sentence shares its chunk with the end of the weights-and-measures penalties, so the chunk's vector ends up meaning penalties more than it means agency. At 500 characters the Article 66 chunk came back first with a similarity of 0.678. A large chunk does not just dilute a short provision. It changes what the chunk is about.",

              "Overlap behaved in a way I did not expect. It did not improve things steadily as I raised it, and at the smallest chunk size it actively made things worse. At 300 characters, recall fell from 0.77 to 0.57 to 0.51 as I went from no overlap to 10 percent to 20 percent, while the number of chunks rose from 640 to 795. I was paying more storage for worse results. The reason is that overlap does not add any new information to the index. It only moves where the cuts land. With nine questions, a boundary shifting a few characters decides whether one chunk holds a whole piece of evidence or only part of it, and that is luck rather than tuning.",

              "I checked the chunker instead of trusting it. For every one of the thirteen configurations I measured the overlap that actually came out and compared it to the setting I asked for. A setting of 200 measured 199.7 and a setting of 30 measured 29.7, so the chunker really was doing what I told it. I ran seven of these checks across all thirteen configurations and all of them passed. It felt like extra work at the time. It is the only reason I can say the comparison is fair, because if one configuration had silently ignored its own setting, every number in my table would have been meaningless.",

              "The best setting is also the most expensive one, and I want to be honest about that. My winning configuration produced 640 chunks, took 32.6 seconds to index and used 960 KB. One of the other settings, 700 characters with no overlap, found all the evidence for the same six questions out of nine using only 296 chunks, a 444 KB index and a faster search. It lost on ranking, not on coverage. If this chatbot had to run on a much larger document, that is the setting I would look at first, and I only know that because I measured cost alongside quality instead of only chasing the top score.",

              "The most useful thing I found is a limit that no setting can fix. My chunks never cross a page boundary, so when an answer is split by a page break, no configuration in my grid can retrieve it in full. One of my difficult questions is like this, and it failed everywhere. That is not a tuning problem and no amount of experimenting with sizes and overlaps will solve it. It needs chunking that follows the structure of the law, by article, instead of counting characters. I also have to say plainly that nine questions is still a small test. One question moving from found to not found shifts my average by about 0.11, which is larger than several of the differences I am reporting.",
            ],
            files: [
              {
                name: "PT-F2 — Chunking Experiment (notebook)",
                kind: "notebook",
                file: "/files/PT-F2_Chunking_Experiment_Leliza.ipynb",
                html: "/files/PT-F2_Chunking_Experiment_Leliza.html",
                note: "Thirteen configurations against nine questions and 21 evidence units. Opens in the page with all outputs.",
              },
              {
                name: "PT-F2 — IEEE Report",
                kind: "pdf",
                file: "/files/PT-F2_IEEE_Report_Leliza.pdf",
                note: "Five-page write-up with the per-question trace that explains why large chunks bury short provisions.",
              },
              {
                name: "PT-F2 — Experiment Results",
                kind: "sheet",
                file: "/files/PT-F2_Experiment_Results_Leliza.xlsx",
                note: "Eight sheets: config results, difficulty breakdown, retrieval logs, efficiency, implementation checks and the ground truth.",
              },
              {
                name: "PT-F2 — Retrieval Log",
                kind: "sheet",
                file: "/files/PT-F2_Retrieval_Log_Leliza.csv",
                note: "Every retrieved chunk for every question in every configuration, 351 rows.",
              },
            ],
          },

          {
            title: "Week 16 — WW-F1 and WW-F2: Optimization and GPU Testing",
            blurb: "Oct 26-31 · group work, Purple R",
            learned: [
              "My role this week was to review. Mark designed the experiment and ran both the CPU and the GPU sessions, Sean and I read the draft report and the notebook output, and I gave feedback on how the results were presented. That was a smaller job than the two labs before it, and I want to be straight about that rather than make it sound bigger than it was. What I got out of it was different from what I get out of running something myself.",

              "The finding is that a GPU does not help evenly. On a Tesla T4 against the same CPU code, indexing ran about thirty times faster, retrieval only four to five times faster, and generation between twenty-six and eighty-two times faster depending on the chunk size. Generation for the largest chunks took 302.8 seconds on the CPU and 3.7 seconds on the GPU. Retrieval barely improved because searching a few hundred vectors is almost no work for either device, so there is very little to save. The speedup grows where the work is, and for a RAG chatbot the work is in generation, not in search.",

              "The part I found most convincing was not the speed at all. Recall came out exactly the same on both devices for every configuration, 0.3889, 0.4444 and 0.5000 down the line. That is the check that makes the rest of the table mean something, because it proves the hardware changed only how long the answers took and not what the answers were. Having just spent two weeks on my own experiments, I knew to look for that line first. Without it the whole comparison could have been measuring two different systems.",

              "I also noticed something while reading the raw timings. Two of the runs use the same configuration and were repeated as a check. On the CPU they took 220.3 and 321.4 seconds. On the GPU they took 4.97 and 4.81 seconds. So the CPU is not only slower, it is unpredictable, and a single CPU measurement cannot be trusted on its own. That is the kind of thing that only shows up if you read the rows under the summary instead of the summary.",

              "Reviewing taught me something that producing does not. When I read Mark's report I was in exactly the position our instructor will be in, holding only the artefacts with none of the conversations behind them. Anything I could not follow from the tables alone was a presentation problem, not a reading problem, and that is the honest test of whether results have been written up properly. I had just finished making my own results tables for PT-F1 and PT-F2, and seeing someone else's from the outside showed me how much work a caption and a clearly named column are doing. I think my own tables got better because of it.",
            ],
            files: [
              {
                name: "WW-F1/F2 — RAG Experiment Notebook (GPU)",
                kind: "notebook",
                file: "/files/PurpleR_RAG_Experiment_Notebook_GPU.ipynb",
                html: "/files/PurpleR_RAG_Experiment_Notebook_GPU.html",
                note: "The CPU and GPU sessions, run by Mark Sagarino. Opens in the page with all outputs.",
              },
              {
                name: "WW-F1/F2 — Experiment Report",
                kind: "pdf",
                file: "/files/PurpleR_RAG_Experiment_Report.pdf",
                note: "IEEE paper with an Author Contributions section naming each member's role. My role was reviewing the draft and the notebook output.",
              },
              {
                name: "WW-F1/F2 — Experiment Results",
                kind: "sheet",
                file: "/files/PurpleR_RAG_Experiment_Results.xlsx",
                note: "Seven sheets: the configuration sweep, the repeated timing runs, the CPU-to-GPU speedups, answer quality and the environment of both sessions.",
              },
              {
                name: "WW-F1/F2 — Experiment Data",
                kind: "sheet",
                file: "/files/PurpleR_RAG_Experiment_Data.zip",
                note: "The corpus and supporting data for the experiment.",
              },
            ],
          },

          {
            title: "Week 18 — P-F1: Group Final Project",
            blurb: "Nov 9-14 · Purple R",
            learned: [
              "My job on the final project was the evaluation test set. I wrote all twelve questions, three easy, three average, three difficult and three that cannot be answered from our documents at all. For each answerable one I wrote the reference answer, the answer keys the scorer checks against, and the exact phrases from the law that count as evidence. There are twenty-one of those phrases. I also wrote a page of notes explaining why every single question is in the set, because the question our instructor would ask is not what the answers are, it is why these twelve.",

              "I did not build the chatbot. Mark built the pipeline and ran the chunking experiment, and Sean ran the three measured sessions on the T4 and kept the logs. What I built is the thing that tells us whether any of it worked. That sounded like the smaller job when we divided the work. It turned out to be the one where a mistake does the most damage, because every number in our report is measured against my file. If my evidence is wrong, the experiment still runs, the tables still fill in, and every figure in them is quietly wrong.",

              "That is not a hypothetical. I found one. I was checking that each evidence phrase appears only once in the whole corpus, and the phrase 'a proportionate price reduction' appears twice in RA 7394, once in Article 100 for products and again in Article 102 for services. I had used it as evidence for a question about a defective appliance. If it had shipped, a chunk from Article 102 would have been counted as correct evidence for a question about Article 100, and that would have inflated the relevance figures in the entire chunking experiment, not just that one question. I replaced it with 'with monetary updating, without prejudice', which is unique because of where the comma falls. Article 100 has it and Article 102 does not.",

              "Finding that taught me the rule I am proudest of in this project. The verification script only asks whether a phrase exists somewhere in the corpus. Two phrases can both pass that check and still break the measurement. So I added two rules of my own that no script was checking. First, every anchor must appear exactly once in all five documents. Second, no anchor may cross a line break in the source file. The second one matters because a chunk counts as relevant when it contains the whole anchor, so an anchor split across two lines can be cut in half by a chunk boundary, and then the chunk that actually holds the evidence is scored as irrelevant. Our experiment varies chunk size, and the smaller the chunk, the more likely that is. The longest anchor in my set is 83 characters and every one of them sits on a single line.",

              "I used what I learned in my own earlier labs to design the questions. In PT-F1 and PT-F2 I found that a short provision gets buried inside a large chunk, and I traced it down to Article 66 sharing its chunk with an unrelated penalty section. So I wrote one question around a deliberately short article that sits between two long ones, to see whether our chunking had swallowed it the same way. The three difficult questions are traps of a kind I would not have thought of before this term. One asks about a brand new motorcycle and four failed repairs, which looks exactly like the Lemon Law until you notice the same section that defines coverage also excludes motorcycles. The correct answer has to decline the Lemon Law and redirect to a different statute, and a chatbot that answers yes has fallen into the trap on purpose.",

              "The three unanswerable questions are the part I thought hardest about. It is easy to write an unanswerable question about basketball, but it proves nothing, because declining takes no judgement. Two of mine are built to retrieve real, relevant-looking text that still does not answer them. One asks for a deadline that does not exist in the law, and our corpus happens to be full of real deadlines, ten working days for mediation, twenty for adjudication, fifteen for appeals, all of them belonging to a different process. A chatbot that borrows one of those numbers gives a confident, specific, wrong answer, and that is exactly the behaviour worth measuring. This is the same lesson as my midterm, where the chatbot was most dangerous not when the topic was missing but when the topic was close.",

              "The main skill I gained is that a test set is designed, not collected. Before this I would have written questions I knew the answer to and called that an evaluation. Now I know you have to check that every document is covered so a failure in one of them cannot hide, define difficulty by what retrieval has to do and not by how long the question is, and phrase things the way a real buyer types them rather than as a lookup by article number. A chatbot that only answers when you feed it the article number is not the thing being tested.",

              "The other thing I am taking away is less about tools. My name is on the declaration page saying I can explain and defend my component, and that changed how carefully I worked. I audited all twenty-one anchors by hand a second time after the script had already passed them, because the script could not check the two rules that mattered most. Nobody asked me to and nobody would have known if I had skipped it. The defect I found was in that second pass.",
            ],
            files: [
              {
                name: "Final Project — RAG Chatbot Notebook",
                kind: "notebook",
                file: "/files/PurpleR_FinalProject_RAG.ipynb",
                html: "/files/PurpleR_FinalProject_RAG.html",
                note: "The finished chatbot over five Philippine consumer-protection laws. Opens in the page with all outputs.",
              },
              {
                name: "Final Project — IEEE Report",
                kind: "pdf",
                file: "/files/PurpleR_IEEE_Report.pdf",
                note: "The group's full paper on the build and its evaluation.",
              },
              {
                name: "Final Project — Member Responsibility Matrix",
                kind: "pdf",
                file: "/files/PurpleR_Member_Responsibility_Matrix.pdf",
                note: "Who owned what, what defect each member caught, and the signed declaration. My component is the evaluation test set.",
              },
              {
                name: "Final Project — Data Package (my test set)",
                kind: "sheet",
                file: "/files/PurpleR_FinalProject_Data.zip",
                note: "Holds PurpleR_TestSet.csv, TestSet_Rationale.md and verify_anchors_output.txt, which are the artefacts I own, together with the five-document corpus.",
              },
              {
                name: "Final Project — Chatbot Evaluation",
                kind: "sheet",
                file: "/files/PurpleR_Chatbot_Evaluation.csv",
                note: "Every answer scored against my reference answers and answer keys.",
              },
              {
                name: "Final Project — Chunking Experiment",
                kind: "sheet",
                file: "/files/PurpleR_Chunking_Experiment.xlsx",
                note: "The configuration sweep that chose the final chunk setting.",
              },
              {
                name: "Final Project — Experiment Logs",
                kind: "sheet",
                file: "/files/PurpleR_Experiment_Logs.xlsx",
                note: "Nine sheets, one for each stage of the pipeline, recorded across all three runs.",
              },
              {
                name: "Final Project — Run Notes",
                kind: "doc",
                file: "/files/PurpleR_Run_Notes.md",
                note: "Which run produced which table, including the second run that came out worse and was reported rather than dropped.",
              },
              {
                name: "Final Project — Integrity and AI Usage Statement",
                kind: "pdf",
                file: "/files/PurpleR_Integrity_and_AI_Usage_Statement.pdf",
                note: "The group's declaration of how AI tools were used.",
              },
              {
                name: "Final Project — Screenshots",
                kind: "sheet",
                file: "/files/PurpleR_Screenshots.zip",
                note: "Nine screenshots from the reported run, taken from the saved notebook rather than a later re-execution.",
              },
              {
                name: "P-F1 — Individual ePortfolio Completion",
                kind: "link",
                href: "https://eportfolio-fawn.vercel.app",
                note: "This portfolio, submitted as the individual half of the final project.",
              },
            ],
          },
        ],
        activities: [],
        projects: [],
      },

        groups: [
          {
            title: "Week 14 — PT-F1: Optimizing Chunk Size and Overlap",
            blurb: "Oct 11–17",
             learned: [
              "This week I tested six ways of cutting the law into chunks. Three different chunk sizes at the same overlap of 200, and four different overlaps at the same size of 1000. I expected overlap to be the important setting, because overlap is what keeps a sentence from being cut in half. I was wrong. Chunk size mattered far more.",

              "Cutting the chunk size in half, from 1000 down to 500, changed everything. Precision at 3 went from 0.2222 to 0.5556. MRR went from 0.5000 to 1.0000, which means the correct chunk came back first every single time instead of only half the time. Evidence coverage went from 0.5000 to 0.8333. Changing the overlap at size 1000 did much less. Even the best overlap I tried, 300, only reached 0.3333 precision. More overlap just repeats text. A smaller chunk changes what the chunk is actually about.",

              "The result that surprised me most was the easy question. At the baseline setting, my Easy question scored 0 for precision and 0 for MRR, meaning the right chunk never appeared in the top 3 at all. The Average and Difficult questions did better than the easy one. That made no sense to me until I looked at the chunks themselves. The answer to the easy question is one short line in Article 66 saying the DTI enforces the warranty provisions. Inside a 1000-character chunk, that one line sits beside a lot of unrelated text, so the chunk as a whole is not really about that line. At 500 characters, the same line fills more of the chunk and the chunk starts to mean what the line means. A small fact can get lost inside a big chunk.",

              "The 1500-character setting taught me to read past the score. Its precision and recall looked the same as the baseline, so at first glance it seemed fine. But 53.2 percent of its chunks were over the embedding model's input limit. More than half the text was being quietly cut off before it was ever turned into a vector. Nothing crashed and no error appeared. If I had only looked at the precision column I would have called that setting acceptable. I only caught it because I had a column counting how many chunks went over the limit.",

              "I also ran six edge-case tests on the finished setup, and only three behaved the way I wanted. It correctly refused a question with no relevant context, correctly refused a question outside the Act, and correctly refused a prompt injection that told it to ignore its sources and answer from its own knowledge. The three that failed all failed the same way. When I asked which agency enforces warranties and what that agency's hotline number is, it refused the whole question, even though the first half is plainly answered in the Act and only the hotline is missing. When I asked a vague question about the implementing agency, it answered DTI with full confidence, when the Act actually names different agencies for different chapters and the honest answer is that it depends which provision you mean.",

              "Looking at those three failures together, they are one problem, not three. My system can only do two things: answer completely or refuse completely. It has no way to answer the part it knows and say the rest is missing, and no way to say a question is unclear. The refusal rule I wrote is a switch when it should be a scale. That is the thing I want to fix, and it is the same lesson as my midterm, where the chatbot was most dangerous not when it knew nothing but when it almost knew the answer.",
            ],
            files: [
              {
                name: "PT-F1 — RAG Chunking Experiment (notebook)",
                kind: "notebook",
                file: "/files/PT-F1_RAG_Chunking_Experiment_Leliza.ipynb",
                note: "Experiment notebook for chunk size and overlap.",
              },
              {
                name: "PT-F1 — Final Model and Prompt",
                kind: "pdf",
                file: "/files/PT-F1_Final_Model_and_Prompt_Leliza.pdf",
                note: "The configuration and prompt I settled on after the experiment.",
              },
              {
                name: "PT-F1 — Retrieval Results",
                kind: "sheet",
                file: "/files/PT-F1_Retrieval_Results_Leliza.xlsx",
                note: "Retrieval scores across the chunk configurations tested.",
              },
              {
                name: "PT-F1 — Generation Results",
                kind: "sheet",
                file: "/files/PT-F1_Generation_Results_Leliza.xlsx",
                note: "Generation quality for each configuration.",
              },
              {
                name: "PT-F1 — Chunks Inspection",
                kind: "sheet",
                file: "/files/PT-F1_Chunks_Inspection_Leliza.xlsx",
                note: "Chunk-by-chunk inspection of how the text was split.",
              },
              {
                name: "RA 7394 — Consumer Act of the Philippines (corpus)",
                kind: "pdf",
                file: "/files/RA_7394_Consumer_Act.pdf",
                note: "The source document the chatbot retrieves from.",
              },
            ],
          },

          {
            title: "Week 15 — PT-F2: Determining the Best Chunk",
            blurb: "Oct 19–24",
            learned: [
              "Part 2 was built to test whether my Part 1 answer would survive a harder test. In Part 1 I used three questions and six configurations. Here I used nine questions, three for each difficulty level, with 21 separate pieces of evidence marked in the law, and I tested thirteen configurations covering chunk sizes of 300, 500, 700 and 1000 at several overlaps.",

              "The first thing the bigger test did was take away my perfect score. In Part 1 my best setting reached an MRR of 1.0000, meaning the correct chunk came back first every time. On nine questions the same setting dropped to 0.8704. Nothing changed in the code. The only thing that changed was that I asked more questions. A perfect score on three questions was never a real result. It just meant I had not asked enough.",

              "The answer itself held up. Chunks of 500 characters with 200 overlap still won, and the gap was wide. It retrieved 82 percent of the needed evidence while every 1000-character setting retrieved about 36 percent, no matter what overlap I gave them. All three of the 1000 settings landed on exactly the same precision and recall, which told me the overlap was doing nothing at that size.",

              "This time I could explain why, instead of guessing. I traced one question through both settings. The question asks which agency enforces the warranty provisions, and the answer is a single sentence in Article 66. At 1000 characters, the baseline returned pages 47, 46 and 77 with similarity scores between 0.58 and 0.60. All three are about warranties, and not one of them answers the question. The reason is that the Article 66 sentence shares its chunk with the end of the weights-and-measures penalties, so the chunk's vector ends up meaning penalties more than it means agency. At 500 characters the Article 66 chunk came back first with a similarity of 0.678. A large chunk does not just dilute a short provision. It changes what the chunk is about.",

              "Overlap behaved in a way I did not expect. It did not improve things steadily as I raised it, and at the smallest chunk size it actively made things worse. At 300 characters, recall fell from 0.77 to 0.57 to 0.51 as I went from no overlap to 10 percent to 20 percent, while the number of chunks rose from 640 to 795. I was paying more storage for worse results. The reason is that overlap does not add any new information to the index. It only moves where the cuts land. With nine questions, a boundary shifting a few characters decides whether one chunk holds a whole piece of evidence or only part of it, and that is luck rather than tuning.",

              "I checked the chunker instead of trusting it. For every one of the thirteen configurations I measured the overlap that actually came out and compared it to the setting I asked for. A setting of 200 measured 199.7 and a setting of 30 measured 29.7, so the chunker really was doing what I told it. I ran seven of these checks across all thirteen configurations and all of them passed. It felt like extra work at the time. It is the only reason I can say the comparison is fair, because if one configuration had silently ignored its own setting, every number in my table would have been meaningless.",

              "The best setting is also the most expensive one, and I want to be honest about that. My winning configuration produced 640 chunks, took 32.6 seconds to index and used 960 KB. One of the other settings, 700 characters with no overlap, found all the evidence for the same six questions out of nine using only 296 chunks, a 444 KB index and a faster search. It lost on ranking, not on coverage. If this chatbot had to run on a much larger document, that is the setting I would look at first, and I only know that because I measured cost alongside quality instead of only chasing the top score.",

              "The most useful thing I found is a limit that no setting can fix. My chunks never cross a page boundary, so when an answer is split by a page break, no configuration in my grid can retrieve it in full. One of my difficult questions is like this, and it failed everywhere. That is not a tuning problem and no amount of experimenting with sizes and overlaps will solve it. It needs chunking that follows the structure of the law, by article, instead of counting characters. I also have to say plainly that nine questions is still a small test. One question moving from found to not found shifts my average by about 0.11, which is larger than several of the differences I am reporting.",
            ],
            files: [
              {
                name: "PT-F2 — Chunking Experiment (notebook)",
                kind: "notebook",
                file: "/files/PT-F2_Chunking_Experiment_Leliza.ipynb",
                note: "Part 2 experiment: comparing chunk configurations to find the best one.",
              },
              {
                name: "PT-F2 — IEEE Report",
                kind: "pdf",
                file: "/files/PT-F2_IEEE_Report_Leliza.pdf",
                note: "IEEE-format write-up of the chunking experiment and its result.",
              },
              {
                name: "PT-F2 — Experiment Results",
                kind: "sheet",
                file: "/files/PT-F2_Experiment_Results_Leliza.xlsx",
                note: "Full results table for every configuration tested.",
              },
              {
                name: "PT-F2 — Retrieval Log",
                kind: "sheet",
                file: "/files/PT-F2_Retrieval_Log_Leliza.csv",
                note: "Per-query retrieval log behind the results.",
              },
              {
                name: "RA 7394 — corpus (same source as Week 14)",
                kind: "pdf",
                file: "/files/RA_7394_Consumer_Act.pdf",
                note: "The same statute, resubmitted with this exercise.",
              },
            ],
          },

          {
            title: "Week 16 — WW-F1 and WW-F2: Optimization and GPU Testing",
            blurb: "Oct 26–31 · group work with Purple R",
            learned: [
              "My role this week was to review. Mark designed the experiment and ran both the CPU and the GPU sessions, Sean and I read the draft report and the notebook output, and I gave feedback on how the results were presented. That was a smaller job than the two labs before it, and I want to be straight about that rather than make it sound bigger than it was. What I got out of it was different from what I get out of running something myself.",

              "The finding is that a GPU does not help evenly. On a Tesla T4 against the same CPU code, indexing ran about thirty times faster, retrieval only four to five times faster, and generation between twenty-six and eighty-two times faster depending on the chunk size. Generation for the largest chunks took 302.8 seconds on the CPU and 3.7 seconds on the GPU. Retrieval barely improved because searching a few hundred vectors is almost no work for either device, so there is very little to save. The speedup grows where the work is, and for a RAG chatbot the work is in generation, not in search.",

              "The part I found most convincing was not the speed at all. Recall came out exactly the same on both devices for every configuration, 0.3889, 0.4444 and 0.5000 down the line. That is the check that makes the rest of the table mean something, because it proves the hardware changed only how long the answers took and not what the answers were. Having just spent two weeks on my own experiments, I knew to look for that line first. Without it the whole comparison could have been measuring two different systems.",

              "I also noticed something while reading the raw timings that is not called out in the report. Two of the runs use the same configuration and were repeated as a check. On the CPU they took 220.3 and 321.4 seconds. On the GPU they took 4.97 and 4.81 seconds. So the CPU is not only slower, it is unpredictable, and a single CPU measurement cannot be trusted on its own. That is the kind of thing that only shows up if you read the rows under the summary instead of the summary.",

              "Reviewing taught me something that producing does not. When I read Mark's report I was in exactly the position our instructor will be in, holding only the artefacts with none of the conversations behind them. Anything I could not follow from the tables alone was a presentation problem, not a reading problem, and that is the honest test of whether results have been written up properly. I had just finished making my own results tables for PT-F1 and PT-F2, and seeing someone else's from the outside showed me how much work a caption and a clearly named column are doing. I think my own tables got better because of it.",
            ],
            files: [
              {
                name: "WW-F1/F2 — RAG Experiment Notebook (GPU)",
                kind: "notebook",
                file: "/files/PurpleR_RAG_Experiment_Notebook_GPU.ipynb",
                note: "Group notebook comparing CPU and GPU performance.",
              },
              {
                name: "WW-F1/F2 — Experiment Report",
                kind: "pdf",
                file: "/files/PurpleR_RAG_Experiment_Report.pdf",
                note: "IEEE paper with an Author Contributions section naming each member's role.",
              },
              {
                name: "WW-F1/F2 — Experiment Results",
                kind: "sheet",
                file: "/files/PurpleR_RAG_Experiment_Results.xlsx",
                note: "Timing and throughput figures for both devices.",
              },
              {
                name: "WW-F1/F2 — Experiment Data",
                kind: "sheet",
                file: "/files/PurpleR_RAG_Experiment_Data.zip",
                note: "Raw data behind the results.",
              },
            ],
          },

          {
            title: "Week 18 — P-F1: Group Final Project",
            blurb: "Nov 9–14 · Purple R",
            learned: [
              "My job on the final project was the evaluation test set. I wrote all twelve questions, three easy, three average, three difficult and three that cannot be answered from our documents at all. For each answerable one I wrote the reference answer, the answer keys the scorer checks against, and the exact phrases from the law that count as evidence. There are twenty-one of those phrases. I also wrote a page of notes explaining why every single question is in the set, because the question our instructor would ask is not what the answers are, it is why these twelve.",

              "I did not build the chatbot. Mark built the pipeline and ran the chunking experiment, and Sean ran the three measured sessions on the T4 and kept the logs. What I built is the thing that tells us whether any of it worked. That sounded like the smaller job when we divided the work. It turned out to be the one where a mistake does the most damage, because every number in our report is measured against my file. If my evidence is wrong, the experiment still runs, the tables still fill in, and every figure in them is quietly wrong.",

              "That is not a hypothetical. I found one. I was checking that each evidence phrase appears only once in the whole corpus, and the phrase 'a proportionate price reduction' appears twice in RA 7394, once in Article 100 for products and again in Article 102 for services. I had used it as evidence for a question about a defective appliance. If it had shipped, a chunk from Article 102 would have been counted as correct evidence for a question about Article 100, and that would have inflated the relevance figures in the entire chunking experiment, not just that one question. I replaced it with 'with monetary updating, without prejudice', which is unique because of where the comma falls. Article 100 has it and Article 102 does not.",

              "Finding that taught me the rule I am proudest of in this project. The verification script Sean wrote only asks whether a phrase exists somewhere in the corpus. Two phrases can both pass that check and still break the measurement. So I added two rules of my own that no script was checking. First, every anchor must appear exactly once in all five documents. Second, no anchor may cross a line break in the source file. The second one matters because a chunk counts as relevant when it contains the whole anchor, so an anchor split across two lines can be cut in half by a chunk boundary, and then the chunk that actually holds the evidence is scored as irrelevant. Our experiment varies chunk size, and the smaller the chunk, the more likely that is. The longest anchor in my set is 83 characters and every one of them sits on a single line.",

              "I used what I learned in my own earlier labs to design the questions. In PT-F1 and PT-F2 I found that a short provision gets buried inside a large chunk, and I traced it down to Article 66 sharing its chunk with an unrelated penalty section. So I wrote question E2 around a deliberately short article that sits between two long ones, to see whether our chunking had swallowed it the same way. The three difficult questions are traps of a kind I would not have thought of before this term. One asks about a brand new motorcycle and four failed repairs, which looks exactly like the Lemon Law until you notice the same section that defines coverage also excludes motorcycles. The correct answer has to decline the Lemon Law and redirect to a different statute, and a chatbot that answers yes has fallen into the trap on purpose.",

              "The three unanswerable questions are the part I thought hardest about. It is easy to write an unanswerable question about basketball, but it proves nothing, because declining takes no judgement. Two of mine are built to retrieve real, relevant-looking text that still does not answer them. One asks for a deadline that does not exist in the law, and our corpus happens to be full of real deadlines, ten working days for mediation, twenty for adjudication, fifteen for appeals, all of them belonging to a different process. A chatbot that borrows one of those numbers gives a confident, specific, wrong answer, and that is exactly the behaviour worth measuring. This is the same lesson as my midterm, where the chatbot was most dangerous not when the topic was missing but when the topic was close.",

              "The main skill I gained is that a test set is designed, not collected. Before this I would have written questions I knew the answer to and called that an evaluation. Now I know you have to check that every document is covered so a failure in one of them cannot hide, define difficulty by what retrieval has to do and not by how long the question is, and phrase things the way a real buyer types them rather than as a lookup by article number. A chatbot that only answers when you feed it the article number is not the thing being tested.",

              "The other thing I am taking away is less about tools. My name is on the declaration page saying I can explain and defend my component, and that changed how carefully I worked. I audited all twenty-one anchors by hand a second time after the script had already passed them, because the script could not check the two rules that mattered most. Nobody asked me to and nobody would have known if I had skipped it. The defect I found was in that second pass.",
            ],
            files: [
              {
                name: "Final Project — RAG Notebook",
                kind: "notebook",
                file: "/files/PurpleR_FinalProject_RAG.ipynb",
                note: "The finished chatbot: ingestion, retrieval, and grounded generation.",
              },
              {
                name: "Final Project — IEEE Report",
                kind: "doc",
                file: "/files/PurpleR_IEEE_Report.docx",
                note: "Full IEEE paper for the final project.",
              },
              {
                name: "Final Project — Chatbot Evaluation",
                kind: "sheet",
                file: "/files/PurpleR_Chatbot_Evaluation.csv",
                note: "Evaluation of the chatbot's answers against the source.",
              },
              {
                name: "Final Project — Chunking Experiment",
                kind: "sheet",
                file: "/files/PurpleR_Chunking_Experiment.xlsx",
                note: "Chunking results carried into the final build.",
              },
              {
                name: "Final Project — Experiment Logs",
                kind: "sheet",
                file: "/files/PurpleR_Experiment_Logs.xlsx",
                note: "Run-by-run log of every experiment behind the final configuration.",
              },
              {
                name: "Final Project — Run Notes",
                kind: "doc",
                file: "/files/PurpleR_Run_Notes.md",
                note: "Working notes kept during the build.",
              },
              {
                name: "Final Project — Member Responsibility Matrix",
                kind: "doc",
                file: "/files/PurpleR_Member_Responsibility_Matrix.docx",
                note: "Who did what on the team, agreed by all three members.",
              },
              {
                name: "Final Project — Integrity and AI Usage Statement",
                kind: "pdf",
                file: "/files/PurpleR_Integrity_and_AI_Usage_Statement.pdf",
                note: "Declaration of how AI tools were used in the project.",
              },
              {
                name: "Final Project — Screenshots",
                kind: "sheet",
                file: "/files/PurpleR_Screenshots.zip",
                note: "Screenshots of the chatbot running.",
              },
              {
                name: "Final Project — Data",
                kind: "sheet",
                file: "/files/PurpleR_FinalProject_Data.zip",
                note: "The corpus and supporting data files.",
              },
              {
                name: "P-F1 — Individual ePortfolio Completion",
                  kind: "link",
                  href: "https://eportfolio-fawn.vercel.app",
                  note: "This portfolio, submitted as the individual half of the final project.",
                },
              ],
            },
          ],
        activities: [],
        projects: [],
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
  const inGroups = (term.groups || []).reduce(
    (n, g) => n + (g.files?.length || 0),
    0
  );
  return (term.activities?.length || 0) + (term.projects?.length || 0) + inGroups;
}

export function courseFileCount(course) {
  return TERM_ORDER.reduce((n, key) => n + termFileCount(course.terms[key]), 0);
}

export function totalFiles() {
  return courses.reduce((n, c) => n + courseFileCount(c), 0);
}