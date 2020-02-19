import ajax from './ajax';

// 请求首页分类导航
export const reqIndexNav = () => ajax('/category')
export const reqIndexData = () => ajax('/indexdata')