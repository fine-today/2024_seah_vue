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
	chainWebpack: (config) => {
		config.plugin('html').tap((args) => {
			args[0].title = 'title';
			return args;
		});
	},
};
