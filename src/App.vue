<template>
  <div class="bg-gray-400 m-4 p-4">
    <div class="text-center text-2xl font-mono font-bold pb-4">Executive Lingo Bingo</div>
    <div class="grid grid-cols-5 gap-4 text-center ">
      <div v-for="(word, index) in wordList" :key="index">
        <cell :word="word"></cell>
      </div>
    </div>
  </div>
</template>

<script>
import Cell from "./components/Cell.vue";

export default {
  components: {
    Cell,
  },
  data() {
    return {
      wordList: [],
    };
  },

  methods: {
    getWordList() {
      for (let i = 0; i < 12; i++) {
        this.wordList.push(i);
      }

      this.wordList.push('Free')

      for (let i = 13; i < 25; i++) {
        this.wordList.push(i);
      }
    },
  },

  created() {
    this.getWordList();
  },
};
</script>
