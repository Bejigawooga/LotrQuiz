        var userScore = 0;
        var index = 0;
        var gameOver = false;

        var scoreMinutes = 0;
        var scoreSeconds = 0;
        var correctAnswer = true;

        var local_data =
    [
        {
            title: "Gimli insisted on the fellowship passing through this underground complex, once occupied by dwarves:",
            choices: ["Mordor", "Isengard", "The Lonely Mountain", "Moria"],
            answer: "Moria"
        },
        {
            title: "The wraiths sent to find the Ring rode flying creatures with no true canonical name, but they are most often referred to as.",
            choices: ["Fell Beasts", "Drakes", "Wyverns", "Wyrms"],
            answer: "Fell Beasts"
        },
        {
            title: "Which one of these answers is the canonical name of the man who is also a bear.",
            choices: ["Winnie", "Warg", "Beorn", "Bomber"],
            answer: "Beorn"
        },
        {
            title: "Which one of these is the name of the undead creatures sent by Sauron to find the Ring.",
            choices: ["Balrog", "Nazgul", "Orc", "Uruk-hai"],
            answer: "Nazgul"
        },
        {
            title: "On their journey, Frodo and his companions encountered the dark forces of Sauron while making camp among the ruins on this hill.",
            choices: ["Bree", "Gondor","The Misty Hill", "Weathertop"],
            answer: "Weathertop"
        }
    ];

        function DisplayQuestion(index) {
            document.getElementById("lblQuestion").innerHTML = local_data[index].title;
            document.getElementById("btnQ1").innerHTML = local_data[index].choices.slice(0, 1);
            document.getElementById("btnQ2").innerHTML = local_data[index].choices.slice(1, 2);
            document.getElementById("btnQ3").innerHTML = local_data[index].choices.slice(2, 3);
            document.getElementById("btnQ4").innerHTML = local_data[index].choices.slice(3, 4);
        
        }

        function RespondToInput(param) {
            var response = "Sorry, that is not correct.";

            // Display response
            if (local_data[index].answer == param.innerHTML) {               
               response = "CORRECT!";
               userScore ++;
            }
            else{
                correctAnswer = false;
            }
            document.getElementById("lblResponse").innerHTML = response;

            // Array is zero-based
            if (index < local_data.length - 1) {
                // Display next question
                index++;
                DisplayQuestion(index);
            }
            else {
                
                
               gameOver = true;
               addTextNode(); 
            }   
        }

        function addTextNode() {
            var userName = prompt("Please enter your name for your high score.")
            var highScore = document.createElement("li");
                var textnode = document.createTextNode(userName + " " + userScore + "/"+ local_data.length+ " " + scoreMinutes + ":" + scoreSeconds) 
                highScore.appendChild(textnode);
                document.getElementById("scores").appendChild(highScore);   
                
        
          }
          
        function startButton(){
            
            showButtons();
            
            DisplayQuestion(0)
            document.getElementById("startBtn").innerHTML = "";
            buttonStart();

        }

        function showButtons()
        {
            document.getElementById("btnQ1").style.visibility = "visible";
            document.getElementById("btnQ2").style.visibility = "visible";
            document.getElementById("btnQ3").style.visibility = "visible";
            document.getElementById("btnQ4").style.visibility = "visible";
        }

// ------------------------timer begins here---------------------------------
function startTimer(duration, display) {
   
    var timer = duration, minutes, seconds;
    setInterval(function () {
        if(gameOver)
        {
            display.textContent = "LOTR Quiz";
            return;
        }
        else
        {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = "LOTR Quiz: " + minutes + ":" + seconds;    
            scoreMinutes = minutes;
            scoreSeconds = seconds;  
            
            if(!correctAnswer)
            {
                timer -= 15;
                correctAnswer = true;
            }

            if (--timer < 0) {
                timer = duration;
            }
        }
    }, 1000);
    
}

function  buttonStart() {
    var timer = 90;
        display = document.querySelector('#title');
    startTimer(timer, display);
}; 