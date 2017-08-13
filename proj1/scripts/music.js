var API_KEY = '&apikey=a8984e24ad9983eb122eaf6c9588dc5b'
var ARTIST_SEARCH = 'http://api.musixmatch.com/ws/1.1/artist.search'
var TRACK_SEARCH = 'http://api.musixmatch.com/ws/1.1/track.search'

function createCORSRequest(method, url) {
	var xhr = new XMLHttpRequest()
	if ("withCredentials" in xhr) {
		xhr.open(method, url, true)
	} else if (typeof XDomainRequest != "undefined") {
		xhr = new XDomainRequest()
		xhr.open(method, url)
	} else {
		xhr = null
	}

	return xhr
}

new Vue({
	el: '#app',
	data: {
		track_name: '',
		track_artist: '',
		artists: null,
		tracks: null,
		date: ''
	},
	// watch: {
	// 	track_name: function () {
	// 		this.searchSong(this.track_name)
	// 	}
	// },
	methods: {
		searchTrack: function () {
			var app = this
			var params = ''

			if (app.track_artist !== '') {
				params += ('&q_artist=' + app.track_artist)
			}

			if (app.track_name !== '') {
				params += ('&q_track=' + app.track_name)
			}

			var url = TRACK_SEARCH + '?' + 'page_size=20' + params + API_KEY
			var xhr = createCORSRequest('GET', url)

			if (!xhr) {
				alert('CORS not supported')
				return
			}

			xhr.onload = function() {
				var response = JSON.parse(xhr.responseText)
				app.tracks = response.message.body.track_list
				console.log(response.message.body.track_list)
			}

			xhr.onerror = function() {
				alert('Woops, there was an error making the request.')
			}

			xhr.send()
		},
		searchSong: function () {
			var app = this
			var params = ''

			if (app.track_artist !== '') {
				params += ('&q_artist=' + app.track_artist)
			}

			var url = ARTIST_SEARCH + '?' + 'page_size=5' + params + API_KEY
			var xhr = createCORSRequest('GET', url)

			if (!xhr) {
				alert('CORS not supported')
				return
			}

			xhr.onload = function() {
				var response = JSON.parse(xhr.responseText)
				app.artists = response.message.body.artist_list
			}

			xhr.onerror = function() {
				alert('Woops, there was an error making the request.')
			}

			xhr.send()
		},
		formattedDate: function (elem) {
			var myDate = new Date(elem.track.first_release_date)
			var newDate = (myDate.getMonth() + 1) + '/' + myDate.getUTCDate() + myDate.getFullYear()

			return newDate
		}
	}
});