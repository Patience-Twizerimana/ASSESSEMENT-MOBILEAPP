function calculateScore() {

  let score = 0;

  let totalQuestions = 4;

  for (let i = 1; i <= totalQuestions; i++) {
    let answer = document.querySelector('input[name="q' + i + '"]:checked');

    if (answer) {
      score += parseInt(answer.value);
    }
  }

  let level = "";

  if (score <= 1) {
    level = "Low Awareness ❌";
  } 
  else if (score <= 3) {
    level = "Medium Awareness ⚠️";
  } 
  else {
    level = "High Awareness ✅";
  }

  document.getElementById("result").innerHTML =
    "Your Score: " + score + "/4 <br> Level: " + level;
}