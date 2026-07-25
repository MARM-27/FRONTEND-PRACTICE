const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    const index = question.parentElement;
    const plusBtn = question.querySelectorAll('button')[0];
    const minusBtn = question.querySelectorAll('button')[1];
    const answer = index.querySelector('.answer');
    const toggleButtons = () => {
        plusBtn.classList.toggle('displayed');
        plusBtn.classList.toggle('hidden');
        
        minusBtn.classList.toggle('displayed');
        minusBtn.classList.toggle('hidden');

        if (plusBtn.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        } else if (minusBtn.classList.contains('hidden')) {
        answer.classList.add('hidden');
        }
    };

    plusBtn.addEventListener('click', toggleButtons);
    minusBtn.addEventListener('click', toggleButtons);
});