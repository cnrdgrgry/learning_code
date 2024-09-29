const FlashWord = {
	data() {
		return {
			wordA: "hola",
			wordB: "hello",
		};
	},
};

Vue.createApp(FlashWord).mount("#app");
