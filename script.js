var applepieScore = 0;
var mangosagoScore = 0;
var princesscakeScore = 0;
var tiramisuScore = 0;
var malvapuddingScore = 0;
var brigadeirosScore = 0;

var questionCount = 0;

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
    q1a1.addEventListener("click", applepie, mangosago, malvapudding);
    q1a2.addEventListener("click", princesscake, tiramisu, brigadeiros);
    q1a3.addEventListener("click", mangosago, princesscake, tiramisu, malvapudding,);

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3"); 
    q2a1.addEventListener("click", applepie, princesscake, brigadeiros);
    q2a2.addEventListener("click", applepie, mangosago)
    q2a3.addEventListener("click", applepie, princesscake, malvapudding, tiramisu);

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q3q3 = document.getElementById("q3a5");
    q3a1.addEventListener("click", applepie, tiramisu);
    q3a2.addEventListener("click", mangosago, brigadeiros);
    q3a3.addEventListener("click", mangosago);
    q3a4.addEventListener("click", applepie, princesscake, tiramisu);
    q3a5.addEventListener("click", malvapudding);

function applepie(){
    applepieScore += 1;
    questionCount += 1;

    console.log("questionCount = " +  questionCount + " applepieScore = " + applepieScore);

    if (questionCount == 3);
    console.log("apple pie! yum.");
    updateResult ();
}

function mangosago(){
    mangosagoScore += 1;
    questionCount += 1;

    console.log("questionCount = " + questionCount + " mangosagoScore = " + mangosagoScore);

    if (questionCount == 3);
    console.log("mango sago? refreshing!");
    updateResult ();
}

function princesscake(){
    princesscakeScore += 1;
    questionCount += 1;

    console.log("questionCount = " + questionCount + " princesscakeScore = " + princesscakeScore);

    if (questionCount == 3);
    console.log("princess cake? ooo la la!");
    updateResult ();
}

function tiramisu(){
    tiramisuScore += 1;
    questionCount += 1;

    console.log("questionCount = " + questionCount + " tiramisuScore = " + tiramisuScore);

    if (questionCount == 3);
    console.log("tiramisu! yum.");
    updateResult ();
}


function malvapudding(){
    malvapuddingScore += 1;
    questionCount += 1;

    console.log("questionCount = " + questionCount + " malvapuddingScore = " + malvapuddingScore);

    if (questionCount == 3);
    console.log("malva pudding! delicious.");
    updateResult ();
}

function brigadeiros(){
    brigadeirosScore += 1;
    questionCount += 1;

    console.log("questionCount = " + questionCount + " brigadeirosScore = " + brigadeirosScore);

    if (questionCount == 3);
    console.log("brigadeiros! yummy.");
    updateResult ();
}


function updateResult(){
    if (applepieScore >= 2) {
        result.innerHTML = "apple pie? yum!";
        console.log("apple pie? yum!");
    }   else if (mangosagoScore >=2) {
        result.innerHTML = "mango sago? refreshing!";
        console.log("mango sago? refreshing!");
    }   else if (princesscakeScore >=2) {
        result.innerHTML = "princess cake? ooo la la!";
        console.log("princess cake? ooo la la!");
    }   else if (tiramisuScore >=2) {
        result.innerHTML = "tiramisu! yum.";
        console.log("tiramisu! yum.");
    }   else if (malvapuddingScore >=2) {
        result.innerHTML = "malva pudding! delicious.";
        console.log("malva pudding! delicious.");
    } else if (brigadeirosScore >=2) {
        result.innerHTML = "brigadeiros! yummy.";
        console.log("brigadeiros! yummy");
    }
}

function restartQuiz(){
    result.innterHTML = "i'd give you...";
    applepieScore = 0;
    mangosagoScore = 0;
    princesscakeScore = 0;
    tiramisuScore = 0;
    malvapuddingScore = 0;
    brigadeirosScore = 0;
}



    
