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
			const container = document.querySelector('.collection')
			const addedInput = document.getElementById('newActivity')
			const listItem = this.createListItem()
			const input = this.createInput()
			const label = this.createLabel()

			listItem.appendChild(input)
			listItem.appendChild(label)

			container.appendChild(listItem)

			// Clear input
			addedInput.value = ''
		},
		removeActivity(event) {
			const amount = 1;

			this.checkedActivities.forEach(a => {
				const index = this.activities.map(x => x.value).indexOf(a)
				this.activities.splice(index, amount)
			})
		},
		createListItem() {
			const el = document.createElement('li')

			el.classList.add('collection-item')

			return el
		},
		createInput() {
			const el = document.createElement('input')

			el.type = 'checkbox'
			el.value = this.newActivity

			return el
		},
		createLabel() {
			const el = document.createElement('label')

			el.classList.add('black-text')
			el.innerText = this.newActivity

			return el
		}
	}
});