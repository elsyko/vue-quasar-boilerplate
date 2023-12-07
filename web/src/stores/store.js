import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({

    }),

    actions: {
        SendMessage(endpoint, data) {
            fetch(`https://${this.resourceName}/${endpoint}`, { method: 'POST', headers: { 'Content-Type': 'application/json; charset=UTF-8' }, body: JSON.stringify(data) })
        },

        SendMessageAsync(endpoint, data) {
            return new Promise(resolve => {
                fetch(`https://${this.resourceName}/${endpoint}`, { method: 'POST', headers: { 'Content-Type': 'application/json; charset=UTF-8' }, body: JSON.stringify(data) })
                .then(res => res.json())
                .then(value => resolve(value))
            })
        }
    },

    getters: {

    },

    setters: {

    }
})