<template>
    <div id="app">
		<q-btn fill @click="this.eventBus.emit('test', {data: 'hello'})" label="test" />
		<MainComponent />
    </div>
</template>

<script>
import { useStore } from './stores/store'
import MainComponent from './components/MainComponent.vue'

export default {
	name: 'App',
	components: {
		MainComponent
	},
	setup () {
        const store = useStore();
        return { store }
	},
	methods: {
		eventHandler: function(event) {
			let action = event.data.action
			let data = event.data.data
			console.log("eventHandler", action, data)

			if (action == "load") {
				if (data.resourceName) this.store.resourceName = data.resourceName
			}

		},
		keyHandler: function(event) {
			const key = event.which || event.keyCode;
			console.log("keyHandler", key)
		}
	},
	mounted() {
		window.addEventListener("message", this.eventHandler);
		window.addEventListener("keydown", this.keyHandler);
	},
	unmounted() {
		window.removeEventListener("message", this.eventHandler);
		window.removeEventListener("keydown", this.keyHandler);
	}
}
</script>

<style>
body, html {
	background-image: url("https://img.gta5-mods.com/q95/images/mlo-rooftop-eclipse-tower/7e2e96-20.jpg");
	width: 100%;
	height: 100%;
}

::-webkit-scrollbar {
	width: 0px;
	background: transparent;
}
</style>