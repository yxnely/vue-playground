const product = new Vue({
	el: '#quote',
	data: {
        quoteUrl: 'https://yxnely.github.io/vue-playground/quoteVue/data/quotes.json',
		quotes: [],
        quote: '',
    },
    beforeMount: function() {
        fetch(this.quoteUrl, {
            method: 'GET'
        }).then(res => res.json())
        .then(res => {
            this.quote = res[Math.floor(Math.random() * Math.floor(4))];
            console.log(this.quote);
        })
	},
    methods: {},
});