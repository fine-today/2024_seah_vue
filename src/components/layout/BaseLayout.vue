<template lang="">
	<div class="container" :id="props.name">
		<header class="header" id="header">
			<slot name="header" handleNav="handleNav" />
		</header>
		<div id="content">
			<slot />
		</div>
		<footer class="footer" id="footer">
			<slot name="footer" />
		</footer>
		<BaseNav :handleNav="props.handleNav" />
	</div>
</template>
<script setup>
	import { defineProps } from 'vue';
	import BaseNav from './include/BaseNav.vue';

	const props = defineProps({
		name: String,
		handleNav: Function,
	});
</script>
<style lang="scss">
	@import '@/assets/css/layout.scss';
</style>
