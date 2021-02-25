<template>
  <div class="bg-gray-400 m-4 p-4">
    <div class="square text-white text-center text-2xl font-mono font-bold pb-4">Executive Lingo Bingo</div>
    <div class="grid grid-cols-5 gap-4 text-center ">
      <div v-for="word in wordList" :key="word.id">
        <cell :word="word.word"></cell>
      </div>
    </div>
  </div>
</template>

<script>
import Cell from "./components/Cell.vue";
import _ from 'lodash';
import wordBank from '../data/wordlist.js'

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
    getWordList(list) {
      this.wordList = (
          _.chain(list)
          .shuffle()
          .take(25)
          .value()
      )
      this.wordList[12].word = 'Free Space'
    },
  },

  created() {
    this.getWordList(wordBank)
  },
  
};
</script>

<style scoped>

.square {
  min-height: 100px;
  min-width: 100px;
}
</style>
