var inputquestion = document.getElementById('question');
var button = document.getElementById('submitbtn');
var grabSpanQuestion = document.getElementById('insertquestion');
var grabSpanResult = document.getElementById('insertresult');

var eightball = document.querySelector('.eightballimg');
var grabH2Question = document.getElementById('displayquest');
var grabH2Result = document.getElementById('displayresult');

var clearbutton = document.getElementById('clearbtn');

var eightballArray = [
"It is certain.",
"It is decidedly so.",
"Without a doubt.",
"Yes - definitely.",
"You may rely on it.",
"As I see it, yes.",
"Most likely.",
"Outlook good.",
"Yes.",
"Signs point to yes.",
"Reply hazy, try again.",
"Ask again later.",
"Better not tell you now.",
"Cannot predict now.",
"Concentrate and ask again.",
"Don't count on it.",
"My reply is no.",
"My sources say no.",
"Outlook not so good.",
"Very doubtful."
];

function disable() {
  if (inputquestion.value.length === 0) {
    return;
  }
}

function displayQuestion() {
    var question = inputquestion.value;
    grabSpanQuestion.innerHTML = question;
    event.preventDefault();
    inputquestion.value = '';
};

function selectRandomResult() {
    i = Math.floor(Math.random() * 20)
    grabSpanResult.innerHTML = eightballArray[i];
    event.preventDefault();
};


function hocusPocus(){
      eightball.classList.add('disappear');
      grabH2Question.classList.remove('disappear');
      grabH2Result.classList.remove('disappear');
};

function abraKadabra() {
      eightball.classList.remove('disappear');
      grabH2Question.classList.add('disappear');
      grabH2Result.classList.add('disappear');
}

button.addEventListener('click', function() {
    if (inputquestion.value.length === 0) {
      return;
    }
    displayQuestion();
    selectRandomResult();
    hocusPocus();

});

clearbutton.addEventListener('click', function() {
  //   if (grabH2Result.value.length ===0) {
  //     return;
  // } else clearbutton.style.backgroundcolor = '#DE4841'
    document.getElementById('magicform').reset();
    abraKadabra();
});
