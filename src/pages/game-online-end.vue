<template>
  <div class="game-container pt-5 d-flex flex-column align-items-center">
    <h1 class="game-end__title text-center">
      <span>60 SECONDS CHALLENGE</span>
    </h1>
    <div class="text-center icon-rank mt-4 text-secondary">
      <i class="fas fa-crown"></i>
    </div>
    <table class="table table-secondary mt-4">
      <thead>
        <tr>
          <th width="10%">排名</th>
          <th width="30%">暱稱</th>
          <th>分數</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(player, index) in room.players"
          :key="player._id">
          <th>{{ index + 1 }}</th>
          <td>{{ player.nickName }}</td>
          <td>{{ player.score }}</td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-game btn-game-lg mt-4" @click="backToGameStart">TRY AGAIN!</button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  methods: {
    ...mapActions(['resetGameScore']),
    backToGameStart() {
      this.resetGameScore();
      this.$router.replace('/');
    },
  },
  computed: {
    ...mapState(['room']),
    ...mapGetters(['showScore']),
  },
};
</script>

<style lang="scss">
@import "../assets/scss/all";
</style>
