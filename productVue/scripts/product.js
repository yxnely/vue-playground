const product = new Vue({
	el: '#products',
	data: {
		question: '',
		response: '',
		products: [],
	},
	watch: {
		question(value) {
			if (value.indexOf('products') > -1) {
				this.response = 'Sure, I can list the products for you.'
				fetch('https://hplussport.com/api/products', {
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