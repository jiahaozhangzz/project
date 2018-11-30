import * as types from './mutations-type'

export default {
    [types.RECEVIVE_DATA](state, data) {
        state.data = data
    },
    [types.CHANGE_NAV_TITLE](state, name) {
        state.headerTitle = state.titleDesc[name]
    },
    [types.REFRESH_AJAX](state, stutas) {
        state.isAjax = stutas
    },
    [types.TOGGLE_CHAT](state, val) {
        state.chat = val
    },
    [types.TOGGLE_DETAIL](state, val) {
       state.showDetail = val
    },
    [types.RECEVIVE_CURRENT_USE](state, user) {
        state.currentUser = user
        let record = state.messageList.find(m => m._id === user._id)
        record.list.forEach(m => {
            m.read = true
        })
        state.currentMsgList = record
    },
    [types.ADD_MESSAGE](state, {msg, time, self}) {
       state.currentMsgList.list.push({
           msg,
           time,
           self,
           read: true
       })
    }

}
