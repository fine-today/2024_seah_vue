<template lang="">
	<SubLayout title="납품안내">
		<a-button type="primary" size="large" @click="showModal">Modal Open</a-button>
		<a-modal v-model:open="open" title="철스크랩입고현황검색" @ok="handleOk" style="top: 3rem" width="">
			<template #footer>
				<a-button key="submit" type="primary" :loading="loading" @click="handleOk" size="large">조회</a-button>
			</template>

			<a-descriptions bordered>
				<a-descriptions-item label="입고기간" style="width: 4rem" :span="4">
					<a-space direction="vertical">
						<a-space style="display: flex; align-items: center; gap: 0.25rem">
							<a-date-picker v-model:value="value1" size="large" style="flex: 1" /> ~
							<a-date-picker v-model:value="value2" size="large" style="flex: 1" />
						</a-space>
						<a-space>
							<a-button type="primary">1일</a-button>
							<a-button type="primary">7일</a-button>
							<a-button type="primary">15일</a-button>
							<a-button type="primary">30일</a-button>
						</a-space>
					</a-space>
				</a-descriptions-item>
				<a-descriptions-item label="거래처" :span="4">
					<a-space class="flex">
						<a-input-search v-model:value="value" placeholder="input search text" size="large" @search="onSearch" style="flex: 1" />
					</a-space>
				</a-descriptions-item>
			</a-descriptions>
		</a-modal>
	</SubLayout>
</template>
<script setup>
	import { ref } from 'vue';
	import SubLayout from '@/components/layout/SubLayout.vue';
	/* modal */
	const open = ref(false);
	const showModal = () => {
		open.value = true;
	};
	const handleOk = (e) => {
		console.log(e);
		open.value = false;
	};

	const value1 = ref(null);
	const value2 = ref(null);

	const value = ref('');
	const onSearch = (searchValue) => {
		console.log('use value', searchValue);
		console.log('or use this.value', value.value);
	};
</script>
<style lang=""></style>
