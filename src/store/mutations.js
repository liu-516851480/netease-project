import {
    SAVE_INDEXNAV,
    SAVE_INDEXDATA,
    SAVE_CATEGORYNAV,
    SAVE_CATEGORYCONTENT,
    SAVE_BUYNAV,
    SAVR_BUYCONTENT
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
        state.newItemList = indexData.newItemList.slice(0,6)
        state.shopping = indexData.sceneLightShoppingGuideModule
    },

    [SAVE_CATEGORYNAV](state,categoryNav){
        state.categoryNav = categoryNav
    },

    [SAVE_CATEGORYCONTENT](state, categoryContent){
        state.categoryContent = categoryContent
    },

    [SAVE_BUYNAV](state,buyNav){
        state.buyNav = buyNav
    },

    [SAVR_BUYCONTENT](state, buyContent){
        state.buyContent = buyContent
    }
}
