Vue.component('global-component', {
    template: '<div>a global component</div>',
})

new Vue({
	el: '#app',
	data: {
        num: 42
    },
})