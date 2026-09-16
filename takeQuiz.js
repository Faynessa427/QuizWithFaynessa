
			const questionBank = [
				{ question: "What is the capital city of Australia?", options: ["Sydney", "Canberra", "Melbourne", "Perth"], answer: 1 },
				{ question: "Which planet is known as the Red Planet?", options: ["Venus", "Jupiter", "Mars", "Saturn"], answer: 2 },
				{ question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"], answer: 1 },
				{ question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: 3 },
				{ question: "How many sides does a hexagon have?", options: ["Five", "Six", "Seven", "Eight"], answer: 1 },
				{ question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], answer: 2 },
				{ question: "What is the hardest natural substance?", options: ["Iron", "Quartz", "Diamond", "Granite"], answer: 2 },
				{ question: "In which country would you find the ancient city of Petra?", options: ["Egypt", "Jordan", "Greece", "Turkey"], answer: 1 },
				{ question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], answer: 2 },
				{ question: "Which instrument has black and white keys?", options: ["Violin", "Flute", "Piano", "Trumpet"], answer: 2 },
				{ question: "What is the boiling point of water at sea level in Celsius?", options: ["90", "100", "110", "120"], answer: 1 },
				{ question: "Which continent is the Sahara Desert located on?", options: ["Asia", "Africa", "South America", "Australia"], answer: 1 },
				{ question: "Who wrote Romeo and Juliet?", options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"], answer: 0 },
				{ question: "What is the currency of Japan?", options: ["Won", "Yuan", "Yen", "Ringgit"], answer: 2 },
				{ question: "How many bones are in the adult human body?", options: ["186", "206", "226", "246"], answer: 1 },
				{ question: "Which is the longest river in South America?", options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"], answer: 0 },
				{ question: "What is H2O more commonly known as?", options: ["Salt", "Water", "Hydrogen peroxide", "Oxygen"], answer: 1 },
				{ question: "Which country is famous for the Eiffel Tower?", options: ["Italy", "France", "Spain", "Belgium"], answer: 1 },
				{ question: "What is the largest mammal in the world?", options: ["Elephant", "Giraffe", "Blue whale", "Hippopotamus"], answer: 2 },
				{ question: "Which language has the most native speakers worldwide?", options: ["English", "Spanish", "Mandarin Chinese", "Hindi"], answer: 2 },
				{ question: "What is the main ingredient in guacamole?", options: ["Avocado", "Cucumber", "Spinach", "Pea"], answer: 0 },
				{ question: "Which ancient civilization built Machu Picchu?", options: ["Maya", "Roman", "Inca", "Egyptian"], answer: 2 },
				{ question: "How many players are on a soccer team on the field?", options: ["9", "10", "11", "12"], answer: 2 },
				{ question: "What is the chemical symbol for gold?", options: ["Go", "Gd", "Au", "Ag"], answer: 2 },
				{ question: "Which organ pumps blood around the body?", options: ["Liver", "Lung", "Brain", "Heart"], answer: 3 },
				{ question: "What is the tallest mountain above sea level?", options: ["K2", "Mount Everest", "Kilimanjaro", "Mont Blanc"], answer: 1 },
				{ question: "Which month has an extra day in a leap year?", options: ["January", "February", "March", "April"], answer: 1 },
				{ question: "What do bees collect from flowers?", options: ["Nectar", "Dew", "Sap", "Pollen only"], answer: 0 },
				{ question: "Which shape has three sides?", options: ["Square", "Triangle", "Pentagon", "Circle"], answer: 1 },
				{ question: "What is the freezing point of water in Celsius?", options: ["0", "10", "32", "100"], answer: 0 },
				{ question: "Which country gifted the Statue of Liberty to the United States?", options: ["France", "Canada", "United Kingdom", "Germany"], answer: 0 },
				{ question: "What is the largest internal organ in the human body?", options: ["Heart", "Liver", "Lung", "Kidney"], answer: 1 },
				{ question: "Which sport uses a shuttlecock?", options: ["Tennis", "Badminton", "Squash", "Cricket"], answer: 1 },
				{ question: "What is the square root of 81?", options: ["7", "8", "9", "10"], answer: 2 },
				{ question: "Which star is at the center of our solar system?", options: ["Sirius", "Polaris", "The Sun", "Betelgeuse"], answer: 2 },
				{ question: "What is the official language of Brazil?", options: ["Spanish", "Portuguese", "French", "Italian"], answer: 1 },
				{ question: "Which metal is liquid at room temperature?", options: ["Mercury", "Copper", "Aluminum", "Silver"], answer: 0 },
				{ question: "How many colors are in a traditional rainbow?", options: ["Five", "Six", "Seven", "Eight"], answer: 2 },
				{ question: "Which animal is known as the ship of the desert?", options: ["Horse", "Camel", "Donkey", "Elephant"], answer: 1 },
				{ question: "What is the study of earthquakes called?", options: ["Geology", "Seismology", "Meteorology", "Ecology"], answer: 1 },
				{ question: "Which country has a maple leaf on its flag?", options: ["Canada", "Switzerland", "Denmark", "Austria"], answer: 0 },
				{ question: "How many degrees are in a right angle?", options: ["45", "90", "180", "360"], answer: 1 },
				{ question: "Which vitamin is commonly produced by sunlight exposure?", options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], answer: 3 },
				{ question: "What is the fastest land animal?", options: ["Lion", "Cheetah", "Horse", "Leopard"], answer: 1 },
				{ question: "Which famous scientist developed the theory of relativity?", options: ["Isaac Newton", "Marie Curie", "Albert Einstein", "Galileo Galilei"], answer: 2 },
				{ question: "What is the name of the galaxy containing Earth?", options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"], answer: 1 },
				{ question: "Which country is shaped like a boot?", options: ["Greece", "Italy", "Portugal", "Chile"], answer: 1 },
				{ question: "What is the primary language spoken in Mexico?", options: ["Spanish", "Portuguese", "English", "French"], answer: 0 },
				{ question: "Which bird is often associated with delivering messages?", options: ["Eagle", "Pigeon", "Owl", "Swan"], answer: 1 },
				{ question: "What is the largest planet in our solar system?", options: ["Earth", "Saturn", "Jupiter", "Neptune"], answer: 2 },
				{ question: "Which famous ship sank on its maiden voyage in 1912?", options: ["Mayflower", "Titanic", "Endeavour", "Beagle"], answer: 1 },
				{ question: "What is the process by which plants make food?", options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"], answer: 1 }
			];

			const timerElement = document.getElementById("timer");
			const questionCounter = document.getElementById("question-counter");
			const scoreDisplay = document.getElementById("score-display");
			const questionNumber = document.getElementById("question-number");
			const questionText = document.getElementById("question-text");
			const optionsElement = document.getElementById("options");
			const progressBar = document.getElementById("progress-bar");
			const previousButton = document.getElementById("previous-button");
			const nextButton = document.getElementById("next-button");
			
            let timerId;
			let secondsLeft = 10;

			function shuffle(items) {
				return [...items].sort(() => Math.random() - 0.5);
			}

			function initializeQuiz() {
				let savedQuestions;
				try {
					savedQuestions = JSON.parse(localStorage.getItem("quizQuestions"));
				} catch (error) {
					savedQuestions = null;
				}

				if (!Array.isArray(savedQuestions) || savedQuestions.length !== 10) {
					localStorage.setItem("quizQuestions", JSON.stringify(shuffle(questionBank).slice(0, 10)));
					localStorage.setItem("currentIndex", "0");
					localStorage.setItem("score", "0");
					localStorage.removeItem("quizAnswers");
				}

				if (!localStorage.getItem("currentIndex")) localStorage.setItem("currentIndex", "0");
				if (!localStorage.getItem("score")) localStorage.setItem("score", "0");
			}

			function getQuestions() {
				return JSON.parse(localStorage.getItem("quizQuestions"));
			}

			function getAnswers() {
				try {
					return JSON.parse(localStorage.getItem("quizAnswers")) || {};
				} catch (error) {
					return {};
				}
			}

			function saveAnswers(answers) {
				localStorage.setItem("quizAnswers", JSON.stringify(answers));
			}

			function renderQuestion() {
				const questions = getQuestions();
				const currentIndex = Number(localStorage.getItem("currentIndex"));
				const currentQuestion = questions[currentIndex];
				const answers = getAnswers();
				const selectedAnswer = answers[currentIndex];

				questionCounter.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
				scoreDisplay.textContent = `Score: ${localStorage.getItem("score")}`;
				questionNumber.textContent = String(currentIndex + 1).padStart(2, "0");
				questionText.textContent = currentQuestion.question;
				progressBar.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
				previousButton.hidden = currentIndex === 0;
				optionsElement.innerHTML = "";

				currentQuestion.options.forEach((option, optionIndex) => {
					const label = document.createElement("label");
					label.className = "option";
					label.innerHTML = `<input type="radio" name="answer" value="${optionIndex}"><span class="bubble" aria-hidden="true"></span><span>${option}</span>`;
					const input = label.querySelector("input");
					input.checked = Number(selectedAnswer) === optionIndex;
					input.addEventListener("change", () => selectAnswer(optionIndex));
					optionsElement.appendChild(label);
				});

				nextButton.disabled = selectedAnswer === undefined;
				startTimer();
			}

			function selectAnswer(optionIndex) {
				const currentIndex = Number(localStorage.getItem("currentIndex"));
				const answers = getAnswers();
				answers[currentIndex] = optionIndex;
				saveAnswers(answers);
				nextButton.disabled = false;
			}

			function startTimer() {
				clearInterval(timerId);
				secondsLeft = 10;
				updateTimer();
				timerId = setInterval(() => {
					secondsLeft -= 1;
					updateTimer();
					if (secondsLeft <= 0) {
						clearInterval(timerId);
						moveNext();
					}
				}, 1000);
			}

			function updateTimer() {
				timerElement.textContent = `00:${String(secondsLeft).padStart(2, "0")}`;
				timerElement.classList.toggle("warning", secondsLeft <= 5 && secondsLeft > 2);
				timerElement.classList.toggle("urgent", secondsLeft <= 2);
			}

			function moveNext() {
				clearInterval(timerId);
				const questions = getQuestions();
				const currentIndex = Number(localStorage.getItem("currentIndex"));
				const answers = getAnswers();
				const alreadyScored = answers[`scored-${currentIndex}`];
				const selectedAnswer = answers[currentIndex];

				if (!alreadyScored && selectedAnswer !== undefined) {
					const score = Number(localStorage.getItem("score"));
					if (selectedAnswer === questions[currentIndex].answer) {
						localStorage.setItem("score", String(score + 1));
					}
					answers[`scored-${currentIndex}`] = true;
					saveAnswers(answers);
				}

				if (currentIndex >= questions.length - 1) {
					window.location.href = "result.html";
					return;
				}

				localStorage.setItem("currentIndex", String(currentIndex + 1));
				renderQuestion();
			}

			previousButton.addEventListener("click", () => {
				const currentIndex = Number(localStorage.getItem("currentIndex"));
				if (currentIndex > 0) {
					clearInterval(timerId);
					localStorage.setItem("currentIndex", String(currentIndex - 1));
					renderQuestion();
				}
			});
			document.getElementById("quit-button").addEventListener("click", () => {
				clearInterval(timerId);
				localStorage.removeItem("quizQuestions");
				localStorage.removeItem("currentIndex");
				localStorage.removeItem("score");
				localStorage.removeItem("quizAnswers");
				window.location.href = "index.html";
			});
			nextButton.addEventListener("click", moveNext);

			initializeQuiz();
			renderQuestion();