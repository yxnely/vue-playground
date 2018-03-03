const product = new Vue({
	el: '#quote',
	data: {
		quotes: [
            {
                text: 'There is only one happiness in this life, to love and be loved.',
                author: 'George Sand',
            },
            {
                text: 'Only I can change my life. No one can do it for me.',
                author: 'Carol Burnett',
            },
            {
                text: 'Life is 10% what happens to you and 90% how you react to it.',
                author: 'Charles R. Swindoll',
            },
            {
                text: 'I have found that if you love life, life will love you back.',
                author: 'Arthur Rubinstein',
            },
            {
                text: 'Life isn\'t about finding yourself. Life is about creating yourself.',
                author: 'George Bernard Shaw'
            },
            {
                text: 'Don\'t cry because it\'s over, smile because it happened.',
                author: 'Dr. Seuss'
            },
            {
                text: 'You only live once, but if you do it right, once is enough.',
                author: 'Mae West'
            },
        ],
        quote: '',
    },
    beforeMount: function() {
		this.quote = this.quotes[Math.floor(Math.random() * Math.floor(4))];
            console.log(this.quote);
	},
    methods: {},
});