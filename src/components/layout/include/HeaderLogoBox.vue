<template lang="">
	<div class="header-box header-logo-box">
		<button type="button" class="back-btn" @click="handleBackClick">
			<IconWrapper size="small"><BackIconVue /></IconWrapper>
		</button>
		<h1 class="logo">
			<LogoImg />
		</h1>
		<button type="button" class="nav-btn" @click="props.handleNav">
			<IconWrapper size="small"><MenuIconVue /></IconWrapper>
		</button>
	</div>
</template>
<script setup>
	import { defineProps } from 'vue';
	import IconWrapper from '@/components/common/IconWrapper.vue';
	import LogoImg from '@/components/images/common/LogoImg.vue';
	/* icons */
	import BackIconVue from '@/components/images/layout/BackIcon.vue';
	import MenuIconVue from '@/components/images/layout/MenuIcon.vue';
	import { useRouter } from 'vue-router';
	const router = useRouter();
	const handleBackClick = () => {
		router.go(-1);
	};
	const props = defineProps({
		handleNav: Function,
	});
</script>
<style lang="scss" scoped></style>
