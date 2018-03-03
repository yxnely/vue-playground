const product = new Vue({
	el: '#quote',
	data: {
		quotes:[],
        quote: '',
    },
    created() {
        fetch('https://yxnely.github.io/vue-playground/quoteVue/data/quotes.json', {
            method: 'GET'
        }).then(res => res.json())
        .then(res => {
            musicApp.musicChart = res
        })
        .catch(err => {
            console.log(err)
        })
    },
    beforeMount: function() {
		this.quote = this.quotes[Math.floor(Math.random() * Math.floor(4))];
            console.log(this.quote);
	},
    methods: {},
});