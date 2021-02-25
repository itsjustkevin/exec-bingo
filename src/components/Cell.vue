<template>
  <div class="bg-white">
    <button
      @click="mark(index)"
      class="w-full h-full"
      :class="[selected ? 'bg-gray-500 text-white' : '']"
    >
      {{ word }}
    </button>
  </div>
</template>

<script>
export default {
  name: "cell",

  props: ["word"],

  data() {
    return {
      selected: false,
    };
  },

  methods: {
    mark() {
      this.selected = !this.selected;
    },
  },
};
</script>
