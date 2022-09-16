import mockRequest from '@/utils/mockRequest'
const state = {
    list: {}
};
const mutations = {
    GETDATA(state, list) {
        state.list = list;
    }
};
const actions = {
    //发请求获取首页的mock数据
    async getData({ commit }) {
        let result = await mockRequest.get('/home/list');
        if (result.code == 20000) {
            console.log(result)
            commit("GETDATA", result.data);
        }
    }
};
export default {
    state,
    mutations,
    actions
}