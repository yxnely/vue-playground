const beach = new Vue({
	el: '#beach',
	data: {
		activities: [
			{
				value: 'exercise',
				text: 'Exercise',
			},
			{
				value: 'tan',
				text: 'Tan'
			},
			{
				value: 'swim',
				text: 'Swim'
			},
			{
				value: 'picnic',
				text: 'Picnic',
			},
			{
				value: 'play volleyball',
				text: 'Play volleyball',
			}
		],
	},
	methods: {
		addActivity(event) {
			console.log(event);
			// this.thingsToDo.push(activity);
		},
		removeActivity(event) {
			console.log(event);
		}
	}
});