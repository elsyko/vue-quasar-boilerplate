import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({
        debug: process.env.NODE_ENV === 'development',
    }),

    actions: {
        SendMessage(endpoint, data) {
            if (process.env.NODE_ENV === 'development') return
            fetch(`https://${GetParentResourceName()}/${endpoint}`, { method: 'POST', headers: { 'Content-Type': 'application/json; charset=UTF-8' }, body: JSON.stringify(data) })
        },

        SendMessageAsync(endpoint, data) {
            if (process.env.NODE_ENV === 'development') return
            return new Promise(resolve => {
                fetch(`https://${GetParentResourceName()}/${endpoint}`, { method: 'POST', headers: { 'Content-Type': 'application/json; charset=UTF-8' }, body: JSON.stringify(data) })
                .then(res => res.json())
                .then(value => resolve(value))
            })
        },
    },
})