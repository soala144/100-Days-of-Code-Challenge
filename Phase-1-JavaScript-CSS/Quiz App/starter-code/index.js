
let currentQuestionIndex = 0
async function loadQuestions(){
    try {
        const response = await fetch('real.json')
        const questions = await response.json()
        displayQuestion(questions[currentQuestionIndex])
        console.log(questions.length)

        // Update Buttons Function
        function updateButtons() {
            // Disable previous if at the first question 
            if (currentQuestionIndex === 0) {
                previousButton.disabled = true
            } else {
                previousButton.disabled = false
            }

            // disable next if at the last question
            if (currentQuestionIndex === questions.length - 1) {
                nextButton.disabled = true
            } else {
                nextButton.disabled = false
            }
        }
        // Add the Next Button
        const nextButton = document.getElementById("next")
        nextButton.addEventListener("click", () => {
            
            currentQuestionIndex++
            displayQuestion(questions[currentQuestionIndex])
            updateButtons()
        })

    //    Previous button
        const previousButton = document.getElementById("previous")
      
        previousButton.addEventListener("click", () => {
            currentQuestionIndex--
            displayQuestion(questions[currentQuestionIndex])
            updateButtons()
           
        })
    } catch (error) {
        console.error('Errror loading questions: ', error)
    }
}
//    const questionNumber = document.getElementById("number")
//     questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`
function displayQuestion(question){
    const questionContainer = document.getElementById("right")
    questionContainer.textContent = `${question.question}`
}
document.addEventListener('DOMContentLoaded', loadQuestions)