<template>
    <q-dialog
        v-model="showHomeDialog"
        backdrop-filter="blur(2px)"
    >
        <div class="tw-flex tw-items-center tw-justify-center tw-z-50">
            <div
                class="
                    tw-absolute tw-w-[30rem]
                    tw-flex tw-flex-col tw-gap-6 tw-items-center
                    tw-p-6
                    tw-text-md tw-line-height-4 tw-text-[--syko-white] tw-tracking-wide
                    tw-bg-[--syko-dark] tw-rounded border
                "
            >
                <img src="https://i.ibb.co/JQBdPSc/0b3bcc468c4a5d8d461cf5dbe8967ee6.gif" class="tw-rounded tw-w-full" />

                <q-btn
                    class="tw-absolute tw-top-[-1.2rem] tw-right-[-1.2rem] tw-m-2 tw-bg-[--syko-dark] border"
                    flat round size="0.8rem"
                    icon="fas fa-times"
                    @click="showHome = !showHome"
                />
            </div>
        </div>
    </q-dialog>
</template>

<script>
export default {
    data() {
        return {
            showHome: true,
        }
    },
    computed: {
        showHomeDialog() {
            return this.showHome && this.store.debug
        },
    },
}
</script>

<style scoped>
.border {
    border: 1px solid var(--syko-border);
}
</style>