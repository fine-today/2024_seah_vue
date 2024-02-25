<template lang="">
	<div class="container" :id="name">
		<header class="header" id="header">
			<slot name="header" />
		</header>
		<div id="content">
			<slot />
		</div>
		<footer class="footer" id="footer">
			<slot name="footer" />
		</footer>
	</div>
</template>
<script>
	export default {
		name: 'baseLayout',
		props: {
			name: String,
		},
	};
</script>
<style lang="scss">
	@import '@/assets/css/layout.scss';
</style>
