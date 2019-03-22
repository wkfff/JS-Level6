<template>
  <div class="game-container pt-5">
    <template v-if="!room">
      <button class="btn btn-game my-3" @click="back">上一頁</button>
      <div class="card rounded-0 mt-3">
        <div class="card-header mb-0 bg-game text-secondary text-center rounded-0">
          <p class="mb-0 h3">請填寫暱稱，選擇進入任何一個對戰群組</p>
        </div>
        <div class="card-body">
          <form>
            <div class="form-row">
              <div class="col-5">
                <label for="nickName">您的暱稱</label>
                <input
                  class="form-control rounded-0"
                  id="nickName"
                  type="text"
                  name="nickName"
                  v-validate="'required'"
                  v-model="nickName"
                  :class="{'is-invalid': errors.has('nickName')}"
                  placeholder="請輸入您的暱稱">
                <span class="text-danger" v-if="errors.has('nickName')">
                  請輸入您的暱稱才能加入房間
                </span>
              </div>
            </div>
          </form>
          <div class="list-group mt-3">
            <button
              v-for="room in rooms"
              :key="room._id"
              class="list-group-item list-group-item-action rounded-0"
              type="button"
              @click="joinRoomEvent(room._id)">
              <div class="d-flex align-items-center">
                <span>房間名稱 : {{ room.roomName }}</span>
                <span class="badge badge-secondary ml-3">點擊加入遊戲</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="card rounded-0 mt-3">
        <div class="card-header mb-0 bg-game text-secondary text-center rounded-0 d-flex">
          <button class="btn btn-secondary" @click="dropRoomEvent(room._id)">重新選擇房間</button>
          <p class="mb-0 ml-3 h3">房間名稱 {{ room.roomName }} </p>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item"
              v-for="player in room.players"
              :key="player._id">
              玩家暱稱 : {{ player.nickName === nickName ? `${player.nickName}(自己)` : player.nickName }}
            </li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      nickName: '',
    };
  },
  created() {
    this.getAllRooms();
  },
  methods: {
    ...mapActions(['getAllRooms', 'setRoom', 'leaveRoom', 'joinRoom', 'dropRoom']),
    async joinRoomEvent(roomName) {
      const result = await this.$validator.validate();
      if (result) {
        const payload = {
          nickName: this.nickName,
          roomName,
        };
        this.joinRoom(payload);
      }
    },
    async dropRoomEvent() {
      const payload = {
        /* eslint no-underscore-dangle: 0 */
        roomName: this.room._id,
        nickName: this.nickName,
      };
      this.dropRoom(payload);
    },
    back() {
      this.$router.replace('/game-online-mode');
    },
  },
  watch: {
    gameStage(val) {
      if (val === 'gameOnlinePlay') {
        this.$router.replace('/game-online-play');
      }
    },
  },
  computed: {
    ...mapState(['rooms', 'room', 'gameStage']),
  },
};
</script>

<style lang="scss">
@import "../assets/scss/all";
</style>
