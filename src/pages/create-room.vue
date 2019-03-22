<template>
  <div class="game-container pt-5">
    <button class="btn btn-game mb-3" @click="back">上一頁</button>
    <template v-if="!room">
      <div class="card rounded-0">
        <div class="card-header mb-0 bg-game text-secondary text-center rounded-0">
          <p class="mb-0 h3">建立對戰群組</p>
        </div>
        <div class="card-body">
          <form>
            <div class="form-row">
              <div class="col">
                <label for="roomName">房間名稱</label>
                <input
                  class="form-control rounded-0"
                  id="roomName"
                  name="roomName"
                  type="text"
                  :class="{'is-invalid': errors.has('roomName')}"
                  placeholder="請輸入房間名稱"
                  v-model="roomName"
                  v-validate="'required'"/>
                <span class="text-danger" v-if="errors.has('roomName')">
                  請輸入房間名稱
                </span>
              </div>
              <div class="col">
                <label for="nickName">您的暱稱</label>
                <input
                  class="form-control rounded-0"
                  id="nickName"
                  name="nickName"
                  type="text"
                  v-model="nickName"
                  :class="{'is-invalid': errors.has('nickName')}"
                  placeholder="請輸入暱稱"
                  v-validate="'required'"/>
                <span class="text-danger" v-if="errors.has('nickName')">
                  請輸入暱稱
                </span>
              </div>
            </div>
            <div class="form-row">
              <div class="col text-center mt-3">
                <button class="btn btn-game ml-auto w-50" @click.prevent="addRoom">確定</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="card rounded-0 mt-3">
        <div class="card-header mb-0 bg-game text-secondary text-center rounded-0">
          <p class="mb-0 h3">房間名稱 {{ room.roomName }}</p>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item"
              v-for="player in room.players"
              :key="player._id">
              玩家暱稱 : {{ player.nickName }}
            </li>
          </ul>
          <div class="d-flex mt-3">
            <button class="btn btn-game mr-3" @click="startGame">開始遊戲</button>
            <button class="btn btn-game" @click="reCreateRoom">重新建立群組</button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { startGameApi } from '../api/api';

export default {
  data() {
    return {
      roomName: '',
      nickName: '',
    };
  },
  computed: {
    ...mapState(['room', 'player', 'gameStage']),
  },
  watch: {
    gameStage(value) {
      if (value === 'gameOnlinePlay') {
        this.$router.replace('/game-online-play');
      }
    },
  },
  methods: {
    ...mapActions(['createRoom', 'leaveRoom']),
    async addRoom() {
      const result = await this.$validator.validate();
      if (result) {
        this.createRoom({
          roomName: this.roomName,
          nickName: this.nickName,
        });
      }
    },
    reCreateRoom() {
      this.leaveRoom(this.room);
    },
    back() {
      this.leaveRoom(this.room);
      this.$router.replace('/game-online-mode');
    },
    async startGame() {
      /* eslint no-underscore-dangle: 0 */
      try {
        await startGameApi(this.room._id);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/all";
</style>
