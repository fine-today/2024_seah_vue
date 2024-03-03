<template lang="">
	<div class="header-box header-title-box">
		<button type="button" class="home-btn">
			<IconWrapper size="small"><HomeIcon /></IconWrapper>
		</button>
		<h2 class="title">{{ props.title }}</h2>
		<button type="button" class="search-btn">
			<IconWrapper size="small"><SearchIcon /></IconWrapper>
		</button>
	</div>
</template>
<script setup>
	import { defineProps } from 'vue';
	import IconWrapper from '@/components/common/IconWrapper.vue';
	import HomeIcon from '@/components/images/layout/HomeIcon.vue';
	import SearchIcon from '@/components/images/layout/SearchIcon.vue';

	const props = defineProps({
		title: String,
	});
</script>
<style lang=""></style>
