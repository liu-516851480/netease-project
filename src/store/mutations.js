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
        state.promGood = indexData.bigPromotionModule.floorList[0].cells[0].itemList
        state.floorFirst = indexData.bigPromotionModule.floorList[1].cells
        state.floor1 = indexData.bigPromotionModule.floorList[2].cells
        state.floor2 = indexData.bigPromotionModule.floorList[3].cells
        state.kingKongList = indexData.kingKongModule.kingKongList
        state.peopleVIP = indexData.indexActivityModule
        state.categoryHot = indexData.categoryHotSellModule
        state.limitedTime = indexData.flashSaleModule.itemList
    }
}