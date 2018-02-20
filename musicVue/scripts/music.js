Vue.component('music-list', {
    template: '<div class="list">\
    <h2>{{ name }}</h2>\
    <ul>\
        <li v-for="spot in music"><p><span>{{ spot.id }}</span> - {{ spot.name }}</p></li>\
    </ul>\
    </div>',
    props: ['name', 'music'],
})

const musicApp = new Vue({
	el: '#app',
	data: {
        musicChart: []
,    },
    created() {
        fetch('https://yxnely.github.io/vue-playground/musicVue/data/music.json', {
            method: 'GET'
        }).then(res => res.json())
        .then(res => {
            musicApp.musicChart = res
        })
        .catch(err => {
            console.log(err)
        })
    },
})