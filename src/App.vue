<template>
	<a-config-provider
		:theme="{
			token: {
				colorPrimary: '#48535a',
			},
		}"
	>
		<router-view />
	</a-config-provider>
</template>

<script>
	// import { theme } from 'ant-design-vue';
	export default {
		name: 'App',
		setup() {
			// debounce
			// function debounce(func) {
			// 	var timer;
			// 	return function (event) {
			// 		if (timer) clearTimeout(timer);
			// 		timer = setTimeout(func, 100, event);
			// 	};
			// }
		},
	};
</script>

<style lang="scss">
	@import '@/assets/css/reset.scss';
	@import '@/assets/css/common.scss';
</style>
