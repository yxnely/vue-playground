new Vue({
	el: '#question',
	data: {
		text: 'hi!',
		userAnswer: '',
		question: '',
		questions: null,
		options: '',
		questionType: {
			'amount': 10,
			'category': 9,
			'difficulty': 'easy',
			'type': 'multiple'
		},
		correctAnswer: '',
		counter: 0,
	},
	methods: {
		shuffleOptions: function (options) {
			for (var i = options.length - 1; i > 0; i--) {
				  var j = Math.floor(Math.random() * (i + 1));
				  var temp = options[i];
				  options[i] = options[j];
				  options[j] = temp;
			 }
			 
			this.options = options
		},
		displayQuestion: function () {
			$('h3').remove()
			$('.question').children().show()
			
			if (this.questions[this.counter] !== undefined) {
				this.question = this.questions[this.counter]
			}
			
			this.counter++
		},
		handleSelect: function (event) {
			event.preventDefault()
			let nextButton = document.getElementById('nextButton')
			
			// Unselect any other li in case of being previously selected
			$('li').removeClass('selected')
			
			// Select the current selection
			event.target.classList.add('selected')
			
			// Subtle guidance to user
			nextButton.classList.add('highlight')
		},
		getQuestions: function () {
			var app = this
			
			$.ajax({
				url: 'https://opentdb.com/api.php',
				data: app.questionType,
				type: 'GET',
				dataType: 'json'
			}).then((res) => {
				let incorrectAnswers = res.results[app.counter].incorrect_answers
				app.correctAnswer = res.results[app.counter].correct_answer
				app.questions = res.results
				app.shuffleOptions([...incorrectAnswers, app.correctAnswer])
				app.displayQuestion()
			})
		},
		chooseQuestion: function (e) {
			e.preventDefault()
			
			let chosenAnswer = document.getElementsByClassName('selected')

			if (chosenAnswer[0].innerHTML == this.correctAnswer) {
				$('.question').children().hide()
				$('.question').append('<h3>Correct!</h3>')
			} else {
				$('.question').children().hide()
				$('.question').append('<h3>Wrong!</h3>')
			}
			
			setTimeout(() => {
				this.displayQuestion()
			}, 3000)
		},
	},
	beforeMount() {
		this.getQuestions()
	}
})