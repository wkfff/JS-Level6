import * as types from './mutation-types';

export default {
  [types.SET_STAGE](state, stageType) {
    state.gameStage = stageType;
  },
  [types.SET_SCORE](state, value) {
    state.score += value;
    if (state.score < 0) {
      state.score = 0;
    }
  },
  [types.RESET_SCORE](state) {
    state.score = 0;
    state.gameStage = 'gameStart';
    state.room = null;
    state.player = {};
    state.rooms = [];
    state.onlineTimer = 60;
    state.systemMessage = '';
  },
  [types.SET_ROOM](state, room) {
    state.room = room;
  },
  [types.DROP_ROOM](state) {
    state.room = null;
  },
  [types.CREATE_ROOM](state, room) {
    state.room = room;
  },
  [types.LEAVE_ROOM](state) {
    state.room = null;
  },
  [types.SET_PLAYER](state, payload) {
    state.player = payload;
  },
  [types.SET_ROOMS](state, payload) {
    state.rooms = payload;
  },
  [types.SET_ONLINE_TIMER](state, time) {
    state.onlineTimer = time;
  },
  [types.SET_SYSTEM_MESSAGE](state, message) {
    state.systemMessage = message;
  },
};
