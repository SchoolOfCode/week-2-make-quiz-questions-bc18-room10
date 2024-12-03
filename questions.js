// questions.js

const questions = [
  // Add your questions here
  {
    question_text: "What is Step 4 of the 7 step programme?",
    question_type: "multiple_choice",
    options: ["Test By Hand", "Work an Example", "Generalize", "Translate to Code"],
    correct_option: option[0],
    correct_explanation: "Step after Generalize and the step before Translate to Code"
  },
  {
    question_text: "What is the role of the navigator in pair programming?",
    question_type: "multiple_choice",
    options: ["Write the code", "Be passive", "Guide the Session", "Do Everything"],
    correct_option: option[2],
    correct_explanation: "Think logically for the driver who is focusing on inputting"
  },
  {
    question_text: "What layer are you most likely to work on in the abstraction model",
    question_type: "multiple_choice",
    options: ["Machine Code", "Assembly Language", "Physics", "Algorithm"],
    correct_option: option[3],
    correct_explanation: "You will often never go further than the algorithm layer or the application layer"
  },
  {
    question_text: "What is an algorithm?",
    question_type: "multiple_choice",
    options: ["A sequence of instructions for solving a problem or completing a task.", "A programming language used for web development.", "A function in a program that returns a value.", "A data structure used to organize and store data."],
    correct_option: option[0],
    correct_explanation: "An algorithm is a logical sequence that provides clear, actionable steps to solve a problem, independent of how it's implemented (whether in a programming language or even done manually). It’s the foundation of problem-solving in both everyday life and programming."
  },
  {
    question_text: "Which of these is a Disney Ideation room?",
    question_type: "multiple_choice",
    options: ["Doodler", "Dreamer", "Negative", "Mickey"],
    correct_option: option[1],
    correct_explanation: "The 3 rooms are called Dreamer, Realist and Critic"
  },
  {
    question_text: "What does MVP stand for in programming?",
    question_type: "multiple_choice",
    options: ["Most Valued Person", "Most Verbose Player", "My Vermillion Piano", "Minimum Viable Product"],
    correct_option: option[3],
    correct_explanation: "The MVP is used as a goal for you to reach the minimum functionality of a project"
  },
  {
    question_text: "What is the Primary purpose for agile development?",
    question_type: "multiple_choice",
    options: ["To deliver a product as quickly as possible, regardless of quality.", "To focus on flexibility, collaboration, and delivering value to customers in incremental steps.", "To ensure that all development is done without customer feedback.", "To follow a strict, detailed plan without changes."],
    correct_option: option[1],
    correct_explanation: "Agile is designed to deliver value iteratively, adapt to change, and involve collaboration."
  },
  {
    question_text: "What does the I stand for in the CHRIS Acronym?",
    question_type: "multiple_choice",
    options: ["I Love Coding", "Interpolation", "Interleaved Practice", "Irritation"],
    correct_option: option[2],
    correct_explanation: "The CHRIS acronym stands for: Challenge, Hunger, Retrieval, Interleaved Practice, Spaced Repetition"
  },
  {
    question_text: "Who were the 2 external speakers from week 1?",
    question_type: "multiple_choice",
    options: ["Ira Rainey, Fadumo Aideed", "Andy Brown, Chris Meah", " Ira Rainey, Andy Brown", "Chris Meah, Fadumo Aideed"],
    correct_option: option[0],
    correct_explanation: "Ira from Microsoft spoke on Tuesday and Fadumo was an ex-bootcamper that spoke on Wednesday"
  },
  {
    question_text: "Which of these is a good tactic for improving your memory?",
    question_type: "multiple_choice",
    options: ["Fort Bracket", "Buckingham Palace", "Peach's Castle", "Memory Palace"],
    correct_option: option[3],
    correct_explanation: "Memory palace is about imagining your problem in a familiar route that you can follow with a story behind it."
  },
];

// Don't worry about this, we're just exporting the questions
module.exports = questions;
