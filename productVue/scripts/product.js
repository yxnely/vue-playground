$('select').material_select();

const product = new Vue({
	el: '#products',
	data: {
		question: '',
		response: '',
		products: [],
	},
	beforeCreate: function() {
		console.log('beforeCreate');
	},
	created: function() {
		console.log('created');
	},
	beforeMount: function() {
		console.log('beforeMount');
	},
	mounted: function() {
		console.log('mounted');
	},
	beforeUpdate: function() {
		console.log('beforeUpdate');
	},
	updated: function() {
		console.log('updated');
	},
	beforeDestroy: function() {
		console.log('beforeDestroy');
	},
	destroyed: function() {
		console.log('destroyed');
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