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
    <div class="d-flex mt-4">
      <button class="btn btn-game btn-game-lg mr-3" @click="directToJoinRoomPage">加入對戰</button>
      <button class="btn btn-game btn-game-lg mr-3" @click="directToCreateRoomPage">建立群組</button>
      <button class="btn btn-game btn-game-lg" @click="back">上一頁</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';

export default {
  methods: {
    ...mapActions(['resetGameScore']),
    directToJoinRoomPage() {
      this.$router.replace('/join-room');
    },
    directToCreateRoomPage() {
      this.$router.replace('/create-room');
    },
    back() {
      this.$router.replace('/');
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/all";
</style>
