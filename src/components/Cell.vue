<template>
  <div
    class="dark:bg-gray-300 bg-white sm:h-square sm:w-square flex justify-center items-center"
    @click="mark()"
    :class="[selected ? 'dark:bg-google-green bg-google-blue dark:text-gray-200 text-white' : 'dark:text-gray-700 text-gray-500']"
  >
    {{ word }}
  </div>
</template>

<script>
export default {
  name: "cell",

  props: {
    word: String
  },

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
