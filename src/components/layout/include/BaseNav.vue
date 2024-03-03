<template lang="">
	<nav id="nav">
		<div class="nav-container container">
			<div class="haeder nav-header"><NavHeader :handleNav="props.handleNav" /></div>
			<div class="content nav-content">
				<a-menu id="menu" v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline" :items="items" @click="handleClick"></a-menu>
			</div>
			<div class="footer nav-footer">
				<a-button type="primary" @click="handleNav" danger>닫기</a-button>
			</div>
		</div>
	</nav>
</template>
<script setup>
	// import FavoriteFullIcon from '@/components/images/layout/FavoriteFullIcon.vue';
	// import FavoriteIcon from '@/components/images/layout/FavoriteIcon.vue';
	import { reactive, ref, watch, h, onMounted, defineProps } from 'vue';
	import { useRouter } from 'vue-router';
	// import NavFavorite from './NavFavorite.vue';
	import NavHeader from './NavHeader.vue';

	const selectedKeys = ref(['sub1-1-2']);
	const openKeys = ref(['sub2']);

	const router = useRouter();
	// const route = useRoute();

	const items = reactive([
		{
			key: 'sub1',
			icon: () => h(),
			label: '구매안내', //text
			title: '구매안내', //tooltip
			children: [
				//  하위메뉴
				{
					key: 'sub1-1',
					label: '납품경로',
					title: '납품경로',
					children: [
						{
							key: 'sub1-1-1',
							label: '납품안내',
							title: '납품안내',
							favorite: false, // 즐겨찾기
							anchor: '/sub/delivery', //link 주소
						},
						{
							key: 'sub1-1-2',
							label: '공장문 번호',
							title: '공장문 번호',
							favorite: false,
							anchor: '/login',
						},
						{
							key: 'sub1-1-3',
							label: '하차지이동',
							title: '하차지이동',
							favorite: true,
							anchor: '',
						},
					],
				},
				{
					key: 'sub1-2',
					label: '입고절차',
					title: '입고절차',
					children: [
						{
							key: 'sub1-2-1',
							label: '스크랩장입고',
							title: '스크랩장입고',
							favorite: true,
							anchor: '',
						},
						{
							key: 'sub1-2-2',
							label: '물류센터입고',
							title: '물류센터입고',
							favorite: true,
							anchor: '',
						},
						{
							key: 'sub1-2-3',
							label: '하차지이동',
							title: '하차지이동',
							favorite: true,
							anchor: '',
						},
					],
				},
				{
					key: 'sub1-3',
					label: '공지사항',
					title: '공지사항',
					favorite: true,
					anchor: '',
				},
			],
		},
		{
			key: 'sub2',
			icon: () => h(),
			label: '철스크랩',
			title: '철스크랩',
			children: [
				{
					key: 'sub2-1',
					label: '철스크랩 입고현황',
					title: '철스크랩 입고현황',
					children: [
						{
							key: 'sub2-1-1',
							label: '철스크랩입고현황 검색',
							title: '철스크랩입고현황 검색',
							favorite: true,
							anchor: '',
						},
						{
							key: 'sub2-1-2',
							label: '철스크랩입고현황 상세',
							title: '철스크랩입고현황 상세',
							favorite: true,
							anchor: '',
						},
						{
							key: 'sub2-1-3',
							label: '계근전표조회',
							title: '계근전표조회',
							favorite: true,
							anchor: '',
						},
					],
				},
				{
					key: 'sub2-2',
					label: '납품예약등록',
					title: '납품예약등록',
					children: [
						{
							key: 'sub2-2-1',
							label: '납품예약검색',
							title: '납품예약검색',
							favorite: true,
							anchor: '',
						},
						{
							key: 'sub2-2-2',
							label: '납품예약추가',
							title: '납품예약추가',
							favorite: true,
							anchor: '',
						},
						{
							key: 'sub2-2-3',
							label: '납품예약상세',
							title: '납품예약상세',
							favorite: true,
							anchor: '',
						},
					],
				},
			],
		},
		{
			key: '3',
			icon: () => h(),
			label: '관제관리',
			title: '관제관리',
			children: [
				{
					key: '3-1',
					label: '관제일지',
					title: '관제일지',
					favorite: false,
					anchor: '',
				},
				{
					key: '3-2',
					label: '일일현황',
					title: '일일현황',
					favorite: false,
					anchor: '',
				},
				{
					key: '3-3',
					label: '종합관제',
					title: '종합관제',
					children: [
						{
							key: '3-3-1',
							label: '종합관제 검색',
							title: '종합관제 검색',
							favorite: true,
							anchor: '',
						},
						{
							key: '3-3-2',
							label: '메뉴목록',
							title: '메뉴목록',
							favorite: true,
							anchor: '',
						},
						{
							key: '3-3-3',
							label: '관제상세',
							title: '관제상세',
							favorite: true,
							anchor: '',
						},
						{
							key: '3-3-4',
							label: '운행경로',
							title: '운행경로',
							favorite: true,
							anchor: '',
						},
						{
							key: '3-3-5',
							label: '현재위치',
							title: '현재위치',
							favorite: true,
							anchor: '',
						},
						{
							key: '3-3-6',
							label: '출발보고위치',
							title: '출발보고위치',
							favorite: true,
							anchor: '',
						},
						{
							key: '3-3-7',
							label: '차량상차위치',
							title: '차량상차위치',
							favorite: true,
							anchor: '',
						},
						{
							key: '3-3-8',
							label: '상차지위치',
							title: '상차지위치',
							favorite: true,
							anchor: '',
						},
						{
							key: '3-3-9',
							label: '정차시간',
							title: '정차시간',
							favorite: true,
							anchor: '',
						},
						{
							key: '3-3-10',
							label: '상차사진',
							title: '상차사진',
							favorite: true,
							anchor: '',
						},
						{
							key: '3-3-11',
							label: '촬영위치',
							title: '촬영위치',
							favorite: true,
							anchor: '',
						},
					],
				},
			],
		},
		{
			key: 'etc1',
			icon: () => h(),
			label: '공통기능(팝업)',
			title: '공통기능(팝업)',
			children: [
				{
					key: 'etc1-1',
					label: '거래처 조회',
					title: '거래처 조회',
					favorite: true,
					anchor: '',
				},
				{
					key: 'etc1-2',
					label: '상차업체 조회',
					title: '상차업체 조회',
					favorite: true,
					anchor: '',
				},
				{
					key: 'etc1-3',
					label: '차량 조회',
					title: '차량 조회',
					favorite: true,
					anchor: '',
				},
			],
		},
	]);
	const handleClick = (e) => {
		router.push(e.item.anchor);
	};
	watch(openKeys, (val) => {
		console.log('openKeys', val);
	});
	onMounted(() => {
		// favorite 추가
		const $menuItem = document.querySelectorAll('.ant-menu-item-only-child');
		$menuItem.forEach(($item) => {
			const $favorite = $item.querySelector('.favorite');
			const favoriteFragment = document.createElement('i');
			const favoriteIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
		<g fill="none">
			<path
				d="M10.788 3.102c.495-1.003 1.926-1.003 2.421 0l2.358 4.778l5.273.766c1.107.16 1.549 1.522.748 2.303l-3.816 3.719l.901 5.25c.19 1.104-.968 1.945-1.959 1.424l-4.716-2.48l-4.715 2.48c-.99.52-2.148-.32-1.96-1.423l.901-5.251l-3.815-3.72c-.801-.78-.359-2.141.748-2.302L8.43 7.88l2.358-4.778zm1.21.937L9.74 8.614a1.35 1.35 0 0 1-1.016.739l-5.05.734l3.654 3.562c.318.31.463.757.388 1.195l-.862 5.029l4.516-2.375a1.35 1.35 0 0 1 1.257 0l4.516 2.375l-.862-5.03a1.35 1.35 0 0 1 .388-1.194l3.654-3.562l-5.05-.734a1.35 1.35 0 0 1-1.016-.739L11.998 4.04z"
				fill="currentColor"
			></path>
		</g>
	</svg>`;
			const favoriteFullIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16">
		<g fill="none">
			<path
				d="M7.194 2.101a.9.9 0 0 1 1.614 0l1.521 3.082l3.401.495a.9.9 0 0 1 .5 1.535l-2.462 2.399l.581 3.387a.9.9 0 0 1-1.306.949l-3.042-1.6l-3.042 1.6a.9.9 0 0 1-1.306-.949l.58-3.387l-2.46-2.4a.9.9 0 0 1 .499-1.534l3.4-.495l1.522-3.082z"
				fill="currentColor"
			></path>
		</g>
	</svg>`;
			favoriteFragment.classList.add('favorite');
			if ($favorite === undefined || $favorite === null) {
				if ($item.getAttribute('favorite') === 'true') {
					favoriteFragment.innerHTML = favoriteFullIcon;
				} else if ($item.getAttribute('favorite') === 'false') {
					favoriteFragment.innerHTML = favoriteIcon;
				}
				return $item.append(favoriteFragment);
			}
		});
	});

	const props = defineProps({
		handleNav: Function,
	});
</script>
<style lang="scss">
	@import '@/assets/css/nav.scss';
</style>
