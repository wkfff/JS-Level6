<template>
  <div class="game-container pt-5 text-center">
    <h1 class="game-start-title">
      <span class="game-start-title__number">60</span>
      <div class="game-start-title__subtitle">
        <div class="d-flex">
          <span>SECONDS</span>
          <span class="game-start-title__symbol-box">+−×÷</span>
        </div>
        <span>CHALLENGE</span>
      </div>
    </h1>
    <div class="d-flex mt-4 justify-content-between">
      <button class="btn btn-game btn-game-lg mr-3" @click="playSingleMode">1P</button>
      <button class="btn btn-game btn-game-lg mr-3" @click="playOnlineMode">線上對戰</button>
      <button
        class="btn btn-game btn-game-lg"
        data-toggle="modal"
        data-target="#gameRuleModal">
        遊戲規則
      </button>
    </div>
    <div class="modal fade" id="gameRuleModal">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header bg-primary text-secondary">
            <h5 class="modal-title h3" id="exampleModalCenterTitle">遊戲規則</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span class="text-white" aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <ul>
              <li class="text-left">0~20 秒為 1位數計算 (5-3)，21~40 秒為 2 位數計算 (30*19)，41~60 秒為 3 位數計算
              (332+312)，加減乘除規則請用隨機產生，不可寫死題目，60 秒內可無限次數答題。</li>
              <li class="text-left">0~40 秒答對加一分，41~60 秒答對加五分，答錯扣一分，最多僅能扣到零分</li>
            </ul>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">關閉</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(['resetGameScore']),
    playSingleMode() {
      this.resetGameScore(); // 重置遊戲的分數
      this.$router.replace('/game-play');
    },
    playOnlineMode() {
      this.resetGameScore(); // 重置遊戲的分數
      this.$router.replace('/game-online-mode');
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/all";
</style>
