Vue.component('global-component', {
    template: '<div>a global component</div>',
})

const LocalComponent = {
    template: '<div @click="showNum()">a local component. My num is: {{num}}</div>',
    data() {
        return {
            num: Math.random()
        }
    },
    methods: {
        showNum() {
            alert(this.num * 100)
        }
    }
}

new Vue({
	el: '#app',
	data: {
        num: 42
    },
    components: {
        'local-component': LocalComponent
    }
})