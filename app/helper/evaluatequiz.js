/**
 * evaluateQuiz return the right answers percentage of the quiz submission
 * arguments: user's answers (Array), admin's answers (Array)
 */
function evaluateQuiz(userAns, adminAns) {
  let numRight = userAns.filter((ans, i) => ans === adminAns[i]).length;
  return numRight;
}

module.exports = { evaluateQuiz };
