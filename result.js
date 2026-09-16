      const questionCount = (() => {
        try {
          const questions = JSON.parse(localStorage.getItem('quizQuestions') || '[]');
          return Array.isArray(questions) && questions.length ? questions.length : 10;
        } catch (error) {
          return 10;
        }
      })();
      const storedScore = Number(localStorage.getItem('score'));
      const score = Number.isFinite(storedScore) ? Math.min(Math.max(storedScore, 0), questionCount) : 0;
      const incorrect = questionCount - score;
      const percentage = Math.round((score / questionCount) * 100);
      const scoreAngle = `${percentage}%`;
      const pieChart = document.getElementById('pie-chart');

      pieChart.style.setProperty('--score-angle', scoreAngle);
      pieChart.setAttribute('aria-label', `${score} correct and ${incorrect} incorrect out of ${questionCount}`);
      document.getElementById('chart-center').textContent = `${score} / ${questionCount}`;
      document.getElementById('score-heading').textContent = `Score: ${score} / ${questionCount}`;
      document.getElementById('summary').textContent = `${percentage}% correct. Here is how you did.`;

      let message = 'Every question is a chance to learn something new.';
      if (percentage === 100) message = 'Perfect score. Excellent work!';
      else if (percentage >= 70) message = 'Great work. You have a strong general knowledge base.';
      else if (percentage >= 50) message = 'Nice effort. A little more practice will take you further.';
      document.getElementById('score-message').textContent = message;

      let questions = [];
      let answers = {};
      try {
        questions = JSON.parse(localStorage.getItem('quizQuestions') || '[]');
        answers = JSON.parse(localStorage.getItem('quizAnswers') || '{}');
      } catch (error) {
        questions = [];
        answers = {};
      }

      const correctionList = document.getElementById('correction-list');
      questions.forEach((item, index) => {
        const selectedAnswer = answers[index];
        const isAnswered = selectedAnswer !== undefined;
        const isCorrect = isAnswered && Number(selectedAnswer) === item.answer;
        const correctionItem = document.createElement('article');
        correctionItem.className = `correction-item ${isCorrect ? '' : 'incorrect'}`;

        const question = document.createElement('p');
        question.className = 'correction-question';
        question.textContent = `${index + 1}. ${item.question}`;
        correctionItem.appendChild(question);

        const selectedText = document.createElement('p');
        selectedText.className = 'correction-answer';
        selectedText.innerHTML = '<span class="answer-label">Your answer:</span> ';
        selectedText.appendChild(document.createTextNode(isAnswered ? item.options[selectedAnswer] : 'No answer selected'));
        correctionItem.appendChild(selectedText);

        if (!isCorrect) {
          correctionItem.classList.toggle('unanswered', !isAnswered);
          const correctText = document.createElement('p');
          correctText.className = 'correction-answer';
          correctText.innerHTML = '<span class="answer-label">Correct answer:</span> ';
          correctText.appendChild(document.createTextNode(item.options[item.answer]));
          correctionItem.appendChild(correctText);
        }

        correctionList.appendChild(correctionItem);
      });

      if (!questions.length) {
        correctionList.innerHTML = '<p class="correction-answer">Answer details are unavailable for this quiz.</p>';
      }

      document.getElementById('restart-button').addEventListener('click', () => {
        localStorage.removeItem('quizQuestions');
        localStorage.removeItem('currentIndex');
        localStorage.removeItem('score');
        localStorage.removeItem('quizAnswers');
      });
