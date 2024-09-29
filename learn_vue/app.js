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
	},
};

Vue.createApp(FlashWord).mount("#app");
