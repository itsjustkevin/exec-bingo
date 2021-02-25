<template>
  <div>
    <div class="grid grid-cols-5 gap-4 w-40 h-40">
      <div v-for="(word, index) in wordList" :key="index">
        <cell :word="word"></cell>
      </div>
    </div>
  </div>
</template>

<script>
import Cell from './components/Cell.vue'

export default {
  components: {
    Cell
  },
  data() {
    return {
      wordList: [],
    };
  },

  methods: {
    getWordList() {
      for (let i = 1; i < 26; i++) {
        this.wordList.push(i);
      }
    },
  },

  created() {
    this.getWordList();
  },
};
</script>
