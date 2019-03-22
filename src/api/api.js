import axios from 'axios';

const roomRequest = axios.create({
  baseURL: 'http://localhost:5000/',
  // baseURL: 'https://ancient-hamlet-91353.herokuapp.com/',
});

// roomRequest.defaults.withCredentials = true;

// 建立房間相關的 api
/* eslint no-underscore-dangle: 0 */
export const createRoomApi = data => roomRequest.post('/room', data);
export const deleteRoomApi = room => roomRequest.delete('/room', {
  data: {
    roomID: room._id,
  },
});
export const getRoomsApi = () => roomRequest.get('/room');
export const getRoomApi = roomID => roomRequest.get(`/room/${roomID}`);

export const joinRoomApi = (nickName, roomID) => {
  const payload = {
    nickName,
    roomID,
  };
  return roomRequest.put('/room', payload);
};

// 退出房間
export const dropRoomApi = (roomName, nickName) => roomRequest.delete('/room/drop', {
  data: {
    roomName,
    nickName,
  },
});

export const startGameApi = roomID => roomRequest.post(`/room/${roomID}/play`);
