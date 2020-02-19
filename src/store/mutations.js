import {
    SAVE_INDEXNAV,
    SAVE_INDEXDATA
} from './mutation-types';

export default {
    [SAVE_INDEXNAV](state, indexNav){
        state.indexNav = indexNav
    },
    [SAVE_INDEXDATA](state, indexData){
        state.indexData = indexData
    }
}