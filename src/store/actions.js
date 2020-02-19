import {
    SAVE_INDEXNAV,
    SAVE_INDEXDATA
} from './mutation-types';

import {
    reqIndexNav,
    reqIndexData
} from '../api';

export default {
    async getIndexNav({commit}){
        const result = await reqIndexNav()
        if(result.code === 0){
            const indexNav = result.data
            commit(SAVE_INDEXNAV, indexNav)
        }
    },

    async getIndexData({commit}, callback){
        const result = await reqIndexData()
        if(result.code === 0){
            const indexData = result.data
            commit(SAVE_INDEXDATA, indexData)
            typeof callback === 'function' && callback()
        }
    }
}