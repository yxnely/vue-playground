$('select').material_select();

const product = new Vue({
	el: '#products',
	data: {
		question: '',
		response: '',
		products: [],
		selected: 'alphabetical begin',
		sorting: [
      { text: 'A - Z', value: 'alphabetical begin' },
      { text: 'Z - A', value: 'alphabetical end' },
      { text: 'Popularity', value: 'popularity' }
    ]
	},
	watch: {
		question(value) {
			if (value.indexOf('products') > -1) {
				this.response = 'Sure, I can list the products for you.'
				fetch('https://yxnely.github.io/vue-playground/productVue/data/products.json', {
					method: 'GET'
				}).then(res => res.json())
				.then(res => {
					this.products = res
				})
			} else {
				this.response = 'Sorry, I don\'t understand that question.'
				this.products = []
			}
		}
	}
})