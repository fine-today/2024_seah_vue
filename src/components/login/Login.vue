<template lang="">
	<BaseLayout name="login">
		<template #default>
			<header>
				<h1 class="logo">
					<LogoImg />
					<span class="sub-title">e-Procurement</span>
				</h1>
			</header>
			<!-- tabs start -->
			<a-tabs v-model:activeKey="activeKey">
				<!-- <a-tab-pane v-for="user in users" :key="user.id" :tab="user.name">
					<LoginContainer :name="user.name" :id="user.id" />
				</a-tab-pane>
			</a-tabs> -->
				<a-tab-pane key="1" tab="운전자">
					<LoginContainer name="운전자" />
				</a-tab-pane>
				<a-tab-pane key="2" tab="업체" force-render>
					<LoginContainer name="업체" />
				</a-tab-pane>
				<a-tab-pane key="3" tab="직원">
					<LoginContainer name="직원" />
				</a-tab-pane>
			</a-tabs>
			<!-- tabs End -->
		</template>
	</BaseLayout>
</template>
<script>
	import BaseLayout from '@/components/layout/BaseLayout.vue';
	import LogoImg from '@/components/images/common/LogoImg.vue';
	import LoginContainer from './LoginContainer.vue';

	import { ref, onUpdated } from 'vue';

	export default {
		name: 'App',
		setup() {
			const activeKey = ref('1');
			const users = [
				{
					id: 1,
					name: '운전자',
				},
				{
					id: 2,
					name: '업체',
				},
				{
					id: 3,
					name: '직원',
				},
			];
			onUpdated(() => {
				activeKey.value = '1';
				console.log(activeKey.value);
			});
			return {
				activeKey,
				users,
			};
		},
		components: {
			LogoImg,
			BaseLayout,
			LoginContainer,
		},
	};
</script>
<style lang="scss">
	@import '@/assets/css/login.scss';
</style>
