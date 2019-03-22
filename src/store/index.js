import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import websocketPlugin from './plugin/websocket-plugin';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    score: 0,
    gameStage: 'gameStart',
    gameTime: 60, // 遊戲時間預設60秒
    room: null,
    player: {}, // 自己的玩家資料
    rooms: [], // 所有的對戰房間
    onlineTimer: 60, // 線上的計時器
    systemMessage: '',
  },
  getters: {
    showScore(state) {
      const totalLength = 4;
      const scoreLength = state.score.toString().length;
      const diff = totalLength - scoreLength;
      if (diff > 0) {
        return Array(diff).join(0) + state.score;
      }
      return state.score;
    },
  },
  mutations,
  actions,
  plugins: [
    websocketPlugin,
  ],
});
