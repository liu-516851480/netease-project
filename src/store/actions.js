import {
    SAVE_INDEXNAV,
    SAVE_INDEXDATA,
    SAVE_CATEGORYNAV,
    SAVE_CATEGORYCONTENT,
    SAVE_BUYNAV,
    SAVR_BUYCONTENT
} from './mutation-types';

import {
    reqIndexNav,
    reqIndexData,
    reqCategoryNav,
    reqCategoryContent,
    reqBuyNav,
    reqBuyContent
} from '../api';
import _ from 'lodash'

export default {
    async getIndexNav({commit}, callback){
        const result = await reqIndexNav()
        if(result.code === 0){
            const indexNav = result.data
            commit(SAVE_INDEXNAV, indexNav)
            typeof callback === 'function' && callback()
        }
    },

    async getIndexData({commit}, callback){
        const result = await reqIndexData()
        if(result.code === 0){
            const indexData = result.data
            commit(SAVE_INDEXDATA, indexData)
            typeof callback === 'function' && callback()
        }
    },

    async getCategoryNav({commit},callback){
        const result = await reqCategoryNav()
        if(result.code === 0){
            const categoryNav = result.data
            commit(SAVE_CATEGORYNAV,categoryNav)
            typeof callback === 'function' && callback()
        }
    },

    async getCategoryContent({commit}, callback){
        const result = await reqCategoryContent()
        if(result.code === 0){
            const categoryContent = result.data
            commit(SAVE_CATEGORYCONTENT,categoryContent)
            typeof callback === 'function' && callback()
        }
    },

    async getBuyNav({commit}){
        const result = await reqBuyNav()
        if(result.code === '200'){
            const buyNav = result.data
            commit(SAVE_BUYNAV,buyNav)
        }
    },

    async getBuyContent({commit}){
        const result = await reqBuyContent()
        if(result.code === '200'){
            const buyContent = result.data.result
            let a = []
            a.push(buyContent)
            console.log(a)
            let arr = _.flattenDeep(a)

            commit(SAVR_BUYCONTENT,arr)
        }
    }
}
