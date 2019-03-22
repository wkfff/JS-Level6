import Vue from 'vue';
import Router from 'vue-router';
import GameStart from './pages/game-start.vue';
import GamePlay from './pages/game-play.vue';
import GameEnd from './pages/game-end.vue';
import GameOnlineMode from './pages/game-online-mode.vue';
import CreateRoom from './pages/create-room.vue';
import JoinRoom from './pages/join-room.vue';
import GameOnlinePlay from './pages/game-online-play.vue';
import GameOnelineEnd from './pages/game-online-end.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'gameStart',
      component: GameStart,
    },
    {
      path: '/game-play',
      name: 'gamePlay',
      component: GamePlay,
    },
    {
      path: '/game-end',
      name: 'gameEnd',
      component: GameEnd,
    },
    {
      path: '/game-online-mode',
      name: 'gameOnlineSetting',
      component: GameOnlineMode,
    },
    {
      path: '/create-room',
      name: 'createRoom',
      component: CreateRoom,
    },
    {
      path: '/join-room',
      name: 'joinRoom',
      component: JoinRoom,
    },
    {
      path: '/game-online-play',
      name: 'gameOnlinePlay',
      component: GameOnlinePlay,
    },
    {
      path: '/game-online-end',
      name: 'gameOnlineEnd',
      component: GameOnelineEnd,
    },
  ],
});
