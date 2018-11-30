import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
    data: {
        self: {},
        friends: []
    },
    isAjax: false,
    messageList: [
        {
            _id: 1,
            list: [
                {msg: '11111', time: 1542782393000, read: false}

            ]
        },
        {_id: 2, list: [{msg: '22222', time: 1542868793000, read: false}]},
        {_id: 3, list: [{msg: '33333', time: 1542695993000, read: false}]},
        {_id: 4, list: [{msg: '44444', time: 1542609593000, read: false}]},
        {_id: 5, list: [{msg: '55555', time: 1542523193000, read: false}]}

    ],
    chat: false,
    showDetail: false,
    currentUser: {},
    currentMsgList: {}
}
export default new Vuex.Store({
    mutations,
    state,
    actions,
    getters
})
