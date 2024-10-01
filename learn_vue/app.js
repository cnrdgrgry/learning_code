const FlashWord = {
	data() {
		return {
			wordA: "hola",
			wordB: "hello",
			answer: "",
			correct: null,
			showFeedback: null,
			image: null,
			hasError: false,
			showHint: false,
			categories: ["greetings"],
			level: "moderate",
			textContent: "",

			// Array example
			spanishWords: ["hola", "adios", "uno", "dos"],

			// Object example
			word: { a: "hola", b: "hello" },

			// Array of objects example
			words: [
				{ wordA: "hola", wordB: "hello" },
				{ wordA: "adios", wordB: "goodbye" },
				{ wordA: "uno", wordB: "one" },
				{ wordA: "dos", wordB: "two" },
			],
		};
	},
	methods: {
		checkAnswer() {
			if (this.answer == "") {
				this.hasError = true;
				return;
			}
			this.hasError = false;
			this.correct = this.wordB == this.answer;
			if (this.correct) {
				this.image =
					"https://s3.amazonaws.com/codewithsusan/circle-correct@2x.png";
			} else {
				this.image =
					"https://s3.amazonaws.com/codewithsusan/circle-incorrect@2x.png";
			}
			this.showFeedback = true;
		},
		resetForm() {
			this.answer = "";
			this.showFeedback = null;
		},
	},
};

Vue.createApp(FlashWord).mount("#app");
