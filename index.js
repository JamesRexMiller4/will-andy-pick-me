var inputquestion = document.getElementById('question');
var button = document.getElementById('submitbtn');
var grabSpanQuestion = document.getElementById('insertquestion');
var grabSpanResult = document.getElementById('insertresult');

var eightballArray = [
"It is certain.",
"It is decidedly so.",
"Without a doubt."
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
]


button.addEventListener('click', function() {
    question = inputequestion.value;
    grabSpanQuestion.innerHTML = question;

})
