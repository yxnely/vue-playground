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
            let chosen = Math.floor(Math.random() * Math.floor(res.length))
            
            this.quotes = res
            this.quote = res[chosen]
        })
	},
    methods: {
        getNextQuote() {
            let chosen = this.getRandom()
            const currentQuote = this.quotes.indexOf(this.quote)

            while (chosen === currentQuote) {
                chosen = this.getRandom() 
            }

            this.quote = this.quotes[chosen]
        },
        getRandom() {
            return Math.floor(Math.random() * Math.floor(this.quotes.length));
        }
    },
});