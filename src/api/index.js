import ajax from './ajax';

// 请求首页分类导航
export const reqIndexNav = () => ajax('/api/category')
export const reqIndexData = () => ajax('/api/indexdata')
export const reqCategoryNav = () => ajax('/api/categorynav')
export const reqCategoryContent = () => ajax('/api/categorycontent')
export const reqBuyNav = () => ajax('/foo/topic/v1/know/navWap.json')
export const reqBuyContent = () => ajax('/foo/topic/v1/find/recAuto.json',{
    params:{
        page:1,
        size:5
    }
})
