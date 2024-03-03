<template lang="">
	<div class="login-con-wrap">
		<i class="user-icon">
			<IconWrapper>
				<User1Img v-if="num === '1'" />
				<User2Img v-else-if="num === '2'" />
				<User3Img v-else-if="num === '3'" />
			</IconWrapper>
		</i>
		<div class="login-con">
			<h2 class="login-con-title">
				{{ name }}
				로그인
			</h2>
			<div class="login-form-wrap">
				<div class="list-wrap">
					<h3 class="input-title">아이디</h3>
					<div class="input-wrap">
						<IconWrapper class="input-icon"><IdImg /></IconWrapper>
						<a-input v-model:value="value" size="large" placeholder="아이디" />
					</div>
				</div>
				<div class="list-wrap">
					<h3 class="input-title">패스워드</h3>
					<div class="input-wrap">
						<IconWrapper class="input-icon"><PasswordImg /></IconWrapper>
						<a-input-password v-model:value="value" size="large" :visibility-toggle="false" placeholder="패스워드" />
					</div>
				</div>
			</div>
			<!-- login form close -->

			<div class="save-list">
				<span class="save-item">
					<a-switch v-model:checked="checked1" id="checked1" />
					<label @click="onCheckClick" for="checked1">아이디 저장</label>
				</span>
				<span class="save-item">
					<a-switch v-model:checked="checked2" id="checked2" />
					<label @click="onCheckClick" for="checked2">자동로그인</label>
				</span>
			</div>

			<div class="login-btn-wrap">
				<a-button type="primary" size="large" danger>로그인 </a-button>
			</div>
		</div>
	</div>
</template>
<script>
	import { ref, reactive } from 'vue';

	import User1Img from '@/components/images/login/User1Img.vue';
	import User2Img from '@/components/images/login/User2Img.vue';
	import User3Img from '@/components/images/login/User3Img.vue';
	import IdImg from '@/components/images/login/IdImg.vue';
	import PasswordImg from '@/components/images/login/PasswordImg.vue';
	import IconWrapper from '@/components/common/IconWrapper.vue';

	export default {
		name: 'LoginContainer',
		props: ['num'],
		setup(props) {
			const value = ref('');
			const checked1 = ref(true);
			const checked2 = ref(false);

			const users = reactive([
				{
					id: 1,
					name: '운전자',
				},
				{
					id: 2,
					name: '업체',
				},
				{
					id: 3,
					name: '직원',
				},
			]);

			let name = ref('ref');
			users.map((user) => {
				if (user.id == props.num) {
					return (name.value = user.name);
				}
			});

			const onCheckClick = (e) => {
				console.log(e.target.getAttribute('for'));
			};

			return {
				value,
				users,
				name,
				checked1,
				checked2,
				onCheckClick,
			};
		},
		components: {
			User1Img,
			User2Img,
			User3Img,
			IdImg,
			PasswordImg,
			IconWrapper,
		},
	};
</script>
<style lang="scss"></style>
