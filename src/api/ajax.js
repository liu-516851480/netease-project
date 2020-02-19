import axios from 'axios';
import qs from 'qs';

const instance = axios.create({
	// 配置请求路径
	baseURL: '/api',

	// 配置超时
	timeout: 20000
})

// 请求拦截器
instance.interceptors.request.use(config => {
	// 对参数进行urlencode处理
	const data = config.data
	if(data instanceof Object){
		config.data = qs.stringify(data)
	}

	// 返回处理后的config对象
	return config
})

// 设置相应拦截器
instance.interceptors.response.use(
	response => {
		return response.data
	},
	error => {
		alert('请求出错' + error.message)
		// 返回一个pending状态的promise  => 中断promise链
		return new Promise(() => {})
	}
)

export default instance