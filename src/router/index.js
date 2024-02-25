// import * as Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/login/Login.vue';
import MainLayout from '@/components/layout/MainLayout.vue';

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
			component: MainLayout,
		},
	],
});
