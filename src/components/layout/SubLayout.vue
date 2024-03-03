<template lang="">
	<BaseLayout class="sub" :data-nav="`${navOpen}`" :handleNav="handleNav">
		<template #header>
			<SubNavHeader :title="props.title" :handleNav="handleNav" />
			<!-- <BaseHeader title="title" /> -->
		</template>
		<template #default>
			<div>
				<slot />
			</div>
		</template>
		<template #footer>
			<BaseFooter />
		</template>
	</BaseLayout>
</template>
<script setup>
	import { defineProps, ref } from 'vue';
	import BaseLayout from '@/components/layout/BaseLayout.vue';
	// import BaseHeader from '@/components/layout/include/BaseHeader.vue';
	import SubNavHeader from '@/components/layout/include/SubNavHeader.vue';
	import BaseFooter from './include/BaseFooter.vue';

	const navOpen = ref(false);
	const handleNav = () => {
		navOpen.value = !navOpen.value;
	};
	const props = defineProps({
		title: String,
	});
</script>
<style lang=""></style>
