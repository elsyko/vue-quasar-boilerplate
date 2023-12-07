<template>

</template>

<script>
import { useStore } from './../stores/store'

export default {
	components: {},
	setup () {
        const store = useStore();

		return {
            store
		}
	},
	data() {
		return {

		}
	},
    computed: {

    },
	methods: {

    },
    mounted() {
		this.eventBus.on('test', (event) => {
			console.log("test", event.data)
		})
    },
    unmounted() {
		this.eventBus.off("test");
    },
}
</script>

<style scoped>

</style>
