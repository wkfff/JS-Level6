<template>
  <div class="game-end">
    <h1 class="game-end__title">
      <span>60 SECONDS CHALLENGE</span>
    </h1>
    <div class="game-end__subtitle">
      <span>YOUR FINAL SCORE</span>
    </div>
    <span class="game-end__score">{{ showScore }}</span>
    <button class="btn btn-game btn-game-lg" @click="backToGameStart">TRY AGAIN!</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['resetGameScore']),
    backToGameStart() {
      this.resetGameScore();
      this.$router.replace('/');
    },
  },
  computed: {
    ...mapGetters(['showScore']),
  },
};
</script>

<style lang="scss">
@import "../assets/scss/all";
</style>
