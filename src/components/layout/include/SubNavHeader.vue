<template lang="">
	<div>
		<HeaderLogoBox :handleNav="props.handleNav" />
		<HeaderTitleBox :title="props.title" />
	</div>
</template>
<script setup>
	import { defineProps } from 'vue';
	import HeaderLogoBox from '@/components/layout/include/HeaderLogoBox.vue';
	import HeaderTitleBox from '@/components/layout/include/HeaderTitleBox.vue';

	const props = defineProps({
		handleNav: Function,
		title: String,
	});
</script>
<style lang="scss"></style>
