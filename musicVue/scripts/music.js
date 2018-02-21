Vue.component('music-list', {
    template: '<div class="list">\
    <h2>{{ name }}</h2>\
    <slot>Week of 02/20/2018</slot>\
    <ul class="collection">\
        <music-list-item :spot="spot" v-for="spot in music"></music-list-item>\
    </ul>\
    </div>',
    props: ['name', 'music'],
})

Vue.component('music-list-item', {
    template: '<li class="collection-item"><p><span>{{ spot.id }}</span> - {{ spot.name }} by {{ spot.artist }}</p></li>',
    props: ['spot']
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