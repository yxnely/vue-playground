const beach = new Vue({
	el: '#beach',
	data: {
		thingsToDo: ['Exercise', 'Tan', 'Swim', 'Picnic', 'Play volleyball'],
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