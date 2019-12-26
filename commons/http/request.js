// 请求api前缀
const BASE_API_URL = 'http://192.168.3.116/tp5/public/index/'
export default {
	// 请求数据
	ajax: function(params) {
		return new Promise((resove, reject) => {
			uni.request({
				url: BASE_API_URL + params.url,
				method: params.method || 'GET',
				data: params.params || {},
				success(res) {
					resove(res);
				},
				fail(err) {
					reject(err);
				}
			})
		})
	},
	// 上传文件
	upFile: function(params) {
		return new Promise((resove, reject) => {
			const errData = {
				msg: '',
				code: -1,
				data: null
			}
			if (!params.file) {
				reject({
					...errData,
					msg: 'file不能为空'
				});
			}
			if (!params.url) {
				reject({
					...errData,
					msg: 'url不能为空' 
				});
			}
			uni.uploadFile({
				url: BASE_API_URL + params.url,
				filePath: params.file,
				methods: 'POST',
				name: params.name || 'headimg',
				formData: params.data,
				success: (uploadFileRes) => {
					resove(JSON.parse(uploadFileRes.data));
				},
				fail(err) {
					reject(err);
				}
			});
		})
	}
}
