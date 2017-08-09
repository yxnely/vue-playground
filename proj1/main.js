// const MM_API_URL = 'http://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=3&q_track=love%20song&apikey=a8984e24ad9983eb122eaf6c9588dc5b';
const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"

new Vue({
	el: '#app',
	data: {
		article_search: '',
		articles: '',
	},
	methods: {
		searchArticle: function (term) {
			let app = this
			let searchUrl = URL

			axios.get(searchUrl += '?' + $.param({
				'api-key': "afbbea547c7a452fb7d6cce8307cbb19",
				'q': term
			}))
			.then(function (response) {
				app.articles = response.data.response.docs
			})
		}
	}
});
