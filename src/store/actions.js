import * as types from './mutation-types';
import {
  deleteRoomApi,
  getRoomsApi,
  getRoomApi,
  createRoomApi,
  joinRoomApi,
  dropRoomApi,
} from '../api/api';

export default {
  setGameStage({ commit }, gameStage) {
    commit(types.SET_STAGE, gameStage);
  },
  validateAnswer({ commit }, { time, answer, question }) {
    if (answer !== question.answer) {
      commit(types.SET_SCORE, -1);
    } else if (time >= 20) {
      commit(types.SET_SCORE, 1);
    } else {
      commit(types.SET_SCORE, 5);
    }
  },
  resetGameScore({ commit }) {
    commit(types.RESET_SCORE);
  },
  async dropRoom({ commit }, payload) {
    try {
      commit(types.DROP_ROOM, null);
      await dropRoomApi(payload.roomName, payload.nickName);
    } catch (e) {
      console.log(e);
    }
  },
  setRoom({ commit }, room) {
    commit(types.SET_ROOM, room);
  },
  async createRoom({ commit }, { roomName, nickName }) {
    console.log('createRoom', roomName, nickName);
    try {
      const { data } = await createRoomApi({
        roomName,
        nickName,
      });
      commit(types.SET_PLAYER, { nickName });
      commit(types.CREATE_ROOM, data.room);
    } catch (e) {
      console.log(e);
    }
  },
  async joinRoom({ commit }, { nickName, roomName }) {
    try {
      const { data } = await joinRoomApi(nickName, roomName);
      commit(types.SET_PLAYER, { nickName });
      commit(types.SET_ROOM, data);
    } catch (e) {
      console.log(e);
    }
  },
  async getRoom({ commit, state }) {
    try {
      /* eslint no-underscore-dangle: 0 */
      const { data } = await getRoomApi(state.room._id);
      commit(types.SET_ROOM, data.room);
    } catch (e) {
      console.log(e);
    }
  },
  async leaveRoom({ commit }, room) {
    if (room) {
      try {
        await deleteRoomApi(room);
        commit(types.LEAVE_ROOM);
        commit(types.SET_PLAYER, {});
      } catch (e) {
        console.log(e);
      }
    }
  },
  setPlayer({ commit }, payload) {
    commit(types.SET_PLAYER, payload);
  },
  async getAllRooms({ commit }) {
    const { data } = await getRoomsApi();
    commit(types.SET_ROOMS, data.rooms);
  },
};
