<template lang="">
	<div class="header-box header-setting-box">
		<span class="user-wrap">
			<IconWrapper><IdImg /></IconWrapper>
			<span class="user-title">최유경</span>님
		</span>
		<span class="icon-wrap">
			<button type="button" class="setting-btn">
				<IconWrapper><SettingIcon /></IconWrapper>
			</button>
			<button type="button" class="logout-btn">
				<IconWrapper><LogoutIcon /></IconWrapper>
			</button>
		</span>
	</div>
</template>
<script setup>
	import IconWrapper from '@/components/common/IconWrapper.vue';
	import LogoutIcon from '@/components/images/common/LogoutIcon.vue';
	import SettingIcon from '@/components/images/common/SettingIcon.vue';
	import IdImg from '@/components/images/login/IdImg.vue';
</script>
<style lang="scss">
	.header-setting-box {
		@include color(background-color, baseGray);
		svg path {
			@include color(fill, white);
		}
		.user-wrap {
			display: flex;
			align-items: center;
		}
		.user-title {
			@include color(color, white);
		}
	}
</style>
