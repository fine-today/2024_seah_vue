// import * as Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/pages/login/Login.vue';
import MainPage from '@/components/pages/main/MainPage.vue';
import DeliveryInfo from '@/components/pages/sub/delivery/DeliveryInfo.vue';

// Vue.use(VueRouter);

export const router = createRouter({
	history: createWebHistory(), //'history', //해쉬값 제거 방식
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
		},
		{
			path: '/main',
			name: 'main',
			component: MainPage,
		},
		{
			path: '/sub/delivery',
			name: 'delivery',
			component: DeliveryInfo,
		},
	],
});
