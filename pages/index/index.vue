<template>
	<view class="content">
		 <map style="height: 100%;width: 100%;" :latitude="31.214087" :longitude="121.530684" show-location></map>
	</view>
</template>

<script>
	import md5 from '../../js_sdk/ccdzhang-dokey/md5.js';
	import dokey from '../../js_sdk/ccdzhang-dokey/dokey.js'
	import ajax from '../../commons/http/request.js'
	export default {
		data() {
			return {}
		},
		onLoad() {
			uni.getLocation({
				type: 'gcj02 ',
				success(res) {
					console.log(res)
				}
			})
			// this.upf()
		},
		methods: {
			upf() {
				const that = this;
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						const params = {
							url: 'index/uploadtest',
							file: tempFilePaths[0]
						}
						const upfilePromis = ajax.upFile(params);
						upfilePromis.then(res => {
							that.src = res.data
						})
						upfilePromis.catch(err => {
							console.log(err);
						})
					}
				});
			}
		}
	}
</script>

<style>
	.content {
		height: 100vh;
	}
</style>
