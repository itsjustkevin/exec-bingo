<template>
  <div
    class="bg-white sm:h-square sm:w-square flex justify-center items-center"
    @click="mark()"
    :class="[selected ? 'bg-google-blue text-white' : 'text-gray-500']"
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
