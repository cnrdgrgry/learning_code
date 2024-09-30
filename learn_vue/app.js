const FlashWord = {
	data() {
		return {
			wordA: "hola",
			wordB: "hello",
			answer: "",
			correct: null,
			showFeedback: null,
		};
	},
	methods: {
		checkAnswer() {
			this.correct = this.wordB == this.answer;
			this.showFeedback = true;
		},
		resetForm() {
			this.correct = null;
			this.answer = "";
			this.showFeedback = null;
		},
	},
};

Vue.createApp(FlashWord).mount("#app");
