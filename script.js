// QUIZ START

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


const myQuestions = [
    {
        question: "which of the following is an american recipe?",
        answers: {
            a: "halo-halo",
            b: "fish and chips",
            c: "mac and cheese"
        },
        correctAnswer: "c"
    },

    {
        question: "which of these desserts known for its sweet sesame filling?",
        answers: {
            a: "ggultteok",
            b: "princess cake",
            c: "leche flan"
        },
        correctAnswer: "a"
    },

    {
        question: "which of these recipes originates from an asian country?",
        answers: {
            a: "chocolate balls",
            b: "guava cake",
            c: "falooda"
        },
        correctAnswer: "c"
    },

    {
        question: "which of the following is made with taro leaves?",
        answers: {
            a: "dolmas",
            b: "squid luau",
            c: "baklava"
        },
        correctAnswer: "b"
    }
];


function buildQuiz(){
    const output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                        <input type="radio" name="questions${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );
    quizContainer.innerHTML = output.join('');

    
}


// QUIZ END







// SLIDER START

const cardWrapper = document.querySelector('.card-wrapper')
const widthToScroll = cardWrapper.children[0].offsetWidth
const arrowPrev = document.querySelector('.arrow.prev')
const arrowNext = document.querySelector ('.arrow.next')
const cardBounding = cardWrapper.getBoundingClientRect()
const cardImageAndLink = cardWrapper.querySelectorAll('img, a')
let currScroll = 0
let initPos = 0
let clicked = false

cardImageAndLink.forEach(item=> {
    item.setAttribute('draggable', false)
})

arrowPrev.onclick = function() {
    cardWrapper.scrollLeft -= widthToScroll
}

arrowNext.onclick = function() {
    cardWrapper.scrollLeft += widthToScroll
}

cardWrapper.onmousedown = function(e) {
    cardWrapper.classList.add('grab')
    initPos = e.clientX - cardBounding.left
    currScroll = cardWrapper.scrollLeft
    clicked = true
}

cardWrapper.onmousemove = function(e) {
    if(clicked) {
        const xPos = e.clientX - cardBounding.left
        cardWrapper.scrollLeft = currScroll + -(xPos - initPos)

    }
}

cardWrapper.onmouseup = mouseUpAndLeave
cardWrapper.onmouseleave = mouseUpAndLeave


function mouseUpAndLeave() {
    cardWrapper.classList.remove('grab')
    clicked = false
}

// SLIDER END







// QUICKVIEW START

let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.card-wrapper .card-item').forEach(carditem => {
    carditem.onclick = () => {
        previewContainer.style.display = 'grid';
        let name = carditem.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if(name == target){
                    preview.classList.add('active');
                }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    }
})


// QUICKVIEW END
