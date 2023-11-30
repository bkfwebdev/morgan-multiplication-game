let score = 0;

function generateRandomNumber() {
  return Math.floor(Math.random() * 99) + 1; // Change 10 to set the range of multiplication
}

function generateQuestion() {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  
  document.getElementById('num1').textContent = num1;
  document.getElementById('num2').textContent = num2;
  document.getElementById('answer').value = '';
  document.getElementById('result').textContent = '';
}

function checkAnswer() {
  const num1 = parseInt(document.getElementById('num1').textContent);
  const num2 = parseInt(document.getElementById('num2').textContent);
  const userAnswer = parseInt(document.getElementById('answer').value);
  
  const correctAnswer = num1 * num2;
  
  if (userAnswer === correctAnswer) {
    document.getElementById('result').textContent = 'Correct! +5 points';
    document.getElementById('result').style.color = 'green';
    score += 5;
  } else {
    document.getElementById('result').textContent = 'Incorrect! Try again. -5 points';
    document.getElementById('result').style.color = 'red';
    score -= 5;
  }
  
  document.getElementById('score').textContent = `Score: ${score}`;
}

generateQuestion();
