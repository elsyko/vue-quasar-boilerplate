<template>
	<div id="app">
		<HomePage />
	</div>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
	components: {
		HomePage
	},
	methods: {
		eventHandler: function(event) {
			let action = event.data.action
			let data = event.data.data
			this.eventBus.emit(action, data)
		},
		keyHandler: function(event) {
			const key = event.which || event.keyCode;
			if (key === 27) {
                this.store.SendMessage('close')
            }
		}
	},
	mounted() {
		window.addEventListener("message", this.eventHandler);
		window.addEventListener("keydown", this.keyHandler);

		if (this.store.debug) {
			document.getElementById('app').style.backgroundImage = 'url("https://i.ibb.co/zfNPf0J/dev-bg.jpg")';
			// document.getElementById('app').style.backgroundImage = 'url("https://i.ibb.co/Sy8YHqN/dev-bg2.jpg")';

			document.getElementById('app').style.backgroundSize = 'cover';
			document.getElementById('app').style.backgroundRepeat = 'no-repeat';
			document.getElementById('app').style.backgroundPosition = 'center';
		}
	},
	unmounted() {
		window.removeEventListener("message", this.eventHandler);
		window.removeEventListener("keydown", this.keyHandler);
	}
}
</script>