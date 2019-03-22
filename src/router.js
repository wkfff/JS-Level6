import Vue from 'vue';
import Router from 'vue-router';
import GameStart from './pages/game-start.vue';

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
      component: () => import('./pages/game-play.vue'),
    },
    {
      path: '/game-end',
      name: 'gameEnd',
      component: () => import('./pages/game-end.vue'),
    },
    {
      path: '/game-online-mode',
      name: 'gameOnlineSetting',
      component: () => import('./pages/game-online-mode.vue'),
    },
    {
      path: '/create-room',
      name: 'createRoom',
      component: () => import('./pages/create-room.vue'),
    },
    {
      path: '/join-room',
      name: 'joinRoom',
      component: () => import('./pages/join-room.vue'),
    },
    {
      path: '/game-online-play',
      name: 'gameOnlinePlay',
      component: () => import('./pages/game-online-play.vue'),
    },
    {
      path: '/game-online-end',
      name: 'gameOnlineEnd',
      component: () => import('./pages/game-online-end.vue'),
    },
  ],
});
