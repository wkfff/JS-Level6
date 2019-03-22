import openSocket from 'socket.io-client';
import * as types from '../mutation-types';

export default (store) => {
  let groupSocket = null;
  const socket = openSocket('http://localhost:5000/');
  // const socket = openSocket('https://ancient-hamlet-91353.herokuapp.com/');
  // 監聽有房間新開或刪除 (全域)
  socket.on('updateRooms', () => {
    console.log('update rooms');
    store.dispatch('getAllRooms');
  });

  // 監聽有人進來或離開房間，要重新整理房間
  socket.on('updateRoom', (data) => {
    if (store.state.room && data.roomID === store.state.room._id) {
      store.dispatch('getRoom');
    }
  });

  socket.on('updateGameStage', (data) => {
    if (store.state.room && data.roomID === store.state.room._id) {
      store.dispatch('setGameStage', data.gameStage);
      if (data.room) {
        store.commit(types.SET_ROOM, data.room);
      }
    }
  });

  socket.on('gameTimer', (data) => {
    if (store.state.room && data.roomID === store.state.room._id) {
      store.commit(types.SET_ONLINE_TIMER, data.time);
    }
  });

  socket.on('gameDeleted', (data) => {
    console.log('data', data);
    if (store.state.room && data.roomID === store.state.room._id) {
      store.commit(types.SET_ROOM, null);
    }
  });

  const setSocketSubscribe = () => {
    if (!groupSocket) {
      groupSocket = openSocket(`http://localhost:5000/${store.state.room._id}`);
      // groupSocket = openSocket(`https://ancient-hamlet-91353.herokuapp.com/${store.state.room._id}`);

      // 監聽有人進來或離開房間，要重新整理房間
      // groupSocket.on('updateRoom', () => {
      //   store.dispatch('getRoom');
      // });

      // 監聽遊戲的狀態
      // groupSocket.on('updateGameStage', (data) => {
      //   store.dispatch('setGameStage', data.gameStage);
      //   if (data.room) {
      //     store.commit(types.SET_ROOM, data.room);
      //   }
      // });

      // 監聽遊戲的秒數
      // groupSocket.on('gameTimer', (data) => {
      //   store.commit(types.SET_ONLINE_TIMER, data.time);
      // });

      groupSocket.on('gameDeleted', () => {
        store.commit(types.SET_ROOM, null);
        // store.commit(types.SET_SYSTEM_MESSAGE, '該房間已經被刪除，請再選擇房間加入');
      });
    }
  };

  store.subscribe((mutation) => {
    if (mutation.type === types.CREATE_ROOM) {
      if (store.state.room) {
        /* eslint no-underscore-dangle: 0 */
        setSocketSubscribe();
      }
    }
    if (mutation.type === types.SET_ROOM) {
      setSocketSubscribe();
    }
    if (mutation.type === types.SET_SCORE) {
      if (socket && store.state.gameStage === 'gameOnlinePlay') {
        socket.emit('gameScore', {
          score: store.state.score,
          nickName: store.state.player.nickName,
          roomID: store.state.room._id,
        });
      }
    }
    if (mutation.type === types.LEAVE_ROOM
       || mutation.type === types.DROP_ROOM) {
      if (groupSocket) {
        groupSocket.removeAllListeners();
        groupSocket = null;
      }
    }
  });
};
