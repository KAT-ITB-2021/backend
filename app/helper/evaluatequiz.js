/**
 * evaluateQuiz return the right answers percentage of the quiz submission
 * arguments: user's answers (Array), admin's answers (Array)
 */
function evaluateQuiz(userAns, adminAns) {
  let total = adminAns.length;
  let numRight = userAns.filter((ans, i) => ans === adminAns[i]).length;
  return Math.round(((numRight/total)*100));
}

module.exports = { evaluateQuiz };
