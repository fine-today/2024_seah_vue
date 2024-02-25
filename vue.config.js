// const { defineConfig } = require('@vue/cli-service');
// module.exports = defineConfig({
// 	transpileDependencies: true,
// });

module.exports = {
	css: {
		loaderOptions: {
			scss: {
				additionalData: `
        @import '@/assets/css/reset.scss';
        @import '@/assets/css/mixin.scss';
        @import '@/assets/css/common.scss';
        `,
			},
		},
	},
};
