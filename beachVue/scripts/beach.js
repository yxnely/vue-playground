const beach = new Vue({
	el: '#beach',
	data: {
		activities: [
			{
				id: 1,
				value: 'exercise',
				text: 'Exercise',
			},
			{
				id: 2,
				value: 'tan',
				text: 'Tan'
			},
			{
				id: 3,
				value: 'swim',
				text: 'Swim'
			},
			{
				id: 4,
				value: 'picnic',
				text: 'Picnic',
			},
			{
				id: 5,
				value: 'play volleyball',
				text: 'Play volleyball',
			}
		],
		checkedActivities: [],
		newActivity: '',
	},
	methods: {
		addActivity() {
			let count = this.activities.length;
			const newActivityInput = document.getElementById('newActivity')

			this.activities.push({ id: count, value: this.newActivity.toLowerCase(), text: this.newActivity })
			
			// Clear input
			newActivityInput.value = ''
		},
		removeActivity(event) {
			const amount = 1;

			this.checkedActivities.forEach(a => {
				const index = this.activities.map(x => x.value).indexOf(a)
				this.activities.splice(index, amount)
			})
		},
	}
});