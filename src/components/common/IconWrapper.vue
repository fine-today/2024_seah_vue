<template lang="">
	<span class="icon-wrapper" :class="size">
		<slot />
	</span>
</template>
<script>
	export default {
		props: {
			size: String,
		},
	};
</script>
<style lang="scss">
	.icon-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 3rem;
		height: 3rem;
		svg {
			width: 1.5rem;
			height: 1.5rem;
			background-size: 100% 100%;
		}
		&.small {
			width: 2.5rem;
			height: 2.5rem;
			svg {
				width: 1rem;
				height: 1rem;
				background-size: 1rem 1rem;
			}
		}
	}
</style>
