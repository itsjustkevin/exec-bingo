<template>
  <button @click="mark(index)" :class="[selected ? 'bg-gray-400' : '']">
    {{ word }}
  </button>
</template>

<script>
export default {
  name: "cell",

  props: ["selected", "word"],

  data() {
    return {
      selected: false,
    };
  },

  methods: {
    mark(cell) {
      this.selected = !this.selected;
    },
  }
};
</script>
