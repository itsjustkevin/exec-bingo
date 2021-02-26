<template>
  <div
    class="bg-white sm:h-square sm:w-square flex justify-center items-center"
    @click="mark(index)"
    :class="[selected ? 'bg-gray-500 text-white' : '']"
  >
    {{ word }}
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
