const form=document.querySelector('.quiz_box')
const answers=Array.from(document.querySelectorAll('.answer'))

const handleQuiz = e=>{
    e.preventDefault();

    const checkedAnswers=answers.filter(answer=> answer.checked )


const isTrue=checkedAnswers.every(answer =>answer.value==='true');

const allChecked = checkedAnswers.length

checkedAnswers.forEach(answer=>{
    const checkIfcorrect=answer.value === 'true'
   
    const answerBox=answer.closest('.answer-box')
    if(checkIfcorrect){
        answerBox.classList.add('correct')
        answerBox.classList.remove('incorrect')
    }
    else
    {
        answerBox.classList.add('incorrect')
        answerBox.classList.remove('correct')
    }

})

    
}
window.addEventListener('DOMContentLoaded', function() {
    // Pobierz wszystkie elementy input typu radio
    var radioButtons = document.querySelectorAll('input[type="radio"]');
  
    // Iteruj przez wszystkie elementy radio
    radioButtons.forEach(function(radioButton) {
      // Usuń zaznaczenie
      radioButton.checked = false;
    });
  });


form.addEventListener('submit',handleQuiz);