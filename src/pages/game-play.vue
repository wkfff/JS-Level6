<template>
  <div class="game-container pt-5">
    <header class="game-play-header">
      <div class="game-play-header__left-side">
        <h1 class="game-play-header__title mb-0">60 SECONDS CHALLENGE</h1>
        <div class="game-play-header__score-box">
          <h2 class="game-play-header__score-box__title">SCORE</h2>
          <span class="game-play-header__score-box__score">{{ showScore }}</span>
        </div>
      </div>
      <span class="game-play-header__time">{{ timeCounter }}</span>
    </header>
    <main class="game-play-question">
      <span class="game-play-question__num">{{ question.num1 }}</span>
      <span class="game-play-question__operation mx-3">{{ question.operation }}</span>
      <span class="game-play-question__num">{{ question.num2 }}</span>
      <span class="game-play-question__operation">=</span>
      <div class="game-play-question__input-box" @keyup.13="answer($event.target.value)">
        <input ref="answerInput" class="form-control game-play-question__input" type="text">
        <span class="game-play-question__hint">press enter to answer</span>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import helpers from '../store/helpers/helpers';

export default {
  created() {
    this.time = this.gameTime;
    this.timer = setTimeout(this.countDown(), 1000);
    this.question = helpers.generateQuestion(this.time);
  },
  data() {
    return {
      time: 0,
      timer: null,
      question: {},
    };
  },
  computed: {
    ...mapState(['gameTime']),
    ...mapGetters(['showScore']),
    timeCounter() {
      let minute = Math.floor(this.time / 60);
      let seconds = 0;
      seconds = this.time - minute * 60;
      minute = minute >= 10 ? minute : `0${minute}`;
      seconds = seconds >= 10 ? seconds : `0${seconds}`;
      return `${minute} : ${seconds}`;
    },
  },
  methods: {
    ...mapActions(['validateAnswer']),
    countDown() {
      this.time -= 1;
      if (this.time > 0) {
        this.timer = setTimeout(this.countDown, 1000);
      } else {
        clearTimeout(this.timer);
        this.$router.replace('/game-end');
      }
    },
    answer(answer) {
      this.$refs.answerInput.value = '';
      this.validateAnswer({
        time: this.time,
        answer: +answer,
        question: this.question,
      });
      this.question = helpers.generateQuestion(this.time);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/all";
</style>
