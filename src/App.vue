<template>
  <div class="flex flex-col items-center content-center">
    <div class="text-center text-2xl font-mono font-bold py-4 dark:text-gray-200 text-google-blue">
      Executive Lingo Bingo
    </div>
    <toggle></toggle>
    <div class="dark:bg-gray-900 bg-gray-200 m-4 p-4 sm:h-board sm:w-board">
      <div class="grid grid-cols-5 gap-4 text-center">
        <div v-for="word in wordList" :key="word.id">
          <cell :word="word.word"></cell>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cell from "./components/Cell.vue";
import Toggle from "./components/Toggle.vue";
import _ from "lodash";
import wordBank from "../data/wordlist.js";

export default {
  components: {
    Cell,
    Toggle,
  },

  data() {
    return {
      wordList: [],
      boardState: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ]
    };
  },

  methods: {
    getWordList(list) {
      this.wordList = _.chain(list).shuffle().take(25).value();
      this.wordList[12].word = "Free Space";
    },
  },

  created() {
    this.getWordList(wordBank);
  },
};
</script>
