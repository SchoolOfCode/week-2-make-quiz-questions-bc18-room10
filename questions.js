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

  
];

// Don't worry about this, we're just exporting the questions
module.exports = questions;

{
  question_text: "",
  question_type: "multiple_choice",
  options: ["", "", "", ""],
  correct_option: option[],
  correct_explanation: ""
},