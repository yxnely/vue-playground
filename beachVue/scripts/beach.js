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
	},
	methods: {
		addActivity() {
			console.log(this.checkedActivities);
		},
		removeActivity(event) {
			this.checkedActivities.forEach(a => {
				const index = this.activities.map(x => x.value).indexOf(a) + 1;
				
			})
		}
	}
});