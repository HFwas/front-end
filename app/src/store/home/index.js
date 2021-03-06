//home模块的仓库
import {
    reqCategoryList,
    reqGetBannerList,
    reqFllorList, reqFloorList
} from "@/api";

const state = {
    // state中数据默认初始值别瞎写，服务器返回对象，服务器返回数组，【根据接口返回值初始化的】
    categoryList:[],
    //轮播图的数据
    bannerList:[],
    //floor集合的数据
    floorList:[]
};
const mutations = {
    CATEGORYLIST(state, categoryList){
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList){
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state, floorList){
        state.floorList = floorList;
    }

};
const actions = {
    // 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async getCategoryList(commit){
        let categoryList = await reqCategoryList();
        console.log(categoryList)
        if (categoryList.code === 200) {
            commit.commit('CATEGORYLIST', categoryList.data);
        }
    },
    //获取首页轮播图的数据
    async getBannerList(commit) {
        let bannerList = await reqGetBannerList();
        if (bannerList.code === 200) {
            commit.commit('GETBANNERLIST', bannerList.data);
        }
    },
    //获取floor集合数据
    async getFloorList(commit) {
        let floorList = await reqFloorList();
        if (floorList.code === 200) {
            commit.commit('GETFLOORLIST', floorList.data);
        }
    }
};
// 计算属性
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}