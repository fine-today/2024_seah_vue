<template lang="">
	<div class="login-con-wrap">
		<i class="user-icon"><span class="icon-inner"></span></i>
		<div class="login-con">
			<h2 class="login-con-title"></h2>
			<div class="login-form-wrap">
				<div class="input-wrap">
					<span class="input-title">{{ name }}</span>
					<a-input v-model:value="value" size="large" placeholder="large size" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { ref } from 'vue';
	export default {
		name: 'LoginContainer',
		props: {
			name: {
				type: String,
				// default: '운전자',
			},
			id: Number,
		},
		setup() {
			const value = ref('');

			return {
				value,
			};
		},
	};
</script>
<style lang="scss"></style>
