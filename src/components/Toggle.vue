<template>
    <div class="flex bg-gray-300 h-8 w-16 rounded-full"
        :class="[selected ? 'justify-end transition duration-200 ease-in-out' : '']"
    >
        <button class="relative align-end h-8 w-8 rounded-full bg-google-red"
            @click="toggle"
        ></button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: false
        }
    },

    methods: {
        toggle() {
            this.selected = ! this.selected;
        }
    }
}
</script>